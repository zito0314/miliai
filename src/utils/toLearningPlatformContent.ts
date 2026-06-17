import type { Mission, PblPlan, Project, Step, StepOption, Submission } from '../types/pbl'

export type LearningPlatformContent = {
  projects: LearningPlatformProject[]
}

export type LearningPlatformProject = Project & {
  missions: LearningPlatformMission[]
}

export type LearningPlatformMission = Omit<Mission, 'steps' | 'submission'> & {
  steps: LearningPlatformStep[]
  submission: LearningPlatformSubmission
}

export type LearningPlatformStep = Omit<Step, 'options'> & {
  options: LearningPlatformOption[]
}

export type LearningPlatformOption = StepOption

export type LearningPlatformSubmission = Submission

export function toLearningPlatformContent(plan: PblPlan): LearningPlatformContent {
  return {
    projects: [
      {
        ...plan.project,
        missions: plan.missions.map(toLearningPlatformMission),
      },
    ],
  }
}

function toLearningPlatformMission(mission: Mission): LearningPlatformMission {
  return {
    ...mission,
    steps: mission.steps.map(toLearningPlatformStep),
    submission: toLearningPlatformSubmission(mission.submission),
  }
}

function toLearningPlatformStep(step: Step): LearningPlatformStep {
  return {
    ...step,
    options: step.options.map(toLearningPlatformOption),
  }
}

function toLearningPlatformOption(option: StepOption): LearningPlatformOption {
  return { ...option }
}

function toLearningPlatformSubmission(submission: Submission): LearningPlatformSubmission {
  return { ...submission }
}
