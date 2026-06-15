import Papa from 'papaparse'
import { GOOGLE_SHEET_CSV_URL } from '../config/dataSource.js'
import type { TechItem } from '../types/tech'
import { parseTags } from '../utils/parseTags'

type SheetRow = {
  id?: string
  category?: string
  name?: string
  description?: string
  simpleDescription?: string
  useCases?: string
  pblUsage?: string
  tags?: string
  unitExamples?: string
  isActive?: string
}

const requiredFields: Array<keyof SheetRow> = [
  'id',
  'category',
  'name',
  'description',
  'simpleDescription',
  'useCases',
  'pblUsage',
  'tags',
  'unitExamples',
  'isActive',
]

export async function fetchTechItems(): Promise<TechItem[]> {
  const separator = GOOGLE_SHEET_CSV_URL.includes('?') ? '&' : '?'
  const url = `${GOOGLE_SHEET_CSV_URL}${separator}t=${Date.now()}`
  const response = await fetch(url, { cache: 'no-store' })

  if (!response.ok) {
    throw new Error(`Google Sheets CSV 요청 실패: ${response.status}`)
  }

  const csvText = await response.text()
  const parsed = Papa.parse<SheetRow>(csvText, {
    header: true,
    skipEmptyLines: 'greedy',
    transformHeader: (header) => header.trim(),
  })

  if (parsed.errors.length > 0) {
    throw new Error(parsed.errors[0].message)
  }

  const headers = parsed.meta.fields ?? []
  const missingFields = requiredFields.filter((field) => !headers.includes(field))
  if (missingFields.length > 0) {
    throw new Error(`필수 컬럼 누락: ${missingFields.join(', ')}`)
  }

  return parsed.data
    .filter((row) => row.id?.trim() && row.name?.trim())
    .map(toTechItem)
    .filter((item) => item.isActive)
}

function toTechItem(row: SheetRow): TechItem {
  return {
    id: row.id?.trim() ?? '',
    category: row.category?.trim() ?? '',
    name: row.name?.trim() ?? '',
    description: row.description?.trim() ?? '',
    simpleDescription: row.simpleDescription?.trim() ?? '',
    useCases: row.useCases?.trim() ?? '',
    pblUsage: row.pblUsage?.trim() ?? '',
    tags: parseTags(row.tags ?? ''),
    unitExamples: row.unitExamples?.trim() ?? '',
    isActive: (row.isActive ?? '').trim().toUpperCase() === 'TRUE',
  }
}
