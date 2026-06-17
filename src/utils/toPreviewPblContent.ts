import type { Mission, PblBlockType, PblPlan, Step, StepOption, Submission } from '../types/pbl'

export type PreviewDeviceMode = 'mobile' | 'pc'
export type PreviewDisplayVariant = 'hidden' | 'full' | 'summary'

export type PreviewPblContent = {
  projects: PreviewProject[]
  version: string
  created_at: string
  updated_at: string
}

export type PreviewProject = Record<string, unknown> & {
  project_id: string
  title: string
  description: string
  problem_statement: string
  learning_goals: string[]
  environment_tags: unknown[]
  missions: PreviewMission[]
}

export type PreviewMission = Omit<Partial<Mission>, 'steps' | 'submission'> & {
  project_id: string
  mission_id: string
  mission_order: number
  title: string
  device_target: PreviewDeviceMode | 'both'
  steps: PreviewStep[]
  submission?: Submission | Record<string, unknown>
}

export type PreviewStep = Omit<Partial<Step>, 'device_target' | 'options'> & {
  project_id: string
  mission_id: string
  step_id: string
  step_order: number
  block_type: PblBlockType | string
  title: string
  device_target: PreviewDeviceMode | 'both'
  options: PreviewStepOption[]
}

export type PreviewStepOption = Partial<StepOption> & {
  option_order: number
  option_label: string
  is_expected: boolean
  expected_order: number | null
}

export type PreviewValidationIssue = {
  type: 'error' | 'warning'
  path: string
  message: string
}

type PreviewStepDeviceInput = {
  mobile_visible?: boolean
  pc_visible?: boolean
  device_target?: unknown
  required_device?: unknown
  device?: unknown
  block_type?: unknown
}

const selectableBlockTypes = new Set([
  'single_choice',
  'multiple_choice',
  'code_fill_blank',
  'code_error_finding',
  'result_prediction',
])

export function toPreviewPblContent(input: PblPlan | PreviewPblContent | unknown): PreviewPblContent {
  const now = new Date().toISOString()
  const inputObject = asRecord(input)

  if (Array.isArray(inputObject.projects)) {
    return normalizePreviewContent(inputObject, now)
  }

  return convertPblPlanToPreviewContent(inputObject, now)
}

export function getPreviewDisplayVariant(step: PreviewStepDeviceInput, mode: PreviewDeviceMode): PreviewDisplayVariant {
  if (mode === 'mobile' && step.mobile_visible === false) return 'hidden'
  if (mode === 'pc' && step.pc_visible === false) return 'hidden'

  const target = normalizeDeviceTarget(
    step.device_target
      || step.required_device
      || step.device
      || inferDeviceFromBlockType(step.block_type),
  )

  if (target === mode || target === 'both') return 'full'
  return 'summary'
}

export function inferDeviceFromBlockType(blockType: unknown): PreviewDeviceMode | 'both' {
  if (blockType === 'pc_verification' || blockType === 'code_block') return 'pc'
  if (blockType === 'submission') return 'both'
  return 'mobile'
}

export function validatePreviewPblContent(content: PreviewPblContent): PreviewValidationIssue[] {
  const issues: PreviewValidationIssue[] = []

  if (!Array.isArray(content.projects) || content.projects.length === 0) {
    issues.push({ type: 'error', path: 'projects', message: 'projects 배열이 필요합니다.' })
    return issues
  }

  content.projects.forEach((project, projectIndex) => {
    const projectPath = `projects[${projectIndex}]`
    if (!project.project_id) {
      issues.push({ type: 'error', path: `${projectPath}.project_id`, message: 'project_id가 필요합니다.' })
    }
    if (!Array.isArray(project.missions) || project.missions.length === 0) {
      issues.push({ type: 'error', path: `${projectPath}.missions`, message: 'mission이 하나 이상 필요합니다.' })
      return
    }

    project.missions.forEach((mission, missionIndex) => {
      const missionPath = `${projectPath}.missions[${missionIndex}]`
      if (!mission.mission_id) {
        issues.push({ type: 'error', path: `${missionPath}.mission_id`, message: 'mission_id가 필요합니다.' })
      }
      if (!Array.isArray(mission.steps) || mission.steps.length === 0) {
        issues.push({ type: 'error', path: `${missionPath}.steps`, message: 'step이 하나 이상 필요합니다.' })
        return
      }

      mission.steps.forEach((step, stepIndex) => {
        const stepPath = `${missionPath}.steps[${stepIndex}]`
        if (!step.step_id) {
          issues.push({ type: 'error', path: `${stepPath}.step_id`, message: 'step_id가 필요합니다.' })
        }
        if (!step.block_type) {
          issues.push({ type: 'error', path: `${stepPath}.block_type`, message: 'block_type이 필요합니다.' })
        }
        if (selectableBlockTypes.has(step.block_type) && step.options.length === 0) {
          issues.push({ type: 'warning', path: `${stepPath}.options`, message: `${step.block_type} step에는 options가 권장됩니다.` })
        }
        if (step.block_type === 'code_fill_blank' && !step.code_template) {
          issues.push({ type: 'warning', path: `${stepPath}.code_template`, message: 'code_fill_blank step에는 code_template이 권장됩니다.' })
        }
        if (step.block_type === 'pc_verification' && step.device_target === 'mobile') {
          issues.push({ type: 'warning', path: `${stepPath}.device_target`, message: 'pc_verification step은 PC 또는 both 표시가 자연스럽습니다.' })
        }
      })
    })
  })

  return issues
}

