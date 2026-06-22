import { useMemo, useState, type ReactNode } from 'react'
import {
  ArrowLeftOutlined,
  BookOutlined,
  BulbOutlined,
  CloseOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  OrderedListOutlined,
  PlayCircleOutlined,
  RightOutlined,
  RobotOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import { Button, Checkbox, Input, Progress, Radio, Select, Tag } from 'antd'
import type {
  PreviewDisplayVariant,
  PreviewMission,
  PreviewPblContent,
  PreviewProject,
  PreviewStep,
  PreviewStepOption,
} from '../utils/toPreviewPblContent'
import { getPreviewDisplayVariant } from '../utils/toPreviewPblContent'

type MobilePreviewScreen =
  | 'pbl_list'
  | 'project_detail'
  | 'mission_list'
  | 'mission_detail'
  | 'step_player'

type StepResponseValue = string | string[]

type MobileLearningPreviewProps = {
  content: PreviewPblContent
  selectedProjectId?: string
  selectedMissionId?: string
  onProjectChange?: (projectId: string) => void
  onMissionChange?: (missionId: string) => void
}

type VisiblePreviewStep = {
  step: PreviewStep
  variant: PreviewDisplayVariant
}

const screenLabels: Record<MobilePreviewScreen, string> = {
  pbl_list: 'PBL 학습 목록',
  project_detail: 'PBL 상세',
  mission_list: '미션 구성',
  mission_detail: '미션 상세',
  step_player: 'Step 학습',
}

const reviewableBlockTypes = new Set([
  'situation_card',
  'concept_card',
  'vod_recommendation',
  'single_choice',
  'multiple_choice',
  'sequence_order',
  'code_fill_blank',
  'code_error_finding',
  'result_prediction',
  'ai_tutor_question',
  'self_checklist',
  'pc_verification',
  'submission',
])

export function MobileLearningPreview({
  content,
  selectedProjectId,
  selectedMissionId,
  onProjectChange,
  onMissionChange,
}: MobileLearningPreviewProps) {
  const fallbackProjectId = content.projects[0]?.project_id || ''
  const [currentScreen, setCurrentScreen] = useState<MobilePreviewScreen>('pbl_list')
  const [localProjectId, setLocalProjectId] = useState(fallbackProjectId)
  const [localMissionId, setLocalMissionId] = useState(content.projects[0]?.missions[0]?.mission_id || '')
  const [selectedStepIndex, setSelectedStepIndex] = useState(0)
  const [responses, setResponses] = useState<Record<string, StepResponseValue>>({})
  const [hintOpen, setHintOpen] = useState(false)
  const projectId = selectedProjectId || localProjectId || fallbackProjectId

  const project = useMemo(
    () => content.projects.find((item) => item.project_id === projectId) || content.projects[0],
    [content.projects, projectId],
  )
  const missionId = selectedMissionId || localMissionId || project?.missions[0]?.mission_id || ''
  const mission = useMemo(
    () => project?.missions.find((item) => item.mission_id === missionId) || project?.missions[0],
    [missionId, project],
  )
  const mobileSteps = useMemo<VisiblePreviewStep[]>(
    () => (mission?.steps || [])
      .map((step) => ({
        step,
        variant: getPreviewDisplayVariant(step, 'mobile'),
      }))
      .filter(({ variant }) => variant !== 'hidden'),
    [mission],
  )

  const effectiveStepIndex = Math.min(selectedStepIndex, Math.max(mobileSteps.length - 1, 0))
  const selectedStep = mobileSteps[effectiveStepIndex]?.step
  const selectedVariant = mobileSteps[effectiveStepIndex]?.variant
  const selectedStepPosition = effectiveStepIndex + 1
  const stepProgress = mobileSteps.length
    ? Math.round((selectedStepPosition / mobileSteps.length) * 100)
    : 0

  const handleSelectProject = (nextProject: PreviewProject) => {
    const nextMissionId = nextProject.missions[0]?.mission_id || ''
    setLocalProjectId(nextProject.project_id)
    setLocalMissionId(nextMissionId)
    setSelectedStepIndex(0)
    setHintOpen(false)
    setCurrentScreen('project_detail')
    onProjectChange?.(nextProject.project_id)
    if (nextMissionId) onMissionChange?.(nextMissionId)
  }

  const handleSelectMission = (nextMission: PreviewMission) => {
    setLocalMissionId(nextMission.mission_id)
    setSelectedStepIndex(0)
    setHintOpen(false)
    setCurrentScreen('mission_detail')
    onMissionChange?.(nextMission.mission_id)
  }

  const handleStartStep = (stepIndex = 0) => {
    setSelectedStepIndex(Math.min(Math.max(stepIndex, 0), Math.max(mobileSteps.length - 1, 0)))
    setHintOpen(false)
    setCurrentScreen('step_player')
  }

  const handlePreviousStep = () => {
    setSelectedStepIndex(Math.max(effectiveStepIndex - 1, 0))
    setHintOpen(false)
  }

  const handleNextStep = () => {
    setHintOpen(false)
    if (effectiveStepIndex >= mobileSteps.length - 1) {
      setCurrentScreen('mission_detail')
      return
    }
    setSelectedStepIndex(Math.min(effectiveStepIndex + 1, mobileSteps.length - 1))
  }

  const handleResponseChange = (stepId: string, value: StepResponseValue) => {
    setResponses((currentResponses) => ({ ...currentResponses, [stepId]: value }))
  }

  if (!project) {
    return (
      <div className="mobile-learning-preview">
        <MobilePreviewPhoneFrame title="PBL 학습" subtitle="모바일 미리보기">
          <MobileEmptyState
            title="표시할 PBL 콘텐츠가 없습니다."
            description="생성된 프로젝트와 미션이 있으면 모바일 학습 플로우를 확인할 수 있습니다."
          />
        </MobilePreviewPhoneFrame>
      </div>
    )
  }

  return (
    <div className="mobile-learning-preview">
      <MobilePreviewPhoneFrame
        title={getFrameTitle(currentScreen, project, mission)}
        subtitle={screenLabels[currentScreen]}
        onBack={getBackHandler(currentScreen, setCurrentScreen)}
        onClose={currentScreen === 'step_player' ? () => setCurrentScreen('mission_detail') : undefined}
        footer={currentScreen === 'project_detail' ? (
          <div className="mobile-learning-footer-actions">
            <Button block onClick={() => setCurrentScreen('mission_list')}>미션 구성 보기</Button>
            <Button block type="primary" icon={<PlayCircleOutlined />} onClick={() => setCurrentScreen('mission_list')}>
              시작하기
            </Button>
          </div>
        ) : currentScreen === 'mission_detail' ? (
          <Button
            block
            type="primary"
            icon={<PlayCircleOutlined />}
            disabled={!mobileSteps.length}
            onClick={() => handleStartStep(0)}
          >
            Step 시작
          </Button>
        ) : currentScreen === 'step_player' ? (
          <div className="mobile-learning-step-footer">
            <Button disabled={effectiveStepIndex === 0} onClick={handlePreviousStep}>
              이전
            </Button>
            <Button onClick={() => setHintOpen((isOpen) => !isOpen)}>
              힌트
            </Button>
            <Button type="primary" onClick={handleNextStep}>
              {effectiveStepIndex >= mobileSteps.length - 1 ? '완료' : '다음'}
            </Button>
          </div>
        ) : undefined}
      >
        {currentScreen === 'pbl_list' && (
          <MobilePblListScreen
            projects={content.projects}
            onSelectProject={handleSelectProject}
          />
        )}
        {currentScreen === 'project_detail' && (
          <MobileProjectDetailScreen
            project={project}
            missionCount={project.missions.length}
            onShowMissions={() => setCurrentScreen('mission_list')}
          />
        )}
        {currentScreen === 'mission_list' && (
          <MobileMissionListScreen
            missions={project.missions}
            activeMissionId={mission?.mission_id}
            onSelectMission={handleSelectMission}
          />
        )}
        {currentScreen === 'mission_detail' && (
          mission ? (
            <MobileMissionDetailScreen
              mission={mission}
              mobileSteps={mobileSteps}
              onStartStep={handleStartStep}
            />
          ) : (
            <MobileEmptyState title="선택한 미션이 없습니다." description="미션을 선택하면 상세 화면을 확인할 수 있습니다." />
          )
        )}
        {currentScreen === 'step_player' && (
          selectedStep && mission ? (
            <MobileStepPlayerScreen
              mission={mission}
              step={selectedStep}
              variant={selectedVariant || 'full'}
              stepIndex={effectiveStepIndex}
              stepCount={mobileSteps.length}
              progress={stepProgress}
              response={responses[selectedStep.step_id]}
              hintOpen={hintOpen}
              onResponseChange={handleResponseChange}
            />
          ) : (
            <MobileEmptyState title="표시할 Step이 없습니다." description="이 미션은 모바일에서 직접 수행할 Step이 없습니다." />
          )
        )}
      </MobilePreviewPhoneFrame>
      <MobileStepReviewPanel
        currentScreen={currentScreen}
        mission={mission}
        selectedStep={selectedStep}
        selectedVariant={selectedVariant}
        selectedStepIndex={effectiveStepIndex}
        stepCount={mobileSteps.length}
      />
    </div>
  )
}

function MobilePreviewPhoneFrame({
  title,
  subtitle,
  onBack,
  onClose,
  footer,
  children,
}: {
  title: string
  subtitle?: string
  onBack?: () => void
  onClose?: () => void
  footer?: ReactNode
  children: ReactNode
}) {
  return (
    <section className="mobile-preview-phone-frame" aria-label="모바일 학습 앱 미리보기">
      <header className="mobile-preview-appbar">
        <div className="mobile-preview-appbar-left">
          {onBack ? (
            <button type="button" aria-label="뒤로가기" onClick={onBack}>
              <ArrowLeftOutlined />
            </button>
          ) : (
            <span className="mobile-preview-app-icon"><BookOutlined /></span>
          )}
          <div>
            <span>{subtitle || '모바일 미리보기'}</span>
            <strong>{title}</strong>
          </div>
        </div>
        {onClose && (
          <button type="button" aria-label="닫기" onClick={onClose}>
            <CloseOutlined />
          </button>
        )}
      </header>
      <div className="mobile-preview-screen-body">
        {children}
      </div>
      {footer && (
        <footer className="mobile-preview-bottom-bar">
          {footer}
        </footer>
      )}
    </section>
  )
}

function MobilePblListScreen({
  projects,
  onSelectProject,
}: {
  projects: PreviewProject[]
  onSelectProject: (project: PreviewProject) => void
}) {
  return (
    <div className="mobile-learning-screen">
      <section className="mobile-learning-hero">
        <span>오늘의 PBL</span>
        <h3>진행할 학습을 선택하세요</h3>
        <p>생성된 콘텐츠가 실제 앱에서는 학습 목록 카드로 표시됩니다.</p>
      </section>
      <div className="mobile-learning-card-list">
        {projects.map((project, index) => {
          const missionCount = project.missions.length

          return (
            <button
              type="button"
              className="mobile-learning-project-card"
              key={project.project_id}
              onClick={() => onSelectProject(project)}
            >
              <div className={`mobile-learning-thumbnail theme-${index % 3}`}>
                <BookOutlined />
              </div>
              <div>
                <span>{getProjectCategory(project)}</span>
                <strong>{project.title}</strong>
                <p>{project.description || project.problem_statement}</p>
                <div className="mobile-learning-chip-row">
                  <Tag>{getProjectDifficulty(project)}</Tag>
                  <Tag>{getProjectDuration(project)}</Tag>
                  <Tag>{missionCount}개 미션</Tag>
                </div>
                <div className="mobile-learning-progress-line">
                  <small>미완료</small>
                  <Progress percent={0} size="small" showInfo={false} />
                </div>
              </div>
              <RightOutlined />
            </button>
          )
        })}
      </div>
    </div>
  )
}

function MobileProjectDetailScreen({
  project,
  missionCount,
  onShowMissions,
}: {
  project: PreviewProject
  missionCount: number
  onShowMissions: () => void
}) {
  return (
    <div className="mobile-learning-screen">
      <section className="mobile-learning-detail-hero">
        <div className="mobile-learning-thumbnail is-large">
          <BookOutlined />
        </div>
        <span>{getProjectCategory(project)}</span>
        <h3>{project.title}</h3>
        <p>{project.description || 'PBL 프로젝트 정보를 확인합니다.'}</p>
        <div className="mobile-learning-chip-row">
          <Tag>{getProjectDifficulty(project)}</Tag>
          <Tag>{getProjectDuration(project)}</Tag>
          <Tag>{missionCount}개 미션</Tag>
        </div>
      </section>
      <div className="mobile-learning-tabs">
        <button type="button" className="is-active">프로젝트 정보</button>
        <button type="button" onClick={onShowMissions}>미션 구성</button>
      </div>
      <MobileInfoSection
        title="문제 상황"
        body={project.problem_statement || '문제 상황을 확인합니다.'}
      />
      <MobileInfoSection
        title="PBL 목표"
        body={project.learning_goals.join('\n') || asString(record(project).project_goal, '학습 목표를 확인합니다.')}
      />
      <MobileFactList
        items={[
          ['최종 산출물', record(project).final_outputs],
          ['선행 학습 권장', record(project).prerequisites],
          ['활용 기술 스택', record(project).tech_stack],
          ['학습 기간', getProjectDuration(project)],
        ]}
      />
    </div>
  )
}

function MobileMissionListScreen({
  missions,
  activeMissionId,
  onSelectMission,
}: {
  missions: PreviewMission[]
  activeMissionId?: string
  onSelectMission: (mission: PreviewMission) => void
}) {
  return (
    <div className="mobile-learning-screen">
      <section className="mobile-learning-section-heading">
        <span>미션 구성</span>
        <h3>순서대로 미션을 진행하세요</h3>
        <p>모바일 중심 활동과 PC 검증 활동이 함께 표시됩니다.</p>
      </section>
      <div className="mobile-learning-list">
        {missions.map((mission) => {
          const counts = getMissionPreviewCounts(mission)
          const deviceText = getMissionDeviceLabel(mission)

          return (
            <button
              type="button"
              className={`mobile-learning-list-item${mission.mission_id === activeMissionId ? ' is-active' : ''}`}
              key={mission.mission_id}
              onClick={() => onSelectMission(mission)}
            >
              <span>{mission.mission_order}</span>
              <div>
                <strong>{mission.title}</strong>
                <p>{mission.mission_overview || mission.learning_goal || '미션 개요를 확인합니다.'}</p>
                <small>미완료 · {deviceText} · {mission.estimated_time || '권장 시간 미정'} · {counts.mobile}개 모바일 Step</small>
              </div>
              <RightOutlined />
            </button>
          )
        })}
      </div>
    </div>
  )
}

function MobileMissionDetailScreen({
  mission,
  mobileSteps,
  onStartStep,
}: {
  mission: PreviewMission
  mobileSteps: VisiblePreviewStep[]
  onStartStep: (stepIndex: number) => void
}) {
  return (
    <div className="mobile-learning-screen">
      <section className="mobile-learning-section-heading">
        <span>Mission {mission.mission_order}</span>
        <h3>{mission.title}</h3>
        <p>{mission.mission_overview || '미션 설명을 확인하고 Step 학습을 시작합니다.'}</p>
      </section>
      <MobileFactList
        items={[
          ['학습 목표', mission.learning_goal],
          ['권장 학습 시간', mission.estimated_time],
          ['필요 기기', getMissionDeviceLabel(mission)],
        ]}
      />
      <article className="mobile-learning-vod-card">
        <PlayCircleOutlined />
        <div>
          <strong>관련 VOD</strong>
          <p>{findVodFallback(mission)}</p>
        </div>
      </article>
      <section className="mobile-learning-step-list">
        <div className="mobile-learning-step-list-heading">
          <span>Step 목록</span>
          <strong>{mobileSteps.length}개</strong>
        </div>
        {mobileSteps.length ? mobileSteps.map(({ step, variant }, index) => (
          <button
            type="button"
            key={step.step_id}
            className="mobile-learning-step-row"
            onClick={() => onStartStep(index)}
          >
            <span>{step.step_order}</span>
            <div>
              <strong>{step.title}</strong>
              <small>{variant === 'summary' ? '요약 확인' : getBlockTypeLabel(step.block_type)}</small>
            </div>
            <RightOutlined />
          </button>
        )) : (
          <MobileEmptyState
            title="모바일 Step이 없습니다."
            description="이 미션은 PC 제출 또는 검증 중심으로 구성되어 있습니다."
          />
        )}
      </section>
    </div>
  )
}

function MobileStepPlayerScreen({
  mission,
  step,
  variant,
  stepIndex,
  stepCount,
  progress,
  response,
  hintOpen,
  onResponseChange,
}: {
  mission: PreviewMission
  step: PreviewStep
  variant: PreviewDisplayVariant
  stepIndex: number
  stepCount: number
  progress: number
  response?: StepResponseValue
  hintOpen: boolean
  onResponseChange: (stepId: string, value: StepResponseValue) => void
}) {
  return (
    <div className="mobile-learning-screen mobile-learning-step-player">
      <section className="mobile-learning-player-head">
        <div>
          <span>Step {stepIndex + 1} / {stepCount}</span>
          <strong>{mission.title}</strong>
        </div>
        <Progress percent={progress} size="small" showInfo={false} />
      </section>
      <section className="mobile-learning-question-card">
        <Tag>{variant === 'summary' ? '요약' : getBlockTypeLabel(step.block_type)}</Tag>
        <h3>{step.title}</h3>
        <p>{step.learner_text || step.learner_action || step.body || '학습 안내를 확인하고 활동을 진행합니다.'}</p>
      </section>
      <MobileStepInteraction
        mission={mission}
        step={step}
        response={response}
        onResponseChange={onResponseChange}
      />
      {hintOpen && (
        <aside className="mobile-learning-hint-card">
          <BulbOutlined />
          <div>
            <strong>힌트</strong>
            <p>{step.hint || '힌트가 준비되면 이곳에 표시됩니다.'}</p>
          </div>
        </aside>
      )}
    </div>
  )
}

function MobileStepInteraction({
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
  if (!reviewableBlockTypes.has(step.block_type)) {
    return (
      <MobileInfoSection
        title="활동 안내"
        body={step.body || step.learner_action || `${step.block_type} 활동은 JSON 원문 기준으로 검토합니다.`}
      />
    )
  }

  switch (step.block_type) {
    case 'situation_card':
    case 'concept_card':
    case 'vod_recommendation':
      return <MobileReadingInteraction step={step} />
    case 'single_choice':
      return (
        <MobileChoiceInteraction
          step={step}
          mode="single"
          value={typeof response === 'string' ? response : undefined}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'multiple_choice':
      return (
        <MobileChoiceInteraction
          step={step}
          mode="multiple"
          value={Array.isArray(response) ? response : []}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'sequence_order':
      return <MobileSequenceInteraction step={step} />
    case 'code_fill_blank':
      return (
        <MobileCodeFillBlankInteraction
          step={step}
          response={typeof response === 'string' ? response : undefined}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'code_error_finding':
      return (
        <MobileCodeChoiceInteraction
          step={step}
          title="오류 원인 선택"
          code={step.buggy_code || step.code}
          response={typeof response === 'string' ? response : undefined}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'result_prediction':
      return (
        <MobileCodeChoiceInteraction
          step={step}
          title="실행 결과 예측"
          code={step.code || getCodeBlockText(step)}
          response={typeof response === 'string' ? response : undefined}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'ai_tutor_question':
      return <MobileAiTutorInteraction step={step} />
    case 'self_checklist':
      return (
        <MobileChecklistInteraction
          step={step}
          value={Array.isArray(response) ? response : []}
          onChange={(value) => onResponseChange(step.step_id, value)}
        />
      )
    case 'pc_verification':
      return <MobilePcVerificationInteraction step={step} />
    case 'submission':
      return <MobileSubmissionInteraction mission={mission} step={step} />
    default:
      return <MobileInfoSection title="활동 안내" body={step.learner_action || '활동을 진행합니다.'} />
  }
}

function MobileReadingInteraction({ step }: { step: PreviewStep }) {
  return (
    <article className="mobile-learning-activity-card">
      <div className="mobile-learning-activity-icon">
        {step.block_type === 'vod_recommendation' ? <PlayCircleOutlined /> : <BookOutlined />}
      </div>
      <div>
        <strong>{step.block_type === 'vod_recommendation' ? '추천 학습 자료' : '읽기 활동'}</strong>
        <p>{step.body || step.mobile_summary || step.learner_action || '내용을 읽고 다음 활동으로 이동합니다.'}</p>
      </div>
    </article>
  )
}

function MobileChoiceInteraction({
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
  const options = getStepOptions(step)

  return (
    <section className="mobile-learning-input-card">
      <strong>{step.question || step.learner_action || '알맞은 선택지를 고르세요.'}</strong>
      {mode === 'single' ? (
        <Radio.Group
          value={typeof value === 'string' ? value : undefined}
          onChange={(event) => onChange(event.target.value)}
          options={options}
        />
      ) : (
        <Checkbox.Group
          value={Array.isArray(value) ? value : []}
          onChange={(checkedValues) => onChange(checkedValues.map(String))}
          options={options}
        />
      )}
    </section>
  )
}

function MobileSequenceInteraction({ step }: { step: PreviewStep }) {
  const items = step.code_blocks?.length
    ? step.code_blocks.map((block, index) => ({
        id: block.id || `block-${index + 1}`,
        label: block.content,
      }))
    : step.options.map((option) => ({
        id: getOptionValue(option),
        label: getOptionLabel(option),
      }))

  return (
    <section className="mobile-learning-input-card">
      <strong><OrderedListOutlined /> 순서를 맞춰보세요</strong>
      <ol className="mobile-learning-order-list">
        {(items.length ? items : [{ id: 'fallback', label: step.learner_action || '순서 배열 항목을 확인합니다.' }]).map((item, index) => (
          <li key={item.id}>
            <span>{index + 1}</span>
            <p>{item.label}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}

function MobileCodeFillBlankInteraction({
  step,
  response,
  onChange,
}: {
  step: PreviewStep
  response?: string
  onChange: (value: string) => void
}) {
  return (
    <section className="mobile-learning-code-task">
      <MobileCodePreview code={step.code_template || step.code || getCodeBlockText(step)} />
      {step.options.length ? (
        <Select
          value={response}
          placeholder="빈칸에 들어갈 항목 선택"
          onChange={onChange}
          options={getStepOptions(step)}
        />
      ) : (
        <Input
          value={response}
          placeholder="짧은 답을 입력하세요"
          onChange={(event) => onChange(event.target.value)}
        />
      )}
    </section>
  )
}

function MobileCodeChoiceInteraction({
  step,
  title,
  code,
  response,
  onChange,
}: {
  step: PreviewStep
  title: string
  code?: string
  response?: string
  onChange: (value: string) => void
}) {
  return (
    <section className="mobile-learning-code-task">
      <MobileCodePreview title={title} code={code || ''} />
      <MobileChoiceInteraction
        step={step}
        mode="single"
        value={response}
        onChange={(value) => onChange(String(value))}
      />
    </section>
  )
}

function MobileAiTutorInteraction({ step }: { step: PreviewStep }) {
  const questions = step.ai_tutor_questions?.length
    ? step.ai_tutor_questions
    : [step.question || step.learner_action || 'AI 교관에게 질문할 내용을 고릅니다.']

  return (
    <section className="mobile-learning-input-card">
      <strong><RobotOutlined /> AI 교관 질문</strong>
      <ul className="mobile-learning-question-list">
        {questions.map((question) => <li key={question}>{question}</li>)}
      </ul>
      <Button icon={<RobotOutlined />}>질문하기</Button>
    </section>
  )
}

function MobileChecklistInteraction({
  step,
  value,
  onChange,
}: {
  step: PreviewStep
  value: string[]
  onChange: (value: string[]) => void
}) {
  const items = step.checklist_items?.length
    ? step.checklist_items.map((item) => ({ label: item, value: item }))
    : getStepOptions(step)

  return (
    <section className="mobile-learning-input-card">
      <strong>{step.question || step.learner_action || '완료한 항목을 체크하세요.'}</strong>
      <Checkbox.Group
        value={value}
        onChange={(checkedValues) => onChange(checkedValues.map(String))}
        options={items}
      />
    </section>
  )
}

function MobilePcVerificationInteraction({ step }: { step: PreviewStep }) {
  return (
    <article className="mobile-learning-activity-card">
      <div className="mobile-learning-activity-icon">
        <DesktopOutlined />
      </div>
      <div>
        <strong>PC에서 이어하기</strong>
        <p>{step.mobile_summary || step.pc_detail || step.learner_action || '이 단계는 PC에서 검증하거나 제출합니다.'}</p>
      </div>
    </article>
  )
}

function MobileSubmissionInteraction({ mission, step }: { mission: PreviewMission; step: PreviewStep }) {
  const submission = record(mission.submission)

  return (
    <section className="mobile-learning-input-card">
      <strong>{step.title || asString(submission.submission_title, '제출 안내')}</strong>
      <p>{step.learner_text || asString(submission.student_instruction, '완성한 산출물을 제출합니다.')}</p>
      <Button icon={<UploadOutlined />}>파일 업로드</Button>
    </section>
  )
}

function MobileCodePreview({ title = '코드 보기', code }: { title?: string; code?: string }) {
  return (
    <div className="mobile-learning-code-preview">
      <span>{title}</span>
      <pre>{code || '표시할 코드가 없습니다.'}</pre>
    </div>
  )
}

function MobileStepReviewPanel({
  currentScreen,
  mission,
  selectedStep,
  selectedVariant,
  selectedStepIndex,
  stepCount,
}: {
  currentScreen: MobilePreviewScreen
  mission?: PreviewMission
  selectedStep?: PreviewStep
  selectedVariant?: PreviewDisplayVariant
  selectedStepIndex: number
  stepCount: number
}) {
  const hasAnswer = selectedStep ? hasStepAnswer(selectedStep) : false

  return (
    <aside className="mobile-learning-review-panel">
      <div>
        <span>모바일 플로우 검토</span>
        <strong>{screenLabels[currentScreen]}</strong>
        <p>모바일 프레임 안은 학습자 화면만 표시하고, 생성 검토 정보는 이 패널에서 확인합니다.</p>
      </div>
      <div className="mobile-learning-review-tags">
        <Tag>{screenLabels[currentScreen]}</Tag>
        {mission && <Tag>Mission {mission.mission_order}</Tag>}
        {selectedStep && <Tag>Step {selectedStepIndex + 1}/{stepCount}</Tag>}
        {selectedVariant && <Tag>{selectedVariant === 'summary' ? '요약' : '직접 수행'}</Tag>}
        {hasAnswer && <Tag color="success">정답 있음</Tag>}
        {selectedStep && !selectedStep.completion_rule && <Tag color="warning">완료 조건 확인</Tag>}
      </div>
      <ReviewInfoGrid
        items={[
          ['현재 화면', screenLabels[currentScreen]],
          ['선택된 미션', mission ? `${mission.mission_order}. ${mission.title}` : '없음'],
          ['선택된 Step', selectedStep ? `${selectedStep.step_order}. ${selectedStep.title}` : '없음'],
          ['block_type', selectedStep?.block_type],
          ['device_target', selectedStep?.device_target],
          ['learning_role', selectedStep?.learning_role],
          ['정답 있음 여부', selectedStep ? (hasAnswer ? '있음' : '없음') : undefined],
          ['완료 조건 있음 여부', selectedStep ? (selectedStep.completion_rule ? '있음' : '없음') : undefined],
        ]}
      />
      {selectedStep ? (
        <details className="mobile-learning-review-details">
          <summary>기획자 정보 보기</summary>
          <ReviewInfoGrid
            items={[
              ['기획자 메모', selectedStep.planner_note],
              ['개발 메모', selectedStep.developer_note],
              ['예상 답안', selectedStep.expected_answer_text],
              ['정답', selectedStep.correct_answer],
              ['해설', selectedStep.explanation],
              ['힌트', selectedStep.hint],
              ['완료 조건', selectedStep.completion_rule],
              ['평가 기준', selectedStep.evaluation_criteria?.join('\n')],
            ]}
          />
          {selectedStep.options.length > 0 && (
            <div className="mobile-learning-review-options">
              {selectedStep.options.map((option) => (
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
      ) : (
        <p className="mobile-learning-muted">Step 화면에 진입하면 선택 Step 검토 정보가 표시됩니다.</p>
      )}
    </aside>
  )
}

function MobileInfoSection({ title, body }: { title: string; body?: string }) {
  return (
    <section className="mobile-learning-info-section">
      <span>{title}</span>
      <p>{body || '표시할 정보가 없습니다.'}</p>
    </section>
  )
}

function MobileFactList({ items }: { items: [string, unknown][] }) {
  const visibleItems = items
    .map(([label, value]) => [label, toDisplayText(value)] as [string, string])
    .filter(([, value]) => value)

  if (!visibleItems.length) return null

  return (
    <dl className="mobile-learning-fact-list">
      {visibleItems.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

function ReviewInfoGrid({ items }: { items: [string, unknown][] }) {
  const visibleItems = items
    .map(([label, value]) => [label, toDisplayText(value)] as [string, string])
    .filter(([, value]) => value)

  if (!visibleItems.length) return <p className="mobile-learning-muted">표시할 검토 정보가 없습니다.</p>

  return (
    <dl className="mobile-learning-review-grid">
      {visibleItems.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  )
}

function MobileEmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="mobile-learning-empty">
      <FileDoneOutlined />
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  )
}

function getBackHandler(
  currentScreen: MobilePreviewScreen,
  setCurrentScreen: (screen: MobilePreviewScreen) => void,
) {
  if (currentScreen === 'pbl_list') return undefined
  if (currentScreen === 'project_detail') return () => setCurrentScreen('pbl_list')
  if (currentScreen === 'mission_list') return () => setCurrentScreen('project_detail')
  if (currentScreen === 'mission_detail') return () => setCurrentScreen('mission_list')
  return () => setCurrentScreen('mission_detail')
}

function getFrameTitle(
  currentScreen: MobilePreviewScreen,
  project: PreviewProject,
  mission?: PreviewMission,
) {
  if (currentScreen === 'mission_detail' || currentScreen === 'step_player') {
    return mission?.title || project.title
  }
  if (currentScreen === 'mission_list') return '미션 구성'
  if (currentScreen === 'pbl_list') return 'Mili AI 학습'
  return project.title
}

function getProjectCategory(project: PreviewProject) {
  const projectRecord = record(project)
  return asString(
    projectRecord.category
      || projectRecord.subject
      || projectRecord.learning_mode
      || projectRecord.environment_type,
    'PBL 학습',
  )
}

function getProjectDuration(project: PreviewProject) {
  return asString(record(project).duration_label, '예상 기간 미정')
}

function getProjectDifficulty(project: PreviewProject) {
  const projectRecord = record(project)
  const difficulty = record(projectRecord.difficulty)
  const label = asString(projectRecord.difficulty_label || difficulty.label)
  const level = asString(projectRecord.difficulty_level || difficulty.level)

  if (label) return label
  if (level) return `${level}레벨`
  return '난이도 미정'
}

function getMissionPreviewCounts(mission: PreviewMission) {
  return mission.steps.reduce(
    (counts, step) => ({
      mobile: counts.mobile + (getPreviewDisplayVariant(step, 'mobile') !== 'hidden' ? 1 : 0),
      pc: counts.pc + (getPreviewDisplayVariant(step, 'pc') !== 'hidden' ? 1 : 0),
    }),
    { mobile: 0, pc: 0 },
  )
}

function getMissionDeviceLabel(mission: PreviewMission) {
  const counts = getMissionPreviewCounts(mission)
  if (mission.is_pc_required || mission.device_target === 'pc') return 'PC 필요'
  if (mission.device_target === 'both' || counts.pc > 0) return '모바일 + PC'
  return '모바일 중심'
}

function findVodFallback(mission: PreviewMission) {
  const vodStep = mission.steps.find((step) => step.block_type === 'vod_recommendation')
  return vodStep?.title || vodStep?.body || vodStep?.learner_text || '관련 VOD 추천 예정'
}

function getBlockTypeLabel(blockType: string) {
  switch (blockType) {
    case 'situation_card':
      return '상황 이해'
    case 'concept_card':
      return '개념 확인'
    case 'vod_recommendation':
      return 'VOD 추천'
    case 'single_choice':
      return '객관식 선택'
    case 'multiple_choice':
      return '다중 선택'
    case 'sequence_order':
      return '순서 배열'
    case 'code_fill_blank':
      return '코드 빈칸'
    case 'code_error_finding':
      return '오류 찾기'
    case 'result_prediction':
      return '결과 예측'
    case 'ai_tutor_question':
      return 'AI 질문'
    case 'self_checklist':
      return '체크리스트'
    case 'pc_verification':
      return 'PC 검증'
    case 'submission':
      return '제출'
    default:
      return blockType
  }
}

function getStepOptions(step: PreviewStep) {
  if (step.options.length) {
    return step.options.map((option) => ({
      label: getOptionLabel(option),
      value: getOptionValue(option),
    }))
  }

  return [
    { label: '선택지 준비 중', value: 'fallback-option' },
  ]
}

function getOptionLabel(option: PreviewStepOption) {
  return option.label || option.option_label || option.option_value || `선택지 ${option.option_order}`
}

function getOptionValue(option: PreviewStepOption) {
  return option.option_id || option.option_value || option.option_label || `option-${option.option_order}`
}

function getCodeBlockText(step: PreviewStep) {
  return step.code_blocks?.map((block) => block.content).join('\n\n') || ''
}

function hasStepAnswer(step: PreviewStep) {
  return Boolean(
    step.correct_answer
      || step.expected_answer_text
      || step.explanation
      || step.correct_order?.length
      || step.options.some((option) => option.is_correct || option.is_expected),
  )
}

function record(value: unknown): Record<string, unknown> {
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
