import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { PblExcelRow } from '../types/pbl'

const textColumn = (title: string, dataIndex: keyof PblExcelRow, width: number) => ({
  title,
  dataIndex,
  width,
  render: (value: string) => <span className="excel-table-text">{value}</span>,
})

const columns: ColumnsType<PblExcelRow> = [
  textColumn('과정', 'courseName', 180),
  textColumn('커리큘럼', 'curriculumName', 190),
  textColumn('과목', 'subjectTitle', 190),
  textColumn('과목 요약', 'subjectSummary', 280),
  textColumn('Unit ID', 'unitId', 90),
  textColumn('단원', 'unitTitle', 210),
  textColumn('단원 목표', 'unitGoal', 260),
  textColumn('Mission ID', 'missionId', 100),
  textColumn('미션', 'missionTitle', 210),
  textColumn('미션 목표', 'missionGoal', 260),
  textColumn('Task ID', 'taskId', 90),
  textColumn('문제/Task', 'taskTitle', 220),
  textColumn('문제 설명', 'taskDescription', 300),
  textColumn('산출물', 'output', 220),
  {
    title: '필요 기술',
    dataIndex: 'requiredTechnologiesText',
    width: 240,
    render: (value: string) => (
      <div className="table-technology-cell">
        {value.split(',').map((technology) => technology.trim()).filter(Boolean).map((technology) => (
          <Tag key={technology}>{technology}</Tag>
        ))}
      </div>
    ),
  },
  {
    title: '태그',
    dataIndex: 'requiredTagsText',
    width: 240,
    render: (value: string) => (
      <div className="table-tag-cell">
        {value.split(' ').filter(Boolean).map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
    ),
  },
  textColumn('평가 기준', 'assessmentCriteriaText', 300),
  textColumn('1차 평가', 'firstEvaluation', 130),
  textColumn('2차 평가', 'secondEvaluation', 150),
  textColumn('3차 평가', 'thirdEvaluation', 150),
  textColumn('최종 결과', 'finalResult', 120),
  textColumn('예상 시간', 'estimatedTime', 110),
  {
    title: '난이도',
    dataIndex: 'difficultyLevel',
    width: 100,
    render: (value: string) => <Tag color={value === '고급' ? 'red' : value === '중급' ? 'gold' : 'green'}>{value}</Tag>,
  },
]

export function PblPlanTable({ rows }: { rows: PblExcelRow[] }) {
  return (
    <Table<PblExcelRow>
      className="pbl-plan-table"
      columns={columns}
      dataSource={rows}
      rowKey={(row) => `${row.unitId}-${row.missionId}-${row.taskId}`}
      pagination={false}
      scroll={{ x: 4380 }}
      size="small"
    />
  )
}
