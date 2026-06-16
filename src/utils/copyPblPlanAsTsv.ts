import type { ExcelWorkbook, ExcelWorkbookSheet } from '../types/pbl'

export async function copyWorkbookSheetAsTsv(sheet: ExcelWorkbookSheet) {
  await navigator.clipboard.writeText(sheetToTsv(sheet))
}

export async function copyWorkbookAsTsv(workbook: ExcelWorkbook) {
  const tsv = workbook.sheets
    .map((sheet) => [`[${sheet.sheetName}]`, sheetToTsv(sheet)].join('\n'))
    .join('\n\n')

  await navigator.clipboard.writeText(tsv)
}

function sheetToTsv(sheet: ExcelWorkbookSheet) {
  return sheet.rows
    .map((row) => row.map(sanitizeCell).join('\t'))
    .join('\n')
}

const sanitizeCell = (value: string) => value.replace(/[\t\r\n]+/g, ' ').trim()
