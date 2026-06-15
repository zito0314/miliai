import { CheckCircleFilled, StarFilled, StarOutlined } from '@ant-design/icons'
import { Button, Drawer, Tag } from 'antd'
import type { TechItem } from '../types/tech'
import { parseUnitExamples } from '../utils/parseTags'

type TechDetailPanelProps = {
  item: TechItem | null
  favorite: boolean
  onClose: () => void
  onTagClick: (tag: string) => void
  onToggleFavorite: (id: string) => void
}

export function TechDetailPanel({ item, favorite, onClose, onTagClick, onToggleFavorite }: TechDetailPanelProps) {
  return (
    <Drawer
      className="tech-detail-drawer"
      title={item ? `${item.name} 상세` : '기술 상세'}
      size={560}
      open={Boolean(item)}
      onClose={onClose}
      extra={
        item ? (
          <Button
            type={favorite ? 'primary' : 'default'}
            icon={favorite ? <StarFilled /> : <StarOutlined />}
            onClick={() => onToggleFavorite(item.id)}
          >
            {favorite ? '저장됨' : '즐겨찾기'}
          </Button>
        ) : null
      }
    >
      {item && (
        <article className="detail-content">
          <div className="detail-title-block">
            <span>{item.category}</span>
            <h2>{item.name}</h2>
          </div>

          <DetailSection title="기술 설명" content={item.description} />
          <DetailSection title="쉽게 이해하면" content={item.simpleDescription} emphasis />
          <DetailSection title="주로 쓰이는 상황" content={item.useCases} />
          <DetailSection title="PBL 콘텐츠로 만들 때" content={item.pblUsage} />

          <section className="detail-section">
            <h3>이 기술로 만들 수 있는 Unit 예시</h3>
            <div className="unit-list">
              {parseUnitExamples(item.unitExamples).map((unit) => (
                <div key={unit}>
                  <CheckCircleFilled aria-hidden="true" />
                  <span>{unit}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h3>관련 태그</h3>
            <div className="detail-tags">
              {item.tags.map((tag) => (
                <Tag key={tag} onClick={() => onTagClick(tag)}>
                  {tag}
                </Tag>
              ))}
            </div>
          </section>
        </article>
      )}
    </Drawer>
  )
}

function DetailSection({ title, content, emphasis = false }: { title: string; content: string; emphasis?: boolean }) {
  return (
    <section className={`detail-section ${emphasis ? 'is-emphasis' : ''}`}>
      <h3>{title}</h3>
      <p>{content}</p>
    </section>
  )
}
