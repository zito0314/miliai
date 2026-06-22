import { useMemo, useState } from 'react'
import { CopyOutlined, DownloadOutlined, FileTextOutlined } from '@ant-design/icons'
import { Alert, Button, Dropdown, Tabs, Tag, message } from 'antd'
import type { ExcelWorkbookSheet, Mission, PblDifficulty, PblPlan, Step, ValidationChecklistItem } from '../types/pbl'
import type { RefineTargetType } from '../types/refine'
import type { TechItem } from '../types/tech'
import { formatPblDifficultyLabel, normalizePblDifficulty } from '../constants/pblDifficulty'
import { generateAnswerGuide } from '../services/generateAnswerGuide'
import { copyWorkbookAsTsv, copyWorkbookSheetAsTsv } from '../utils/copyPblPlanAsTsv'
import { downloadJson } from '../utils/downloadJson'
import { getByPath } from '../utils/getByPath'
import { AnswerGuidePanel } from './AnswerGuidePanel'
import { InlineTextRefiner } from './InlineTextRefiner'
import { PblFeedbackPanel } from './PblFeedbackPanel'
import { PblPlanTable } from './PblPlanTable'
import { PblPreviewPanel } from './PblPreviewPanel'
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

  const handleGenerateAnswerGuide = async (targetMissionIndex?: number) => {
    const nextTarget = targetMissionIndex === undefined ? 'all' : targetMissionIndex
    setAnswerGuideGeneratingTarget(nextTarget)
    setAnswerGuideError(null)

    try {
      const result = await generateAnswerGuide({
        currentPlan: plan,
        techItems,
        targetMissionIndex,
      })
      onPlanUpdated(result.updatedPlan)
      const successMessage = targetMissionIndex === undefined ? '예상 답안을 생성했어요.' : '이 미션의 예상 답안을 생성했어요.'
      setLastChangeSummary(successMessage)
      messageApi.success(successMessage)
    } catch (error) {
      setAnswerGuideError(
        error instanceof Error
          ? error.message
          : '예상 답안 생성 중 오류가 발생했어요.',
      )
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
    <section className="pbl-result" aria-label="생성된 PBL 콘텐츠">
      {contextHolder}
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

      <RefineResultNotice message={lastChangeSummary} />

      <div className="pbl-result-toolbar">
        <div className="pbl-result-heading">
          <span>생성된 PBL 콘텐츠</span>
          <h2>{plan.project.title}</h2>
        </div>
        <ExportActionsDropdown
          activeSheet={activeSheet}
          onCopySheet={handleCopySheet}
          onCopyWorkbook={handleCopyWorkbook}
          onDownloadJson={() => downloadJson(plan)}
        />
      </div>

      <Tabs
        className="result-view-tabs"
        defaultActiveKey="user-summary"
        items={[
          {
            key: 'user-summary',
            label: '프로젝트 요약',
            children: <UserSummaryTab plan={plan} subjectName={subjectName} />,
          },
          {
            key: 'mission-detail',
            label: '미션 설계',
            children: <MissionDetailTab plan={plan} />,
          },
          {
            key: 'planner-review',
            label: '기획 검토',
            children: (
              <PlannerReviewTab
                plan={plan}
                techItems={techItems}
                answerGuideGeneratingTarget={answerGuideGeneratingTarget}
                onPlanUpdated={handlePlanUpdated}
                onGenerateAnswerGuide={handleGenerateAnswerGuide}
              />
            ),
          },
          {
            key: 'excel-json-data',
            label: '내보내기 데이터',
            children: (
              <ExcelJsonDataTab
                plan={plan}
                techItems={techItems}
                activeSheetName={activeTabKey}
                onSheetChange={setActiveSheetName}
                answerGuideGeneratingTarget={answerGuideGeneratingTarget}
                onPlanUpdated={handlePlanUpdated}
                onGenerateAnswerGuide={handleGenerateAnswerGuide}
                onCopySheet={handleCopySheet}
                onCopyWorkbook={handleCopyWorkbook}
                onDownloadJson={() => downloadJson(plan)}
              />
            ),
          },
          {
            key: 'answer-guide',
            label: '예상 답안',
            children: (
              <AnswerGuideTab
                plan={plan}
                answerGuideError={answerGuideError}
                answerGuideGeneratingTarget={answerGuideGeneratingTarget}
                onGenerateAnswerGuide={handleGenerateAnswerGuide}
              />
            ),
          },
        ]}
      />
    </section>
  )
}

function ExportActionsDropdown({
  activeSheet,
  onCopySheet,
  onCopyWorkbook,
  onDownloadJson,
}: {
  activeSheet?: ExcelWorkbookSheet
  onCopySheet: (sheet: ExcelWorkbookSheet | undefined) => Promise<void>
  onCopyWorkbook: () => Promise<void>
  onDownloadJson: () => void
}) {
  return (
    <Dropdown
      trigger={['click']}
      menu={{
        items: [
          {
            key: 'json',
            icon: <DownloadOutlined />,
            label: 'JSON 다운로드',
            onClick: onDownloadJson,
          },
          {
            key: 'copy-workbook',
            icon: <CopyOutlined />,
            label: '전체 시트 TSV 복사',
            onClick: () => void onCopyWorkbook(),
          },
          {
            key: 'copy-sheet',
            icon: <CopyOutlined />,
            label: `선택 시트 TSV 복사${activeSheet ? ` (${activeSheet.sheetName})` : ''}`,
            onClick: () => void onCopySheet(activeSheet),
          },
        ],
      }}
    >
      <Button className="pbl-export-menu-button" icon={<DownloadOutlined />}>내보내기</Button>
    </Dropdown>
  )
}

