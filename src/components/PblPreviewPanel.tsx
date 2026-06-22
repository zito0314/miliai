import { useMemo, useState } from 'react'
import {
  CheckCircleOutlined,
  DesktopOutlined,
  MobileOutlined,
  OrderedListOutlined,
  QuestionCircleOutlined,
  RobotOutlined,
} from '@ant-design/icons'
import { Alert, Button, Checkbox, Empty, Progress, Radio, Select, Segmented, Tag } from 'antd'
import type { PblPlan } from '../types/pbl'
import {
  getPreviewDisplayVariant,
  type PreviewDeviceMode,
  type PreviewDisplayVariant,
  type PreviewMission,
  type PreviewPblContent,
  type PreviewStep,
  toPreviewPblContent,
  validatePreviewPblContent,
} from '../utils/toPreviewPblContent'

type PblPreviewPanelProps = {
  plan: PblPlan | PreviewPblContent
}

type StepResponseValue = string | string[]

const supportedBlockTypes = new Set([
  'situation_card',
  'concept_card',
  'vod_recommendation',
  'single_choice',
  'multiple_choice',
  'sequence_order',
  'code_block',
  'code_fill_blank',
  'code_error_finding',
  'result_prediction',
  'ai_tutor_question',
  'self_checklist',
  'peer_review_request',
  'pc_verification',
  'submission',
])

export function PblPreviewPanel({ plan }: PblPreviewPanelProps) {
  const previewContent = useMemo(() => toPreviewPblContent(plan), [plan])
  const validationIssues = useMemo(() => validatePreviewPblContent(previewContent), [previewContent])
  const [deviceMode, setDeviceMode] = useState<PreviewDeviceMode>('mobile')
  const [activeProjectId, setActiveProjectId] = useState(previewContent.projects[0]?.project_id || '')
  const [activeMissionId, setActiveMissionId] = useState(previewContent.projects[0]?.missions[0]?.mission_id || '')
  const [selectedStepId, setSelectedStepId] = useState('')
  const [responses, setResponses] = useState<Record<string, StepResponseValue>>({})

  const activeProject = previewContent.projects.find((project) => project.project_id === activeProjectId)
    || previewContent.projects[0]
  const activeMission = activeProject?.missions.find((mission) => mission.mission_id === activeMissionId)
    || activeProject?.missions[0]
  const previewSteps = useMemo(
    () => (activeMission?.steps || []).map((step) => ({
      step,
      variant: getPreviewDisplayVariant(step, deviceMode),
    })).filter(({ variant }) => variant !== 'hidden'),
    [activeMission, deviceMode],
  )
  const selectedStep = previewSteps.find(({ step }) => step.step_id === selectedStepId)?.step
    || previewSteps[0]?.step
  const effectiveSelectedStepId = selectedStep?.step_id || ''
  const visibleStepCount = previewSteps.length
  const fullStepCount = previewSteps.filter(({ variant }) => variant === 'full').length
  const errorCount = validationIssues.filter((issue) => issue.type === 'error').length
  const warningCount = validationIssues.filter((issue) => issue.type === 'warning').length

  const handleResponseChange = (stepId: string, value: StepResponseValue) => {
    setResponses((currentResponses) => ({ ...currentResponses, [stepId]: value }))
  }

  if (!activeProject || !activeMission) {
    return (
      <section className="pbl-preview-panel">
        <Empty description="미리보기로 변환할 프로젝트와 미션이 없습니다." />
      </section>
    )
  }

  return (
    <section className="pbl-preview-panel" aria-label="모바일/PC 학습 화면 미리보기">
      <div className="pbl-preview-toolbar">
        <div>
          <span>학습 화면 미리보기</span>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.description}</p>
        </div>
        <Segmented
          value={deviceMode}
          onChange={(value) => setDeviceMode(value as PreviewDeviceMode)}
          options={[
            { label: <span><MobileOutlined /> 모바일</span>, value: 'mobile' },
            { label: <span><DesktopOutlined /> PC</span>, value: 'pc' },
          ]}
        />
      </div>

      <ValidationSummary errorCount={errorCount} warningCount={warningCount} issues={validationIssues} />

      <div className="pbl-preview-controls">
        <label>
          <span>프로젝트</span>
          <Select
            value={activeProject.project_id}
            onChange={(projectId) => {
              setActiveProjectId(projectId)
              const nextProject = previewContent.projects.find((project) => project.project_id === projectId)
              setActiveMissionId(nextProject?.missions[0]?.mission_id || '')
            }}
            options={previewContent.projects.map((project) => ({
              value: project.project_id,
              label: project.title,
            }))}
          />
        </label>
        <label>
          <span>미션</span>
          <Select
            value={activeMission.mission_id}
            onChange={setActiveMissionId}
            options={activeProject.missions.map((mission) => ({
              value: mission.mission_id,
              label: (
                <MissionSelectLabel
                  mission={mission}
                  active={mission.mission_id === activeMission.mission_id}
                />
              ),
            }))}
          />
        </label>
        <div className="pbl-preview-progress">
          <span>{deviceMode === 'mobile' ? '모바일 표시' : 'PC 표시'}</span>
          <strong>{visibleStepCount}개 step · 직접 수행 {fullStepCount}개</strong>
          <Progress percent={getProgressPercent(fullStepCount, visibleStepCount)} size="small" showInfo={false} />
        </div>
      </div>

      <div className={`pbl-preview-frame is-${deviceMode}`}>
        {deviceMode === 'pc' ? (
          <PcPreviewLayout
            mission={activeMission}
            previewSteps={previewSteps}
            selectedStep={selectedStep}
            selectedStepId={effectiveSelectedStepId}
            responses={responses}
            onSelectStep={setSelectedStepId}
            onResponseChange={handleResponseChange}
          />
        ) : (
          <MobilePreviewLayout
            mission={activeMission}
            previewSteps={previewSteps}
            responses={responses}
            onResponseChange={handleResponseChange}
          />
        )}
      </div>
    </section>
  )
}

