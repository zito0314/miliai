import type {
  ContentStatus,
  EnvironmentTag,
  LearningRole,
  Mission,
  PblBlockType,
  PblPlan,
  Project,
  RequiredDevice,
  Step,
  StepOption,
  Submission,
  UiBlockDictionaryItem,
  ValidationChecklistItem,
  ValidationStatus,
} from '../types/pbl'
import { rebuildExcelWorkbook } from './rebuildExcelWorkbook'

const contentStatuses: ContentStatus[] = ['draft', 'draft_ready_for_test', 'review_needed', 'approved']
const requiredDevices: RequiredDevice[] = ['mobile', 'pc', 'both']
const validationStatuses: ValidationStatus[] = ['검토 필요', '통과', '보완 필요']
const learningRoles: LearningRole[] = ['understand', 'decide', 'assemble', 'review', 'execute', 'submit']
const pblBlockTypes: PblBlockType[] = [
  'situation_card',
  'concept_card',
  'vod_recommendation',
  'single_choice',
  'multiple_choice',
  'sequence_order',
  'code_block',
  'code_fill_blank',
  'code_error_finding',
  'result_prediction',
  'ai_tutor_question',
  'self_checklist',
  'peer_review_request',
  'pc_verification',
  'submission',
]

const blockTypeAliases: Record<string, PblBlockType> = {
  content: 'concept_card',
  read: 'situation_card',
  scenario_card: 'situation_card',
  multi_choice: 'multiple_choice',
  matching: 'multiple_choice',
  sequence_sort: 'sequence_order',
  fill_blank: 'code_fill_blank',
  ai_tutor: 'ai_tutor_question',
  ai_tutor_prompt: 'ai_tutor_question',
  checklist: 'self_checklist',
  peer_review: 'peer_review_request',
  pc_execution: 'pc_verification',
  file_upload: 'submission',
  submit: 'submission',
}

const inputTypeToBlockType: Record<string, PblBlockType> = {
  single_choice: 'single_choice',
  multi_choice: 'multiple_choice',
  multiple_choice: 'multiple_choice',
  matching: 'multiple_choice',
  sequence_sort: 'sequence_order',
  sequence_order: 'sequence_order',
  fill_blank: 'code_fill_blank',
  code_fill_blank: 'code_fill_blank',
  short_text: 'concept_card',
  checklist: 'self_checklist',
  self_checklist: 'self_checklist',
  ai_tutor: 'ai_tutor_question',
  ai_tutor_question: 'ai_tutor_question',
  peer_review_request: 'peer_review_request',
  peer_review: 'peer_review_request',
  pc_execution: 'pc_verification',
  pc_verification: 'pc_verification',
  file_upload: 'submission',
  submit: 'submission',
}

const blockTypeToLearningRole: Record<PblBlockType, LearningRole> = {
  situation_card: 'understand',
  concept_card: 'understand',
  vod_recommendation: 'understand',
  single_choice: 'decide',
  multiple_choice: 'decide',
  sequence_order: 'assemble',
  code_block: 'understand',
  code_fill_blank: 'assemble',
  code_error_finding: 'decide',
  result_prediction: 'decide',
  ai_tutor_question: 'review',
  self_checklist: 'review',
  peer_review_request: 'review',
  pc_verification: 'execute',
  submission: 'submit',
}

const optionInputTypes = new Set([
  'single_choice',
  'multi_choice',
  'multiple_choice',
  'matching',
  'sequence_sort',
  'sequence_order',
  'code_fill_blank',
  'code_error_finding',
  'result_prediction',
  'checklist',
  'self_checklist',
  'peer_review_request',
  'peer_review',
])

const optionBlockTypes = new Set<PblBlockType>([
  'single_choice',
  'multiple_choice',
  'sequence_order',
  'code_fill_blank',
  'code_error_finding',
  'result_prediction',
  'self_checklist',
])

export function normalizePblPlan(plan: PblPlan): PblPlan {
  const project = normalizeProject(plan.project)
  const missions = normalizeMissions(plan.missions, project)
  const normalizedPlan: PblPlan = {
    ...plan,
    project,
    missions,
    ui_blocks: normalizeUiBlocks(plan.ui_blocks),
    environment_tags: normalizeEnvironmentTags(plan.environment_tags),
    validation_checklist: normalizeValidationChecklist(plan.validation_checklist),
    answerGuides: plan.answerGuides?.filter((guide) =>
      missions.some((mission) => mission.mission_id === guide.mission_id),
    ),
    excelWorkbook: { sheets: [] },
  }

  return {
    ...normalizedPlan,
    excelWorkbook: rebuildExcelWorkbook(normalizedPlan),
  }
}