function UserSummaryTab({ plan, subjectName }: { plan: PblPlan; subjectName: string }) {
  const stepCounts = getPlanStepCounts(plan)
  const difficulty = getProjectDifficulty(plan)

  return (
    <div className="user-summary-pane">
      <div className="pbl-summary workbook-summary">
        <div className="pbl-summary-main">
          <span>프로젝트 개요</span>
          <dl>
            <div>
              <dt>PBL 제목</dt>
              <dd>{plan.project.title}</dd>
            </div>
            <div>
              <dt>PBL 설명</dt>
              <dd>{plan.project.short_description}</dd>
            </div>
            <div>
              <dt>과목명</dt>
              <dd>{subjectName}</dd>
            </div>
            <div>
              <dt>PBL 목표</dt>
              <dd>{plan.project.project_goal}</dd>
            </div>
            <div>
              <dt>최종 산출물</dt>
              <dd>{plan.project.final_outputs}</dd>
            </div>
          </dl>
        </div>
        <div className="pbl-summary-tags">
          <div className="pbl-project-fact-grid">
            <SummaryFactCard label="난이도" value={formatPblDifficultyLabel(difficulty)} helper={difficulty.description} />
            <SummaryFactCard label="예상 기간" value={plan.project.duration_label} />
            <SummaryFactCard label="총 미션 수" value={`${plan.missions.length}개`} />
            <SummaryFactCard label="모바일 수행 단계" value={`${stepCounts.mobile}개`} />
            <SummaryFactCard label="PC 수행 단계" value={`${stepCounts.pc}개`} />
          </div>
          <span>미션 목록 요약</span>
          <div>
            {plan.missions.map((mission) => (
              <Tag key={mission.mission_id}>{mission.mission_order}. {mission.title}</Tag>
            ))}
          </div>
        </div>
      </div>

      <Alert
        className="pbl-draft-alert"
        type="info"
        showIcon
        message="AI가 생성한 PBL 콘텐츠 초안입니다. 학생 노출 문구와 수행 흐름을 먼저 검토한 뒤, 내부 메모는 기획자 검토 탭에서 확인해주세요."
      />

      <details className="pbl-collapsible-preview">
        <summary>모바일/PC 학습 화면 미리보기</summary>
        <PblPreviewPanel plan={plan} />
      </details>
    </div>
  )
}

function SummaryFactCard({ label, value, helper }: { label: string; value: string; helper?: string }) {
  return (
    <div className="pbl-project-fact-card">
      <span>{label}</span>
      <strong>{value}</strong>
      {helper && <small>{helper}</small>}
    </div>
  )
}