function ValidationSummary({
  errorCount,
  warningCount,
  issues,
}: {
  errorCount: number
  warningCount: number
  issues: ReturnType<typeof validatePreviewPblContent>
}) {
  if (errorCount === 0 && warningCount === 0) {
    return (
      <Alert
        className="pbl-preview-validation"
        type="success"
        showIcon
        message="미리보기 구조 검사: 오류 0개 / 경고 0개"
      />
    )
  }

  return (
    <Alert
      className="pbl-preview-validation"
      type={errorCount > 0 ? 'error' : 'warning'}
      showIcon
      message={`미리보기 구조 검사: 오류 ${errorCount}개 / 경고 ${warningCount}개`}
      description={(
        <details className="pbl-preview-issue-details">
          <summary>상세 목록 보기</summary>
          <ul>
            {issues.map((issue) => (
              <li key={`${issue.type}-${issue.path}-${issue.message}`}>
                <strong>{issue.type === 'error' ? '오류' : '경고'}</strong>
                <span>{issue.path}</span>
                {issue.message}
              </li>
            ))}
          </ul>
        </details>
      )}
    />
  )
}

function MobilePreviewLayout({
  mission,
  previewSteps,
  responses,
  onResponseChange,
}: {
  mission: PreviewMission
  previewSteps: { step: PreviewStep; variant: PreviewDisplayVariant }[]
  responses: Record<string, StepResponseValue>
  onResponseChange: (stepId: string, value: StepResponseValue) => void
}) {
  return (
    <div className="pbl-preview-mobile-shell">
      <MissionPreviewHeader mission={mission} />
      <div className="pbl-preview-step-stack">
        {previewSteps.map(({ step, variant }) => (
          <StepPreviewCard
            key={step.step_id}
            mission={mission}
            step={step}
            variant={variant}
            mode="mobile"
            response={responses[step.step_id]}
            onResponseChange={onResponseChange}
          />
        ))}
        <SubmissionPreviewCard mission={mission} mode="mobile" />
      </div>
    </div>
  )
}

