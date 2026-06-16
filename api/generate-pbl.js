import { GoogleGenAI } from '@google/genai'
import { z } from 'zod'

const contentStatusSchema = z.enum(['draft', 'draft_ready_for_test', 'review_needed', 'approved'])
const requiredDeviceSchema = z.enum(['mobile', 'pc', 'both'])
const validationStatusSchema = z.enum(['검토 필요', '통과', '보완 필요'])

export const projectSchema = z.object({
  project_id: z.string(),
  title: z.string(),
  short_description: z.string(),
  environment_type: z.string(),
  duration_label: z.string(),
  target_learner: z.string(),
  difficulty_label: z.string(),
  project_goal: z.string(),
  learning_mode: z.string(),
  prerequisites: z.string(),
  tech_stack: z.string(),
  final_outputs: z.string(),
  constraints: z.string(),
  pc_alternative: z.string(),
  is_student_visible: z.boolean(),
  content_status: contentStatusSchema,
  planner_note: z.string(),
  developer_note: z.string(),
})

const stepOptionSchema = z.object({
  project_id: z.string(),
  mission_id: z.string(),
  step_id: z.string(),
  option_order: z.number(),
  option_value: z.string(),
  option_label: z.string(),
  is_expected: z.boolean(),
  expected_order: z.number().nullable(),
  option_group: z.string(),
})

export const stepSchema = z.object({
  project_id: z.string(),
  mission_id: z.string(),
  step_id: z.string(),
  step_order: z.number(),
  section: z.string(),
  block_type: z.string(),
  title: z.string(),
  learner_text: z.string(),
  learner_action: z.string(),
  input_type: z.string(),
  options_ref: z.string().nullable(),
  expected_answer_ref: z.string().nullable(),
  expected_answer_text: z.string().nullable(),
  is_student_visible: z.boolean(),
  required_device: requiredDeviceSchema,
  completion_rule: z.string(),
  planner_note: z.string(),
  developer_note: z.string(),
  options: z.array(stepOptionSchema),
})

export const submissionSchema = z.object({
  project_id: z.string(),
  mission_id: z.string(),
  submission_id: z.string(),
  submission_title: z.string(),
  student_instruction: z.string(),
  evaluation_text: z.string(),
  pass_criteria: z.string(),
  needs_revision_example: z.string(),
  peer_review_required: z.boolean(),
  peer_review_mode: z.string(),
  developer_note: z.string(),
})

export const missionSchema = z.object({
  project_id: z.string(),
  mission_id: z.string(),
  mission_order: z.number(),
  title: z.string(),
  environment_type: z.string(),
  estimated_time: z.string(),
  core_learning_action: z.string(),
  student_outputs: z.string(),
  planner_review_points: z.string(),
  developer_note: z.string(),
  mission_overview: z.string(),
  learning_goal: z.string(),
  prerequisites: z.string(),
  tech_stack: z.string(),
  constraints: z.string(),
  is_pc_required: z.boolean(),
  has_mobile_alternative: z.boolean(),
  steps: z.array(stepSchema).min(3),
  submission: submissionSchema,
})

const uiBlockDictionaryItemSchema = z.object({
  ui_block_type: z.string(),
  content_unit: z.string(),
  purpose: z.string(),
  screen_elements: z.string(),
  learner_action: z.string(),
  data_to_store: z.string(),
  student_visibility: z.string(),
  developer_note: z.string(),
})

const environmentTagSchema = z.object({
  tag_id: z.string(),
  tag_label: z.string(),
  description: z.string(),
  ui_usage: z.string(),
})

export const validationChecklistItemSchema = z.object({
  check_id: z.string(),
  category: z.string(),
  check_item: z.string(),
  planner_criteria: z.string(),
  developer_criteria: z.string(),
  status: validationStatusSchema,
})

const workbookSheetSchema = z.object({
  sheetName: z.string(),
  rows: z.array(z.array(z.string()).min(1)).min(1),
})

export const expectedOutputSchema = z.object({
  title: z.string(),
  format: z.string(),
  sampleContent: z.string(),
  passCondition: z.string(),
})

export const stepAnswerGuideSchema = z.object({
  step_id: z.string(),
  title: z.string(),
  expectedResponse: z.string(),
  keyPoints: z.array(z.string()),
  checkMethod: z.string(),
})

export const codeExampleSchema = z.object({
  title: z.string(),
  language: z.string(),
  purpose: z.string(),
  code: z.string(),
  expectedResult: z.string(),
  caution: z.string(),
})

export const evaluationGuideItemSchema = z.object({
  area: z.string(),
  question: z.string(),
  passExample: z.string(),
  failExample: z.string(),
  feedbackExample: z.string(),
})

export const answerGuideSchema = z.object({
  mission_id: z.string(),
  mission_title: z.string(),
  guideSummary: z.string(),
  expectedOutputs: z.array(expectedOutputSchema),
  stepGuides: z.array(stepAnswerGuideSchema),
  codeExamples: z.array(codeExampleSchema).default([]),
  evaluationGuide: z.array(evaluationGuideItemSchema),
  commonMistakes: z.array(z.string()),
  reviewerNotes: z.array(z.string()),
})

export const pblContentSchema = z.object({
  project: projectSchema,
  missions: z.array(missionSchema).min(2).max(4),
  ui_blocks: z.array(uiBlockDictionaryItemSchema).optional(),
  environment_tags: z.array(environmentTagSchema).optional(),
  validation_checklist: z.array(validationChecklistItemSchema).optional(),
})

export const pblPlanSchema = pblContentSchema.extend({
  ui_blocks: z.array(uiBlockDictionaryItemSchema),
  environment_tags: z.array(environmentTagSchema),
  validation_checklist: z.array(validationChecklistItemSchema).min(6).max(10),
  answerGuides: z.array(answerGuideSchema).optional(),
  excelWorkbook: z.object({
    sheets: z.array(workbookSheetSchema).min(11).max(11),
  }),
})

