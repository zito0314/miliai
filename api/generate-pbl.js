import { GoogleGenAI } from '@google/genai'
import { z } from 'zod'

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  output: z.string(),
  assessmentCriteria: z.array(z.string()).min(1),
  requiredTags: z.array(z.string()).min(3),
})

const missionSchema = z.object({
  id: z.string(),
  title: z.string(),
  goal: z.string(),
  tasks: z.array(taskSchema).min(2).max(4),
})

const unitSchema = z.object({
  id: z.string(),
  title: z.string(),
  goal: z.string(),
  requiredConcepts: z.array(z.string()).min(1),
  missions: z.array(missionSchema).min(1).max(3),
})

const pblPlanSchema = z.object({
  courseName: z.string(),
  curriculumName: z.string(),
  subject: z.object({
    id: z.string(),
    title: z.string(),
    summary: z.string(),
    finalOutput: z.string(),
    recommendedTags: z.array(z.string()).min(3),
  }),
  units: z.array(unitSchema).min(2).max(4),
})

const responseJsonSchema = z.toJSONSchema(pblPlanSchema, { target: 'draft-7' })
delete responseJsonSchema.$schema
simplifyGeminiSchema(responseJsonSchema)

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'POST 요청만 사용할 수 있습니다.' })
  }

  const body = typeof request.body === 'string' ? safeJsonParse(request.body) : request.body
  const subjectName = typeof body?.subjectName === 'string' ? body.subjectName.trim() : ''
  const techContext = typeof body?.techContext === 'string' ? body.techContext.trim().slice(0, 30000) : ''

  if (!subjectName) {
    return response.status(400).json({ error: '과목명을 입력해주세요.' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return response.status(500).json({ error: '서버에 Gemini API Key가 설정되지 않았습니다.' })
  }

  try {
    const ai = new GoogleGenAI({ apiKey })
    const model = process.env.GEMINI_MODEL?.trim() || 'gemini-flash-latest'
    const result = await ai.models.generateContent({
      model,
      contents: buildPrompt(subjectName.slice(0, 200), techContext),
      config: {
        temperature: 0.45,
        maxOutputTokens: 12000,
        responseMimeType: 'application/json',
        responseJsonSchema,
      },
    })

    if (!result.text) {
      throw new Error('Gemini가 빈 응답을 반환했습니다.')
    }

    const parsed = pblPlanSchema.safeParse(JSON.parse(result.text))
    if (!parsed.success) {
      throw new Error('Gemini 응답이 과정설계 JSON 구조와 맞지 않습니다.')
    }

    return response.status(200).json(parsed.data)
  } catch (error) {
    console.error('PBL generation failed', error)
    return response.status(502).json({
      error: '콘텐츠 생성 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.',
    })
  }
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function simplifyGeminiSchema(value) {
  if (Array.isArray(value)) {
    value.forEach(simplifyGeminiSchema)
    return
  }
  if (!value || typeof value !== 'object') return

  delete value.additionalProperties
  delete value.minItems
  delete value.maxItems
  Object.values(value).forEach(simplifyGeminiSchema)
}

function buildPrompt(subjectName, techContext) {
  return `너는 Mili AI 국방 PBL 콘텐츠 기획자다.
군 장병 대상 온라인 AI 교육 플랫폼에 들어갈 PBL 과정설계 초안을 작성한다.

[입력 과목명]
${subjectName}

[연결 가능한 기술 데이터]
${techContext || '별도 기술 컨텍스트 없음'}

[설계 원칙]
1. 과목명에서 먼저 군 업무 또는 실제 현장의 해결 문제를 해석한 뒤 학습 단계를 설계한다.
2. 전문 개발자 양성과정이 아니라 군 장병의 AI 활용, 데이터 활용, 문제해결 역량을 중심으로 작성한다.
3. Unit은 2~4개이며 학습 단계 중심의 제목으로 작성한다. 기술 이름만으로 Unit 제목을 만들지 않는다.
4. 각 Unit에는 Mission을 1~3개 포함하고, Mission은 수행 과업 중심으로 작성한다.
5. 각 Mission에는 실습과 평가가 가능한 Problem/Task를 2~4개 포함한다.
6. 각 Task에는 구체적 설명, 확인 가능한 산출물, 평가 기준, 필요한 기술 태그 3개 이상을 포함한다.
7. 태그는 제공된 기술 데이터에 있는 태그를 우선 사용하고 모든 태그는 #으로 시작한다.
8. ID는 Subject S1, Unit U1부터, Mission M1부터, Task P1부터 순서대로 부여한다.
9. 최종 산출물은 교육 종료 후 학습자가 제출할 수 있는 구체적인 결과물로 작성한다.
10. 반환값은 제공된 JSON 스키마를 따르는 JSON 데이터여야 한다.`
}
