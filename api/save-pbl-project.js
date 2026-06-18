import fs from 'node:fs/promises'
import path from 'node:path'
import os from 'node:os'

const difficultyFolders = {
  beginner: 'beginner',
  intermediate: 'intermediate',
  advanced: 'advanced',
}

const difficultyKeywords = [
  { folder: 'beginner', keywords: ['beginner', '초급', '기초', '입문', '1레벨', '2레벨', '3레벨'] },
  { folder: 'intermediate', keywords: ['intermediate', '중급', '중간', '4레벨', '5레벨', '6레벨'] },
  { folder: 'advanced', keywords: ['advanced', '고급', '심화', '7레벨', '8레벨', '9레벨'] },
]

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ error: 'POST 요청만 사용할 수 있습니다.' })
  }

  try {
    const body = typeof request.body === 'string' ? safeJsonParse(request.body) : request.body
    const result = await savePblProjectPlan(body?.plan, body?.difficulty)
    return response.status(200).json(result)
  } catch (error) {
    console.error('PBL project save failed', error)
    return response.status(400).json({
      error: error instanceof Error ? error.message : 'PBL 콘텐츠를 저장하지 못했습니다.',
    })
  }
}

export async function savePblProjectPlan(plan, requestedDifficulty) {
  if (!plan?.project?.title || !Array.isArray(plan?.missions)) {
    throw new Error('저장할 PBL 콘텐츠 형식이 올바르지 않습니다.')
  }

  const difficulty = normalizeDifficulty(requestedDifficulty || plan.project.difficulty_label)
  const targetDirectory = path.join(getProjectListRoot(), difficultyFolders[difficulty])
  await ensureSafeProjectListDirectory(targetDirectory)

  const fileName = await createAvailableFileName(targetDirectory, plan.project.title)
  const filePath = path.join(targetDirectory, fileName)
  const payload = JSON.stringify(plan, null, 2)
  await fs.writeFile(filePath, `${payload}\n`, 'utf8')

  return {
    ok: true,
    difficulty,
    fileName,
    filePath,
    relativePath: path.join('project-list', difficultyFolders[difficulty], fileName),
  }
}

function getProjectListRoot() {
  return process.env.PBL_PROJECT_LIST_DIR?.trim()
    || path.join(os.homedir(), 'Documents', 'PBL Contents', 'project-list')
}

function normalizeDifficulty(value) {
  const normalizedValue = String(value || '').trim().toLowerCase()
  if (difficultyFolders[normalizedValue]) return normalizedValue

  const matched = difficultyKeywords.find(({ keywords }) => (
    keywords.some((keyword) => normalizedValue.includes(keyword.toLowerCase()))
  ))

  return matched?.folder || 'intermediate'
}

async function ensureSafeProjectListDirectory(targetDirectory) {
  const root = path.resolve(getProjectListRoot())
  const resolvedTarget = path.resolve(targetDirectory)
  if (!resolvedTarget.startsWith(`${root}${path.sep}`)) {
    throw new Error('허용되지 않은 저장 경로입니다.')
  }

  await fs.mkdir(resolvedTarget, { recursive: true })
}

async function createAvailableFileName(targetDirectory, title) {
  const baseName = `pbl-${slugify(title) || 'project'}`
  let fileName = `${baseName}.json`
  let index = 2

  while (await fileExists(path.join(targetDirectory, fileName))) {
    fileName = `${baseName}-${index}.json`
    index += 1
  }

  return fileName
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\p{L}\p{N}-]+/gu, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}
