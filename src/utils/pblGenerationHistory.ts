import {
  DEFAULT_GENERATION_MODEL_ID,
  GENERATION_MODEL_OPTIONS,
  type GenerationModelId,
} from '../types/generationModel'
import type { PblGenerationHistoryRecord } from '../types/pblHistory'
import type { PblPlan } from '../types/pbl'
import { normalizePblPlan } from './normalizePblPlan'

const STORAGE_KEY = 'miliai:pbl-generation-history:v1'
const MAX_HISTORY_RECORDS = 200

export function loadPblGenerationHistory(): PblGenerationHistoryRecord[] {
  if (!canUseStorage()) return []

  try {
    const rawRecords = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    if (!Array.isArray(rawRecords)) return []

    return rawRecords
      .map(normalizeHistoryRecord)
      .filter((record): record is PblGenerationHistoryRecord => Boolean(record))
      .sort(sortByUpdatedAtDesc)
      .slice(0, MAX_HISTORY_RECORDS)
  } catch {
    return []
  }
}

export function createPblGenerationHistoryRecord(
  plan: PblPlan,
  generationModel: GenerationModelId,
): PblGenerationHistoryRecord {
  const now = new Date().toISOString()
  return {
    id: createRecordId(),
    subjectName: getPlanSubjectName(plan),
    title: getPlanTitle(plan),
    generationModel,
    generationModelName: getGenerationModelName(generationModel),
    createdAt: now,
    updatedAt: now,
    plan,
  }
}

export function savePblGenerationHistory(records: PblGenerationHistoryRecord[]): PblGenerationHistoryRecord[] {
  const normalizedRecords = dedupeById(records)
    .sort(sortByUpdatedAtDesc)
    .slice(0, MAX_HISTORY_RECORDS)

  if (!canUseStorage()) return normalizedRecords

  for (let nextLength = normalizedRecords.length; nextLength >= 0; nextLength -= 1) {
    const recordsToSave = normalizedRecords.slice(0, nextLength)
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recordsToSave))
      return normalizedRecords
    } catch {
      continue
    }
  }

  return normalizedRecords
}

export function upsertPblGenerationHistoryRecord(
  records: PblGenerationHistoryRecord[],
  nextRecord: PblGenerationHistoryRecord,
): PblGenerationHistoryRecord[] {
  return savePblGenerationHistory([
    {
      ...nextRecord,
      title: getPlanTitle(nextRecord.plan),
      subjectName: getPlanSubjectName(nextRecord.plan),
      generationModelName: getGenerationModelName(nextRecord.generationModel),
    },
    ...records.filter((record) => record.id !== nextRecord.id),
  ])
}

export function updatePblGenerationHistoryRecord(
  records: PblGenerationHistoryRecord[],
  recordId: string,
  plan: PblPlan,
): PblGenerationHistoryRecord[] {
  const now = new Date().toISOString()
  return savePblGenerationHistory(records.map((record) => (
    record.id === recordId
      ? {
          ...record,
          subjectName: getPlanSubjectName(plan),
          title: getPlanTitle(plan),
          updatedAt: now,
          plan,
        }
      : record
  )))
}

export function deletePblGenerationHistoryRecord(
  records: PblGenerationHistoryRecord[],
  recordId: string,
): PblGenerationHistoryRecord[] {
  return savePblGenerationHistory(records.filter((record) => record.id !== recordId))
}

export function clearPblGenerationHistory(): PblGenerationHistoryRecord[] {
  if (canUseStorage()) {
    window.localStorage.removeItem(STORAGE_KEY)
  }
  return []
}

function normalizeHistoryRecord(value: unknown): PblGenerationHistoryRecord | null {
  if (!value || typeof value !== 'object') return null

  const rawRecord = value as Partial<PblGenerationHistoryRecord>
  if (
    typeof rawRecord.id !== 'string'
    || typeof rawRecord.createdAt !== 'string'
    || typeof rawRecord.updatedAt !== 'string'
    || !rawRecord.plan
  ) {
    return null
  }

  try {
    const plan = normalizePblPlan(rawRecord.plan)
    const generationModel = normalizeGenerationModel(rawRecord.generationModel)
    return {
      id: rawRecord.id,
      subjectName: getPlanSubjectName(plan),
      title: getPlanTitle(plan),
      generationModel,
      generationModelName: getGenerationModelName(generationModel),
      createdAt: rawRecord.createdAt,
      updatedAt: rawRecord.updatedAt,
      plan,
    }
  } catch {
    return null
  }
}

function normalizeGenerationModel(value: unknown): GenerationModelId {
  return GENERATION_MODEL_OPTIONS.some((option) => option.id === value)
    ? value as GenerationModelId
    : DEFAULT_GENERATION_MODEL_ID
}

function getGenerationModelName(generationModel: GenerationModelId) {
  return GENERATION_MODEL_OPTIONS.find((option) => option.id === generationModel)?.modelName || generationModel
}

function getPlanTitle(plan: PblPlan) {
  return plan.project.title || 'PBL 과정설계'
}

function getPlanSubjectName(plan: PblPlan) {
  return plan.project.title || 'PBL 과정설계'
}

function sortByUpdatedAtDesc(a: PblGenerationHistoryRecord, b: PblGenerationHistoryRecord) {
  return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
}

function dedupeById(records: PblGenerationHistoryRecord[]) {
  const seenIds = new Set<string>()
  return records.filter((record) => {
    if (seenIds.has(record.id)) return false
    seenIds.add(record.id)
    return true
  })
}

function createRecordId() {
  return globalThis.crypto?.randomUUID?.() || `pbl-${Date.now()}-${Math.random().toString(36).slice(2)}`
}

function canUseStorage() {
  try {
    return typeof window !== 'undefined' && Boolean(window.localStorage)
  } catch {
    return false
  }
}
