import { useState } from 'react'
import { BulbOutlined, ThunderboltOutlined } from '@ant-design/icons'
import { Alert, Button, Input } from 'antd'
import type { PblPlan } from '../types/pbl'
import type { TechItem } from '../types/tech'
import { generatePblPlan } from '../services/generatePblPlan'
import { PblPlanResult } from './PblPlanResult'

type PblGeneratorProps = {
  techItems: TechItem[]
  isTechItemsLoading: boolean
}

export function PblGenerator({ techItems, isTechItemsLoading }: PblGeneratorProps) {
  const [subjectName, setSubjectName] = useState('')
  const [plan, setPlan] = useState<PblPlan | null>(null)
  const [generating, setGenerating] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = async () => {
    const trimmedSubject = subjectName.trim()
    if (!trimmedSubject) {
      setError('과목명을 입력해주세요.')
      return
    }

    setGenerating(true)
    setError(null)
    try {
      setPlan(await generatePblPlan(trimmedSubject, techItems))
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

  const unavailable = isTechItemsLoading || techItems.length === 0

  return (
    <section className="pbl-generator-section">
      <div className="pbl-generator-inner">
        <div className="pbl-generator-heading">
          <span className="pbl-generator-icon" aria-hidden="true"><BulbOutlined /></span>
          <div>
            <span>AI 과정설계 도구</span>
            <h2>PBL 과정 자동 생성</h2>
            <p>과목명을 입력하면 Unit, Mission, Problem/Task 초안을 생성합니다.</p>
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
              if (!generating && !unavailable) void handleGenerate()
            }}
          />
          <Button
            type="primary"
            size="large"
            icon={<ThunderboltOutlined />}
            loading={generating}
            disabled={unavailable}
            onClick={() => void handleGenerate()}
          >
            {generating ? '생성 중...' : '콘텐츠 생성'}
          </Button>
        </div>

        {unavailable && <p className="pbl-generator-help">기술 데이터를 불러온 뒤 생성할 수 있어요.</p>}
        {error && <Alert className="pbl-generator-error" type="error" showIcon title={error} />}

        {plan && <PblPlanResult plan={plan} />}
      </div>
    </section>
  )
}
