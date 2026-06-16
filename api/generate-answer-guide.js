import { GoogleGenAI } from '@google/genai'
import { z } from 'zod'
import {
  answerGuideSchema,
  parseGeminiJson,
  pblPlanSchema,
  rebuildPblPlanWorkbook,
  safeJsonParse,
  simplifyGeminiSchema,
  validatePlanConsistency,
} from './generate-pbl.js'

const answerGuideResponseSchema = z.object({
  answerGuides: z.array(answerGuideSchema).min(1),
})

const transientRetryDelaysMs = [1200, 2800]

const responseJsonSchema = z.toJSONSchema(answerGuideResponseSchema, { target: 'draft-7' })
delete responseJsonSchema.$schema
simplifyGeminiSchema(responseJsonSchema)

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'POST 요청만 사용할 수 있습니다.' })
  }

  const body = typeof request.body === 'string' ? safeJsonParse(request.body) : request.body
  const currentPlan = body?.currentPlan
  const targetMissionSheetIndex = body?.targetMissionSheetIndex

  if (!currentPlan || typeof currentPlan !== 'object' || !Array.isArray(currentPlan.missionSheets)) {
    return response.status(400).json({ error: '예상 답안을 생성할 PBL 결과가 필요합니다.' })
  }

  const targetMissionSheets = getTargetMissionSheets(currentPlan, targetMissionSheetIndex)
  if (targetMissionSheets.length === 0) {
    return response.status(400).json({ error: '예상 답안을 생성할 미션지를 찾지 못했습니다.' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return response.status(500).json({ error: '서버에 Gemini API Key가 설정되지 않았습니다.' })
  }

  try {
    const ai = new GoogleGenAI({ apiKey })
    const model = process.env.GEMINI_MODEL?.trim() || 'gemini-2.5-flash'
    const result = await generateContentWithRetry(ai, {
      model,
      request: {
        model,
        contents: buildAnswerGuidePrompt({
          currentPlan,
          targetMissionSheets,
          techContext: buildTechContext(body),
        }),
        config: {
          temperature: 0.25,
          maxOutputTokens: targetMissionSheets.length === 1 ? 10000 : 24000,
          responseMimeType: 'application/json',
          responseJsonSchema,
        },
      },
    })

    if (!result.text) {
      throw new Error('Gemini가 빈 응답을 반환했습니다.')
    }

    const generatedData = parseGeminiJson(result.text)
    if (!generatedData) {
      return response.status(502).json({ error: 'AI 예상 답안 결과를 JSON으로 읽지 못했습니다. 다시 시도해주세요.' })
    }

    const parsed = answerGuideResponseSchema.safeParse(generatedData)
    if (!parsed.success) {
      console.error('Answer guide schema validation issues', parsed.error.issues.slice(0, 12))
      throw new Error('AI 예상 답안 결과가 JSON 구조와 맞지 않습니다.')
    }

    const answerGuides = normalizeGeneratedAnswerGuides(parsed.data.answerGuides, targetMissionSheets)
    if (answerGuides.length === 0) {
      throw new Error('생성된 예상 답안이 대상 미션지와 연결되지 않았습니다.')
    }

    const updatedPlan = rebuildPblPlanWorkbook({
      ...currentPlan,
      answerGuides: mergeAnswerGuides(currentPlan.answerGuides, answerGuides),
    })
    const parsedPlan = pblPlanSchema.safeParse(updatedPlan)
    if (!parsedPlan.success) {
      console.error('Answer guide updated plan validation issues', parsedPlan.error.issues.slice(0, 12))
      throw new Error('예상 답안 반영 결과가 PBL 구조와 맞지 않습니다.')
    }

    validatePlanConsistency(parsedPlan.data)
    return response.status(200).json({
      answerGuides,
      updatedPlan: parsedPlan.data,
    })
  } catch (error) {
    console.error('Answer guide generation failed', error)
    const transientError = getTransientGeminiError(error)
    if (transientError) {
      return response.status(transientError.status).json({ error: transientError.message })
    }

    return response.status(502).json({ error: '예상 답안 생성 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.' })
  }
}

async function generateContentWithRetry(ai, { model, request }) {
  let lastError

  for (let attempt = 0; attempt <= transientRetryDelaysMs.length; attempt += 1) {
    try {
      return await ai.models.generateContent(request)
    } catch (error) {
      lastError = error
      const transientError = getTransientGeminiError(error)
      const retryDelay = transientRetryDelaysMs[attempt]
      if (!transientError || retryDelay === undefined) throw error

      console.warn(`Answer guide Gemini ${model} transient error. Retrying in ${retryDelay}ms.`, {
        status: transientError.status,
        attempt: attempt + 1,
      })
      await delay(retryDelay)
    }
  }

  throw lastError
}

function getTransientGeminiError(error) {
  const status = Number(error?.status || error?.code || error?.error?.code)
  const message = typeof error?.message === 'string' ? error.message : ''

  if (status === 503 || message.includes('"code":503') || message.includes('UNAVAILABLE')) {
    return {
      status: 503,
      message: '현재 Gemini 모델 요청이 많아 예상 답안을 생성하지 못했어요. 잠시 후 다시 시도하거나 미션지별 생성으로 나눠 시도해주세요.',
    }
  }

  if (status === 429 || message.includes('"code":429') || message.includes('RESOURCE_EXHAUSTED')) {
    return {
      status: 429,
      message: 'Gemini 사용량 또는 요청 한도에 도달했어요. 잠시 후 다시 시도하거나 미션지별 생성으로 나눠 시도해주세요.',
    }
  }

  return null
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function getTargetMissionSheets(plan, targetMissionSheetIndex) {
  if (targetMissionSheetIndex === undefined || targetMissionSheetIndex === null || targetMissionSheetIndex === '') {
    return plan.missionSheets
  }

  const index = Number(targetMissionSheetIndex)
  if (!Number.isInteger(index) || index < 0 || index >= plan.missionSheets.length) return []
  return [plan.missionSheets[index]]
}

function normalizeGeneratedAnswerGuides(answerGuides, targetMissionSheets) {
  const targetBySheetName = new Map(targetMissionSheets.map((sheet) => [sheet.sheetName, sheet]))

  return answerGuides
    .map((guide, index) => {
      const targetSheet = targetBySheetName.get(guide.sheetName) || targetMissionSheets[index]
      if (!targetSheet) return null
      return {
        ...guide,
        sheetName: targetSheet.sheetName,
        missionStageName: targetSheet.missionStageName,
        codeExamples: guide.codeExamples || [],
      }
    })
    .filter(Boolean)
}

function mergeAnswerGuides(existingAnswerGuides = [], nextAnswerGuides) {
  const nextSheetNames = new Set(nextAnswerGuides.map((guide) => guide.sheetName))
  return [
    ...existingAnswerGuides.filter((guide) => !nextSheetNames.has(guide.sheetName)),
    ...nextAnswerGuides,
  ].sort((a, b) => getMissionNumber(a.sheetName) - getMissionNumber(b.sheetName))
}

function getMissionNumber(sheetName) {
  const match = /^미션지_(\d+)$/.exec(sheetName)
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER
}

function buildAnswerGuidePrompt({ currentPlan, targetMissionSheets, techContext }) {
  return `너는 Mili AI PBL 콘텐츠 검수자이자 해설 설계자다.

목표: 학습자에게 공개할 정답지가 아니라, 기획자가 미션지를 검토하고 평가 기준을 보완하기 위한 기획자용 예상 답안 가이드를 생성한다.
출력: 제공된 JSON Schema를 따르는 JSON 객체 하나만 반환한다. 마크다운, 설명 문장, 코드블록, 스키마에 없는 필드는 금지한다.

작성할 내용:
- 예시 산출물
- Step별 예상 답변
- 필요한 경우 참고 코드
- PASS/FAIL 평가 예시
- 흔한 오류
- 평가자 피드백 문장

중요 규칙:
1. 기존 PBL 구조를 변경하지 않는다.
2. 새 미션이나 새 프로젝트를 만들지 않는다.
3. 제공된 missionSheets를 기준으로만 예상 답안을 작성한다.
4. 학습자에게 그대로 공개할 정답지가 아니라 기획자용 참고 자료로 작성한다.
5. 코드가 필요한 경우에만 codeExamples를 작성한다.
6. 코드가 필요 없는 문서형/토론형/문제정의형 미션이면 codeExamples는 빈 배열로 둔다.
7. 코드 예시는 가능한 짧고 실행 가능한 참고 코드 조각으로 작성한다.
8. 모든 평가 예시는 PASS/FAIL 판단 기준과 연결되어야 한다.
9. 군 장병 대상 AI 활용 교육 수준에 맞게 과도한 고급 구현은 피한다.
10. 스마트폰/태블릿 기반 학습 환경을 고려해 지나치게 긴 코드나 복잡한 환경 설정은 피한다.

[현재 PBL 계획]
${stringifyForPrompt(stripExcelWorkbook(currentPlan))}

[대상 미션지]
${stringifyForPrompt(targetMissionSheets)}

[참고 기술 사전]
${techContext || '별도 기술 컨텍스트 없음'}`
}

function buildTechContext(body) {
  if (typeof body?.techContext === 'string' && body.techContext.trim()) return body.techContext.trim().slice(0, 30000)
  if (!Array.isArray(body?.techItems)) return ''

  return body.techItems
    .slice(0, 50)
    .map((item) => [
      `기술명: ${asString(item?.name)}`,
      `카테고리: ${asString(item?.category)}`,
      `쉬운 설명: ${asString(item?.simpleDescription)}`,
      `PBL 활용: ${asString(item?.pblUsage)}`,
      `Unit 예시: ${asString(item?.unitExamples)}`,
      `태그: ${Array.isArray(item?.tags) ? item.tags.join(' ') : ''}`,
    ].join('\n'))
    .join('\n\n')
    .slice(0, 30000)
}

function stringifyForPrompt(value) {
  return JSON.stringify(value ?? null, null, 2).slice(0, 50000)
}

function stripExcelWorkbook(plan) {
  if (!plan || typeof plan !== 'object') return plan
  const contentPlan = { ...plan }
  delete contentPlan.excelWorkbook
  return contentPlan
}

function asString(value) {
  if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  return typeof value === 'string' ? value.trim() : ''
}
