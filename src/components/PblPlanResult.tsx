import { useMemo, useState } from 'react'
import { CopyOutlined, DownloadOutlined, FileTextOutlined } from '@ant-design/icons'
import { Alert, Button, Tabs, Tag, message } from 'antd'
import type { ExcelWorkbookSheet, PblPlan } from '../types/pbl'
import type { RefineTargetType } from '../types/refine'
import type { TechItem } from '../types/tech'
import { generateAnswerGuide } from '../services/generateAnswerGuide'
import { copyWorkbookAsTsv, copyWorkbookSheetAsTsv } from '../utils/copyPblPlanAsTsv'
import { downloadJson } from '../utils/downloadJson'
import { getByPath } from '../utils/getByPath'
import { AnswerGuidePanel } from './AnswerGuidePanel'
import { InlineTextRefiner } from './InlineTextRefiner'
import { PblFeedbackPanel } from './PblFeedbackPanel'
import { PblPlanTable } from './PblPlanTable'
import { RefineResultNotice } from './RefineResultNotice'
import { SectionRefineButton } from './SectionRefineButton'

type PblPlanResultProps = {
  plan: PblPlan
  subjectName: string
  techItems: TechItem[]
  historyCount: number
  onPlanUpdated: (plan: PblPlan) => void
  onUndo: () => void
}

type SectionTarget = {
  targetPath: string
  targetType: RefineTargetType
  targetData: unknown
  label: string
}

type TextRefineTarget = {
  label: string
  path: string
  text: string
}

export function PblPlanResult({ plan, subjectName, techItems, historyCount, onPlanUpdated, onUndo }: PblPlanResultProps) {
  const [activeSheetName, setActiveSheetName] = useState(plan.excelWorkbook.sheets[0]?.sheetName || '')
  const [lastChangeSummary, setLastChangeSummary] = useState<string | null>(null)
  const [answerGuideError, setAnswerGuideError] = useState<string | null>(null)
  const [answerGuideGeneratingTarget, setAnswerGuideGeneratingTarget] = useState<'all' | number | null>(null)
  const [messageApi, contextHolder] = message.useMessage()
  const activeSheet = useMemo(
    () => plan.excelWorkbook.sheets.find((sheet) => sheet.sheetName === activeSheetName) || plan.excelWorkbook.sheets[0],
    [activeSheetName, plan.excelWorkbook.sheets],
  )
  const activeTabKey = activeSheet?.sheetName || ''

  const handlePlanUpdated = (updatedPlan: PblPlan, changeSummary?: string) => {
    onPlanUpdated(updatedPlan)
    setLastChangeSummary(changeSummary || '수정 요청을 반영해 PBL 계획을 업데이트했습니다.')
    if (changeSummary?.includes('예상 답안이 초기화')) {
      setAnswerGuideError(null)
    }
    messageApi.success('피드백을 반영했어요.')
  }

  const handleGenerateAnswerGuide = async (targetMissionSheetIndex?: number) => {
    const nextTarget = targetMissionSheetIndex === undefined ? 'all' : targetMissionSheetIndex
    setAnswerGuideGeneratingTarget(nextTarget)
    setAnswerGuideError(null)

    try {
      const result = await generateAnswerGuide({
        currentPlan: plan,
        techItems,
        targetMissionSheetIndex,
      })
      onPlanUpdated(result.updatedPlan)
      const successMessage = targetMissionSheetIndex === undefined ? '예상 답안을 생성했어요.' : '이 미션지의 예상 답안을 생성했어요.'
      setLastChangeSummary(successMessage)
      messageApi.success(successMessage)
    } catch {
      setAnswerGuideError('예상 답안 생성 중 오류가 발생했어요.')
    } finally {
      setAnswerGuideGeneratingTarget(null)
    }
  }

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

      <PblFeedbackPanel
        plan={plan}
        subjectName={subjectName}
        techItems={techItems}
        historyCount={historyCount}
        onUpdated={handlePlanUpdated}
        onUndo={() => {
          onUndo()
          setLastChangeSummary('이전 버전으로 되돌렸습니다.')
        }}
      />

      <section className="answer-guide-actions" aria-label="예상 답안 생성">
        <div>
          <span>기획자용 예상 답안</span>
          <h3>예상 답안 생성</h3>
          <p>미션지별 예상 답변, 예시 산출물, 참고 코드, 평가 기준을 생성합니다.</p>
        </div>
        <Button
          type="primary"
          icon={<FileTextOutlined />}
          loading={answerGuideGeneratingTarget === 'all'}
          disabled={answerGuideGeneratingTarget !== null}
          onClick={() => void handleGenerateAnswerGuide()}
        >
          {answerGuideGeneratingTarget === 'all' ? '예상 답안을 생성하는 중이에요.' : '예상 답안 생성'}
        </Button>
      </section>

      {answerGuideError && <Alert className="refine-error-alert" type="error" showIcon message={answerGuideError} />}

      <RefineResultNotice message={lastChangeSummary} />

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

      <AnswerGuidePanel answerGuides={plan.answerGuides} />

      <Tabs
        className="workbook-tabs"
        activeKey={activeTabKey}
        onChange={setActiveSheetName}
        items={plan.excelWorkbook.sheets.map((sheet) => ({
          key: sheet.sheetName,
          label: sheet.sheetName,
          children: (
            <WorkbookSheetPane
              plan={plan}
              sheet={sheet}
              techItems={techItems}
              answerGuideGeneratingTarget={answerGuideGeneratingTarget}
              onPlanUpdated={handlePlanUpdated}
              onGenerateAnswerGuide={handleGenerateAnswerGuide}
            />
          ),
        }))}
      />
    </section>
  )
}