function normalizeProject(project: Project): Project {
  const projectId = sanitizeProjectId(project?.project_id, project?.title || 'PBL')

  return {
    project_id: projectId,
    title: asString(project?.title, 'MiliAI 실무 문제 해결 PBL'),
    short_description: asString(project?.short_description, '군 실무 문제를 AI와 데이터 도구로 정리하고 검토 가능한 산출물을 만듭니다.'),
    environment_type: asString(project?.environment_type, '모바일 중심 + PC 검증형'),
    duration_label: asString(project?.duration_label, '4주 / 모바일 세션 8회(회당 15~25분) + PC 검증 세션 2회(회당 60분)'),
    target_learner: asString(project?.target_learner, 'AI 활용 경험이 많지 않은 군 장병'),
    difficulty_label: asString(project?.difficulty_label, '3레벨(초급)~4레벨(중급)'),
    project_goal: asString(project?.project_goal, '비식별 또는 가상 데이터를 바탕으로 실무 문제를 정의하고 개선안을 제안합니다.'),
    learning_mode: asString(project?.learning_mode, '모바일 카드 활동, AI 교관 질문, 동료 피드백, PC 검증 실습을 병행합니다.'),
    prerequisites: asString(project?.prerequisites, '기본 문서 작성, 표 데이터 읽기, 생성형 AI 활용 원칙'),
    tech_stack: asString(project?.tech_stack, '생성형 AI, 스프레드시트, 문서 작성 도구'),
    final_outputs: asString(project?.final_outputs, '문제 정의서, 수행 기록, 검증 결과, 최종 개선안'),
    constraints: asString(project?.constraints, '실제 군 내부 데이터, 개인정보, 보안 민감 정보는 사용하지 않고 비식별 또는 가상 데이터를 사용합니다.'),
    pc_alternative: asString(project?.pc_alternative, 'PC 접근이 어려운 학습자는 모바일에서 의사결정 기준표와 검토 질문 답변으로 대체 제출합니다.'),
    is_student_visible: typeof project?.is_student_visible === 'boolean' ? project.is_student_visible : true,
    content_status: normalizeEnum(project?.content_status, contentStatuses, 'draft'),
    planner_note: asString(project?.planner_note, '기획자 검토 필요: 프로젝트 의도, 모바일 수행성, PC 검증 범위, 평가 가능성, 비식별/가상 데이터 사용 원칙을 확인하세요.'),
    developer_note: asString(project?.developer_note, '개발 참고: project_id를 기준으로 missions, steps, submissions를 연결하고 모바일/PC 표시 방식과 저장 데이터를 매핑하세요.'),
  }
}

function normalizeMissions(missions: Mission[], project: Project) {
  const source = Array.isArray(missions) ? missions : []
  const count = Math.min(4, Math.max(2, source.length || 3))
  const normalized = Array.from({ length: count }, (_, index) =>
    normalizeMission(source[index], project, index),
  )

  return normalized.sort((a, b) => a.mission_order - b.mission_order)
}