function MissionDetailTab({ plan }: { plan: PblPlan }) {
  return (
    <div className="mission-detail-pane">
      {plan.missions.map((mission) => (
        <article className="mission-detail-card" key={mission.mission_id}>
          <header>
            <span>미션 {mission.mission_order}</span>
            <h3>{mission.title}</h3>
            <p>{mission.mission_overview}</p>
          </header>

          <dl className="mission-public-grid">
            <div>
              <dt>학습 목표</dt>
              <dd>{mission.learning_goal}</dd>
            </div>
            <div>
              <dt>권장 학습 시간</dt>
              <dd>{mission.estimated_time}</dd>
            </div>
            <div>
              <dt>제약 조건</dt>
              <dd>{mission.constraints}</dd>
            </div>
            <div>
              <dt>제출물</dt>
              <dd>{mission.student_outputs}</dd>
            </div>
          </dl>

          <section className="mission-steps-summary" aria-label={`${mission.title} Step 목록`}>
            <div className="mission-section-heading">
              <span>Step 목록</span>
            </div>
            <div className="mission-step-card-list">
              {mission.steps.map((step) => {
                const datasetHints = getStepDatasetHints(step)
                return (
                  <article className="mission-step-summary-card" key={step.step_id}>
                    <span>Step {step.step_order}</span>
                    <strong>{step.title}</strong>
                    <div className="mission-step-card-tags">
                      <Tag>{step.block_type}</Tag>
                      <Tag>{step.device_target || step.required_device}</Tag>
                      {step.learning_role && <Tag>{step.learning_role}</Tag>}
                    </div>
                    {datasetHints.length > 0 && (
                      <p>활용 가능 데이터셋: {datasetHints.join(', ')}</p>
                    )}
                  </article>
                )
              })}
            </div>
          </section>

          <AiUsageGuideBlock mission={mission} />
          <MissionSubmissionBlock mission={mission} />
          <MissionReferenceBlock mission={mission} />

          <details className="planner-hidden-details">
            <summary>Step 상세 정보와 내부 검토 항목 보기</summary>
            <div className="planner-hidden-list">
              {mission.steps.map((step) => (
                <article key={step.step_id}>
                  <div>
                    <span>{step.block_type}</span>
                    <strong>{step.title}</strong>
                  </div>
                  <dl className="json-detail-grid">
                    <div>
                      <dt>학생 안내</dt>
                      <dd>{step.learner_text || step.body || '내용 없음'}</dd>
                    </div>
                    <div>
                      <dt>수행 방식</dt>
                      <dd>{step.learner_action}</dd>
                    </div>
                    <div>
                      <dt>완료 규칙</dt>
                      <dd>{step.completion_rule}</dd>
                    </div>
                    <div>
                      <dt>예상 답안/기대 기준</dt>
                      <dd>{step.expected_answer_text || '별도 기준 없음'}</dd>
                    </div>
                    <div>
                      <dt>기획자 메모</dt>
                      <dd>{step.planner_note}</dd>
                    </div>
                    <div>
                      <dt>개발 메모</dt>
                      <dd>{step.developer_note}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </details>
        </article>
      ))}
    </div>
  )
}

function PlannerReviewTab({
  plan,
  techItems,
  answerGuideGeneratingTarget,
  onPlanUpdated,
  onGenerateAnswerGuide,
}: {
  plan: PblPlan
  techItems: TechItem[]
  answerGuideGeneratingTarget: 'all' | number | null
  onPlanUpdated: (plan: PblPlan, changeSummary?: string) => void
  onGenerateAnswerGuide: (targetMissionIndex?: number) => Promise<void>
}) {
  const difficulty = getProjectDifficulty(plan)
  const reviewSummary = summarizeValidationChecklist(plan.validation_checklist)

  return (
    <div className="planner-review-pane">
      <section className="planner-review-summary">
        <div>
          <span>검토 요약</span>
          <strong>오류 {reviewSummary.error}개 · 경고 {reviewSummary.warning}개 · 검토 필요 {reviewSummary.reviewNeeded}개</strong>
        </div>
        <div className="planner-review-summary-badges">
          <Tag color="error">오류 {reviewSummary.error}</Tag>
          <Tag color="warning">경고 {reviewSummary.warning}</Tag>
          <Tag>검토 필요 {reviewSummary.reviewNeeded}</Tag>
          <Tag color="success">정상 {reviewSummary.pass}</Tag>
        </div>
      </section>

      <article className="planner-review-card">
        <div className="mission-section-heading">
          <span>프로젝트 기획 메모</span>
        </div>
        <dl className="json-detail-grid">
          <div>
            <dt>선택 PBL 난이도</dt>
            <dd>{formatPblDifficultyLabel(difficulty)} · {difficulty.description} · 평가 범위: {difficulty.evaluationScope}</dd>
          </div>
          <div>
            <dt>최종 성적 산출 방식</dt>
            <dd>{summarizeFinalEvaluation(plan)}</dd>
          </div>
          <div>
            <dt>프로젝트 난이도 설정 이유</dt>
            <dd>{plan.project.planner_note}</dd>
          </div>
          <div>
            <dt>모바일/PC 분리 기준</dt>
            <dd>{plan.project.pc_alternative}</dd>
          </div>
          <div>
            <dt>개발 구현 메모</dt>
            <dd>{plan.project.developer_note}</dd>
          </div>
        </dl>
      </article>

      <ValidationChecklistList plan={plan} techItems={techItems} onPlanUpdated={onPlanUpdated} />
      <MissionDetailList
        plan={plan}
        techItems={techItems}
        answerGuideGeneratingTarget={answerGuideGeneratingTarget}
        onPlanUpdated={onPlanUpdated}
        onGenerateAnswerGuide={onGenerateAnswerGuide}
      />
    </div>
  )
}

function ExcelJsonDataTab({
  plan,
  techItems,
  activeSheetName,
  onSheetChange,
  answerGuideGeneratingTarget,
  onPlanUpdated,
  onGenerateAnswerGuide,
  onCopySheet,
  onCopyWorkbook,
  onDownloadJson,
}: {
  plan: PblPlan
  techItems: TechItem[]
  activeSheetName: string
  onSheetChange: (sheetName: string) => void
  answerGuideGeneratingTarget: 'all' | number | null
  onPlanUpdated: (plan: PblPlan, changeSummary?: string) => void
  onGenerateAnswerGuide: (targetMissionIndex?: number) => Promise<void>
  onCopySheet: (sheet: ExcelWorkbookSheet | undefined) => Promise<void>
  onCopyWorkbook: () => Promise<void>
  onDownloadJson: () => void
}) {
  const activeSheet = plan.excelWorkbook.sheets.find((sheet) => sheet.sheetName === activeSheetName) || plan.excelWorkbook.sheets[0]

  return (
    <div className="export-data-pane">
      <section className="export-action-panel">
        <div>
          <span>내보내기</span>
          <h3>플랫폼 입력용 데이터 내보내기</h3>
          <p>검토가 끝난 PBL 콘텐츠를 JSON 또는 TSV 형태로 복사합니다.</p>
        </div>
        <div className="export-action-buttons">
          <Button icon={<DownloadOutlined />} onClick={onDownloadJson}>JSON 다운로드</Button>
          <Button icon={<CopyOutlined />} onClick={() => void onCopyWorkbook()}>전체 시트 TSV 복사</Button>
          <Button icon={<CopyOutlined />} onClick={() => void onCopySheet(activeSheet)}>선택 시트 TSV 복사</Button>
        </div>
      </section>

      <details className="advanced-data-view">
        <summary>고급 데이터 보기</summary>
        <Tabs
          className="workbook-tabs"
          defaultActiveKey="excel-workbook"
          items={[
            {
              key: 'excel-workbook',
              label: 'Workbook 시트',
              children: (
                <Tabs
                  className="workbook-tabs"
                  activeKey={activeSheetName}
                  onChange={onSheetChange}
                  items={plan.excelWorkbook.sheets.map((sheet) => ({
                    key: sheet.sheetName,
                    label: getWorkbookTabLabel(sheet.sheetName),
                    children: (
                      <WorkbookSheetPane
                        plan={plan}
                        sheet={sheet}
                        techItems={techItems}
                        answerGuideGeneratingTarget={answerGuideGeneratingTarget}
                        onPlanUpdated={onPlanUpdated}
                        onGenerateAnswerGuide={onGenerateAnswerGuide}
                      />
                    ),
                  }))}
                />
              ),
            },
            {
              key: 'json-preview',
              label: 'JSON 미리보기',
              children: <JsonPreviewPane plan={plan} />,
            },
          ]}
        />
      </details>
    </div>
  )
}

function AnswerGuideTab({
  plan,
  answerGuideError,
  answerGuideGeneratingTarget,
  onGenerateAnswerGuide,
}: {
  plan: PblPlan
  answerGuideError: string | null
  answerGuideGeneratingTarget: 'all' | number | null
  onGenerateAnswerGuide: (targetMissionIndex?: number) => Promise<void>
}) {
  return (
    <div className="answer-guide-tab">
      <section className="answer-guide-actions" aria-label="예상 답안 생성">
        <div>
          <span>기획자용 예상 답안</span>
          <h3>예상 답안 생성</h3>
          <p>스텝의 기대 기준, 선택지 정답, 제출 PASS 기준을 바탕으로 기획자용 답안 가이드를 생성합니다.</p>
        </div>
        <Button
          type="primary"
          icon={<FileTextOutlined />}
          loading={answerGuideGeneratingTarget === 'all'}
          disabled={answerGuideGeneratingTarget !== null}
          onClick={() => void onGenerateAnswerGuide()}
        >
          {answerGuideGeneratingTarget === 'all' ? '예상 답안을 생성하는 중이에요.' : '예상 답안 생성'}
        </Button>
      </section>

      {answerGuideError && <Alert className="refine-error-alert" type="error" showIcon message={answerGuideError} />}
      <AnswerGuidePanel answerGuides={plan.answerGuides} />
    </div>
  )
}

function AiUsageGuideBlock({ mission }: { mission: Mission }) {
  const guide = getAiUsageGuide(mission)

  return (
    <section className="mission-ai-guide" aria-label={`${mission.title} 생성형 AI 활용 가이드`}>
      <div className="mission-section-heading">
        <span>생성형 AI 활용 가이드</span>
      </div>
      <details>
        <summary>허용되는 활용</summary>
        <BulletList items={guide.allowed} />
      </details>
      <details>
        <summary>금지되는 활용</summary>
        <BulletList items={guide.prohibited} />
      </details>
      <details>
        <summary>AI 활용 시 반드시 지켜야 할 원칙</summary>
        <BulletList items={guide.principles} />
      </details>
    </section>
  )
}

function MissionSubmissionBlock({ mission }: { mission: Mission }) {
  return (
    <section className="mission-submission-summary" aria-label={`${mission.title} 제출물과 평가 기준`}>
      <div className="mission-section-heading">
        <span>제출물 및 평가 기준</span>
      </div>
      <dl className="mission-public-grid">
        <div>
          <dt>제출물</dt>
          <dd>{mission.submission.submission_title}</dd>
        </div>
        <div>
          <dt>제출 안내</dt>
          <dd>{mission.submission.student_instruction}</dd>
        </div>
        <div>
          <dt>제출물 평가 기준</dt>
          <dd>{mission.submission.evaluation_text}</dd>
        </div>
        <div>
          <dt>PASS 기준</dt>
          <dd>{mission.submission.pass_criteria}</dd>
        </div>
      </dl>
    </section>
  )
}

function MissionReferenceBlock({ mission }: { mission: Mission }) {
  const references = [
    mission.prerequisites && `선수 지식: ${mission.prerequisites}`,
    mission.tech_stack && `활용 기술: ${mission.tech_stack}`,
  ].filter(Boolean) as string[]

  if (references.length === 0) return null

  return (
    <section className="mission-reference-summary" aria-label={`${mission.title} 참고 자료`}>
      <div className="mission-section-heading">
        <span>참고 자료</span>
      </div>
      <BulletList items={references} />
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
    </ul>
  )
}

function getPlanStepCounts(plan: PblPlan) {
  return plan.missions.reduce(
    (counts, mission) => {
      const missionCounts = mission.steps.reduce(
        (stepCounts, step) => {
          const visibility = getStepDeviceVisibility(step)
          return {
            mobile: stepCounts.mobile + (visibility.mobile ? 1 : 0),
            pc: stepCounts.pc + (visibility.pc ? 1 : 0),
          }
        },
        { mobile: 0, pc: 0 },
      )

      return {
        mobile: counts.mobile + missionCounts.mobile,
        pc: counts.pc + missionCounts.pc,
      }
    },
    { mobile: 0, pc: 0 },
  )
}

function getStepDeviceVisibility(step: Step) {
  const target = step.device_target || step.required_device || step.device || 'mobile'
  return {
    mobile: step.mobile_visible !== false && target !== 'pc',
    pc: step.pc_visible !== false && target !== 'mobile',
  }
}

function getProjectDifficulty(plan: PblPlan): PblDifficulty {
  return normalizePblDifficulty({
    ...(plan.project.difficulty || {}),
    level: plan.project.difficulty?.level ?? plan.project.difficulty_level,
    label: plan.project.difficulty?.label || plan.project.difficulty_label,
  })
}

function getAiUsageGuide(mission: Mission) {
  return {
    allowed: toList(mission.ai_usage_guide?.allowed, [
      '데이터셋 탐색 지원',
      '오류 원인 분석',
      '코드 구조 개선 조언',
      '평가 지표 개념 설명',
      '발표 자료 구성 조언',
    ]),
    prohibited: toList(mission.ai_usage_guide?.prohibited, [
      '보고서 전체 작성 요청',
      '전체 코드 작성 요청',
      '테스트 결과 조작',
      '평가 기준에 맞춰 결과를 그럴듯하게 꾸미는 요청',
      '팀원 기여도 또는 회고록 대리 작성',
    ]),
    principles: toList(mission.ai_usage_guide?.principles, [
      'AI 답변은 반드시 검증한다.',
      '최종 산출물은 학습자가 직접 수정·작성한다.',
      'AI 활용 내역을 보고서에 명시한다.',
      '코드와 결과를 팀원이 설명할 수 있어야 한다.',
    ]),
  }
}

function toList(value: unknown, fallback: string[]) {
  return Array.isArray(value) && value.length
    ? value.map((item) => String(item).trim()).filter(Boolean)
    : fallback
}

function getStepDatasetHints(step: Step) {
  const source = [
    step.learner_text,
    step.body,
    step.question,
    step.mobile_summary,
    step.pc_detail,
    step.expected_output,
  ]
    .filter(Boolean)
    .join('\n')

  return source
    .split(/\n|,|;/)
    .map((item) => item.trim())
    .filter((item) => /데이터셋|공개 데이터|가상 데이터|샘플 데이터|Kaggle|UCI|CCTV|센서/.test(item))
    .slice(0, 4)
}

function summarizeFinalEvaluation(plan: PblPlan) {
  const submissionCriteria = plan.missions
    .map((mission) => `${mission.title}: ${mission.submission.pass_criteria}`)
    .join('\n')
  return [
    'PASS: 핵심 평가 항목을 모두 충족',
    '조건부 PASS: 핵심 항목은 충족했으나 일부 보완 필요',
    'FAIL: 핵심 항목 중 하나 이상 미충족',
    submissionCriteria,
  ].filter(Boolean).join('\n')
}

function JsonPreviewPane({ plan }: { plan: PblPlan }) {
  return (
    <section className="json-preview-pane" aria-label="JSON 미리보기">
      <div>
        <span>원본 JSON</span>
        <p>현재 생성 결과를 그대로 확인합니다. 미리보기 변환은 화면 안에서만 적용됩니다.</p>
      </div>
      <pre>{JSON.stringify(plan, null, 2)}</pre>
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
  onGenerateAnswerGuide: (targetMissionIndex?: number) => Promise<void>
}) {
  const sectionTarget = getSectionTarget(plan, sheet.sheetName)
  const textTargets = getTextRefineTargets(plan, sheet.sheetName)

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
        </div>
      )}

      {textTargets.length > 0 && (
        <InlineRefineList
          plan={plan}
          targets={textTargets}
          onPlanUpdated={onPlanUpdated}
        />
      )}

      {sheet.sheetName === '02_missions' && (
        <MissionDetailList
          plan={plan}
          techItems={techItems}
          answerGuideGeneratingTarget={answerGuideGeneratingTarget}
          onPlanUpdated={onPlanUpdated}
          onGenerateAnswerGuide={onGenerateAnswerGuide}
        />
      )}

      {sheet.sheetName === '08_validation_checklist' && (
        <ValidationChecklistList
          plan={plan}
          techItems={techItems}
          onPlanUpdated={onPlanUpdated}
        />
      )}

      <PblPlanTable sheet={sheet} />
    </div>
  )
}