function WorkbookSheetPane({
  plan,
  sheet,
  techItems,
  answerGuideGeneratingTarget,
  onPlanUpdated,
  onGenerateAnswerGuide,
}: {
  plan: PblPlan
  sheet: ExcelWorkbookSheet
  techItems: TechItem[]
  answerGuideGeneratingTarget: 'all' | number | null
  onPlanUpdated: (plan: PblPlan, changeSummary?: string) => void
  onGenerateAnswerGuide: (targetMissionSheetIndex?: number) => Promise<void>
}) {
  const sectionTarget = getSectionTarget(plan, sheet.sheetName)
  const textTargets = getTextRefineTargets(plan, sheet.sheetName)
  const missionIndex = getMissionIndex(sheet.sheetName)

  return (
    <div className="workbook-sheet-pane">
      {sectionTarget && (
        <div className="workbook-section-toolbar">
          <div>
            <span>섹션 수정</span>
            <strong>{sectionTarget.label}</strong>
          </div>
          <SectionRefineButton
            currentPlan={plan}
            targetPath={sectionTarget.targetPath}
            targetType={sectionTarget.targetType}
            targetData={sectionTarget.targetData}
            techItems={techItems}
            onUpdated={onPlanUpdated}
          />
          {missionIndex !== null && (
            <Button
              size="small"
              icon={<FileTextOutlined />}
              loading={answerGuideGeneratingTarget === missionIndex}
              disabled={answerGuideGeneratingTarget !== null}
              onClick={() => void onGenerateAnswerGuide(missionIndex)}
            >
              이 미션지 예상 답안 생성
            </Button>
          )}
        </div>
      )}

      {textTargets.length > 0 && (
        <div className="inline-refine-list">
          <div className="inline-refine-list-heading">
            <span>텍스트 블록 수정</span>
            <p>자주 다듬는 문장만 골라 빠르게 수정할 수 있어요.</p>
          </div>
          {textTargets.map((target) => (
            <div className="inline-refine-item" key={target.path}>
              <div>
                <span>{target.label}</span>
                <p>{target.text}</p>
              </div>
              <InlineTextRefiner
                currentPlan={plan}
                targetPath={target.path}
                currentText={target.text}
                onUpdated={onPlanUpdated}
              />
            </div>
          ))}
        </div>
      )}

      <PblPlanTable sheet={sheet} />
    </div>
  )
}

function getSectionTarget(plan: PblPlan, sheetName: string): SectionTarget | null {
  if (sheetName === '프로젝트개요') {
    return {
      targetPath: 'projectOverview',
      targetType: 'projectOverview',
      targetData: plan.projectOverview,
      label: '프로젝트개요',
    }
  }

  const missionIndex = getMissionIndex(sheetName)
  if (missionIndex !== null && plan.missionSheets[missionIndex]) {
    return {
      targetPath: `missionSheets[${missionIndex}]`,
      targetType: 'missionSheet',
      targetData: plan.missionSheets[missionIndex],
      label: plan.missionSheets[missionIndex].missionStageName,
    }
  }

  if (sheetName === '전체 프로젝트 평가 종합') {
    return {
      targetPath: 'projectEvaluationSummary',
      targetType: 'projectEvaluationSummary',
      targetData: plan.projectEvaluationSummary,
      label: '전체 프로젝트 평가 종합',
    }
  }

  if (sheetName === '참고자료') {
    return {
      targetPath: 'references',
      targetType: 'references',
      targetData: plan.references,
      label: '참고자료',
    }
  }

  return null
}

function getTextRefineTargets(plan: PblPlan, sheetName: string): TextRefineTarget[] {
  if (sheetName === '프로젝트개요') {
    return [
      buildTextTarget(plan, '프로젝트 목표', 'projectOverview.projectGoal'),
      buildTextTarget(plan, '최종 산출물', 'projectOverview.finalOutput'),
      buildTextTarget(plan, '제약조건', 'projectOverview.constraints'),
    ].filter(Boolean) as TextRefineTarget[]
  }

  const missionIndex = getMissionIndex(sheetName)
  if (missionIndex !== null && plan.missionSheets[missionIndex]) {
    return [
      buildTextTarget(plan, '차시 개요', `missionSheets[${missionIndex}].overview`),
      buildTextTarget(plan, '문제 상황', `missionSheets[${missionIndex}].pblProblem.problemSituation`),
      buildTextTarget(plan, '미션 문장', `missionSheets[${missionIndex}].missionStatement`),
    ].filter(Boolean) as TextRefineTarget[]
  }

  return []
}

function buildTextTarget(plan: PblPlan, label: string, path: string): TextRefineTarget | null {
  const text = getByPath(plan, path)
  return typeof text === 'string' && text.trim() ? { label, path, text } : null
}

function getMissionIndex(sheetName: string) {
  const match = /^미션지_(\d+)$/.exec(sheetName)
  if (!match) return null
  return Number(match[1]) - 1
}