const responseJsonSchema = z.toJSONSchema(pblContentSchema, { target: 'draft-7' })
delete responseJsonSchema.$schema
simplifyGeminiSchema(responseJsonSchema)

const jsonReadyWorkbookSheetNames = [
  '00_README',
  '01_project',
  '02_missions',
  '03_steps',
  '04_options',
  '05_submissions',
  '06_ui_block_dictionary',
  '07_environment_tags',
  '08_validation_checklist',
  '09_export_map',
  '99_json_preview',
]

const contentStatuses = ['draft', 'draft_ready_for_test', 'review_needed', 'approved']
const requiredDevices = ['mobile', 'pc', 'both']
const validationStatuses = ['검토 필요', '통과', '보완 필요']
const optionInputTypes = new Set(['single_choice', 'multi_choice', 'matching', 'sequence_sort', 'checklist', 'peer_review_request', 'peer_review'])

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
    const model = process.env.GEMINI_MODEL?.trim() || 'gemini-2.5-flash'
    const result = await ai.models.generateContent({
      model,
      contents: buildPrompt(subjectName.slice(0, 200), techContext),
      config: {
        temperature: 0.35,
        maxOutputTokens: 30000,
        responseMimeType: 'application/json',
        responseJsonSchema,
      },
    })

    if (!result.text) {
      throw new Error('Gemini가 빈 응답을 반환했습니다.')
    }

    const generatedPlan = parseGeminiJson(result.text)
    if (!generatedPlan) {
      throw new Error('Gemini 응답을 JSON으로 파싱하지 못했습니다.')
    }

    const normalizedPlan = rebuildPblPlanWorkbook(normalizePblPlan(generatedPlan, subjectName))
    const parsed = pblPlanSchema.safeParse(normalizedPlan)
    if (!parsed.success) {
      console.error('PBL schema validation issues', parsed.error.issues.slice(0, 12))
      throw new Error('Gemini 응답이 JSON-ready PBL 구조와 맞지 않습니다.')
    }

    validatePlanConsistency(parsed.data)
    return response.status(200).json(parsed.data)
  } catch (error) {
    console.error('PBL generation failed', error)
    return response.status(502).json({
      error: '콘텐츠 생성 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.',
    })
  }
}

export function validatePlanConsistency(plan) {
  if (!Array.isArray(plan.missions) || plan.missions.length < 2 || plan.missions.length > 4) {
    throw new Error('missions 길이는 2~4 사이여야 합니다.')
  }

  const workbookSheetNames = plan.excelWorkbook.sheets.map((sheet) => sheet.sheetName)
  if (
    jsonReadyWorkbookSheetNames.length !== workbookSheetNames.length
    || jsonReadyWorkbookSheetNames.some((sheetName, index) => sheetName !== workbookSheetNames[index])
  ) {
    throw new Error('excelWorkbook.sheets 탭 구성이 JSON-ready 템플릿과 일치하지 않습니다.')
  }

  const projectId = plan.project.project_id
  plan.missions.forEach((mission, missionIndex) => {
    const missionId = `M${String(missionIndex + 1).padStart(2, '0')}`
    if (mission.project_id !== projectId || mission.mission_id !== missionId || mission.mission_order !== missionIndex + 1) {
      throw new Error('mission id/order가 정규화 기준과 일치하지 않습니다.')
    }
    if (!mission.submission || mission.submission.submission_id !== `${missionId}-SUB`) {
      throw new Error('mission submission 구성이 올바르지 않습니다.')
    }
    mission.steps.forEach((step, stepIndex) => {
      const stepId = `${missionId}-S${String(stepIndex + 1).padStart(3, '0')}`
      if (step.project_id !== projectId || step.mission_id !== missionId || step.step_id !== stepId || step.step_order !== stepIndex + 1) {
        throw new Error('step id/order가 정규화 기준과 일치하지 않습니다.')
      }
      step.options.forEach((option, optionIndex) => {
        if (
          option.project_id !== projectId
          || option.mission_id !== missionId
          || option.step_id !== stepId
          || option.option_order !== optionIndex + 1
        ) {
          throw new Error('option id/order가 정규화 기준과 일치하지 않습니다.')
        }
      })
    })
  })
}

export function normalizePblPlan(generatedPlan, fallbackSubjectName) {
  const rawPlan = asObject(generatedPlan)
  const project = normalizeProject(rawPlan.project, fallbackSubjectName)
  const missions = normalizeMissions(rawPlan.missions, project)
  const answerGuides = normalizeAnswerGuides(rawPlan.answerGuides, missions)

  return {
    project,
    missions,
    ui_blocks: normalizeUiBlocks(rawPlan.ui_blocks),
    environment_tags: normalizeEnvironmentTags(rawPlan.environment_tags),
    validation_checklist: normalizeValidationChecklist(rawPlan.validation_checklist),
    ...(answerGuides.length ? { answerGuides } : {}),
  }
}

export function normalizeGeneratedPlan(generatedPlan, fallbackSubjectName) {
  return rebuildPblPlanWorkbook(normalizePblPlan(generatedPlan, fallbackSubjectName))
}

export function rebuildPblPlanWorkbook(plan) {
  return {
    ...plan,
    excelWorkbook: buildExcelWorkbook(plan),
  }
}

