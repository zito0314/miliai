import type {
  ContentStatus,
  EnvironmentTag,
  Mission,
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

const optionInputTypes = new Set([
  'single_choice',
  'multi_choice',
  'matching',
  'sequence_sort',
  'checklist',
  'peer_review_request',
  'peer_review',
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
    difficulty_label: asString(project?.difficulty_label, '3~4레벨'),
    project_goal: asString(project?.project_goal, '비식별 또는 가상 데이터를 바탕으로 실무 문제를 정의하고 개선안을 제안합니다.'),
    learning_mode: asString(project?.learning_mode, '모바일 카드 활동, AI 교관 질문, 동료 피드백, PC 검증 실습을 병행합니다.'),
    prerequisites: asString(project?.prerequisites, '기본 문서 작성, 표 데이터 읽기, 생성형 AI 활용 원칙'),
    tech_stack: asString(project?.tech_stack, '생성형 AI, 스프레드시트, 문서 작성 도구'),
    final_outputs: asString(project?.final_outputs, '문제 정의서, 수행 기록, 검증 결과, 최종 개선안'),
    constraints: asString(project?.constraints, '실제 군 내부 데이터, 개인정보, 보안 민감 정보는 사용하지 않고 비식별 또는 가상 데이터를 사용합니다.'),
    pc_alternative: asString(project?.pc_alternative, 'PC 접근이 어려운 학습자는 모바일에서 의사결정 기준표와 검토 질문 답변으로 대체 제출합니다.'),
    is_student_visible: typeof project?.is_student_visible === 'boolean' ? project.is_student_visible : true,
    content_status: normalizeEnum(project?.content_status, contentStatuses, 'draft'),
    planner_note: asString(project?.planner_note, '프로젝트 흐름, 모바일 수행성, PC 검증 범위가 적절한지 검토합니다.'),
    developer_note: asString(project?.developer_note, 'project_id를 기준으로 missions, steps, submissions를 연결합니다.'),
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
    planner_review_points: asString(mission?.planner_review_points, '학생 노출 문구와 내부 검토 메모가 분리되어 있는지 확인합니다.'),
    developer_note: asString(mission?.developer_note, 'mission_id를 기준으로 step과 submission을 저장합니다.'),
    mission_overview: asString(mission?.mission_overview, `${project.title}의 ${index + 1}번째 미션입니다.`),
    learning_goal: asString(mission?.learning_goal, '실무 문제를 판단 가능한 학습 활동으로 정리합니다.'),
    prerequisites: asString(mission?.prerequisites, project.prerequisites),
    tech_stack: asString(mission?.tech_stack, project.tech_stack),
    constraints: asString(mission?.constraints, project.constraints),
    is_pc_required: typeof mission?.is_pc_required === 'boolean' ? mission.is_pc_required : steps.some((step) => step.required_device === 'pc'),
    has_mobile_alternative: typeof mission?.has_mobile_alternative === 'boolean' ? mission.has_mobile_alternative : true,
    steps,
    submission: normalizeSubmission(mission?.submission, project.project_id, missionId, index),
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
  const hasOptions = optionInputTypes.has(inputType)
  const requiredDevice = normalizeEnum(step?.required_device, requiredDevices, inputType === 'pc_execution' ? 'pc' : 'mobile')
  const options = hasOptions ? normalizeOptions(step?.options, projectId, missionId, stepId, inputType) : []

  return {
    project_id: projectId,
    mission_id: missionId,
    step_id: stepId,
    step_order: index + 1,
    section: asString(step?.section, fallbackSection(index)),
    block_type: asString(step?.block_type, inputType === 'read' ? 'content' : inputType),
    title: asString(step?.title, fallbackStepTitle(index)),
    learner_text: asString(step?.learner_text, '학습자는 제시된 상황을 읽고 미션 수행에 필요한 판단 기준을 정리합니다.'),
    learner_action: asString(step?.learner_action, '읽고 선택하거나 짧게 작성합니다.'),
    input_type: inputType,
    options_ref: hasOptions ? stepId : null,
    expected_answer_ref: hasOptions ? stepId : null,
    expected_answer_text: asNullableString(step?.expected_answer_text) || fallbackExpectedAnswer(inputType),
    is_student_visible: typeof step?.is_student_visible === 'boolean' ? step.is_student_visible : true,
    required_device: requiredDevice,
    completion_rule: asString(step?.completion_rule, hasOptions ? '필수 선택지를 제출하면 완료됩니다.' : '학습자가 내용을 확인하고 응답을 저장하면 완료됩니다.'),
    planner_note: asString(step?.planner_note, '학생에게 보이는 문구와 기대 기준이 분리되어 있는지 확인합니다.'),
    developer_note: asString(step?.developer_note, `step_id ${stepId}를 기준으로 응답과 선택지를 저장합니다.`),
    options,
  }
}

function normalizeOptions(options: StepOption[] | undefined, projectId: string, missionId: string, stepId: string, inputType: string) {
  const source = Array.isArray(options) ? options : []
  const fallback = [
    { option_label: '가장 타당한 기준을 선택한다', is_expected: true },
    { option_label: '추가 확인이 필요한 기준으로 표시한다', is_expected: false },
    { option_label: '현재 미션과 관련이 낮은 항목으로 분류한다', is_expected: false },
  ]
  const count = Math.max(inputType === 'checklist' ? 3 : 2, source.length || fallback.length)

  return Array.from({ length: count }, (_, index) => {
    const option = source[index]
    const fallbackOption = fallback[index % fallback.length]
    const expectedOrder = inputType === 'sequence_sort' ? index + 1 : null

    return {
      project_id: projectId,
      mission_id: missionId,
      step_id: stepId,
      option_order: index + 1,
      option_value: slugValue(asString(option?.option_value, fallbackOption.option_label), `option_${index + 1}`),
      option_label: asString(option?.option_label, fallbackOption.option_label),
      is_expected: typeof option?.is_expected === 'boolean' ? option.is_expected : fallbackOption.is_expected,
      expected_order: expectedOrder,
      option_group: asString(option?.option_group, inputType),
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
  return ['read', 'single_choice', 'matching', 'ai_tutor', 'checklist'][index] || 'short_text'
}

function fallbackExpectedAnswer(inputType: string) {
  if (optionInputTypes.has(inputType)) return '기대 선택지 또는 순서가 options[].is_expected와 expected_order에 표시되어 있습니다.'
  if (inputType === 'short_text' || inputType === 'fill_blank') return '학습자가 미션 맥락, 판단 근거, 제약조건을 포함해 짧게 응답하면 적절합니다.'
  if (inputType === 'pc_execution') return 'PC에서 실행 결과 또는 검증 캡처를 제출하면 적절합니다.'
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
