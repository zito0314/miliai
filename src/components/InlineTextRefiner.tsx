import { useState } from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Alert, Button, Input, Modal, Space } from 'antd'
import type { PblPlan } from '../types/pbl'
import { refinePblPlan } from '../services/refinePblPlan'

type InlineTextRefinerProps = {
  currentPlan: PblPlan
  targetPath: string
  currentText: string
  onUpdated: (updatedPlan: PblPlan, changeSummary?: string) => void
}

const { TextArea } = Input

const presets = ['더 쉽게', '더 구체적으로', '군 맥락 강화', '기획서 문체로', '짧게 요약', '평가 가능하게']

export function InlineTextRefiner({ currentPlan, targetPath, currentText, onUpdated }: InlineTextRefinerProps) {
  const [open, setOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [refining, setRefining] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (nextFeedback = feedback) => {
    const trimmedFeedback = nextFeedback.trim()
    if (!trimmedFeedback) {
      setError('문장 수정 방향을 입력해주세요.')
      return
    }

    setRefining(true)
    setError(null)
    try {
      const result = await refinePblPlan({
        mode: 'text',
        currentPlan,
        targetPath,
        currentText,
        feedback: trimmedFeedback,
      })
      onUpdated(result.updatedPlan, result.changeSummary)
      setFeedback('')
      setOpen(false)
    } catch {
      setError('문장 수정 중 오류가 발생했어요.')
    } finally {
      setRefining(false)
    }
  }

  return (
    <>
      <Button size="small" type="text" icon={<EditOutlined />} onClick={() => setOpen(true)}>
        문장 수정
      </Button>
      <Modal
        title="텍스트 블록 수정"
        open={open}
        okText={refining ? '수정 중...' : '수정 반영'}
        cancelText="취소"
        confirmLoading={refining}
        onCancel={() => {
          if (!refining) setOpen(false)
        }}
        onOk={() => void handleSubmit()}
      >
        <div className="inline-refine-current">
          <span>현재 텍스트</span>
          <p>{currentText}</p>
        </div>
        <Space className="inline-refine-presets" wrap>
          {presets.map((preset) => (
            <Button key={preset} size="small" disabled={refining} onClick={() => void handleSubmit(preset)}>
              {preset}
            </Button>
          ))}
        </Space>
        <TextArea
          value={feedback}
          rows={4}
          disabled={refining}
          placeholder="예: 더 쉽게 설명하되 군 행정 업무 맥락은 유지해줘."
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