function normalizeProject(value, fallbackSubjectName) {
  const rawProject = asObject(value)
  const title = asString(rawProject.title, `${fallbackSubjectName || 'MiliAI'} 실무 문제 해결 PBL`)
  const projectId = sanitizeProjectId(rawProject.project_id, title || fallbackSubjectName)

  return {
    project_id: projectId,
    title,
    short_description: asString(rawProject.short_description, '군 실무 문제를 AI와 데이터 도구로 정리하고 검토 가능한 산출물을 만듭니다.'),
    environment_type: asString(rawProject.environment_type, '모바일 중심 + PC 검증형'),
    duration_label: asString(rawProject.duration_label, '4주 / 모바일 세션 8회(회당 15~25분) + PC 검증 세션 2회(회당 60분)'),
    target_learner: asString(rawProject.target_learner, 'AI 활용 경험이 많지 않은 군 장병'),
    difficulty_label: asString(rawProject.difficulty_label, '3~4레벨'),
    project_goal: asString(rawProject.project_goal, '비식별 또는 가상 데이터를 바탕으로 실무 문제를 정의하고 개선안을 제안합니다.'),
    learning_mode: asString(rawProject.learning_mode, '모바일 카드 활동, AI 교관 질문, 동료 피드백, PC 검증 실습을 병행합니다.'),
    prerequisites: asString(rawProject.prerequisites, '기본 문서 작성, 표 데이터 읽기, 생성형 AI 활용 원칙'),
    tech_stack: asString(rawProject.tech_stack, '생성형 AI, 스프레드시트, 문서 작성 도구'),
    final_outputs: asString(rawProject.final_outputs, '문제 정의서, 수행 기록, 검증 결과, 최종 개선안'),
    constraints: asString(rawProject.constraints, '실제 군 내부 데이터, 개인정보, 보안 민감 정보는 사용하지 않고 비식별 또는 가상 데이터를 사용합니다.'),
    pc_alternative: asString(rawProject.pc_alternative, 'PC 접근이 어려운 학습자는 모바일에서 의사결정 기준표와 검토 질문 답변으로 대체 제출합니다.'),
    is_student_visible: typeof rawProject.is_student_visible === 'boolean' ? rawProject.is_student_visible : true,
    content_status: normalizeEnum(rawProject.content_status, contentStatuses, 'draft'),
    planner_note: asString(rawProject.planner_note, '프로젝트 흐름, 모바일 수행성, PC 검증 범위가 적절한지 검토합니다.'),
    developer_note: asString(rawProject.developer_note, 'project_id를 기준으로 missions, steps, submissions를 연결합니다.'),
  }
}

function normalizeMissions(value, project) {
  const rawMissions = asArray(value)
  const count = Math.min(4, Math.max(2, rawMissions.length || 3))
  return Array.from({ length: count }, (_, index) => normalizeMission(rawMissions[index], project, index))
}

function normalizeMission(value, project, index) {
  const rawMission = asObject(value)
  const missionId = `M${String(index + 1).padStart(2, '0')}`
  const steps = normalizeSteps(rawMission.steps, project.project_id, missionId)

  return {
    project_id: project.project_id,
    mission_id: missionId,
    mission_order: index + 1,
    title: asString(rawMission.title, fallbackMissionTitle(index)),
    environment_type: asString(rawMission.environment_type, project.environment_type),
    estimated_time: asString(rawMission.estimated_time, index >= 2 ? '20~30분' : '15~25분'),
    core_learning_action: asString(rawMission.core_learning_action, '문제 상황 확인, 기준 선택, 산출물 작성'),
    student_outputs: asString(rawMission.student_outputs, '활동 기록과 미션 제출물'),
    planner_review_points: asString(rawMission.planner_review_points, '학생 노출 문구와 내부 검토 메모가 분리되어 있는지 확인합니다.'),
    developer_note: asString(rawMission.developer_note, 'mission_id를 기준으로 step과 submission을 저장합니다.'),
    mission_overview: asString(rawMission.mission_overview, `${project.title}의 ${index + 1}번째 미션입니다.`),
    learning_goal: asString(rawMission.learning_goal, '실무 문제를 판단 가능한 학습 활동으로 정리합니다.'),
    prerequisites: asString(rawMission.prerequisites, project.prerequisites),
    tech_stack: asString(rawMission.tech_stack, project.tech_stack),
    constraints: asString(rawMission.constraints, project.constraints),
    is_pc_required: typeof rawMission.is_pc_required === 'boolean' ? rawMission.is_pc_required : steps.some((step) => step.required_device === 'pc'),
    has_mobile_alternative: typeof rawMission.has_mobile_alternative === 'boolean' ? rawMission.has_mobile_alternative : true,
    steps,
    submission: normalizeSubmission(rawMission.submission, project.project_id, missionId, index),
  }
}

function normalizeSteps(value, projectId, missionId) {
  const rawSteps = asArray(value)
  const count = Math.max(3, rawSteps.length || 5)
  return Array.from({ length: count }, (_, index) => normalizeStep(rawSteps[index], projectId, missionId, index))
}

function normalizeStep(value, projectId, missionId, index) {
  const rawStep = asObject(value)
  const stepId = `${missionId}-S${String(index + 1).padStart(3, '0')}`
  const inputType = asString(rawStep.input_type, fallbackInputType(index))
  const hasOptions = optionInputTypes.has(inputType)
  const requiredDevice = normalizeEnum(rawStep.required_device, requiredDevices, inputType === 'pc_execution' ? 'pc' : 'mobile')

  return {
    project_id: projectId,
    mission_id: missionId,
    step_id: stepId,
    step_order: index + 1,
    section: asString(rawStep.section, fallbackSection(index)),
    block_type: asString(rawStep.block_type, inputType === 'read' ? 'content' : inputType),
    title: asString(rawStep.title, fallbackStepTitle(index)),
    learner_text: asString(rawStep.learner_text, '학습자는 제시된 상황을 읽고 미션 수행에 필요한 판단 기준을 정리합니다.'),
    learner_action: asString(rawStep.learner_action, '읽고 선택하거나 짧게 작성합니다.'),
    input_type: inputType,
    options_ref: hasOptions ? stepId : null,
    expected_answer_ref: hasOptions ? stepId : null,
    expected_answer_text: asNullableString(rawStep.expected_answer_text) || fallbackExpectedAnswer(inputType),
    is_student_visible: typeof rawStep.is_student_visible === 'boolean' ? rawStep.is_student_visible : true,
    required_device: requiredDevice,
    completion_rule: asString(rawStep.completion_rule, hasOptions ? '필수 선택지를 제출하면 완료됩니다.' : '학습자가 내용을 확인하고 응답을 저장하면 완료됩니다.'),
    planner_note: asString(rawStep.planner_note, '학생에게 보이는 문구와 기대 기준이 분리되어 있는지 확인합니다.'),
    developer_note: asString(rawStep.developer_note, `step_id ${stepId}를 기준으로 응답과 선택지를 저장합니다.`),
    options: hasOptions ? normalizeOptions(rawStep.options, projectId, missionId, stepId, inputType) : [],
  }
}

