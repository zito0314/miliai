import type { RefinePblPlanParams, RefinePblPlanResponse } from '../types/refine'
import { buildTechContext } from '../utils/buildTechContext'
import { normalizePblPlan } from '../utils/normalizePblPlan'

export async function refinePblPlan(params: RefinePblPlanParams): Promise<RefinePblPlanResponse> {
  const body = buildRequestBody(params)
  const response = await fetch('/api/refine-pbl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(data?.error || '피드백 반영 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.')
  }

  return {
    ...data,
    updatedPlan: normalizePblPlan(data.updatedPlan),
  } as RefinePblPlanResponse
}

function buildRequestBody(params: RefinePblPlanParams) {
  if (params.mode === 'full') {
    return {
      mode: params.mode,
      subjectName: params.subjectName,
      currentPlan: params.currentPlan,
      techContext: buildTechContext(params.subjectName, params.techItems),
      feedback: params.feedback,
    }
  }

  if (params.mode === 'section') {
    return {
      mode: params.mode,
      currentPlan: params.currentPlan,
      targetPath: params.targetPath,
      targetType: params.targetType,
      targetData: params.targetData,
      techContext: buildTechContext(params.currentPlan.subjectName, params.techItems),
      feedback: params.feedback,
    }
  }

  return params
}
