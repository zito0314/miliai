import type { PblPlan } from '../types/pbl'
import type { TechItem } from '../types/tech'
import { buildTechContext } from '../utils/buildTechContext'

export async function generatePblPlan(subjectName: string, techItems: TechItem[]): Promise<PblPlan> {
  const techContext = buildTechContext(subjectName, techItems)
  const response = await fetch('/api/generate-pbl', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ subjectName, techContext }),
  })

  const data = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(data?.error || '콘텐츠 생성 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.')
  }

  return data as PblPlan
}
