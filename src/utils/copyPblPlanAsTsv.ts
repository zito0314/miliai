import type { PblExcelRow } from '../types/pbl'

export const excelRowColumns: Array<{ key: keyof PblExcelRow; label: string }> = [
  { key: 'courseName', label: '과정' },
  { key: 'curriculumName', label: '커리큘럼' },
  { key: 'subjectTitle', label: '과목' },
  { key: 'subjectSummary', label: '과목 요약' },
  { key: 'unitId', label: 'Unit ID' },
  { key: 'unitTitle', label: '단원' },
  { key: 'unitGoal', label: '단원 목표' },
  { key: 'missionId', label: 'Mission ID' },
  { key: 'missionTitle', label: '미션' },
  { key: 'missionGoal', label: '미션 목표' },
  { key: 'taskId', label: 'Task ID' },
  { key: 'taskTitle', label: '문제/Task' },
  { key: 'taskDescription', label: '문제 설명' },
  { key: 'output', label: '산출물' },
  { key: 'requiredTechnologiesText', label: '필요 기술' },
  { key: 'requiredTagsText', label: '태그' },
  { key: 'assessmentCriteriaText', label: '평가 기준' },
  { key: 'firstEvaluation', label: '1차 평가' },
  { key: 'secondEvaluation', label: '2차 평가' },
  { key: 'thirdEvaluation', label: '3차 평가' },
  { key: 'finalResult', label: '최종 결과' },
  { key: 'estimatedTime', label: '예상 시간' },
  { key: 'difficultyLevel', label: '난이도' },
]

export async function copyExcelRowsAsTsv(rows: PblExcelRow[]) {
  const tsv = [
    excelRowColumns.map((column) => column.label).join('\t'),
    ...rows.map((row) => excelRowColumns.map((column) => sanitizeCell(row[column.key])).join('\t')),
  ].join('\n')

  await navigator.clipboard.writeText(tsv)
}

const sanitizeCell = (value: string) => value.replace(/[\t\r\n]+/g, ' ').trim()