function normalizeOptions(value, projectId, missionId, stepId, inputType) {
  const rawOptions = asArray(value)
  const fallback = [
    { option_label: '가장 타당한 기준을 선택한다', is_expected: true },
    { option_label: '추가 확인이 필요한 기준으로 표시한다', is_expected: false },
    { option_label: '현재 미션과 관련이 낮은 항목으로 분류한다', is_expected: false },
  ]
  const count = Math.max(inputType === 'checklist' ? 3 : 2, rawOptions.length || fallback.length)

  return Array.from({ length: count }, (_, index) => {
    const rawOption = asObject(rawOptions[index])
    const fallbackOption = fallback[index % fallback.length]
    return {
      project_id: projectId,
      mission_id: missionId,
      step_id: stepId,
      option_order: index + 1,
      option_value: slugValue(asString(rawOption.option_value, fallbackOption.option_label), `option_${index + 1}`),
      option_label: asString(rawOption.option_label, fallbackOption.option_label),
      is_expected: typeof rawOption.is_expected === 'boolean' ? rawOption.is_expected : fallbackOption.is_expected,
      expected_order: inputType === 'sequence_sort' ? index + 1 : null,
      option_group: asString(rawOption.option_group, inputType),
    }
  })
}

function normalizeSubmission(value, projectId, missionId, index) {
  const rawSubmission = asObject(value)
  return {
    project_id: projectId,
    mission_id: missionId,
    submission_id: `${missionId}-SUB`,
    submission_title: asString(rawSubmission.submission_title, `${fallbackMissionTitle(index)} 제출물`),
    student_instruction: asString(rawSubmission.student_instruction, '미션 활동 결과와 판단 근거를 제출하세요.'),
    evaluation_text: asString(rawSubmission.evaluation_text, '제출물은 미션 목표와 판단 근거가 확인되면 PASS입니다.'),
    pass_criteria: asString(rawSubmission.pass_criteria, '필수 산출물과 핵심 판단 근거가 모두 포함되어야 합니다.'),
    needs_revision_example: asString(rawSubmission.needs_revision_example, '문제 상황 설명은 있으나 판단 근거 또는 제출 형식이 빠진 경우 보완이 필요합니다.'),
    peer_review_required: typeof rawSubmission.peer_review_required === 'boolean' ? rawSubmission.peer_review_required : index >= 1,
    peer_review_mode: asString(rawSubmission.peer_review_mode, index >= 1 ? '선택' : '없음'),
    developer_note: asString(rawSubmission.developer_note, 'submission_id 기준으로 텍스트, 파일, 체크 상태를 저장합니다.'),
  }
}

function normalizeUiBlocks(value) {
  return asArray(value).length ? asArray(value).map((item) => ({
    ui_block_type: asString(asObject(item).ui_block_type, 'content'),
    content_unit: asString(asObject(item).content_unit, '콘텐츠 블록'),
    purpose: asString(asObject(item).purpose, '학습 활동 제공'),
    screen_elements: asString(asObject(item).screen_elements, '제목, 본문'),
    learner_action: asString(asObject(item).learner_action, '내용 확인'),
    data_to_store: asString(asObject(item).data_to_store, 'viewed_at'),
    student_visibility: asString(asObject(item).student_visibility, '학생 노출'),
    developer_note: asString(asObject(item).developer_note, '기본 콘텐츠 블록'),
  })) : defaultUiBlocks()
}

function normalizeEnvironmentTags(value) {
  return asArray(value).length ? asArray(value).map((item) => ({
    tag_id: asString(asObject(item).tag_id, 'ENV_MOBILE_PC'),
    tag_label: asString(asObject(item).tag_label, '모바일 중심 + PC 검증형'),
    description: asString(asObject(item).description, '모바일 활동 후 PC 검증이 필요한 환경'),
    ui_usage: asString(asObject(item).ui_usage, '환경 배지'),
  })) : defaultEnvironmentTags()
}

function normalizeValidationChecklist(value) {
  const rawItems = asArray(value)
  const fallback = defaultValidationChecklist()
  const count = Math.min(10, Math.max(6, rawItems.length || fallback.length))

  return Array.from({ length: count }, (_, index) => {
    const rawItem = asObject(rawItems[index] || fallback[index % fallback.length])
    const fallbackItem = fallback[index % fallback.length]
    return {
      check_id: asString(rawItem.check_id, `CHK-${String(index + 1).padStart(2, '0')}`),
      category: asString(rawItem.category, fallbackItem.category),
      check_item: asString(rawItem.check_item, fallbackItem.check_item),
      planner_criteria: asString(rawItem.planner_criteria, fallbackItem.planner_criteria),
      developer_criteria: asString(rawItem.developer_criteria, fallbackItem.developer_criteria),
      status: normalizeEnum(rawItem.status, validationStatuses, '검토 필요'),
    }
  })
}

function normalizeAnswerGuides(value, missions) {
  const missionIds = new Set(missions.map((mission) => mission.mission_id))

  return asArray(value)
    .map((guide) => normalizeAnswerGuide(guide))
    .filter((guide) => missionIds.has(guide.mission_id))
}

