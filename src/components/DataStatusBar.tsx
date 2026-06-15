import { ReloadOutlined } from '@ant-design/icons'
import { Alert, Button, Spin } from 'antd'

type DataStatusBarProps = {
  loading: boolean
  error: string | null
  lastUpdated: Date | null
  itemCount: number
  onRefresh: () => void
}

const formatUpdatedAt = (date: Date) => {
  const pad = (value: number) => String(value).padStart(2, '0')
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}`
}

export function DataStatusBar({ loading, error, lastUpdated, itemCount, onRefresh }: DataStatusBarProps) {
  return (
    <section className="data-status-section" aria-live="polite">
      <div className="data-status-inner">
        <div className="data-status-copy">
          {loading ? <Spin size="small" /> : <span className={`status-dot ${error ? 'is-error' : ''}`} />}
          <div>
            <strong>{loading && itemCount === 0 ? '기술 데이터를 불러오는 중이에요.' : `${itemCount}개 기술 데이터 연결됨`}</strong>
            <span>{lastUpdated ? `마지막 업데이트: ${formatUpdatedAt(lastUpdated)}` : '아직 업데이트되지 않았어요.'}</span>
          </div>
        </div>
        <Button icon={<ReloadOutlined spin={loading} />} loading={loading} onClick={onRefresh}>
          데이터 새로고침
        </Button>
      </div>
      {error && (
        <Alert
          className="data-error-alert"
          type="error"
          showIcon
          message="데이터를 불러오지 못했어요. Google Sheets CSV 링크 또는 게시 상태를 확인해주세요."
          description={error}
          action={
            <Button size="small" danger onClick={onRefresh}>
              다시 시도
            </Button>
          }
        />
      )}
    </section>
  )
}
