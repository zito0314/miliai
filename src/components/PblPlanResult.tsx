import { useMemo, useState } from 'react'
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons'
import { Alert, Button, Tabs, Tag, message } from 'antd'
import type { ExcelWorkbookSheet, PblPlan } from '../types/pbl'
import { copyWorkbookAsTsv, copyWorkbookSheetAsTsv } from '../utils/copyPblPlanAsTsv'
import { downloadJson } from '../utils/downloadJson'
import { PblPlanTable } from './PblPlanTable'

export function PblPlanResult({ plan }: { plan: PblPlan }) {
  const [activeSheetName, setActiveSheetName] = useState(plan.excelWorkbook.sheets[0]?.sheetName || '')
  const [messageApi, contextHolder] = message.useMessage()
  const activeSheet = useMemo(
    () => plan.excelWorkbook.sheets.find((sheet) => sheet.sheetName === activeSheetName) || plan.excelWorkbook.sheets[0],
    [activeSheetName, plan.excelWorkbook.sheets],
  )

  const handleCopySheet = async (sheet: ExcelWorkbookSheet | undefined) => {
    if (!sheet) return
    try {
      await copyWorkbookSheetAsTsv(sheet)
      messageApi.success(`${sheet.sheetName} 시트를 엑셀 형태로 복사했어요.`)
    } catch {
      messageApi.error('클립보드에 복사하지 못했어요.')
    }
  }

  const handleCopyWorkbook = async () => {
    try {
      await copyWorkbookAsTsv(plan.excelWorkbook)
      messageApi.success('전체 시트를 엑셀 형태로 복사했어요.')
    } catch {
      messageApi.error('클립보드에 복사하지 못했어요.')
    }
  }

  return (
    <section className="pbl-result" aria-label="생성된 PBL 과정설계">
      {contextHolder}
      <div className="pbl-result-toolbar">
        <div className="pbl-result-heading">
          <span>PBL 템플릿 워크북</span>
          <h2>{plan.projectOverview.projectTitle}</h2>
        </div>
        <div className="pbl-result-actions">
          <Button icon={<CopyOutlined />} onClick={() => void handleCopySheet(activeSheet)}>
            선택 시트 엑셀로 복사
          </Button>
          <Button icon={<CopyOutlined />} onClick={() => void handleCopyWorkbook()}>
            전체 시트 엑셀로 복사
          </Button>
          <Button icon={<DownloadOutlined />} onClick={() => downloadJson(plan)}>
            JSON 다운로드
          </Button>
        </div>
      </div>

      <div className="pbl-summary workbook-summary">
        <div className="pbl-summary-main">
          <span>프로젝트개요</span>
          <dl>
            <div>
              <dt>과정</dt>
              <dd>{plan.courseName}</dd>
            </div>
            <div>
              <dt>커리큘럼</dt>
              <dd>{plan.curriculumName}</dd>
            </div>
            <div>
              <dt>과목명</dt>
              <dd>{plan.subjectName}</dd>
            </div>
            <div>
              <dt>프로젝트 목표</dt>
              <dd>{plan.projectOverview.projectGoal}</dd>
            </div>
            <div>
              <dt>최종 산출물</dt>
              <dd>{plan.projectOverview.finalOutput}</dd>
            </div>
            <div>
              <dt>미션지 구성</dt>
              <dd>{plan.missionSheetCountReason}</dd>
            </div>
          </dl>
        </div>
        <div className="pbl-summary-tags">
          <div className="pbl-project-facts">
            <span>기간 <strong>{plan.projectOverview.totalDuration}</strong></span>
            <span>팀 구성 <strong>{plan.projectOverview.teamComposition}</strong></span>
            <span>난이도 <strong>{plan.projectOverview.difficultyLevelNumber}레벨 / {plan.projectOverview.difficultyLevelLabel}</strong></span>
            <span>미션지 <strong>{plan.missionSheetCount}개</strong></span>
          </div>
          <span>생성된 시트</span>
          <div>
            {plan.excelWorkbook.sheets.map((sheet) => <Tag key={sheet.sheetName}>{sheet.sheetName}</Tag>)}
          </div>
        </div>
      </div>

      <Alert
        className="pbl-draft-alert"
        type="info"
        showIcon
        message="AI가 생성한 기획자용 PBL 템플릿 초안입니다. 실제 교육 목표, 데이터 환경, 보안 기준에 맞게 검토·수정해주세요."
      />

      <Tabs
        className="workbook-tabs"
        activeKey={activeSheet?.sheetName}
        onChange={setActiveSheetName}
        items={plan.excelWorkbook.sheets.map((sheet) => ({
          key: sheet.sheetName,
          label: sheet.sheetName,
          children: <PblPlanTable sheet={sheet} />,
        }))}
      />
    </section>
  )
}
