import { Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import type { PblPlan, PblPlanRow } from '../types/pbl'
import { flattenPblPlan } from '../utils/flattenPblPlan'

const columns: ColumnsType<PblPlanRow> = [
  { title: '과정', dataIndex: 'courseName', width: 180 },
  { title: '커리큘럼', dataIndex: 'curriculumName', width: 180 },
  { title: '과목(Subject)', dataIndex: 'subjectTitle', width: 190 },
  {
    title: '단원(Unit)',
    width: 220,
    render: (_, row) => `${row.unitId}. ${row.unitTitle}`,
  },
  {
    title: '미션(Mission)',
    width: 220,
    render: (_, row) => `${row.missionId}. ${row.missionTitle}`,
  },
  {
    title: '문제(Problem/Task)',
    width: 300,
    render: (_, row) => (
      <div className="table-task-cell">
        <strong>{row.taskId}. {row.taskTitle}</strong>
        <span>{row.description}</span>
        <small>산출물: {row.output}</small>
      </div>
    ),
  },
  {
    title: '태그',
    dataIndex: 'requiredTags',
    width: 220,
    render: (tags: string) => (
      <div className="table-tag-cell">
        {tags.split(' ').filter(Boolean).map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </div>
    ),
  },
]

export function PblPlanTable({ plan }: { plan: PblPlan }) {
  return (
    <Table<PblPlanRow>
      className="pbl-plan-table"
      columns={columns}
      dataSource={flattenPblPlan(plan)}
      pagination={false}
      scroll={{ x: 1510 }}
      size="small"
    />
  )
}
