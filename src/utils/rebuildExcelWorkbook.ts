import type {
  EnvironmentTag,
  ExcelWorkbook,
  Mission,
  PblPlan,
  Step,
  StepOption,
  Submission,
  UiBlockDictionaryItem,
  ValidationChecklistItem,
} from '../types/pbl'

export const JSON_READY_WORKBOOK_SHEET_NAMES = [
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
] as const

export function rebuildExcelWorkbook(plan: PblPlan): ExcelWorkbook {
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

function buildProjectRows(plan: PblPlan) {
  const header = [
    'project_id',
    'title',
    'short_description',
    'environment_type',
    'duration_label',
    'target_learner',
    'team_structure',
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

  return [
    header,
    header.map((key) => toCell(plan.project[key as keyof typeof plan.project])),
  ]
}

function buildMissionRows(missions: Mission[]) {
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

  return [
    header,
    ...missions.map((mission) => header.map((key) => toCell(mission[key as keyof Mission]))),
  ]
}

function buildStepRows(missions: Mission[]) {
  const header = [
    'project_id',
    'mission_id',
    'step_id',
    'step_order',
    'section',
    'block_type',
    'device_target',
    'learning_role',
    'mobile_visible',
    'pc_visible',
    'mobile_summary',
    'pc_detail',
    'mobile_continue_label',
    'title',
    'learner_text',
    'learner_action',
    'body',
    'question',
    'input_type',
    'options_ref',
    'expected_answer_ref',
    'code',
    'code_template',
    'buggy_code',
    'correct_answer',
    'expected_answer_text',
    'hint',
    'explanation',
    'code_blocks',
    'correct_order',
    'checklist_items',
    'ai_tutor_questions',
    'peer_review_points',
    'is_required',
    'is_student_visible',
    'required_device',
    'completion_rule',
    'planner_note',
    'developer_note',
  ]

  return [
    header,
    ...missions.flatMap((mission) =>
      mission.steps.map((step) => header.map((key) => toCell(step[key as keyof Step]))),
    ),
  ]
}

function buildOptionRows(missions: Mission[]) {
  const header = [
    'project_id',
    'mission_id',
    'step_id',
    'option_id',
    'option_order',
    'option_value',
    'option_label',
    'label',
    'is_correct',
    'is_expected',
    'explanation',
    'expected_order',
    'option_group',
    'order',
  ]

  return [
    header,
    ...missions.flatMap((mission) =>
      mission.steps.flatMap((step) =>
        step.options.map((option) => header.map((key) => toCell(option[key as keyof StepOption]))),
      ),
    ),
  ]
}

function buildSubmissionRows(missions: Mission[]) {
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

  return [
    header,
    ...missions.map((mission) => header.map((key) => toCell(mission.submission[key as keyof Submission]))),
  ]
}

function buildUiBlockRows(uiBlocks: UiBlockDictionaryItem[]) {
  const header = [
    'ui_block_type',
    'content_unit',
    'purpose',
    'screen_elements',
    'learner_action',
    'data_to_store',
    'student_visibility',
    'developer_note',
  ]

  return [
    header,
    ...uiBlocks.map((item) => header.map((key) => toCell(item[key as keyof UiBlockDictionaryItem]))),
  ]
}

function buildEnvironmentTagRows(tags: EnvironmentTag[]) {
  const header = ['tag_id', 'tag_label', 'description', 'ui_usage']

  return [
    header,
    ...tags.map((item) => header.map((key) => toCell(item[key as keyof EnvironmentTag]))),
  ]
}

function buildValidationChecklistRows(items: ValidationChecklistItem[]) {
  const header = ['check_id', 'category', 'check_item', 'planner_criteria', 'developer_criteria', 'status']

  return [
    header,
    ...items.map((item) => header.map((key) => toCell(item[key as keyof ValidationChecklistItem]))),
  ]
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

function buildJsonPreviewRows(plan: PblPlan) {
  return [
    ['section_key', 'json_text'],
    ['project', stringifyPreview(plan.project)],
    ['environment_tags', stringifyPreview(plan.environment_tags)],
    ...plan.missions.map((mission) => [`mission_${mission.mission_id}`, stringifyPreview(mission)]),
    ['ui_blocks', stringifyPreview(plan.ui_blocks)],
    ['validation_checklist', stringifyPreview(plan.validation_checklist)],
  ]
}

function stringifyPreview(value: unknown) {
  return JSON.stringify(value, null, 2)
}

function toCell(value: unknown): string {
  if (value === null || value === undefined) return ''
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE'
  if (typeof value === 'number') return String(value)
  if (Array.isArray(value)) return value.map(toCell).join('\n')
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}
