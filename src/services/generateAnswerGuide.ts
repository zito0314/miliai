import type { AnswerGuide, PblPlan } from '../types/pbl'
import type { TechItem } from '../types/tech'
import { buildTechContext } from '../utils/buildTechContext'
import { normalizePblPlan } from '../utils/normalizePblPlan'

type GenerateAnswerGuideParams = {
  currentPlan: PblPlan
  techItems?: TechItem[]
  targetMissionIndex?: number
}

type GenerateAnswerGuideResponse = {
  answerGuides: AnswerGuide[]
  updatedPlan: PblPlan
}

export async function generateAnswerGuide({
  currentPlan,
  techItems = [],
  targetMissionIndex,
}: GenerateAnswerGuideParams): Promise<GenerateAnswerGuideResponse> {
  const response = await fetch('/api/generate-answer-guide', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      currentPlan,
      targetMissionIndex,
      techContext: buildTechContext(currentPlan.project.title, techItems),
    }),
  })

  const data = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(data?.error || '예상 답안 생성 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.')
  }

  return {
    answerGuides: data.answerGuides,
    updatedPlan: normalizePblPlan(data.updatedPlan),
  }
}
