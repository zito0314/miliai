import type { PassFail, PblPlan } from '../types/pbl'
import { rebuildExcelWorkbook } from './rebuildExcelWorkbook'

export function normalizePblPlan(plan: PblPlan): PblPlan {
  const missionSheets = plan.missionSheets.slice(0, 4).map((sheet, index) => ({
    ...sheet,
    sheetName: `미션지_${index + 1}`,
    evaluationCriteria: sheet.evaluationCriteria.map((criterion) => ({ ...criterion, resultOptions: ['PASS', 'FAIL'] as PassFail[] })),
  }))
  const missionSheetCount = Math.min(4, Math.max(2, missionSheets.length))
  const normalizedMissionSheets = missionSheets.slice(0, missionSheetCount)
  const normalizedPlan = {
    ...plan,
    missionSheetCount,
    missionSheets: normalizedMissionSheets,
    projectOverview: {
      ...plan.projectOverview,
      subMissionList: plan.projectOverview.subMissionList.slice(0, missionSheetCount),
    },
    projectEvaluationSummary: {
      ...plan.projectEvaluationSummary,
      evaluationItems: plan.projectEvaluationSummary.evaluationItems.map((item) => ({ ...item, resultOptions: ['PASS', 'FAIL'] as PassFail[] })),
    },
  }

  return {
    ...normalizedPlan,
    excelWorkbook: rebuildExcelWorkbook(normalizedPlan),
  }
}