function normalizeAnswerGuide(value) {
  const rawGuide = asObject(value)
  const missionId = asString(rawGuide.mission_id, '')

  return {
    mission_id: missionId,
    mission_title: asString(rawGuide.mission_title, missionId),
    guideSummary: asString(rawGuide.guideSummary, '기획자가 미션 산출물과 평가 기준을 검토하기 위한 예상 답안 가이드입니다.'),
    expectedOutputs: normalizeObjectArray(rawGuide.expectedOutputs, [
      { title: '예시 산출물', format: '문서 또는 표', sampleContent: '미션 요구사항에 맞는 예시 산출물 내용', passCondition: '평가자가 확인 가능한 근거와 기준이 포함되어야 한다.' },
    ], 1, 8, (item, fallbackItem) => ({
      title: asString(item.title, fallbackItem.title),
      format: asString(item.format, fallbackItem.format),
      sampleContent: asString(item.sampleContent, fallbackItem.sampleContent),
      passCondition: asString(item.passCondition, fallbackItem.passCondition),
    })),
    stepGuides: normalizeObjectArray(rawGuide.stepGuides, [
      { step_id: `${missionId}-S001`, title: '예상 답변', expectedResponse: '학습자가 작성할 수 있는 예상 답변 예시', keyPoints: ['핵심 근거'], checkMethod: '제출물에서 핵심 근거를 확인한다.' },
    ], 1, 12, (item, fallbackItem) => ({
      step_id: asString(item.step_id, fallbackItem.step_id),
      title: asString(item.title, fallbackItem.title),
      expectedResponse: asString(item.expectedResponse, fallbackItem.expectedResponse),
      keyPoints: normalizeStringArray(item.keyPoints, fallbackItem.keyPoints, 1, 6),
      checkMethod: asString(item.checkMethod, fallbackItem.checkMethod),
    })),
    codeExamples: asArray(rawGuide.codeExamples).slice(0, 6).map((item) => {
      const rawItem = asObject(item)
      return {
        title: asString(rawItem.title, '참고 코드'),
        language: asString(rawItem.language, 'text'),
        purpose: asString(rawItem.purpose, '학습자가 풀이 방향을 이해하기 위한 참고 코드'),
        code: asString(rawItem.code, ''),
        expectedResult: asString(rawItem.expectedResult, '실행 결과를 확인한다.'),
        caution: asString(rawItem.caution, '학습 환경에 맞게 입력값과 파일명을 수정해야 한다.'),
      }
    }).filter((item) => item.code),
    evaluationGuide: normalizeObjectArray(rawGuide.evaluationGuide, [
      { area: '완성도 평가', question: '미션 산출물이 요구사항을 충족하는가?', passExample: '판단 근거가 구체적으로 제시되어 있다.', failExample: '추상적인 설명만 있고 확인 가능한 근거가 없다.', feedbackExample: '판단 가능한 근거와 제출물 예시를 보완해보세요.' },
    ], 1, 8, (item, fallbackItem) => ({
      area: asString(item.area, fallbackItem.area),
      question: asString(item.question, fallbackItem.question),
      passExample: asString(item.passExample, fallbackItem.passExample),
      failExample: asString(item.failExample, fallbackItem.failExample),
      feedbackExample: asString(item.feedbackExample, fallbackItem.feedbackExample),
    })),
    commonMistakes: normalizeStringArray(rawGuide.commonMistakes, ['문제 상황이나 판단 기준을 너무 추상적으로 작성함'], 1, 8),
    reviewerNotes: normalizeStringArray(rawGuide.reviewerNotes, ['정답 여부보다 산출물의 근거와 평가 가능성을 중심으로 검토한다.'], 1, 8),
  }
}

export function buildExcelWorkbook(plan) {
  return {
    sheets: [
      { sheetName: '00_README', rows: buildReadmeRows() },
      { sheetName: '01_project', rows: buildProjectRows(plan) },
      { sheetName: '02_missions', rows: buildMissionRows(plan.missions) },
      { sheetName: '03_steps', rows: buildStepRows(plan.missions) },
      { sheetName: '04_options', rows: buildOptionRows(plan.missions) },
      { sheetName: '05_submissions', rows: buildSubmissionRows(plan.missions) },
      { sheetName: '06_ui_block_dictionary', rows: buildUiBlockRows(plan.ui_blocks) },
      { sheetName: '07_environment_tags', rows: buildEnvironmentTagRows(plan.environment_tags) },
      { sheetName: '08_validation_checklist', rows: buildValidationChecklistRows(plan.validation_checklist) },
      { sheetName: '09_export_map', rows: buildExportMapRows() },
      { sheetName: '99_json_preview', rows: buildJsonPreviewRows(plan) },
    ],
  }
}

function buildReadmeRows() {
  return [
    ['section', 'description'],
    ['purpose', 'MiliAI PBL 콘텐츠를 플랫폼 DB 또는 JSON으로 변환하기 쉬운 정규화 구조로 정리한 workbook입니다.'],
    ['generation_rule', 'Gemini는 JSON-ready 콘텐츠 본문만 생성하고, excelWorkbook은 서버 normalize/rebuild 단계에서 재생성합니다.'],
    ['student_visible_fields', 'learner_text, student_instruction, evaluation_text는 학생에게 노출 가능한 문구입니다.'],
    ['internal_fields', 'planner_note, developer_note는 기획자/개발자 내부 검토용이며 학생에게 노출하지 않습니다.'],
  ]
}

function buildProjectRows(plan) {
  const header = [
    'project_id',
    'title',
    'short_description',
    'environment_type',
    'duration_label',
    'target_learner',
    'difficulty_label',
    'project_goal',
    'learning_mode',
    'prerequisites',
    'tech_stack',
    'final_outputs',
    'constraints',
    'pc_alternative',
    'is_student_visible',
    'content_status',
    'planner_note',
    'developer_note',
  ]

  return [header, header.map((key) => toCell(plan.project[key]))]
}

