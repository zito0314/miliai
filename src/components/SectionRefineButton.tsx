import { useState } from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Alert, Button, Input, Modal } from 'antd'
import type { PblPlan } from '../types/pbl'
import type { RefineTargetType } from '../types/refine'
import type { TechItem } from '../types/tech'
import { refinePblPlan } from '../services/refinePblPlan'

type SectionRefineButtonProps = {
  currentPlan: PblPlan
  targetPath: string
  targetType: RefineTargetType
  targetData: unknown
  techItems: TechItem[]
  onUpdated: (plan: PblPlan, changeSummary?: string) => void
}

const { TextArea } = Input

export function SectionRefineButton({ currentPlan, targetPath, targetType, targetData, techItems, onUpdated }: SectionRefineButtonProps) {
  const [open, setOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [refining, setRefining] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    const trimmedFeedback = feedback.trim()
    if (!trimmedFeedback) {
      setError('섹션 수정 요청을 입력해주세요.')
      return
    }

    setRefining(true)
    setError(null)
    try {
      const result = await refinePblPlan({
        mode: 'section',
        currentPlan,
        targetPath,
        targetType,
        targetData,
        techItems,
        feedback: trimmedFeedback,
      })
      onUpdated(result.updatedPlan, result.changeSummary)
      setFeedback('')
      setOpen(false)
    } catch {
      setError('섹션 수정 중 오류가 발생했어요.')
    } finally {
      setRefining(false)
    }
  }

  return (
    <>
      <Button size="small" icon={<EditOutlined />} onClick={() => setOpen(true)}>
        이 섹션 수정
      </Button>
      <Modal
        title="섹션 단위 수정"
        open={open}
        okText={refining ? '수정 중...' : '수정 반영'}
        cancelText="취소"
        confirmLoading={refining}
        onCancel={() => {
          if (!refining) setOpen(false)
        }}
        onOk={() => void handleSubmit()}
      >
        <p className="refine-modal-copy">선택한 섹션만 피드백에 맞춰 다시 정리합니다.</p>
        <TextArea
          value={feedback}
          rows={5}
          disabled={refining}
          placeholder={'예: 문제 상황을 더 실제 부대 업무처럼 구체화해줘.\n예: 평가 기준을 PASS/FAIL로 더 명확하게 바꿔줘.\n예: 제출물 항목을 기획자가 바로 확인하기 쉽게 세분화해줘.'}
          onChange={(event) => {
            setFeedback(event.target.value)
            if (error) setError(null)
          }}
        />
        {error && <Alert className="refine-error-alert" type="error" showIcon message={error} />}
      </Modal>
    </>
  )
}