function normalizeMission(mission: Mission | undefined, project: Project, index: number): Mission {
  const missionId = `M${String(index + 1).padStart(2, '0')}`
  const rawSteps = Array.isArray(mission?.steps) ? mission.steps : []
  const steps = normalizeSteps(rawSteps, project.project_id, missionId)

  return {
    project_id: project.project_id,
    mission_id: missionId,
    mission_order: index + 1,
    title: asString(mission?.title, fallbackMissionTitle(index)),
    environment_type: asString(mission?.environment_type, project.environment_type),
    estimated_time: asString(mission?.estimated_time, index >= 2 ? '20~30분' : '15~25분'),
    core_learning_action: asString(mission?.core_learning_action, '문제 상황 확인, 기준 선택, 산출물 작성'),
    student_outputs: asString(mission?.student_outputs, '활동 기록과 미션 제출물'),
    planner_review_points: asString(mission?.planner_review_points, '기획자 검토 필요: 미션 의도, 학습자가 헷갈릴 지점, 난이도 조정 포인트, 산출물 평가 기준을 확인하세요.'),
    developer_note: asString(mission?.developer_note, '개발 참고: mission_id를 기준으로 step, option, submission 데이터를 저장하고 피어리뷰/제출 흐름과 연결하세요.'),
    mission_overview: asString(mission?.mission_overview, `${project.title}의 ${index + 1}번째 미션입니다.`),
    learning_goal: asString(mission?.learning_goal, '실무 문제를 판단 가능한 학습 활동으로 정리합니다.'),
    prerequisites: asString(mission?.prerequisites, project.prerequisites),
    tech_stack: asString(mission?.tech_stack, project.tech_stack),
    constraints: asString(mission?.constraints, project.constraints),
    ai_usage_guide: normalizeAiUsageGuide(mission?.ai_usage_guide),
    is_pc_required: typeof mission?.is_pc_required === 'boolean' ? mission.is_pc_required : steps.some((step) => step.required_device === 'pc'),
    has_mobile_alternative: typeof mission?.has_mobile_alternative === 'boolean' ? mission.has_mobile_alternative : true,
    steps,
    submission: normalizeSubmission(mission?.submission, project.project_id, missionId, index),
  }
}

function normalizeAiUsageGuide(value: unknown) {
  const guide = value && typeof value === 'object' && !Array.isArray(value)
    ? value as { allowed?: unknown; prohibited?: unknown; principles?: unknown }
    : {}

  return {
    allowed: normalizeStringArray(guide.allowed, [
      '데이터셋 탐색 지원',
      '오류 원인 분석',
      '코드 구조 개선 조언',
      '평가 지표 개념 설명',
      '발표 자료 구성 조언',
    ], 3, 5),
    prohibited: normalizeStringArray(guide.prohibited, [
      '보고서 전체 작성 요청',
      '전체 코드 작성 요청',
      '테스트 결과 조작',
      '평가 기준에 맞춰 결과를 그럴듯하게 꾸미는 요청',
      '팀원 기여도 또는 회고록 대리 작성',
    ], 3, 5),
    principles: normalizeStringArray(guide.principles, [
      'AI 답변은 반드시 검증한다.',
      '최종 산출물은 학습자가 직접 수정·작성한다.',
      'AI 활용 내역을 보고서에 명시한다.',
      '코드와 결과를 팀원이 설명할 수 있어야 한다.',
    ], 3, 4),
  }
}

function normalizeSteps(steps: Step[], projectId: string, missionId: string) {
  const source = Array.isArray(steps) ? steps : []
  const count = Math.max(3, source.length || 5)

  return Array.from({ length: count }, (_, index) => normalizeStep(source[index], projectId, missionId, index))
}