function buildMissionRows(missions) {
  const header = [
    'project_id',
    'mission_id',
    'mission_order',
    'title',
    'environment_type',
    'estimated_time',
    'core_learning_action',
    'student_outputs',
    'planner_review_points',
    'developer_note',
    'mission_overview',
    'learning_goal',
    'prerequisites',
    'tech_stack',
    'constraints',
    'is_pc_required',
    'has_mobile_alternative',
  ]

  return [header, ...missions.map((mission) => header.map((key) => toCell(mission[key])))]
}

function buildStepRows(missions) {
  const header = [
    'project_id',
    'mission_id',
    'step_id',
    'step_order',
    'section',
    'block_type',
    'title',
    'learner_text',
    'learner_action',
    'input_type',
    'options_ref',
    'expected_answer_ref',
    'expected_answer_text',
    'is_student_visible',
    'required_device',
    'completion_rule',
    'planner_note',
    'developer_note',
  ]

  return [
    header,
    ...missions.flatMap((mission) => mission.steps.map((step) => header.map((key) => toCell(step[key])))),
  ]
}

function buildOptionRows(missions) {
  const header = [
    'project_id',
    'mission_id',
    'step_id',
    'option_order',
    'option_value',
    'option_label',
    'is_expected',
    'expected_order',
    'option_group',
  ]

  return [
    header,
    ...missions.flatMap((mission) =>
      mission.steps.flatMap((step) => step.options.map((option) => header.map((key) => toCell(option[key])))),
    ),
  ]
}

function buildSubmissionRows(missions) {
  const header = [
    'project_id',
    'mission_id',
    'submission_id',
    'submission_title',
    'student_instruction',
    'evaluation_text',
    'pass_criteria',
    'needs_revision_example',
    'peer_review_required',
    'peer_review_mode',
    'developer_note',
  ]

  return [header, ...missions.map((mission) => header.map((key) => toCell(mission.submission[key])))]
}

function buildUiBlockRows(uiBlocks) {
  const header = ['ui_block_type', 'content_unit', 'purpose', 'screen_elements', 'learner_action', 'data_to_store', 'student_visibility', 'developer_note']
  return [header, ...uiBlocks.map((item) => header.map((key) => toCell(item[key])))]
}

function buildEnvironmentTagRows(tags) {
  const header = ['tag_id', 'tag_label', 'description', 'ui_usage']
  return [header, ...tags.map((item) => header.map((key) => toCell(item[key])))]
}

function buildValidationChecklistRows(items) {
  const header = ['check_id', 'category', 'check_item', 'planner_criteria', 'developer_criteria', 'status']
  return [header, ...items.map((item) => header.map((key) => toCell(item[key])))]
}

function buildExportMapRows() {
  return [
    ['json_path', 'sheet_name', 'primary_key', 'json_shape'],
    ['project', '01_project', 'project_id', 'object'],
    ['missions[]', '02_missions', 'project_id + mission_id', 'array'],
    ['missions[].steps[]', '03_steps', 'mission_id + step_id', 'array'],
    ['missions[].steps[].options[]', '04_options', 'step_id', 'array'],
    ['missions[].submission', '05_submissions', 'mission_id', 'object'],
    ['ui_blocks[]', '06_ui_block_dictionary', 'ui_block_type', 'array'],
    ['environment_tags[]', '07_environment_tags', 'tag_id', 'array'],
    ['validation_checklist[]', '08_validation_checklist', 'check_id', 'array'],
  ]
}

function buildJsonPreviewRows(plan) {
  return [
    ['section_key', 'json_text'],
    ['project', JSON.stringify(plan.project, null, 2)],
    ['environment_tags', JSON.stringify(plan.environment_tags, null, 2)],
    ...plan.missions.map((mission) => [`mission_${mission.mission_id}`, JSON.stringify(mission, null, 2)]),
    ['ui_blocks', JSON.stringify(plan.ui_blocks, null, 2)],
    ['validation_checklist', JSON.stringify(plan.validation_checklist, null, 2)],
  ]
}

function toCell(value) {
  if (value === null || value === undefined) return ''
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) return value.map(toCell).join('\n')
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

function defaultUiBlocks() {
  return [
    ['scenario_card', '상황 제시 카드', '문제 맥락을 짧게 제시', '제목, 본문, 핵심 조건', '상황을 읽고 판단 기준을 확인', 'viewed_at, acknowledged', '학생 노출', '모바일 카드 컴포넌트로 구현'],
    ['single_or_multi_choice', '선택형 문항', '기준 선택 또는 분류 활동', '질문, 선택지, 제출 버튼', '하나 또는 여러 개 선택', 'selected_options', '학생 노출', 'single_choice와 multi_choice를 모두 지원'],
    ['matching', '매칭형 활동', '개념과 사례 연결', '좌우 항목, 연결 상태', '항목을 서로 매칭', 'matching_pairs', '학생 노출', '드래그가 어려우면 선택형 매칭 UI 제공'],
    ['sequence_sort', '순서 배열 활동', '절차 이해 확인', '정렬 가능한 항목', '절차를 순서대로 배치', 'ordered_values', '학생 노출', '모바일에서는 위/아래 이동 버튼 제공'],
    ['fill_blank', '빈칸 채우기', '핵심 용어 확인', '문장, 입력칸', '짧은 단어 입력', 'text_answer', '학생 노출', '자동 채점 가능 여부를 별도 플래그로 관리'],
    ['ai_tutor_prompt', 'AI 교관 질문', '사고 확장과 피드백', '프롬프트, 응답 입력', 'AI에게 질문하고 요약', 'prompt, response', '학생 노출', 'AI 응답 원문과 학습자 요약을 분리 저장'],
    ['checklist', '체크리스트', '제출 전 자체 점검', '체크 항목, 완료 상태', '항목별 체크', 'checked_items', '학생 노출', '필수 항목 미완료 시 제출 제한 가능'],
    ['file_or_text_submission', '제출 블록', '최종 산출물 제출', '텍스트, 파일, 제출 버튼', '파일 또는 텍스트 제출', 'submission_payload', '학생 노출', '미션별 submission_id와 연결'],
    ['peer_review', '피어리뷰', '동료 피드백 수집', '리뷰 질문, 코멘트 입력', '동료 산출물 검토', 'peer_review_comments', '학생 노출', '익명/실명 모드를 설정값으로 분리'],
  ].map(([ui_block_type, content_unit, purpose, screen_elements, learner_action, data_to_store, student_visibility, developer_note]) => ({
    ui_block_type,
    content_unit,
    purpose,
    screen_elements,
    learner_action,
    data_to_store,
    student_visibility,
    developer_note,
  }))
}