function PcPreviewLayout({
  mission,
  previewSteps,
  selectedStep,
  selectedStepId,
  responses,
  onSelectStep,
  onResponseChange,
}: {
  mission: PreviewMission
  previewSteps: { step: PreviewStep; variant: PreviewDisplayVariant }[]
  selectedStep?: PreviewStep
  selectedStepId: string
  responses: Record<string, StepResponseValue>
  onSelectStep: (stepId: string) => void
  onResponseChange: (stepId: string, value: StepResponseValue) => void
}) {
  return (
    <div className="pbl-preview-pc-shell">
      <aside className="pbl-preview-sidebar">
        <MissionPreviewHeader mission={mission} />
        <div className="pbl-preview-step-nav">
          {previewSteps.map(({ step, variant }, index) => (
            <button
              type="button"
              className={step.step_id === selectedStepId ? 'is-active' : ''}
              key={step.step_id}
              onClick={() => onSelectStep(step.step_id)}
            >
              <span>{index + 1}</span>
              <strong>{step.title}</strong>
              <small>{variant === 'summary' ? '요약' : step.block_type}</small>
            </button>
          ))}
        </div>
      </aside>
      <main className="pbl-preview-pc-main">
        {selectedStep ? (
          <StepPreviewCard
            mission={mission}
            step={selectedStep}
            variant={getPreviewDisplayVariant(selectedStep, 'pc')}
            mode="pc"
            response={responses[selectedStep.step_id]}
            onResponseChange={onResponseChange}
          />
        ) : (
          <PreviewEmptyState mission={mission} />
        )}
        <SubmissionPreviewCard mission={mission} mode="pc" />
      </main>
    </div>
  )
}

function MissionSelectLabel({ mission, active }: { mission: PreviewMission; active: boolean }) {
  const counts = getPreviewMissionCounts(mission)

  return (
    <div className={`pbl-preview-mission-option${active ? ' is-active' : ''}`}>
      <strong>{active ? '✓ ' : ''}{mission.mission_order}. {mission.title}</strong>
      <span>모바일 {counts.mobile} step · PC {counts.pc} step</span>
    </div>
  )
}

function PreviewEmptyState({ mission }: { mission: PreviewMission }) {
  const hasSubmission = Boolean(mission.submission)

  return (
    <div className="pbl-preview-empty-state">
      <strong>{hasSubmission ? '이 미션의 PC 수행 단계는 제출/평가 영역에서 진행됩니다.' : '이 미션은 모바일 중심 미션입니다.'}</strong>
      <p>
        {hasSubmission
          ? 'PC에서는 아래 제출물 작성 또는 최종 검토 단계로 이어집니다.'
          : 'PC에서는 제출물 작성 또는 최종 검토 단계에서 이어집니다.'}
      </p>
    </div>
  )
}

function MissionPreviewHeader({ mission }: { mission: PreviewMission }) {
  return (
    <header className="pbl-preview-mission-header">
      <Tag>{mission.device_target}</Tag>
      <h4>{mission.title}</h4>
      <p>{mission.mission_overview || mission.learning_goal || '미션 설명을 확인합니다.'}</p>
      <details>
        <summary>미션 기획자 정보 보기</summary>
        <InfoGrid
          items={[
            ['기획자 검토 포인트', mission.planner_review_points],
            ['개발 메모', mission.developer_note],
            ['학습 목표', mission.learning_goal],
            ['핵심 행동', mission.core_learning_action],
          ]}
        />
      </details>
    </header>
  )
}

function StepPreviewCard({
  mission,
  step,
  variant,
  mode,
  response,
  onResponseChange,
}: {
  mission: PreviewMission
  step: PreviewStep
  variant: PreviewDisplayVariant
  mode: PreviewDeviceMode
  response?: StepResponseValue
  onResponseChange: (stepId: string, value: StepResponseValue) => void
}) {
  if (variant === 'summary') {
    return <StepSummaryCard step={step} mode={mode} />
  }

  return (
    <article className={`pbl-preview-step-card block-${step.block_type}`}>
      <div className="pbl-preview-card-heading">
        <div>
          <span>Step {step.step_order}</span>
          <h4>{step.title}</h4>
        </div>
        <div className="pbl-preview-card-tags">
          <Tag>{step.block_type}</Tag>
          <Tag>{step.device_target}</Tag>
          {step.learning_role && <Tag>{step.learning_role}</Tag>}
        </div>
      </div>
      <StepBody
        mission={mission}
        step={step}
        response={response}
        onResponseChange={onResponseChange}
      />
      <InternalInfoDetails step={step} />
    </article>
  )
}

