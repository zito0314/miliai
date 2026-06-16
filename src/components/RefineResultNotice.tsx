import { Alert } from 'antd'

type RefineResultNoticeProps = {
  message: string | null
}

export function RefineResultNotice({ message }: RefineResultNoticeProps) {
  if (!message) return null

  return (
    <Alert
      className="refine-result-notice"
      type="success"
      showIcon
      message="피드백을 반영했어요."
      description={message}
    />
  )
}
