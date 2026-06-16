import { useMemo, useState } from 'react'
import { CopyOutlined, DownloadOutlined, FileTextOutlined } from '@ant-design/icons'
import { Alert, Button, Tabs, Tag, message } from 'antd'
import type { ExcelWorkbookSheet, Mission, PblPlan, Step } from '../types/pbl'
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
    <section className="pbl-result" aria-label="생성된 JSON-ready PBL 콘텐츠">
      {contextHolder}
      <div className="pbl-result-toolbar">
        <div className="pbl-result-heading">
          <span>JSON-ready PBL 콘텐츠</span>
          <h2>{plan.project.title}</h2>
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
          <p>스텝의 기대 기준, 선택지 정답, 제출 PASS 기준을 바탕으로 기획자용 답안 가이드를 생성합니다.</p>
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
          <span>프로젝트</span>
          <dl>
            <div>
              <dt>프로젝트 ID</dt>
              <dd>{plan.project.project_id}</dd>
            </div>
            <div>
              <dt>과목명</dt>
              <dd>{subjectName}</dd>
            </div>
            <div>
              <dt>목표</dt>
              <dd>{plan.project.project_goal}</dd>
            </div>
            <div>
              <dt>최종 산출물</dt>
              <dd>{plan.project.final_outputs}</dd>
            </div>
            <div>
              <dt>제약조건</dt>
              <dd>{plan.project.constraints}</dd>
            </div>
          </dl>
        </div>
        <div className="pbl-summary-tags">
          <div className="pbl-project-facts">
            <span>환경 <strong>{plan.project.environment_type}</strong></span>
            <span>기간 <strong>{plan.project.duration_label}</strong></span>
            <span>난이도 <strong>{plan.project.difficulty_label}</strong></span>
            <span>미션 <strong>{plan.missions.length}개</strong></span>
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
        message="AI가 생성한 JSON-ready PBL 콘텐츠 초안입니다. 학생 노출 문구, 내부 메모, 모바일 수행성, 보안 제약을 검토해주세요."
      />

      <AnswerGuidePanel answerGuides={plan.answerGuides} />

      <Tabs
        className="workbook-tabs"
        activeKey={activeTabKey}
        onChange={setActiveSheetName}
        items={plan.excelWorkbook.sheets.map((sheet) => ({
          key: sheet.sheetName,
          label: getWorkbookTabLabel(sheet.sheetName),
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
        <Tag>{step.input_type}</Tag>
        <Tag>{step.required_device}</Tag>
        <Tag>{step.block_type}</Tag>
      </div>
      <dl className="json-detail-grid">
        <div>
          <dt>학생 노출 문구</dt>
          <dd>{step.learner_text}</dd>
        </div>
        <div>
          <dt>학습자 행동</dt>
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
          <dt>기획자 검토 메모</dt>
          <dd>{step.planner_note}</dd>
        </div>
        <div>
          <dt>개발 메모</dt>
          <dd>{step.developer_note}</dd>
        </div>
      </dl>
      <InlineRefineList
        plan={plan}
        targets={[
          buildTextTarget(plan, '학생 노출 문구', `missions[${missionIndex}].steps[${stepIndex}].learner_text`),
          buildTextTarget(plan, '예상 답안/기대 기준', `missions[${missionIndex}].steps[${stepIndex}].expected_answer_text`),
          buildTextTarget(plan, '기획자 검토 메모', `missions[${missionIndex}].steps[${stepIndex}].planner_note`),
        ].filter(Boolean) as TextRefineTarget[]}
        onPlanUpdated={onPlanUpdated}
      />
      {step.options.length > 0 && (
        <div className="json-option-list">
          <strong>선택지</strong>
          <div>
            {step.options.map((option) => (
              <Tag key={`${mission.mission_id}-${step.step_id}-${option.option_order}`}>
                {option.option_label}{option.is_expected ? ' · 기대값' : ''}
              </Tag>
            ))}
          </div>
        </div>
      )}
    </article>
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
  return (
    <div className="json-checklist-list">
      {plan.validation_checklist.map((item, index) => (
        <article className="json-checklist-card" key={item.check_id}>
          <div>
            <span>{item.category}</span>
            <strong>{item.check_item}</strong>
            <p>{item.planner_criteria}</p>
          </div>
          <Tag>{item.status}</Tag>
          <SectionRefineButton
            currentPlan={plan}
            targetPath={`validation_checklist[${index}]`}
            targetType="validationChecklist"
            targetData={item}
            techItems={techItems}
            onUpdated={onPlanUpdated}
          />
        </article>
      ))}
    </div>
  )
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