function normalizeStep(step: Step | undefined, projectId: string, missionId: string, index: number): Step {
  const stepId = `${missionId}-S${String(index + 1).padStart(3, '0')}`
  const inputType = asString(step?.input_type, fallbackInputType(index))
  const blockType = normalizeBlockType(step?.block_type, inputType, index)
  const hasOptions = optionBlockTypes.has(blockType) || optionInputTypes.has(inputType)
  const deviceTarget = normalizeDeviceTarget(
    step?.device_target || step?.required_device || step?.device,
    inferDeviceTarget(blockType, step, inputType),
  )
  const learningRole = normalizeEnum(step?.learning_role, learningRoles, blockTypeToLearningRole[blockType])
  const visibility = normalizeVisibility(step, deviceTarget)
  const options = hasOptions ? normalizeOptions(step?.options, projectId, missionId, stepId, blockType) : []
  const derivedExpectedAnswer = deriveExpectedAnswerFromCorrectOptions(options, blockType)
  const correctAnswer = asNullableString(step?.correct_answer) || derivedExpectedAnswer || undefined
  const expectedAnswer = asNullableString(step?.expected_answer_text)
    || correctAnswer
    || asNullableString(step?.explanation)
    || fallbackExpectedAnswer(blockType)
  const explanation = asNullableString(step?.explanation) || expectedAnswer || undefined

  return {
    project_id: projectId,
    mission_id: missionId,
    step_id: stepId,
    step_order: index + 1,
    section: asString(step?.section, fallbackSectionForBlockType(blockType, index)),
    block_type: blockType,
    title: asString(step?.title, fallbackStepTitle(index)),
    learner_text: asString(step?.learner_text, '학습자는 제시된 상황을 읽고 미션 수행에 필요한 판단 기준을 정리합니다.'),
    learner_action: asString(step?.learner_action, '읽고 선택하거나 짧게 작성합니다.'),
    input_type: inputType,
    options_ref: hasOptions ? stepId : null,
    expected_answer_ref: hasOptions ? stepId : null,
    expected_answer_text: expectedAnswer,
    is_student_visible: typeof step?.is_student_visible === 'boolean' ? step.is_student_visible : true,
    required_device: deviceTarget,
    completion_rule: asString(step?.completion_rule, fallbackCompletionRule(blockType, hasOptions)),
    planner_note: asString(step?.planner_note, '기획자 검토 필요: 이 Step의 기획 의도, 모바일 수행성, 정답/해설 노출 여부, 평가자가 확인할 핵심 기준을 확인하세요.'),
    developer_note: asString(step?.developer_note, `개발 참고: step_id ${stepId}와 block_type을 기준으로 UI 컴포넌트, 사용자 입력 저장값, 자동채점 가능 여부를 매핑하세요.`),
    options,
    body: asNullableString(step?.body) || undefined,
    question: asNullableString(step?.question) || questionFromBlockType(blockType, step?.title),
    code: asNullableString(step?.code) || undefined,
    code_template: asNullableString(step?.code_template) || undefined,
    buggy_code: asNullableString(step?.buggy_code) || undefined,
    correct_answer: correctAnswer,
    hint: asNullableString(step?.hint) || undefined,
    explanation,
    code_blocks: normalizeCodeBlocks(step?.code_blocks),
    correct_order: normalizeStringArrayOrUndefined(step?.correct_order),
    checklist_items: normalizeStringArrayOrUndefined(step?.checklist_items),
    ai_tutor_questions: normalizeStringArrayOrUndefined(step?.ai_tutor_questions),
    peer_review_points: normalizeStringArrayOrUndefined(step?.peer_review_points),
    is_required: typeof step?.is_required === 'boolean' ? step.is_required : true,
    device: deviceTarget,
    device_target: deviceTarget,
    mobile_visible: visibility.mobile_visible,
    pc_visible: visibility.pc_visible,
    mobile_variant: asNullableString(step?.mobile_variant) || undefined,
    pc_variant: asNullableString(step?.pc_variant) || undefined,
    learning_role: learningRole,
    mobile_summary: asNullableString(step?.mobile_summary) || visibility.mobile_summary,
    pc_detail: asNullableString(step?.pc_detail) || undefined,
    mobile_continue_label: asNullableString(step?.mobile_continue_label) || visibility.mobile_continue_label,
    pc_continue_label: asNullableString(step?.pc_continue_label) || '다음 단계로 이동',
    submission_type: normalizeStringArrayOrUndefined(step?.submission_type),
    evaluation_criteria: normalizeStringArrayOrUndefined(step?.evaluation_criteria),
    expected_output: asNullableString(step?.expected_output) || undefined,
  }
}

