import type { PblPlan } from './pbl'
import type { TechItem } from './tech'

export type RefineMode = 'full' | 'section' | 'text'

export type RefineTargetType = 'projectOverview' | 'missionSheet' | 'projectEvaluationSummary' | 'references'

export type RefinePblPlanParams =
  | {
      mode: 'full'
      subjectName: string
      currentPlan: PblPlan
      techItems: TechItem[]
      feedback: string
    }
  | {
      mode: 'section'
      currentPlan: PblPlan
      targetPath: string
      targetType: RefineTargetType
      targetData: unknown
      techItems: TechItem[]
      feedback: string
    }
  | {
      mode: 'text'
      currentPlan: PblPlan
      targetPath: string
      currentText: string
      feedback: string
    }

export type FullRefineResponse = {
  mode: 'full'
  updatedPlan: PblPlan
  changeSummary: string
}

export type SectionRefineResponse = {
  mode: 'section'
  targetPath: string
  updatedSection: unknown
  updatedPlan: PblPlan
  changeSummary: string
}

export type TextRefineResponse = {
  mode: 'text'
  targetPath: string
  previousText: string
  revisedText: string
  updatedPlan: PblPlan
  changeSummary: string
}

export type RefinePblPlanResponse = FullRefineResponse | SectionRefineResponse | TextRefineResponse
