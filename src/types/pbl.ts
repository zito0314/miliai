export type ContentStatus = 'draft' | 'draft_ready_for_test' | 'review_needed' | 'approved'
export type RequiredDevice = 'mobile' | 'pc' | 'both'
export type ValidationStatus = '검토 필요' | '통과' | '보완 필요'

export type PblPlan = {
  project: Project
  missions: Mission[]
  ui_blocks: UiBlockDictionaryItem[]
  environment_tags: EnvironmentTag[]
  validation_checklist: ValidationChecklistItem[]
  answerGuides?: AnswerGuide[]
  excelWorkbook: ExcelWorkbook
}

export type Project = {
  project_id: string
  title: string
  short_description: string
  environment_type: string
  duration_label: string
  target_learner: string
  difficulty_label: string
  project_goal: string
  learning_mode: string
  prerequisites: string
  tech_stack: string
  final_outputs: string
  constraints: string
  pc_alternative: string
  is_student_visible: boolean
  content_status: ContentStatus
  planner_note: string
  developer_note: string
}

export type Mission = {
  project_id: string
  mission_id: string
  mission_order: number
  title: string
  environment_type: string
  estimated_time: string
  core_learning_action: string
  student_outputs: string
  planner_review_points: string
  developer_note: string
  mission_overview: string
  learning_goal: string
  prerequisites: string
  tech_stack: string
  constraints: string
  is_pc_required: boolean
  has_mobile_alternative: boolean
  steps: Step[]
  submission: Submission
}

export type Step = {
  project_id: string
  mission_id: string
  step_id: string
  step_order: number
  section: string
  block_type: string
  title: string
  learner_text: string
  learner_action: string
  input_type: string
  options_ref: string | null
  expected_answer_ref: string | null
  expected_answer_text: string | null
  is_student_visible: boolean
  required_device: RequiredDevice
  completion_rule: string
  planner_note: string
  developer_note: string
  options: StepOption[]
}

export type StepOption = {
  project_id: string
  mission_id: string
  step_id: string
  option_order: number
  option_value: string
  option_label: string
  is_expected: boolean
  expected_order: number | null
  option_group: string
}

export type Submission = {
  project_id: string
  mission_id: string
  submission_id: string
  submission_title: string
  student_instruction: string
  evaluation_text: string
  pass_criteria: string
  needs_revision_example: string
  peer_review_required: boolean
  peer_review_mode: string
  developer_note: string
}

export type UiBlockDictionaryItem = {
  ui_block_type: string
  content_unit: string
  purpose: string
  screen_elements: string
  learner_action: string
  data_to_store: string
  student_visibility: string
  developer_note: string
}

export type EnvironmentTag = {
  tag_id: string
  tag_label: string
  description: string
  ui_usage: string
}

export type ValidationChecklistItem = {
  check_id: string
  category: string
  check_item: string
  planner_criteria: string
  developer_criteria: string
  status: ValidationStatus
}

export type ExcelWorkbook = {
  sheets: ExcelWorkbookSheet[]
}

export type ExcelWorkbookSheet = {
  sheetName: string
  rows: string[][]
}

export type AnswerGuide = {
  mission_id: string
  mission_title: string
  guideSummary: string
  expectedOutputs: ExpectedOutput[]
  stepGuides: StepAnswerGuide[]
  codeExamples: CodeExample[]
  evaluationGuide: EvaluationGuideItem[]
  commonMistakes: string[]
  reviewerNotes: string[]
}

export type ExpectedOutput = {
  title: string
  format: string
  sampleContent: string
  passCondition: string
}

export type StepAnswerGuide = {
  step_id: string
  title: string
  expectedResponse: string
  keyPoints: string[]
  checkMethod: string
}

export type CodeExample = {
  title: string
  language: string
  purpose: string
  code: string
  expectedResult: string
  caution: string
}

export type EvaluationGuideItem = {
  area: string
  question: string
  passExample: string
  failExample: string
  feedbackExample: string
}
