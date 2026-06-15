import type { PblPlan } from '../types/pbl'
import { flattenPblPlan } from './flattenPblPlan'

const columns = [
  'courseName',
  'curriculumName',
  'subjectTitle',
  'unitId',
  'unitTitle',
  'missionId',
  'missionTitle',
  'taskId',
  'taskTitle',
  'description',
  'output',
  'assessmentCriteria',
  'requiredTags',
] as const

export async function copyPblPlanAsTsv(plan: PblPlan) {
  const rows = flattenPblPlan(plan)
  const tsv = [
    columns.join('\t'),
    ...rows.map((row) => columns.map((column) => sanitizeCell(row[column])).join('\t')),
  ].join('\n')

  await navigator.clipboard.writeText(tsv)
}

const sanitizeCell = (value: string) => value.replace(/[\t\r\n]+/g, ' ').trim()