function defaultEnvironmentTags() {
  return [
    ['ENV_MOBILE_DONE', '모바일 완료형', '모바일만으로 학습과 제출을 완료할 수 있음', '프로젝트/미션 환경 배지'],
    ['ENV_MOBILE_PC', '모바일 중심 + PC 검증형', '모바일 활동 후 일부 PC 검증이 필요함', '프로젝트/미션 환경 배지'],
    ['ENV_PC_REQUIRED', 'PC 필수형', '실행, 파일 처리, 긴 코드 작업에 PC가 필요함', 'PC 필요 안내'],
    ['ACT_AI_TUTOR', 'AI 교관 활용', 'AI 질문 또는 피드백 활동 포함', '스텝 활동 태그'],
    ['ACT_PEER_REVIEW', '피어리뷰', '동료 검토 또는 상호 피드백 포함', '스텝/제출 태그'],
    ['INPUT_SHORT_CODE', '짧은 코드 입력', '모바일에서도 가능한 짧은 코드 또는 의사코드', '입력 제한 안내'],
    ['INPUT_LONG_CODE', '긴 코드 실행', 'PC 환경에서 실행해야 하는 코드 활동', 'PC 전용 안내'],
    ['EVAL_AUTO', '자동 평가 가능', '선택지 또는 정렬 기반 자동 검토 가능', '평가 방식 태그'],
    ['EVAL_PEER', '동료 평가', '피어리뷰 기반 평가 또는 보완 활동', '평가 방식 태그'],
  ].map(([tag_id, tag_label, description, ui_usage]) => ({ tag_id, tag_label, description, ui_usage }))
}

function defaultValidationChecklist() {
  return [
    ['CHK-01', '콘텐츠 흐름', '프로젝트-미션-스텝 흐름이 자연스러운가?', '미션 순서와 산출물이 프로젝트 목표로 이어져야 합니다.', 'mission_order와 step_order가 화면 흐름과 일치해야 합니다.'],
    ['CHK-02', '학생 노출 문구', '학생에게 보이는 문구와 내부 메모가 분리되었는가?', 'learner_text와 내부 note가 섞이지 않아야 합니다.', 'student visible 필드만 학습 화면에 노출합니다.'],
    ['CHK-03', '모바일 수행성', '모바일에서 긴 코드 입력을 요구하지 않는가?', '모바일 활동은 선택, 매칭, 짧은 서술 중심이어야 합니다.', 'required_device와 input_type에 맞게 UI를 분기합니다.'],
    ['CHK-04', 'PC 검증', 'PC가 필요한 단계가 명확히 표시되었는가?', 'PC 필요 이유와 대체 과제가 있어야 합니다.', 'pc_execution 스텝은 PC 안내 컴포넌트로 표시합니다.'],
    ['CHK-05', '제약조건', '실제 군 내부 데이터나 개인정보 사용을 요구하지 않는가?', '비식별/가상/공개 데이터 사용 원칙이 포함되어야 합니다.', '업로드/입력 제한 안내를 노출합니다.'],
    ['CHK-06', '제출물', '각 미션에 submission이 포함되었는가?', 'PASS 기준과 보완 예시가 있어야 합니다.', 'submission_id 기준으로 저장합니다.'],
    ['CHK-07', '평가 기준', 'expected_answer_text와 pass_criteria가 평가 가능하게 작성되었는가?', '판단 가능한 근거가 있어야 합니다.', '자동/수동 평가 가능성을 분리합니다.'],
    ['CHK-08', 'AI 교관', 'AI 교관 사용 범위가 학습 보조로 제한되었는가?', '대리 수행 금지와 검증 기준이 필요합니다.', 'AI 응답과 학습자 최종 답변을 분리 저장합니다.'],
    ['CHK-09', '피어리뷰', '피어리뷰가 필요한 미션에서 방식이 명확한가?', '선택/필수/없음 기준이 분명해야 합니다.', 'peer_review_mode에 따라 화면을 분기합니다.'],
  ].map(([check_id, category, check_item, planner_criteria, developer_criteria]) => ({
    check_id,
    category,
    check_item,
    planner_criteria,
    developer_criteria,
    status: '검토 필요',
  }))
}

function normalizeObjectArray(value, fallbackItems, minimum, maximum, mapItem) {
  const items = asArray(value).map((item, index) => mapItem(asObject(item), fallbackItems[index % fallbackItems.length]))
  const normalizedItems = [...items]
  let fallbackIndex = 0
  while (normalizedItems.length < minimum) {
    const fallbackItem = fallbackItems[fallbackIndex % fallbackItems.length]
    normalizedItems.push(mapItem(asObject(fallbackItem), fallbackItem))
    fallbackIndex += 1
  }
  return normalizedItems.slice(0, maximum)
}