function StepSummaryCard({ step, mode }: { step: PreviewStep; mode: PreviewDeviceMode }) {
  const isMobile = mode === 'mobile'

  return (
    <article className="pbl-preview-step-card is-summary">
      <div className="pbl-preview-summary-icon">
        {isMobile ? <DesktopOutlined /> : <MobileOutlined />}
      </div>
      <div>
        <span>{isMobile ? 'PC에서 이어하기' : '모바일 선행 학습 요약'}</span>
        <h4>{step.title}</h4>
        <p>
          {isMobile
            ? step.mobile_summary || step.learner_text || '이 활동은 PC 화면에서 이어서 수행합니다.'
            : step.pc_detail || step.mobile_summary || step.learner_text || '모바일에서 확인한 내용을 PC 화면에서 요약해 보여줍니다.'}
        </p>
        {isMobile && <Button size="small">{step.mobile_continue_label || 'PC에서 이어하기'}</Button>}
      </div>
      <InternalInfoDetails step={step} />
    </article>
  )
}

function StepBody({
  mission,
  step,
  response,
  onResponseChange,
}: {
  mission: PreviewMission
  step: PreviewStep
  response?: StepResponseValue
  onResponseChange: (stepId: string, value: StepResponseValue) => void
}) {
  if (!supportedBlockTypes.has(step.block_type)) {
    return <UnsupportedStepPreview step={step} />
  }

  switch (step.block_type) {
    case 'situation_card':
    case 'concept_card':
    case 'vod_recommendation':
      return <ReadingCard step={step} />
    case 'single_choice':
      return (
        <ChoiceBlock
          step={step}
          mode="single"
          value={typeof response === 'string' ? response : undefined}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'multiple_choice':
      return (
        <ChoiceBlock
          step={step}
          mode="multiple"
          value={Array.isArray(response) ? response : []}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'sequence_order':
      return <SequenceOrderBlock step={step} />
    case 'code_block':
      return <CodeBlockPreview title="읽기 전용 코드" code={step.code || getCodeBlockText(step)} explanation={step.explanation} />
    case 'code_fill_blank':
      return (
        <CodeFillBlankBlock
          step={step}
          response={typeof response === 'string' ? response : undefined}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'code_error_finding':
      return (
        <CodeFindingBlock
          step={step}
          code={step.buggy_code}
          title="오류 코드 확인"
          response={typeof response === 'string' ? response : undefined}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'result_prediction':
      return (
        <CodeFindingBlock
          step={step}
          code={step.code}
          title="실행 결과 예측"
          response={typeof response === 'string' ? response : undefined}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'ai_tutor_question':
      return <AiTutorQuestionBlock step={step} />
    case 'self_checklist':
      return (
        <ChecklistBlock
          step={step}
          value={Array.isArray(response) ? response : []}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'peer_review_request':
      return <QuestionListBlock title="피어리뷰 질문" items={step.peer_review_points || []} fallback={step.learner_text} />
    case 'pc_verification':
      return <PcVerificationBlock step={step} />
    case 'submission':
      return <SubmissionPreviewCard mission={mission} step={step} mode="pc" compact />
    default:
      return <UnsupportedStepPreview step={step} />
  }
}

function ReadingCard({ step }: { step: PreviewStep }) {
  return (
    <div className="pbl-preview-copy-block">
      <p>{step.body || step.learner_text || '학습 내용을 확인합니다.'}</p>
      {step.mobile_summary && <small>모바일 요약: {step.mobile_summary}</small>}
      {step.pc_detail && <small>PC 상세: {step.pc_detail}</small>}
      {step.block_type === 'vod_recommendation' && <Button size="small">추천 VOD 확인</Button>}
    </div>
  )
}

function ChoiceBlock({
  step,
  mode,
  value,
  onChange,
}: {
  step: PreviewStep
  mode: 'single' | 'multiple'
  value?: string | string[]
  onChange: (value: string | string[]) => void
}) {
  const optionItems = step.options.map((option) => ({
    label: getOptionLabel(option),
    value: getOptionValue(option),
  }))

  return (
    <div className="pbl-preview-input-block">
      <strong>{step.question || step.learner_text || '선택지를 확인하세요.'}</strong>
      {mode === 'single' ? (
        <Radio.Group
          value={typeof value === 'string' ? value : undefined}
          onChange={(event) => onChange(event.target.value)}
          options={optionItems}
        />
      ) : (
        <>
          <Checkbox.Group
            value={Array.isArray(value) ? value : []}
            onChange={(checkedValues) => onChange(checkedValues.map(String))}
            options={optionItems}
          />
          <Button size="small">선택 확인</Button>
        </>
      )}
    </div>
  )
}

function SequenceOrderBlock({ step }: { step: PreviewStep }) {
  const items = step.code_blocks?.length
    ? step.code_blocks.map((block, index) => ({
        id: block.id || `block-${index + 1}`,
        content: block.content,
      }))
    : step.options.map((option) => ({
        id: getOptionValue(option),
        content: getOptionLabel(option),
      }))

  return (
    <div className="pbl-preview-sequence">
      <strong><OrderedListOutlined /> 순서 배열</strong>
      <ol>
        {items.map((item, index) => (
          <li key={item.id}>
            <span>{index + 1}</span>
            <p>{item.content}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function CodeFillBlankBlock({
  step,
  response,
  onChange,
}: {
  step: PreviewStep
  response?: string
  onChange: (value: string) => void
}) {
  return (
    <div className="pbl-preview-code-task">
      <CodeBlockPreview title="빈칸 코드" code={step.code_template || step.code || ''} />
      {step.options.length > 0 && (
        <ChoiceBlock step={step} mode="single" value={response} onChange={(value) => onChange(String(value))} />
      )}
    </div>
  )
}

function CodeFindingBlock({
  step,
  code,
  title,
  response,
  onChange,
}: {
  step: PreviewStep
  code?: string
  title: string
  response?: string
  onChange: (value: string) => void
}) {
  return (
    <div className="pbl-preview-code-task">
      <CodeBlockPreview title={title} code={code || ''} />
      <ChoiceBlock step={step} mode="single" value={response} onChange={(value) => onChange(String(value))} />
    </div>
  )
}

function CodeBlockPreview({ title, code, explanation }: { title: string; code?: string; explanation?: string }) {
  return (
    <div className="pbl-preview-code-block">
      <span>{title}</span>
      <pre>{code || '표시할 코드가 없습니다.'}</pre>
      {explanation && <p>{explanation}</p>}
    </div>
  )
}

function AiTutorQuestionBlock({ step }: { step: PreviewStep }) {
  return (
    <div className="pbl-preview-ai-block">
      <QuestionListBlock
        title="추천 질문"
        items={step.ai_tutor_questions || []}
        fallback={step.question || step.learner_text}
      />
      <Button icon={<RobotOutlined />}>AI 교관에게 질문하기</Button>
    </div>
  )
}

function ChecklistBlock({
  step,
  value,
  onChange,
}: {
  step: PreviewStep
  value: string[]
  onChange: (value: string[]) => void
}) {
  const items = step.checklist_items?.length
    ? step.checklist_items
    : step.options.map(getOptionLabel)

  return (
    <div className="pbl-preview-input-block">
      <strong>{step.question || step.learner_text || '체크리스트를 확인하세요.'}</strong>
      <Checkbox.Group
        value={value}
        onChange={(checkedValues) => onChange(checkedValues.map(String))}
        options={items.map((item) => ({ label: item, value: item }))}
      />
    </div>
  )
}

function QuestionListBlock({ title, items, fallback }: { title: string; items: string[]; fallback?: string }) {
  const listItems = items.length ? items : [fallback || '검토 질문을 확인합니다.']

  return (
    <div className="pbl-preview-question-list">
      <strong><QuestionCircleOutlined /> {title}</strong>
      <ul>
        {listItems.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

function PcVerificationBlock({ step }: { step: PreviewStep }) {
  return (
    <div className="pbl-preview-pc-verification">
      <CheckCircleOutlined />
      <div>
        <strong>{step.pc_detail || step.learner_text || 'PC에서 실행 결과를 검증합니다.'}</strong>
        {step.evaluation_criteria?.length ? (
          <ul>
            {step.evaluation_criteria.map((item) => <li key={item}>{item}</li>)}
          </ul>
        ) : null}
        {step.submission_type?.length ? (
          <div className="pbl-preview-option-chips">
            {step.submission_type.map((type) => <Tag key={type}>{type}</Tag>)}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function SubmissionPreviewCard({
  mission,
  step,
  mode,
  compact = false,
}: {
  mission: PreviewMission
  step?: PreviewStep
  mode: PreviewDeviceMode
  compact?: boolean
}) {
  const submission = asRecord(mission.submission)
  const title = asString(step?.title || submission.submission_title, '최종 제출')
  const instruction = asString(step?.learner_text || submission.student_instruction, '최종 산출물을 제출합니다.')
  const evaluationText = asString(step?.evaluation_criteria?.join('\n') || submission.evaluation_text, '평가 기준을 확인합니다.')
  const passCriteria = asString(step?.completion_rule || submission.pass_criteria, 'PASS 기준을 충족합니다.')

  return (
    <article className={`pbl-preview-submission-card${compact ? ' is-compact' : ''}`}>
      <div>
        <Tag>{mode === 'mobile' ? '제출 안내' : '제출/평가'}</Tag>
        <h4>{title}</h4>
        <p>{instruction}</p>
      </div>
      <InfoGrid
        items={[
          ['제출 유형', toDisplayText(step?.submission_type || submission.submission_type || '파일/텍스트 제출')],
          ['평가 기준', evaluationText],
          ['PASS 기준', passCriteria],
          ['피어리뷰', toDisplayText(submission.peer_review_mode || (submission.peer_review_required ? '필요' : '없음'))],
        ]}
      />
    </article>
  )
}

function UnsupportedStepPreview({ step }: { step: PreviewStep }) {
  return (
    <div className="pbl-preview-unsupported">
      <strong>지원하지 않는 block_type입니다.</strong>
      <p>{step.block_type} 타입은 표 형태 결과와 JSON에서 원문을 확인하세요.</p>
    </div>
  )
}

function InternalInfoDetails({ step }: { step: PreviewStep }) {
  return (
    <details className="pbl-preview-internal-details">
      <summary>기획자 정보 보기</summary>
      <InfoGrid
        items={[
          ['기획자 검토 메모', step.planner_note],
          ['개발 메모', step.developer_note],
          ['예상 답안/기대 기준', step.expected_answer_text],
          ['정답', step.correct_answer],
          ['해설', step.explanation],
          ['평가 기준', step.evaluation_criteria?.join('\n')],
          ['완료 규칙', step.completion_rule],
          ['block_type', step.block_type],
          ['device_target', step.device_target],
          ['learning_role', step.learning_role],
        ]}
      />
      {step.options.length > 0 && (
        <div className="pbl-preview-answer-options">
          {step.options.map((option) => (
            <div key={getOptionValue(option)}>
              <Tag color={option.is_correct || option.is_expected ? 'success' : 'default'}>
                {option.is_correct || option.is_expected ? '정답' : '선택지'}
              </Tag>
              <span>{getOptionLabel(option)}</span>
              {option.explanation && <small>{option.explanation}</small>}
            </div>
          ))}
        </div>
      )}
    </details>
  )
}

function InfoGrid({ items }: { items: [string, unknown][] }) {
  const visibleItems = items
    .map(([label, value]) => [label, toDisplayText(value)] as [string, string])
    .filter(([, value]) => value)

  if (!visibleItems.length) return <p className="pbl-preview-muted">표시할 내부 정보가 없습니다.</p>

  return (
    <dl className="pbl-preview-info-grid">
      {visibleItems.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

function getCodeBlockText(step: PreviewStep) {
  return step.code_blocks?.map((block) => block.content).join('\n\n') || ''
}

function getOptionLabel(option: { option_label?: string; label?: string; option_value?: string }) {
  return option.label || option.option_label || option.option_value || '선택지'
}

function getOptionValue(option: { option_id?: string; option_value?: string; option_label?: string; option_order?: number }) {
  return option.option_id || option.option_value || option.option_label || `option-${option.option_order || 0}`
}

function getProgressPercent(fullStepCount: number, visibleStepCount: number) {
  if (visibleStepCount === 0) return 0
  return Math.round((fullStepCount / visibleStepCount) * 100)
}

function getPreviewMissionCounts(mission: PreviewMission) {
  return mission.steps.reduce(
    (counts, step) => ({
      mobile: counts.mobile + (getPreviewDisplayVariant(step, 'mobile') !== 'hidden' ? 1 : 0),
      pc: counts.pc + (getPreviewDisplayVariant(step, 'pc') !== 'hidden' ? 1 : 0),
    }),
    { mobile: 0, pc: 0 },
  )
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {}
}

function asString(value: unknown, fallback = ''): string {
  if (Array.isArray(value)) return value.map((item) => asString(item)).filter(Boolean).join('\n')
  if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  if (typeof value === 'boolean') return value ? '예' : '아니오'
  return typeof value === 'string' && value.trim() ? value.trim() : fallback
}

function toDisplayText(value: unknown) {
  if (Array.isArray(value)) return value.map((item) => asString(item)).filter(Boolean).join('\n')
  return asString(value)
}
