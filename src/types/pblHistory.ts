import type { GenerationModelId } from './generationModel'
import type { PblPlan } from './pbl'

export type PblGenerationHistoryRecord = {
  id: string
  subjectName: string
  title: string
  generationModel: GenerationModelId
  generationModelName: string
  createdAt: string
  updatedAt: string
  plan: PblPlan
}
