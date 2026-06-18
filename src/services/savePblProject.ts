import type { PblPlan } from '../types/pbl'

type SavePblProjectResponse = {
  ok: boolean
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  fileName: string
  filePath: string
  relativePath: string
}

export async function savePblProject(plan: PblPlan): Promise<SavePblProjectResponse> {
  const response = await fetch('/api/save-pbl-project', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      plan,
      difficulty: plan.project.difficulty_label,
    }),
  })

  const data = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(data?.error || 'project-list 폴더에 저장하지 못했어요.')
  }

  return data as SavePblProjectResponse
}