function normalizePreviewContent(value: Record<string, unknown>, now: string): PreviewPblContent {
  return {
    projects: asArray(value.projects).map((project, projectIndex) => normalizePreviewProject(asRecord(project), projectIndex)),
    version: asString(value.version, 'preview-v1'),
    created_at: asString(value.created_at, now),
    updated_at: asString(value.updated_at, now),
  }
}

function convertPblPlanToPreviewContent(plan: Record<string, unknown>, now: string): PreviewPblContent {
  const project = asRecord(plan.project)
  const projectId = asString(project.project_id, 'project-001')

  return {
    projects: [
      {
        ...project,
        project_id: projectId,
        title: asString(project.title, 'PBL 프로젝트'),
        description: asString(project.description, asString(project.short_description, '생성된 PBL 학습 콘텐츠입니다.')),
        problem_statement: asString(project.problem_statement, asString(project.project_goal, '군 실무 문제 상황을 해결합니다.')),
        learning_goals: toStringList(project.learning_goals, asString(project.project_goal, '학습 목표를 확인합니다.')),
        environment_tags: asArray(plan.environment_tags),
        missions: asArray(plan.missions).map((mission, missionIndex) =>
          normalizeMission(asRecord(mission), projectId, missionIndex),
        ),
      },
    ],
    version: 'preview-v1',
    created_at: now,
    updated_at: now,
  }
}

function normalizePreviewProject(project: Record<string, unknown>, projectIndex: number): PreviewProject {
  const projectId = asString(project.project_id, `project-${projectIndex + 1}`)

  return {
    ...project,
    project_id: projectId,
    title: asString(project.title, `프로젝트 ${projectIndex + 1}`),
    description: asString(project.description, asString(project.short_description, 'PBL 학습 콘텐츠입니다.')),
    problem_statement: asString(project.problem_statement, asString(project.project_goal, '문제 상황을 확인합니다.')),
    learning_goals: toStringList(project.learning_goals, asString(project.project_goal, '학습 목표를 확인합니다.')),
    environment_tags: asArray(project.environment_tags),
    missions: asArray(project.missions).map((mission, missionIndex) =>
      normalizeMission(asRecord(mission), projectId, missionIndex),
    ),
  }
}

function normalizeMission(mission: Record<string, unknown>, projectId: string, missionIndex: number): PreviewMission {
  const missionId = asString(mission.mission_id, `mission-${missionIndex + 1}`)
  const missionOrder = asNumber(mission.mission_order, missionIndex + 1)

  return {
    ...mission,
    project_id: asString(mission.project_id, projectId),
    mission_id: missionId,
    mission_order: missionOrder,
    title: asString(mission.title, `미션 ${missionOrder}`),
    device_target: normalizeDeviceTarget(mission.device_target || mission.required_device || inferMissionDevice(mission)),
    steps: asArray(mission.steps).map((step, stepIndex) =>
      normalizeStep(asRecord(step), projectId, missionId, stepIndex),
    ),
    submission: mission.submission ? { ...asRecord(mission.submission) } : undefined,
  }
}

function normalizeStep(step: Record<string, unknown>, projectId: string, missionId: string, stepIndex: number): PreviewStep {
  const stepOrder = asNumber(step.step_order, stepIndex + 1)
  const blockType = asString(step.block_type, 'concept_card')

  return {
    ...step,
    project_id: asString(step.project_id, projectId),
    mission_id: asString(step.mission_id, missionId),
    step_id: asString(step.step_id, `${missionId}-step-${stepOrder}`),
    step_order: stepOrder,
    block_type: blockType,
    title: asString(step.title, `Step ${stepOrder}`),
    device_target: normalizeDeviceTarget(
      step.device_target
        || step.required_device
        || step.device
        || inferDeviceFromBlockType(blockType),
    ),
    options: asArray(step.options).map((option, optionIndex) => normalizeOption(asRecord(option), optionIndex)),
  }
}

function normalizeOption(option: Record<string, unknown>, optionIndex: number): PreviewStepOption {
  const optionOrder = asNumber(option.option_order || option.order, optionIndex + 1)

  return {
    ...option,
    option_order: optionOrder,
    option_label: asString(option.option_label, asString(option.label, asString(option.option_value, `선택지 ${optionOrder}`))),
    is_expected: option.is_expected === true || option.is_correct === true,
    expected_order: typeof option.expected_order === 'number' ? option.expected_order : null,
  }
}

function inferMissionDevice(mission: Record<string, unknown>) {
  if (mission.is_pc_required === true && mission.has_mobile_alternative === false) return 'pc'
  if (mission.is_pc_required === true) return 'both'
  return 'mobile'
}

function normalizeDeviceTarget(value: unknown): PreviewDeviceMode | 'both' {
  if (value === 'pc' || value === 'mobile' || value === 'both') return value
  return 'mobile'
}

function toStringList(value: unknown, fallback: string): string[] {
  if (Array.isArray(value)) {
    const items = value.map((item) => asString(item)).filter(Boolean)
    if (items.length) return items
  }
  const text = asString(value, fallback)
  return text ? [text] : []
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : []
}

function asString(value: unknown, fallback = ''): string {
  if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback
}