function MissionDetailList({
  plan,
  techItems,
  answerGuideGeneratingTarget,
  onPlanUpdated,
  onGenerateAnswerGuide,
}: {
  plan: PblPlan
  techItems: TechItem[]
  answerGuideGeneratingTarget: 'all' | number | null
  onPlanUpdated: (plan: PblPlan, changeSummary?: string) => void
  onGenerateAnswerGuide: (targetMissionIndex?: number) => Promise<void>
}) {
  return (
    <div className="json-mission-list">
      {plan.missions.map((mission, missionIndex) => (
        <article className="json-mission-card" key={mission.mission_id}>
          <div className="json-mission-card-heading">
            <div>
              <span>{mission.mission_id}</span>
              <h3>{mission.title}</h3>
              <p>{mission.mission_overview}</p>
            </div>
            <div className="json-card-actions">
              <SectionRefineButton
                currentPlan={plan}
                targetPath={`missions[${missionIndex}]`}
                targetType="mission"
                targetData={mission}
                techItems={techItems}
                onUpdated={onPlanUpdated}
              />
              <Button
                size="small"
                icon={<FileTextOutlined />}
                loading={answerGuideGeneratingTarget === missionIndex}
                disabled={answerGuideGeneratingTarget !== null}
                onClick={() => void onGenerateAnswerGuide(missionIndex)}
              >
                이 미션 예상 답안 생성
              </Button>
            </div>
          </div>

          <dl className="json-detail-grid">
            <div>
              <dt>핵심 학습 행동</dt>
              <dd>{mission.core_learning_action}</dd>
            </div>
            <div>
              <dt>학생 산출물</dt>
              <dd>{mission.student_outputs}</dd>
            </div>
            <div>
              <dt>학습 목표</dt>
              <dd>{mission.learning_goal}</dd>
            </div>
            <div>
              <dt>환경</dt>
              <dd>{mission.environment_type}</dd>
            </div>
            <div>
              <dt>PC 필요</dt>
              <dd>{mission.is_pc_required ? '필요' : '불필요'}</dd>
            </div>
            <div>
              <dt>모바일 대체</dt>
              <dd>{mission.has_mobile_alternative ? '있음' : '없음'}</dd>
            </div>
            <div>
              <dt>기획자 검토 포인트</dt>
              <dd>{mission.planner_review_points}</dd>
            </div>
            <div>
              <dt>개발 메모</dt>
              <dd>{mission.developer_note}</dd>
            </div>
          </dl>

          <InlineRefineList
            plan={plan}
            targets={[
              buildTextTarget(plan, '미션 개요', `missions[${missionIndex}].mission_overview`),
              buildTextTarget(plan, '학습 목표', `missions[${missionIndex}].learning_goal`),
              buildTextTarget(plan, '제약조건', `missions[${missionIndex}].constraints`),
            ].filter(Boolean) as TextRefineTarget[]}
            onPlanUpdated={onPlanUpdated}
          />

          <div className="json-step-list">
            {mission.steps.map((step, stepIndex) => (
              <StepDetail
                key={step.step_id}
                plan={plan}
                mission={mission}
                missionIndex={missionIndex}
                step={step}
                stepIndex={stepIndex}
                techItems={techItems}
                onPlanUpdated={onPlanUpdated}
              />
            ))}
          </div>

          <SubmissionDetail
            plan={plan}
            mission={mission}
            missionIndex={missionIndex}
            techItems={techItems}
            onPlanUpdated={onPlanUpdated}
          />
        </article>
      ))}
    </div>
  )
}