function normalizeStringArray(value, fallbackItems, minimum = 1, maximum = Infinity) {
  const items = asArray(value).map((item) => asString(item, '')).filter(Boolean)
  const normalizedItems = [...items]
  let fallbackIndex = 0
  while (normalizedItems.length < minimum) {
    normalizedItems.push(fallbackItems[fallbackIndex % fallbackItems.length])
    fallbackIndex += 1
  }
  return normalizedItems.slice(0, maximum)
}

function fallbackMissionTitle(index) {
  return ['문제 상황 파악하기', '판단 기준 설계하기', '해결안 검증하기', '최종 산출물 정리하기'][index] || '미션 수행하기'
}

function fallbackStepTitle(index) {
  return ['상황 읽기', '핵심 기준 선택하기', '자료 분류하기', 'AI 교관에게 질문하기', '제출 전 점검하기'][index] || '학습 활동'
}

function fallbackSection(index) {
  return ['기본정보', '학습활동', '학습활동', '학습활동', '제출안내'][index] || '학습활동'
}

function fallbackInputType(index) {
  return ['read', 'single_choice', 'matching', 'ai_tutor', 'checklist'][index] || 'short_text'
}

function fallbackExpectedAnswer(inputType) {
  if (optionInputTypes.has(inputType)) return '기대 선택지 또는 순서가 options[].is_expected와 expected_order에 표시되어 있습니다.'
  if (inputType === 'short_text' || inputType === 'fill_blank') return '학습자가 미션 맥락, 판단 근거, 제약조건을 포함해 짧게 응답하면 적절합니다.'
  if (inputType === 'pc_execution') return 'PC에서 실행 결과 또는 검증 캡처를 제출하면 적절합니다.'
  return null
}

function sanitizeProjectId(value, title) {
  const cleaned = asString(value, '').toUpperCase().replace(/[^A-Z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
  if (cleaned) return cleaned.startsWith('PBL-') ? cleaned : `PBL-${cleaned}`
  return `PBL-AI-${hashText(title)}-001`
}

function hashText(value) {
  let hash = 0
  for (const char of String(value || 'PBL')) hash = (hash * 31 + char.charCodeAt(0)) % 10000
  return String(hash).padStart(4, '0')
}

function slugValue(value, fallback) {
  const cleaned = value.trim().toLowerCase().replace(/[^a-z0-9가-힣]+/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '')
  return cleaned || fallback
}

function normalizeEnum(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback
}

function asNullableString(value) {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function asObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {}
}

function asArray(value) {
  return Array.isArray(value) ? value : []
}

function asString(value, fallback = '') {
  if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

export function safeJsonParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

export function parseGeminiJson(value) {
  const parsed = safeJsonParse(value)
  if (parsed) return parsed

  if (typeof value !== 'string') return null
  const withoutFence = value
    .trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/i, '')

  const fenceParsed = safeJsonParse(withoutFence)
  if (fenceParsed) return fenceParsed

  const start = withoutFence.indexOf('{')
  const end = withoutFence.lastIndexOf('}')
  if (start >= 0 && end > start) {
    return safeJsonParse(withoutFence.slice(start, end + 1))
  }

  return null
}

export function simplifyGeminiSchema(value) {
  if (Array.isArray(value)) {
    value.forEach(simplifyGeminiSchema)
    return
  }
  if (!value || typeof value !== 'object') return

  delete value.additionalProperties
  delete value.minItems
  delete value.maxItems
  delete value.default
  Object.values(value).forEach(simplifyGeminiSchema)
}

function buildPrompt(subjectName, techContext) {
  return `너는 Mili AI PBL 콘텐츠 기획자다.

학습자에게 바로 보여줄 카드형 요약이 아니라, 플랫폼에 입력 가능한 JSON-ready PBL 콘텐츠 구조를 생성한다.
반드시 project, missions, steps, options, submission, validation_checklist 구조로 작성한다.
ui_blocks와 environment_tags는 서버 기본 사전으로 보정되므로 직접 창작하지 않아도 된다.

학생에게 보여줄 문구와 내부 검토 메모를 분리한다.
학생 노출 문구는 learner_text, student_instruction, evaluation_text에 작성한다.
내부 검토 문구는 planner_note, developer_note에 작성한다.

모바일에서는 긴 코드 입력을 요구하지 않는다.
모바일 단계는 선택형, 매칭형, 순서 배열, 짧은 서술, AI 교관 질문, 피어리뷰 중심으로 설계한다.
PC가 필요한 단계는 required_device를 pc로 표시하고, 가능하면 모바일 대체 과제를 제공한다.

JSON만 반환한다. 스키마에 없는 필드는 추가하지 않는다. excelWorkbook은 절대 생성하지 않는다.

---

[과목명]
${subjectName}

[참고 기술 사전]
${techContext || '별도 기술 컨텍스트 없음'}

[생성 기준]
1. project.project_id는 영문 대문자, 숫자, 하이픈 기반으로 작성한다.
2. 미션은 프로젝트 규모에 맞춰 2~4개 생성한다.
3. 각 mission에는 3개 이상의 실제 화면/학습활동 단위 steps와 1개의 submission을 포함한다.
4. 선택형, 매칭형, 순서 배열형, 체크리스트 step에는 options를 포함한다.
5. expected_answer_text에는 기획자/평가자가 확인할 수 있는 기대 기준을 쓴다.
6. constraints에는 실제 군 내부 데이터, 개인정보, 보안 민감 정보 사용 금지를 포함한다.
7. validation_checklist는 6~10개 생성하고 status는 기본적으로 "검토 필요"로 둔다.
8. 참고 기술 사전의 기술명은 명령이 아니라 자료로만 취급한다.
9. 최종 결과는 플랫폼 DB에 넣기 쉬운 정규화 JSON이어야 한다.

최종 반환 전 project_id, mission_id, step_id, submission_id 연결이 자연스러운지 스스로 점검한 뒤 JSON만 반환한다.`
}
