import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { ExcelWorkbookSheet } from '../types/pbl'

type WorkbookTableRow = {
  key: string
  cells: string[]
}

export function PblPlanTable({ sheet }: { sheet: ExcelWorkbookSheet }) {
  const [headerRow = ['항목', '내용'], ...bodyRows] = sheet.rows
  const columnCount = Math.max(headerRow.length, ...bodyRows.map((row) => row.length), 2)
  const columns: ColumnsType<WorkbookTableRow> = Array.from({ length: columnCount }, (_, index) => ({
    title: headerRow[index] || `컬럼 ${index + 1}`,
    dataIndex: ['cells', index],
    width: index === 0 ? 220 : 520,
    render: (value: string) => <span className="excel-table-text">{value}</span>,
  }))

  const dataSource = bodyRows.map((row, index) => ({
    key: `${sheet.sheetName}-${index}`,
    cells: Array.from({ length: columnCount }, (_, cellIndex) => row[cellIndex] || ''),
  }))

  return (
    <Table<WorkbookTableRow>
      className="pbl-plan-table workbook-table"
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      scroll={{ x: Math.max(columnCount * 420, 820) }}
      size="small"
    />
  )
}