function StepDetail({
  plan,
  mission,
  missionIndex,
  step,
  stepIndex,
  techItems,
  onPlanUpdated,
}: {
  plan: PblPlan
  mission: Mission
  missionIndex: number
  step: Step
  stepIndex: number
  techItems: TechItem[]
  onPlanUpdated: (plan: PblPlan, changeSummary?: string) => void
}) {
  return (
    <article className="json-step-card">
      <div className="json-step-card-heading">
        <div>
          <span>{step.step_id}</span>
          <h4>{step.title}</h4>
        </div>
        <SectionRefineButton
          currentPlan={plan}
          targetPath={`missions[${missionIndex}].steps[${stepIndex}]`}
          targetType="step"
          targetData={step}
          techItems={techItems}
          onUpdated={onPlanUpdated}
        />
      </div>
      <div className="json-step-tags">
        <Tag>{step.section}</Tag>
        <Tag>{step.block_type}</Tag>
        <Tag>{step.device_target || step.required_device}</Tag>
        {step.learning_role && <Tag>{step.learning_role}</Tag>}
        <Tag>{step.mobile_visible ? '모바일 표시' : '모바일 숨김'}</Tag>
        <Tag>{step.pc_visible ? 'PC 표시' : 'PC 숨김'}</Tag>
      </div>
      <dl className="json-detail-grid">
        <div>
          <dt>학생 노출 문구</dt>
          <dd>{step.learner_text || step.body || '내용 없음'}</dd>
        </div>
        {step.body && (
          <div>
            <dt>문제/활동 내용</dt>
            <dd>{step.body}</dd>
          </div>
        )}
        {step.question && (
          <div>
            <dt>문제 문항</dt>
            <dd>{step.question}</dd>
          </div>
        )}
        <div>
          <dt>문제/활동 수행 방식</dt>
          <dd>{step.learner_action}</dd>
        </div>
        {step.mobile_summary && (
          <div>
            <dt>모바일 요약</dt>
            <dd>{step.mobile_summary}</dd>
          </div>
        )}
        {step.pc_detail && (
          <div>
            <dt>PC 상세</dt>
            <dd>{step.pc_detail}</dd>
          </div>
        )}
        <div>
          <dt>완료 규칙</dt>
          <dd>{step.completion_rule}</dd>
        </div>
        {step.correct_answer && (
          <div>
            <dt>정답</dt>
            <dd>{step.correct_answer}</dd>
          </div>
        )}
        <div>
          <dt>예상 답안/기대 기준</dt>
          <dd>{step.expected_answer_text || '별도 기준 없음'}</dd>
        </div>
        {step.explanation && (
          <div>
            <dt>해설</dt>
            <dd>{step.explanation}</dd>
          </div>
        )}
        {step.hint && (
          <div>
            <dt>힌트</dt>
            <dd>{step.hint}</dd>
          </div>
        )}
        {step.expected_output && (
          <div>
            <dt>예상 산출물</dt>
            <dd>{step.expected_output}</dd>
          </div>
        )}
        {step.evaluation_criteria?.length ? (
          <div>
            <dt>평가 기준</dt>
            <dd>{step.evaluation_criteria.join('\n')}</dd>
          </div>
        ) : null}
        {step.checklist_items?.length ? (
          <div>
            <dt>체크리스트</dt>
            <dd>{step.checklist_items.join('\n')}</dd>
          </div>
        ) : null}
        {step.ai_tutor_questions?.length ? (
          <div>
            <dt>AI 교관 질문</dt>
            <dd>{step.ai_tutor_questions.join('\n')}</dd>
          </div>
        ) : null}
        {step.peer_review_points?.length ? (
          <div>
            <dt>피어리뷰 포인트</dt>
            <dd>{step.peer_review_points.join('\n')}</dd>
          </div>
        ) : null}
        <div>
          <dt>기획자 검토 메모</dt>
          <dd>{step.planner_note}</dd>
        </div>
        <div>
          <dt>개발 메모</dt>
          <dd>{step.developer_note}</dd>
        </div>
      </dl>
      <StepCodePreview step={step} />
      <InlineRefineList
        plan={plan}
        targets={[
          buildTextTarget(plan, '학생 노출 문구', `missions[${missionIndex}].steps[${stepIndex}].learner_text`),
          buildTextTarget(plan, '본문', `missions[${missionIndex}].steps[${stepIndex}].body`),
          buildTextTarget(plan, '문제 문항', `missions[${missionIndex}].steps[${stepIndex}].question`),
          buildTextTarget(plan, '예상 답안/기대 기준', `missions[${missionIndex}].steps[${stepIndex}].expected_answer_text`),
          buildTextTarget(plan, '해설', `missions[${missionIndex}].steps[${stepIndex}].explanation`),
          buildTextTarget(plan, '힌트', `missions[${missionIndex}].steps[${stepIndex}].hint`),
          buildTextTarget(plan, '기획자 검토 메모', `missions[${missionIndex}].steps[${stepIndex}].planner_note`),
        ].filter(Boolean) as TextRefineTarget[]}
        onPlanUpdated={onPlanUpdated}
      />
      {step.options.length > 0 && (
        <div className="json-option-list">
          <strong>선택지 내부 검토</strong>
          <div className="json-option-review-list">
            {step.options.map((option) => (
              <div className="json-option-review-item" key={`${mission.mission_id}-${step.step_id}-${option.option_order}`}>
                <div>
                  <Tag color={option.is_correct || option.is_expected ? 'success' : 'default'}>
                    {option.is_correct || option.is_expected ? '정답' : '오답'}
                  </Tag>
                  <strong>{option.label || option.option_label}</strong>
                  {option.expected_order !== null && option.expected_order !== undefined && <span>순서 {option.expected_order}</span>}
                </div>
                {option.explanation && <p>{option.explanation}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

function StepCodePreview({ step }: { step: Step }) {
  const codeBlocks = [
    step.code ? { label: '코드', value: step.code } : null,
    step.code_template ? { label: '코드 템플릿', value: step.code_template } : null,
    step.buggy_code ? { label: '오류 코드', value: step.buggy_code } : null,
    ...(step.code_blocks || []).map((block) => ({ label: block.id, value: block.content })),
  ].filter(Boolean) as { label: string; value: string }[]

  if (!codeBlocks.length) return null

  return (
    <div className="json-code-preview-list">
      {codeBlocks.map((block) => (
        <div className="json-code-preview" key={block.label}>
          <span>{block.label}</span>
          <pre>{block.value}</pre>
        </div>
      ))}
    </div>
  )
}

function SubmissionDetail({
  plan,
  mission,
  missionIndex,
  techItems,
  onPlanUpdated,
}: {
  plan: PblPlan
  mission: Mission
  missionIndex: number
  techItems: TechItem[]
  onPlanUpdated: (plan: PblPlan, changeSummary?: string) => void
}) {
  const submission = mission.submission

  return (
    <section className="json-submission-card">
      <div className="json-step-card-heading">
        <div>
          <span>{submission.submission_id}</span>
          <h4>{submission.submission_title}</h4>
        </div>
        <SectionRefineButton
          currentPlan={plan}
          targetPath={`missions[${missionIndex}].submission`}
          targetType="submission"
          targetData={submission}
          techItems={techItems}
          onUpdated={onPlanUpdated}
        />
      </div>
      <dl className="json-detail-grid">
        <div>
          <dt>학생 제출 안내</dt>
          <dd>{submission.student_instruction}</dd>
        </div>
        <div>
          <dt>평가 문구</dt>
          <dd>{submission.evaluation_text}</dd>
        </div>
        <div>
          <dt>PASS 기준</dt>
          <dd>{submission.pass_criteria}</dd>
        </div>
        <div>
          <dt>보완 필요 예시</dt>
          <dd>{submission.needs_revision_example}</dd>
        </div>
        <div>
          <dt>피어리뷰</dt>
          <dd>{submission.peer_review_required ? submission.peer_review_mode : '없음'}</dd>
        </div>
        <div>
          <dt>개발 메모</dt>
          <dd>{submission.developer_note}</dd>
        </div>
      </dl>
    </section>
  )
}

function ValidationChecklistList({
  plan,
  techItems,
  onPlanUpdated,
}: {
  plan: PblPlan
  techItems: TechItem[]
  onPlanUpdated: (plan: PblPlan, changeSummary?: string) => void
}) {
  const urgentItems = plan.validation_checklist.filter(isUrgentValidationItem)
  const referenceItems = plan.validation_checklist.filter(isReferenceValidationItem)
  const generalItems = plan.validation_checklist.filter((item) =>
    !urgentItems.includes(item) && !referenceItems.includes(item),
  )

  return (
    <div className="json-checklist-list">
      <ValidationChecklistGroup
        title="긴급 확인"
        items={urgentItems}
        plan={plan}
        techItems={techItems}
        onPlanUpdated={onPlanUpdated}
      />
      <ValidationChecklistGroup
        title="일반 확인"
        items={generalItems}
        plan={plan}
        techItems={techItems}
        onPlanUpdated={onPlanUpdated}
      />
      <ValidationChecklistGroup
        title="참고"
        items={referenceItems}
        plan={plan}
        techItems={techItems}
        onPlanUpdated={onPlanUpdated}
      />
    </div>
  )
}

function ValidationChecklistGroup({
  title,
  items,
  plan,
  techItems,
  onPlanUpdated,
}: {
  title: string
  items: ValidationChecklistItem[]
  plan: PblPlan
  techItems: TechItem[]
  onPlanUpdated: (plan: PblPlan, changeSummary?: string) => void
}) {
  if (items.length === 0) return null

  return (
    <section className="json-checklist-group">
      <div className="json-checklist-group-heading">
        <span>{title}</span>
        <strong>{items.length}개 항목</strong>
      </div>
      {items.map((item) => {
        const index = plan.validation_checklist.findIndex((checkItem) => checkItem.check_id === item.check_id)
        return (
          <article className="json-checklist-card" key={item.check_id}>
            <div>
              <span>{item.category}</span>
              <strong>{item.check_item}</strong>
              <p>{item.planner_criteria}</p>
            </div>
            <Tag color={getValidationStatusColor(item.status)}>{getValidationStatusLabel(item.status)}</Tag>
            <SectionRefineButton
              currentPlan={plan}
              targetPath={`validation_checklist[${index}]`}
              targetType="validationChecklist"
              targetData={item}
              techItems={techItems}
              onUpdated={onPlanUpdated}
            />
          </article>
        )
      })}
    </section>
  )
}

function summarizeValidationChecklist(items: ValidationChecklistItem[]) {
  return items.reduce(
    (summary, item) => {
      if (item.status === '통과') summary.pass += 1
      else if (item.status === '보완 필요') {
        summary.warning += 1
        if (/오류|실제 군 내부 데이터|개인정보|보안/.test(`${item.category} ${item.check_item} ${item.planner_criteria}`)) {
          summary.error += 1
        }
      } else summary.reviewNeeded += 1
      return summary
    },
    { error: 0, warning: 0, reviewNeeded: 0, pass: 0 },
  )
}

function isUrgentValidationItem(item: ValidationChecklistItem) {
  return /난이도|모바일|PC|제약|평가/.test(`${item.category} ${item.check_item}`)
}

function isReferenceValidationItem(item: ValidationChecklistItem) {
  return /개발|내부|피어리뷰|AI 교관/.test(`${item.category} ${item.check_item}`)
}

function getValidationStatusColor(status: ValidationChecklistItem['status']) {
  if (status === '통과') return 'success'
  if (status === '보완 필요') return 'warning'
  return 'default'
}

function getValidationStatusLabel(status: ValidationChecklistItem['status']) {
  if (status === '통과') return '정상'
  if (status === '보완 필요') return '경고'
  return '검토 필요'
}

function InlineRefineList({
  plan,
  targets,
  onPlanUpdated,
}: {
  plan: PblPlan
  targets: TextRefineTarget[]
  onPlanUpdated: (plan: PblPlan, changeSummary?: string) => void
}) {
  if (targets.length === 0) return null

  return (
    <div className="inline-refine-list">
      <div className="inline-refine-list-heading">
        <span>텍스트 블록 수정</span>
        <p>학생 노출 문구와 내부 메모를 골라 빠르게 수정할 수 있어요.</p>
      </div>
      {targets.map((target) => (
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
  )
}

function getSectionTarget(plan: PblPlan, sheetName: string): SectionTarget | null {
  if (sheetName === '01_project') {
    return {
      targetPath: 'project',
      targetType: 'project',
      targetData: plan.project,
      label: '프로젝트',
    }
  }

  return null
}

function getTextRefineTargets(plan: PblPlan, sheetName: string): TextRefineTarget[] {
  if (sheetName === '01_project') {
    return [
      buildTextTarget(plan, '프로젝트 목표', 'project.project_goal'),
      buildTextTarget(plan, '최종 산출물', 'project.final_outputs'),
      buildTextTarget(plan, '제약조건', 'project.constraints'),
      buildTextTarget(plan, 'PC 대체 과제', 'project.pc_alternative'),
    ].filter(Boolean) as TextRefineTarget[]
  }

  return []
}

function buildTextTarget(plan: PblPlan, label: string, path: string): TextRefineTarget | null {
  const text = getByPath(plan, path)
  return typeof text === 'string' && text.trim() ? { label, path, text } : null
}

function getWorkbookTabLabel(sheetName: string) {
  const labelMap: Record<string, string> = {
    '01_project': '프로젝트',
    '02_missions': '미션',
    '03_steps': '스텝',
    '04_options': '선택지',
    '05_submissions': '제출/평가',
    '08_validation_checklist': '검토 체크리스트',
    '99_json_preview': 'JSON 미리보기',
  }

  return labelMap[sheetName] || sheetName
}