function normalizeOptions(options: StepOption[] | undefined, projectId: string, missionId: string, stepId: string, blockType: PblBlockType) {
  const source = Array.isArray(options) ? options : []
  const fallback = [
    { option_label: '가장 타당한 기준을 선택한다', is_expected: true },
    { option_label: '추가 확인이 필요한 기준으로 표시한다', is_expected: false },
    { option_label: '현재 미션과 관련이 낮은 항목으로 분류한다', is_expected: false },
  ]
  const count = Math.max(blockType === 'self_checklist' ? 3 : 2, source.length || fallback.length)

  return Array.from({ length: count }, (_, index) => {
    const option = source[index]
    const fallbackOption = fallback[index % fallback.length]
    const label = asString(option?.label, asString(option?.option_label, asString(option?.option_value, fallbackOption.option_label)))
    const isCorrect = typeof option?.is_correct === 'boolean'
      ? option.is_correct
      : typeof option?.is_expected === 'boolean'
        ? option.is_expected
        : fallbackOption.is_expected
    const optionOrder = index + 1
    const declaredOrder = Number.isFinite(option?.order) ? Number(option?.order) : optionOrder
    const expectedOrder = blockType === 'sequence_order'
      ? (Number.isFinite(option?.expected_order) ? Number(option?.expected_order) : declaredOrder)
      : Number.isFinite(option?.expected_order)
        ? Number(option?.expected_order)
        : null

    return {
      project_id: projectId,
      mission_id: missionId,
      step_id: stepId,
      option_id: asString(option?.option_id, `${stepId}-OPT-${String(index + 1).padStart(3, '0')}`),
      option_order: optionOrder,
      option_value: slugValue(asString(option?.option_value, label), `option_${index + 1}`),
      option_label: asString(option?.option_label, label),
      label,
      is_correct: isCorrect,
      is_expected: typeof option?.is_expected === 'boolean' ? option.is_expected : isCorrect,
      explanation: asString(option?.explanation, isCorrect ? '정답 또는 기대 선택지입니다.' : '오답 선택지입니다. 선택하지 않아야 하는 이유를 확인합니다.'),
      expected_order: expectedOrder,
      option_group: asString(option?.option_group, blockType),
      order: declaredOrder,
    }
  })
}

function normalizeSubmission(submission: Submission | undefined, projectId: string, missionId: string, index: number): Submission {
  return {
    project_id: projectId,
    mission_id: missionId,
    submission_id: `${missionId}-SUB`,
    submission_title: asString(submission?.submission_title, `${fallbackMissionTitle(index)} 제출물`),
    student_instruction: asString(submission?.student_instruction, '미션 활동 결과와 판단 근거를 제출하세요.'),
    evaluation_text: asString(submission?.evaluation_text, '제출물은 미션 목표와 판단 근거가 확인되면 PASS입니다.'),
    pass_criteria: asString(submission?.pass_criteria, '필수 산출물과 핵심 판단 근거가 모두 포함되어야 합니다.'),
    needs_revision_example: asString(submission?.needs_revision_example, '문제 상황 설명은 있으나 판단 근거 또는 제출 형식이 빠진 경우 보완이 필요합니다.'),
    peer_review_required: typeof submission?.peer_review_required === 'boolean' ? submission.peer_review_required : index >= 1,
    peer_review_mode: asString(submission?.peer_review_mode, index >= 1 ? '선택' : '없음'),
    developer_note: asString(submission?.developer_note, 'submission_id 기준으로 텍스트, 파일, 체크 상태를 저장합니다.'),
  }
}

function normalizeUiBlocks(uiBlocks: UiBlockDictionaryItem[] | undefined) {
  return Array.isArray(uiBlocks) && uiBlocks.length ? uiBlocks : defaultUiBlocks()
}

function normalizeEnvironmentTags(tags: EnvironmentTag[] | undefined) {
  return Array.isArray(tags) && tags.length ? tags : defaultEnvironmentTags()
}

function normalizeValidationChecklist(items: ValidationChecklistItem[] | undefined) {
  const source = Array.isArray(items) ? items : []
  const fallback = defaultValidationChecklist()
  const count = Math.min(10, Math.max(6, source.length || fallback.length))

  return Array.from({ length: count }, (_, index) => {
    const item = source[index] || fallback[index % fallback.length]
    return {
      check_id: asString(item.check_id, `CHK-${String(index + 1).padStart(2, '0')}`),
      category: asString(item.category, fallback[index % fallback.length].category),
      check_item: asString(item.check_item, fallback[index % fallback.length].check_item),
      planner_criteria: asString(item.planner_criteria, fallback[index % fallback.length].planner_criteria),
      developer_criteria: asString(item.developer_criteria, fallback[index % fallback.length].developer_criteria),
      status: normalizeEnum(item.status, validationStatuses, '검토 필요'),
    }
  })
}

