import { Empty, Button } from 'antd'

export function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="empty-state">
      <Empty description="검색 결과가 없어요. 다른 키워드나 태그로 검색해보세요." />
      <Button type="primary" onClick={onReset}>
        전체 보기
      </Button>
    </div>
  )
}
