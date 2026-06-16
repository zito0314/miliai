import { useState } from 'react'
import { RollbackOutlined, SendOutlined } from '@ant-design/icons'
import { Alert, Button, Input } from 'antd'
import type { PblPlan } from '../types/pbl'
import type { TechItem } from '../types/tech'
import { refinePblPlan } from '../services/refinePblPlan'

type PblFeedbackPanelProps = {
  plan: PblPlan
  subjectName: string
  techItems: TechItem[]
  historyCount: number
  onUpdated: (plan: PblPlan, changeSummary?: string) => void
  onUndo: () => void
}

const { TextArea } = Input

export function PblFeedbackPanel({ plan, subjectName, techItems, historyCount, onUpdated, onUndo }: PblFeedbackPanelProps) {
  const [feedback, setFeedback] = useState('')
  const [refining, setRefining] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleRefine = async () => {
    const trimmedFeedback = feedback.trim()
    if (!trimmedFeedback) {
      setError('수정 요청을 입력해주세요.')
      return
    }

    setRefining(true)
    setError(null)
    try {
      const result = await refinePblPlan({
        mode: 'full',
        subjectName,
        currentPlan: plan,
        techItems,
        feedback: trimmedFeedback,
      })
      onUpdated(result.updatedPlan, result.changeSummary)
      setFeedback('')
    } catch {
      setError('피드백 반영 중 오류가 발생했어요.')
    } finally {
      setRefining(false)
    }
  }

  return (
    <section className="pbl-feedback-panel" aria-label="PBL 전체 피드백 반영">
      <div className="pbl-feedback-heading">
        <div>
          <span>피드백 반영</span>
          <h3>생성 결과 전체 조정</h3>
          <p>생성된 PBL 초안에 대한 수정 요청을 입력하면 AI가 반영해 다시 정리합니다.</p>
        </div>
        <Button icon={<RollbackOutlined />} disabled={historyCount === 0 || refining} onClick={onUndo}>
          이전 버전으로 되돌리기
        </Button>
      </div>

      <div className="pbl-feedback-form">
        <TextArea
          value={feedback}
          rows={4}
          disabled={refining}
          placeholder={'예: 미션지를 2개로 줄이고, 전체 난이도를 초급으로 낮춰줘.\n예: 군 행정 업무 맥락이 더 드러나게 수정해줘.'}
          onChange={(event) => {
            setFeedback(event.target.value)
            if (error) setError(null)
          }}
        />
        <Button type="primary" icon={<SendOutlined />} loading={refining} onClick={() => void handleRefine()}>
          {refining ? '피드백 반영 중...' : '피드백 반영하기'}
        </Button>
      </div>

      {error && <Alert className="refine-error-alert" type="error" showIcon message={error} />}
    </section>
  )
}