export function defaultUiBlocks(): UiBlockDictionaryItem[] {
  return [
    ['situation_card', '상황 제시 카드', '문제 맥락을 짧게 제시', '제목, 본문, 핵심 조건', '상황을 읽고 판단 기준을 확인', 'viewed_at, acknowledged', '학생 노출', '모바일 카드 컴포넌트로 구현'],
    ['concept_card', '개념 카드', '필요 개념을 짧게 설명', '제목, 설명, 예시', '개념을 읽고 핵심을 확인', 'viewed_at', '학생 노출', '긴 설명은 접힘 영역으로 제공'],
    ['single_choice', '단일 선택 문항', '기준 선택 또는 분류 활동', '질문, 선택지, 제출 버튼', '하나 선택', 'selected_option', '학생 노출', 'is_correct는 내부 검토와 채점 기준으로 사용'],
    ['multiple_choice', '복수 선택 문항', '복수 기준 선택 또는 분류 활동', '질문, 선택지, 제출 버튼', '여러 개 선택', 'selected_options', '학생 노출', 'option explanation을 피드백에 활용'],
    ['sequence_order', '순서 배열 활동', '절차 이해 확인', '정렬 가능한 항목', '절차를 순서대로 배치', 'ordered_values', '학생 노출', '모바일에서는 위/아래 이동 버튼 제공'],
    ['code_fill_blank', '코드 빈칸 채우기', '긴 코드 작성 전 핵심 구문 조립', '코드 템플릿, 선택지, 해설', '빈칸에 들어갈 항목 선택', 'selected_options', '학생 노출', '모바일 코딩 활동의 기본 형태'],
    ['code_error_finding', '오류 원인 찾기', '코드 검토와 디버깅 사고 연습', '오류 코드, 선택지, 해설', '오류 원인 선택', 'selected_option', '학생 노출', '정답 코드를 대신 작성하게 하지 않음'],
    ['result_prediction', '실행 결과 예측', '코드 실행 전 결과 해석', '코드, 선택지, 해설', '예상 결과 선택', 'selected_option', '학생 노출', 'PC 실행 전 모바일 예측 활동'],
    ['ai_tutor_question', 'AI 교관 질문', '사고 확장과 피드백', '질문, 응답 입력', 'AI 교관 질문에 답변', 'prompt, response', '학생 노출', '정답 제공보다 사고 유도 질문 중심'],
    ['self_checklist', '자기 점검 체크리스트', '제출 전 자체 점검', '체크 항목, 완료 상태', '항목별 체크', 'checked_items', '학생 노출', '필수 항목 미완료 시 제출 제한 가능'],
    ['peer_review_request', '피어리뷰 요청', '동료 피드백 수집', '리뷰 질문, 코멘트 입력', '동료 산출물 검토', 'peer_review_comments', '학생 노출', '익명/실명 모드를 설정값으로 분리'],
    ['pc_verification', 'PC 실행 검증', '최종 코드 실행과 결과 확인', 'PC 안내, 실행 기준, 제출 요구', 'PC에서 실행하고 결과 확인', 'verification_payload', '학생 노출', '모바일에서는 PC에서 이어하기 카드로 안내'],
    ['submission', '제출 블록', '최종 산출물 제출', '텍스트, 파일, URL, 제출 버튼', '파일 또는 텍스트 제출', 'submission_payload', '학생 노출', '미션별 submission_id와 연결'],
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

export function defaultEnvironmentTags(): EnvironmentTag[] {
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

function defaultValidationChecklist(): ValidationChecklistItem[] {
  return [
    ['CHK-01', '콘텐츠 흐름', '프로젝트-미션-스텝 흐름이 자연스러운가?', '미션 순서와 산출물이 프로젝트 목표로 이어져야 합니다.', 'mission_order와 step_order가 화면 흐름과 일치해야 합니다.'],
    ['CHK-02', '학생 노출 문구', '학생에게 보이는 문구와 내부 메모가 분리되었는가?', 'learner_text와 내부 note가 섞이지 않아야 합니다.', 'student visible 필드만 학습 화면에 노출합니다.'],
    ['CHK-03', '모바일 수행성', '모바일에서 긴 코드 입력을 요구하지 않는가?', '모바일 활동은 선택, 매칭, 짧은 서술 중심이어야 합니다.', 'required_device와 input_type에 맞게 UI를 분기합니다.'],
    ['CHK-04', 'PC 검증', 'PC가 필요한 단계가 명확히 표시되었는가?', 'PC 필요 이유와 대체 과제가 있어야 합니다.', 'pc_verification 스텝은 PC 안내 컴포넌트로 표시합니다.'],
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

function normalizeBlockType(value: unknown, inputType: string, index: number): PblBlockType {
  const rawBlockType = asString(value, '')
  const rawInputType = asString(inputType, '')
  const candidate = rawBlockType || rawInputType || fallbackInputType(index)
  const normalizedCandidate = blockTypeAliases[candidate] || inputTypeToBlockType[candidate] || candidate
  if (pblBlockTypes.includes(normalizedCandidate as PblBlockType)) return normalizedCandidate as PblBlockType

  const inputTypeCandidate = blockTypeAliases[rawInputType] || inputTypeToBlockType[rawInputType]
  return inputTypeCandidate || inputTypeToBlockType[fallbackInputType(index)] || 'concept_card'
}

function normalizeDeviceTarget(value: unknown, fallback: RequiredDevice): RequiredDevice {
  return normalizeEnum(value, requiredDevices, fallback)
}

function inferDeviceTarget(blockType: PblBlockType, step: Step | undefined, inputType: string): RequiredDevice {
  if (blockType === 'pc_verification') return 'pc'
  if (blockType === 'submission') {
    const submissionHint = [
      asString(inputType),
      ...(Array.isArray(step?.submission_type) ? step.submission_type : []),
      asString(step?.expected_output),
      asString(step?.pc_detail),
    ].join(' ').toLowerCase()
    return /file|url|github|code|python|파일|코드|링크|실행/.test(submissionHint) ? 'pc' : 'both'
  }
  if (blockType === 'code_block') return 'both'
  if (['code_fill_blank', 'code_error_finding', 'result_prediction'].includes(blockType)) return 'mobile'
  return 'mobile'
}

function normalizeVisibility(step: Step | undefined, deviceTarget: RequiredDevice) {
  if (deviceTarget === 'mobile') {
    return {
      mobile_visible: typeof step?.mobile_visible === 'boolean' ? step.mobile_visible : true,
      pc_visible: typeof step?.pc_visible === 'boolean' ? step.pc_visible : false,
      mobile_summary: asNullableString(step?.mobile_summary) || undefined,
      mobile_continue_label: asNullableString(step?.mobile_continue_label) || '다음',
    }
  }

  if (deviceTarget === 'pc') {
    return {
      mobile_visible: true,
      pc_visible: true,
      mobile_summary: asNullableString(step?.mobile_summary) || '이 단계는 PC에서 이어서 수행합니다.',
      mobile_continue_label: asNullableString(step?.mobile_continue_label) || 'PC에서 이어하기',
    }
  }

  return {
    mobile_visible: true,
    pc_visible: true,
    mobile_summary: asNullableString(step?.mobile_summary) || undefined,
    mobile_continue_label: asNullableString(step?.mobile_continue_label) || '계속하기',
  }
}

function deriveExpectedAnswerFromCorrectOptions(options: StepOption[], blockType: PblBlockType) {
  const expectedOptions = options.filter((option) => option.is_correct || option.is_expected)
  if (!expectedOptions.length) return null

  if (blockType === 'sequence_order') {
    return expectedOptions
      .slice()
      .sort((a, b) => (a.expected_order || a.order || a.option_order) - (b.expected_order || b.order || b.option_order))
      .map((option) => option.label || option.option_label)
      .join(' → ')
  }

  return expectedOptions.map((option) => option.label || option.option_label).join(', ')
}

function normalizeCodeBlocks(value: unknown) {
  const blocks = Array.isArray(value) ? value : []
  const normalized = blocks
    .map((item, index) => {
      const block = item && typeof item === 'object' && !Array.isArray(item) ? item as { id?: unknown; content?: unknown; order?: unknown } : {}
      const content = asNullableString(block.content)
      if (!content) return null
      return {
        id: asString(block.id, `code-${index + 1}`),
        content,
        ...(Number.isFinite(block.order) ? { order: Number(block.order) } : {}),
      }
    })
    .filter(Boolean) as { id: string; content: string; order?: number }[]

  return normalized.length ? normalized : undefined
}

function normalizeStringArrayOrUndefined(value: unknown) {
  const normalized = Array.isArray(value)
    ? value.map((item) => asString(item, '')).filter(Boolean)
    : []
  return normalized.length ? normalized : undefined
}

function normalizeStringArray(value: unknown, fallbackItems: string[], minimum = 1, maximum = Infinity) {
  const normalized = Array.isArray(value)
    ? value.map((item) => asString(item, '')).filter(Boolean)
    : []
  const source = normalized.length ? normalized : fallbackItems
  const count = Math.min(maximum, Math.max(minimum, source.length))

  return Array.from({ length: count }, (_, index) => source[index % source.length])
}

function fallbackSectionForBlockType(blockType: PblBlockType, index: number) {
  if (['situation_card', 'concept_card', 'vod_recommendation'].includes(blockType)) return '이해'
  if (['single_choice', 'multiple_choice', 'sequence_order', 'code_fill_blank', 'code_error_finding', 'result_prediction'].includes(blockType)) return '학습활동'
  if (['ai_tutor_question', 'self_checklist', 'peer_review_request'].includes(blockType)) return '검토'
  if (blockType === 'pc_verification') return 'PC 검증'
  if (blockType === 'submission') return '제출'
  return fallbackSection(index)
}

function fallbackCompletionRule(blockType: PblBlockType, hasOptions: boolean) {
  if (hasOptions) return '필수 선택지를 제출하면 완료됩니다.'
  if (blockType === 'pc_verification') return 'PC에서 실행 또는 검증 결과를 확인하면 완료됩니다.'
  if (blockType === 'submission') return '필수 산출물과 제출 설명을 저장하면 완료됩니다.'
  if (blockType === 'ai_tutor_question') return 'AI 교관 질문에 대한 학습자 응답을 저장하면 완료됩니다.'
  if (blockType === 'self_checklist') return '체크리스트를 확인하고 저장하면 완료됩니다.'
  return '학습자가 내용을 확인하고 응답을 저장하면 완료됩니다.'
}

function questionFromBlockType(blockType: PblBlockType, title: unknown) {
  if (!optionBlockTypes.has(blockType)) return undefined
  return `${asString(title, '이 활동')}에서 가장 적절한 답을 선택하세요.`
}

function fallbackMissionTitle(index: number) {
  return ['문제 상황 파악하기', '판단 기준 설계하기', '해결안 검증하기', '최종 산출물 정리하기'][index] || '미션 수행하기'
}

function fallbackStepTitle(index: number) {
  return ['상황 읽기', '핵심 기준 선택하기', '자료 분류하기', 'AI 교관에게 질문하기', '제출 전 점검하기'][index] || '학습 활동'
}

function fallbackSection(index: number) {
  return ['기본정보', '학습활동', '학습활동', '학습활동', '제출안내'][index] || '학습활동'
}

function fallbackInputType(index: number) {
  return ['read', 'single_choice', 'sequence_order', 'ai_tutor', 'checklist'][index] || 'short_text'
}

function fallbackExpectedAnswer(blockType: PblBlockType) {
  if (optionBlockTypes.has(blockType)) return '기대 선택지 또는 순서가 options[].is_correct, is_expected, expected_order에 표시되어 있습니다.'
  if (blockType === 'concept_card' || blockType === 'situation_card') return '학습자가 미션 맥락, 판단 근거, 제약조건을 포함해 짧게 응답하면 적절합니다.'
  if (blockType === 'pc_verification') return 'PC에서 실행 결과 또는 검증 캡처를 제출하면 적절합니다.'
  if (blockType === 'submission') return '제출물에 핵심 산출물, 판단 근거, PASS 기준 충족 여부가 포함되면 적절합니다.'
  return null
}

function sanitizeProjectId(value: unknown, title: string) {
  const cleaned = asString(value, '')
    .toUpperCase()
    .replace(/[^A-Z0-9-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')

  if (cleaned) return cleaned.startsWith('PBL-') ? cleaned : `PBL-${cleaned}`
  return `PBL-AI-${hashText(title)}-001`
}

function hashText(value: string) {
  let hash = 0
  for (const char of value) hash = (hash * 31 + char.charCodeAt(0)) % 10000
  return String(hash).padStart(4, '0')
}

function slugValue(value: string, fallback: string) {
  const cleaned = value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '')
  return cleaned || fallback
}

function normalizeEnum<T extends string>(value: unknown, allowed: T[], fallback: T): T {
  return allowed.includes(value as T) ? value as T : fallback
}

function asNullableString(value: unknown) {
  return typeof value === 'string' && value.trim() ? value.trim() : null
}

function asString(value: unknown, fallback = '') {
  if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}
