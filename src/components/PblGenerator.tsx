import { useEffect, useState } from 'react'
import { DeleteOutlined, FolderOpenOutlined, HistoryOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { Alert, Button, Input, Select, Tag } from 'antd'
import {
  DEFAULT_GENERATION_MODEL_ID,
  GENERATION_MODEL_OPTIONS,
  type GenerationModelId,
} from '../types/generationModel'
import type { PblGenerationHistoryRecord } from '../types/pblHistory'
import type { PblPlan } from '../types/pbl'
import type { TechItem } from '../types/tech'
import { generatePblPlan } from '../services/generatePblPlan'
import {
  clearRemotePblGenerationHistory,
  deleteRemotePblGenerationHistoryRecord,
  fetchRemotePblGenerationHistory,
  upsertRemotePblGenerationHistoryRecord,
} from '../services/pblGenerationHistoryApi'
import {
  clearPblGenerationHistory,
  createPblGenerationHistoryRecord,
  deletePblGenerationHistoryRecord,
  loadPblGenerationHistory,
  savePblGenerationHistory,
  updatePblGenerationHistoryRecord,
  upsertPblGenerationHistoryRecord,
} from '../utils/pblGenerationHistory'
import {
  createEquipmentMaintenanceExamplePblPlan,
  createLogisticsExamplePblPlan,
  createPxSalesBeginnerExamplePblPlan,
} from '../utils/createLogisticsExamplePblPlan'
import { downloadJson } from '../utils/downloadJson'
import { PblPlanResult } from './PblPlanResult'

const HISTORY_PAGE_SIZE = 5

type PblGeneratorProps = {
  techItems: TechItem[]
  isTechItemsLoading: boolean
  onLoadTechItems: () => Promise<TechItem[] | null>
}

export function PblGenerator({ techItems, isTechItemsLoading, onLoadTechItems }: PblGeneratorProps) {
  const [subjectName, setSubjectName] = useState('')
  const [plan, setPlan] = useState<PblPlan | null>(null)
  const [planHistory, setPlanHistory] = useState<PblPlan[]>([])
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [generationModel, setGenerationModel] = useState<GenerationModelId>(DEFAULT_GENERATION_MODEL_ID)
  const [generationRecords, setGenerationRecords] = useState<PblGenerationHistoryRecord[]>(() =>
    loadPblGenerationHistory(),
  )
  const [activeHistoryId, setActiveHistoryId] = useState<string | null>(null)

  const replaceHistoryRecords = (records: PblGenerationHistoryRecord[]) => {
    const savedRecords = savePblGenerationHistory(records)
    setGenerationRecords(savedRecords)
    if (activeHistoryId && !savedRecords.some((record) => record.id === activeHistoryId)) {
      setActiveHistoryId(null)
    }
  }

  const syncRemoteHistoryRecords = (records: PblGenerationHistoryRecord[] | null) => {
    if (records !== null) replaceHistoryRecords(records)
  }

  useEffect(() => {
    let ignore = false

    void fetchRemotePblGenerationHistory()
      .then((remoteRecords) => {
        if (ignore || remoteRecords === null) return
        const savedRecords = savePblGenerationHistory(remoteRecords)
        setGenerationRecords(savedRecords)
      })
      .catch((historyError) => {
        console.warn('Remote PBL history load failed', historyError)
      })

    return () => {
      ignore = true
    }
  }, [])

  const handleGenerate = async () => {
    const trimmedSubject = subjectName.trim()
    if (!trimmedSubject) {
      setError('과목명을 입력해주세요.')
      return
    }

    setGenerating(true)
    setError(null)
    try {
      const refreshedTechItems = await onLoadTechItems()
      const techItemsForGeneration = refreshedTechItems ?? techItems

      if (techItemsForGeneration.length === 0) {
        setError('기술 데이터를 불러오지 못했어요. 데이터를 확인한 뒤 다시 시도해주세요.')
        return
      }

      const generatedPlan = await generatePblPlan(trimmedSubject, techItemsForGeneration, generationModel)
      const historyRecord = createPblGenerationHistoryRecord(generatedPlan, generationModel)
      setPlan(generatedPlan)
      setPlanHistory([])
      setActiveHistoryId(historyRecord.id)
      setGenerationRecords((currentRecords) => upsertPblGenerationHistoryRecord(currentRecords, historyRecord))
      void upsertRemotePblGenerationHistoryRecord(historyRecord)
        .then(syncRemoteHistoryRecords)
        .catch((historyError) => {
          console.warn('Remote PBL history save failed', historyError)
        })
    } catch (generationError) {
      setError(
        generationError instanceof Error
          ? generationError.message
          : '콘텐츠 생성 중 오류가 발생했어요. 잠시 후 다시 시도해주세요.',
      )
    } finally {
      setGenerating(false)
    }
  }

  const waitingForInitialTechItems = isTechItemsLoading && techItems.length === 0

  const handleOpenExampleContent = async () => {
    setGenerating(true)
    setError(null)
    try {
      const examplePlan = await createLogisticsExamplePblPlan()
      const historyRecord = createPblGenerationHistoryRecord(examplePlan, generationModel)
      setPlan(examplePlan)
      setSubjectName(examplePlan.project.title)
      setPlanHistory([])
      setActiveHistoryId(historyRecord.id)
      setGenerationRecords((currentRecords) => upsertPblGenerationHistoryRecord(currentRecords, historyRecord))
      void upsertRemotePblGenerationHistoryRecord(historyRecord)
        .then(syncRemoteHistoryRecords)
        .catch((historyError) => {
          console.warn('Remote PBL history save failed', historyError)
        })
    } catch (exampleError) {
      setError(exampleError instanceof Error ? exampleError.message : '예시 콘텐츠를 불러오지 못했어요.')
    } finally {
      setGenerating(false)
    }
  }

  const handleOpenEquipmentMaintenanceExampleContent = async () => {
    setGenerating(true)
    setError(null)
    try {
      const examplePlan = await createEquipmentMaintenanceExamplePblPlan()
      const historyRecord = createPblGenerationHistoryRecord(examplePlan, generationModel)
      setPlan(examplePlan)
      setSubjectName(examplePlan.project.title)
      setPlanHistory([])
      setActiveHistoryId(historyRecord.id)
      setGenerationRecords((currentRecords) => upsertPblGenerationHistoryRecord(currentRecords, historyRecord))
      void upsertRemotePblGenerationHistoryRecord(historyRecord)
        .then(syncRemoteHistoryRecords)
        .catch((historyError) => {
          console.warn('Remote PBL history save failed', historyError)
        })
    } catch (exampleError) {
      setError(exampleError instanceof Error ? exampleError.message : '장비 정비 이력 예시 콘텐츠를 불러오지 못했어요.')
    } finally {
      setGenerating(false)
    }
  }

  const handleOpenPxSalesBeginnerExampleContent = async () => {
    setGenerating(true)
    setError(null)
    try {
      const examplePlan = await createPxSalesBeginnerExamplePblPlan()
      const historyRecord = createPblGenerationHistoryRecord(examplePlan, generationModel)
      setPlan(examplePlan)
      setSubjectName(examplePlan.project.title)
      setPlanHistory([])
      setActiveHistoryId(historyRecord.id)
      setGenerationRecords((currentRecords) => upsertPblGenerationHistoryRecord(currentRecords, historyRecord))
      void upsertRemotePblGenerationHistoryRecord(historyRecord)
        .then(syncRemoteHistoryRecords)
        .catch((historyError) => {
          console.warn('Remote PBL history save failed', historyError)
        })
    } catch (exampleError) {
      setError(exampleError instanceof Error ? exampleError.message : 'PX 인기 품목 분석 예시 콘텐츠를 불러오지 못했어요.')
    } finally {
      setGenerating(false)
    }
  }

  const handleDownloadExampleJson = async () => {
    setGenerating(true)
    setError(null)
    try {
      const examplePlan = await createLogisticsExamplePblPlan()
      downloadJson(examplePlan)
    } catch (exampleError) {
      setError(exampleError instanceof Error ? exampleError.message : '예시 JSON을 다운로드하지 못했어요.')
    } finally {
      setGenerating(false)
    }
  }

  const unavailable = isTechItemsLoading || techItems.length === 0

  const handlePlanUpdated = (updatedPlan: PblPlan) => {
    setPlan((currentPlan) => {
      if (!currentPlan) return updatedPlan
      setPlanHistory((currentHistory) => [...currentHistory, currentPlan])
      return updatedPlan
    })
    persistActivePlan(updatedPlan)
  }

  const handleUndo = () => {
    const previousPlan = planHistory.at(-1)
    if (!previousPlan) return

    setPlan(previousPlan)
    setPlanHistory(planHistory.slice(0, -1))
    persistActivePlan(previousPlan)
  }

  const persistActivePlan = (updatedPlan: PblPlan) => {
    if (!activeHistoryId) return
    setGenerationRecords((currentRecords) => {
      const nextRecords = updatePblGenerationHistoryRecord(currentRecords, activeHistoryId, updatedPlan)
      const nextRecord = nextRecords.find((record) => record.id === activeHistoryId)
      if (nextRecord) {
        void upsertRemotePblGenerationHistoryRecord(nextRecord)
          .then(syncRemoteHistoryRecords)
          .catch((historyError) => {
            console.warn('Remote PBL history update failed', historyError)
          })
      }
      return nextRecords
    })
  }

  const handleOpenHistoryRecord = (record: PblGenerationHistoryRecord) => {
    setPlan(record.plan)
    setSubjectName(record.subjectName)
    setGenerationModel(record.generationModel)
    setPlanHistory([])
    setActiveHistoryId(record.id)
    setError(null)
  }

  const handleDeleteHistoryRecord = (recordId: string) => {
    setGenerationRecords((currentRecords) => deletePblGenerationHistoryRecord(currentRecords, recordId))
    if (activeHistoryId === recordId) setActiveHistoryId(null)
    void deleteRemotePblGenerationHistoryRecord(recordId)
      .then(syncRemoteHistoryRecords)
      .catch((historyError) => {
        console.warn('Remote PBL history delete failed', historyError)
      })
  }

  const handleClearHistory = () => {
    setGenerationRecords(clearPblGenerationHistory())
    setActiveHistoryId(null)
    void clearRemotePblGenerationHistory()
      .then(syncRemoteHistoryRecords)
      .catch((historyError) => {
        console.warn('Remote PBL history clear failed', historyError)
      })
  }

  return (
    <section className="pbl-generator-section">
      <div className="pbl-generator-inner">
        <div className="pbl-generator-heading">
          <div>
            <span>AI 과정설계 도구</span>
            <h2>PBL 과정 자동 생성</h2>
            <p>과목명을 입력하면 프로젝트개요, 미션지, 평가표, 참고자료 시트 초안을 생성합니다.</p>
          </div>
        </div>

        <div className="pbl-generator-form">
          <Input
            size="large"
            value={subjectName}
            placeholder="예: 데이터 기반 조달 및 소요예측"
            aria-label="PBL 과목명"
            onChange={(event) => {
              setSubjectName(event.target.value)
              if (error === '과목명을 입력해주세요.') setError(null)
            }}
            onPressEnter={() => {
              if (!generating && !waitingForInitialTechItems) void handleGenerate()
            }}
          />
          <Select<GenerationModelId>
            className="pbl-model-select"
            size="large"
            value={generationModel}
            aria-label="생성 모델"
            disabled={generating}
            options={GENERATION_MODEL_OPTIONS.map((option) => ({
              value: option.id,
              label: `${option.provider}: ${option.modelName}`,
            }))}
            onChange={setGenerationModel}
          />
          <Button
            type="primary"
            size="large"
            icon={<ThunderboltOutlined />}
            loading={generating}
            disabled={waitingForInitialTechItems}
            onClick={() => void handleGenerate()}
          >
            {generating ? '생성 중...' : '콘텐츠 생성'}
          </Button>
        </div>

        <div className="pbl-generator-example-actions">
          <Button size="large" onClick={() => void handleOpenExampleContent()} disabled={generating}>
            AI 기반 군수 운영 최적화 과정 예시 보기
          </Button>
          <Button size="large" onClick={() => void handleOpenEquipmentMaintenanceExampleContent()} disabled={generating}>
            장비 정비 이력 예시 보기
          </Button>
          <Button size="large" onClick={() => void handleOpenPxSalesBeginnerExampleContent()} disabled={generating}>
            PX 인기 품목 분석 예시 보기
          </Button>
          <Button size="large" onClick={() => void handleDownloadExampleJson()} disabled={generating}>
            예시 JSON 다운로드
          </Button>
          <p>AI 연결 없이 미션 브리핑과 Step 화면을 바로 확인합니다.</p>
        </div>

        {unavailable && <p className="pbl-generator-help">기술 데이터를 불러온 뒤 생성할 수 있어요.</p>}
        {error && <Alert className="pbl-generator-error" type="error" showIcon title={error} />}

        <PblGenerationHistoryPanel
          key={generationRecords[0]?.id ?? 'empty'}
          records={generationRecords}
          activeHistoryId={activeHistoryId}
          onOpen={handleOpenHistoryRecord}
          onDelete={handleDeleteHistoryRecord}
          onClear={handleClearHistory}
        />

        {plan && (
          <PblPlanResult
            plan={plan}
            subjectName={subjectName.trim() || plan.project.title}
            techItems={techItems}
            historyCount={planHistory.length}
            onPlanUpdated={handlePlanUpdated}
            onUndo={handleUndo}
          />
        )}
      </div>
    </section>
  )
}

function PblGenerationHistoryPanel({
  records,
  activeHistoryId,
  onOpen,
  onDelete,
  onClear,
}: {
  records: PblGenerationHistoryRecord[]
  activeHistoryId: string | null
  onOpen: (record: PblGenerationHistoryRecord) => void
  onDelete: (recordId: string) => void
  onClear: () => void
}) {
  const [visibleRecordCount, setVisibleRecordCount] = useState(HISTORY_PAGE_SIZE)
  const visibleRecords = records.slice(0, visibleRecordCount)
  const hiddenRecordCount = Math.max(records.length - visibleRecords.length, 0)

  return (
    <section className="pbl-history-panel" aria-label="PBL 생성 이력">
      <div className="pbl-history-heading">
        <div>
          <span><HistoryOutlined /> 생성 이력</span>
          <strong>{records.length}개 저장됨</strong>
        </div>
        <Button
          size="small"
          danger
          icon={<DeleteOutlined />}
          disabled={records.length === 0}
          onClick={onClear}
        >
          전체 삭제
        </Button>
      </div>

      {records.length === 0 ? (
        <p className="pbl-history-empty">저장된 생성 이력이 없습니다.</p>
      ) : (
        <>
          <div className="pbl-history-list">
            {visibleRecords.map((record) => (
              <article
                className={`pbl-history-item${record.id === activeHistoryId ? ' is-active' : ''}`}
                key={record.id}
                aria-current={record.id === activeHistoryId ? 'true' : undefined}
              >
                <div className="pbl-history-main">
                  <strong>{record.title}</strong>
                  <div className="pbl-history-meta">
                    <span>{formatHistoryDate(record.updatedAt)}</span>
                    <Tag>{record.generationModelName}</Tag>
                    <Tag>{record.plan.missions.length}개 미션</Tag>
                    {record.id === activeHistoryId && <Tag color="green">열림</Tag>}
                  </div>
                </div>
                <div className="pbl-history-actions">
                  <Button size="small" icon={<FolderOpenOutlined />} onClick={() => onOpen(record)}>
                    불러오기
                  </Button>
                  <Button size="small" danger icon={<DeleteOutlined />} onClick={() => onDelete(record.id)}>
                    삭제
                  </Button>
                </div>
              </article>
            ))}
          </div>
          {hiddenRecordCount > 0 && (
            <div className="pbl-history-more">
              <Button
                onClick={() => {
                  setVisibleRecordCount((currentCount) => currentCount + HISTORY_PAGE_SIZE)
                }}
              >
                더보기
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  )
}

function formatHistoryDate(value: string) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value

  return new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date)
}
