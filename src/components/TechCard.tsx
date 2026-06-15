import { RightOutlined, StarFilled, StarOutlined } from '@ant-design/icons'
import { Button, Card, Tag, Tooltip } from 'antd'
import type { TechItem } from '../types/tech'
import { highlightText } from '../utils/search'

type TechCardProps = {
  item: TechItem
  query: string
  favorite: boolean
  onOpen: (item: TechItem) => void
  onTagClick: (tag: string) => void
  onToggleFavorite: (id: string) => void
}

export function TechCard({ item, query, favorite, onOpen, onTagClick, onToggleFavorite }: TechCardProps) {
  return (
    <Card
      className="tech-card"
      hoverable
      role="button"
      tabIndex={0}
      onClick={() => onOpen(item)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') onOpen(item)
      }}
    >
      <div className="tech-card-heading">
        <div>
          <span className="category-kicker">{highlightText(item.category, query)}</span>
          <h3>{highlightText(item.name, query)}</h3>
        </div>
        <Tooltip title={favorite ? '즐겨찾기 해제' : '즐겨찾기 추가'}>
          <Button
            className={`favorite-button ${favorite ? 'is-favorite' : ''}`}
            type="text"
            shape="circle"
            aria-label={favorite ? `${item.name} 즐겨찾기 해제` : `${item.name} 즐겨찾기 추가`}
            icon={favorite ? <StarFilled /> : <StarOutlined />}
            onClick={(event) => {
              event.stopPropagation()
              onToggleFavorite(item.id)
            }}
          />
        </Tooltip>
      </div>

      <p className="simple-description">{highlightText(item.simpleDescription, query)}</p>

      <div className="pbl-preview">
        <span>PBL 콘텐츠로 만들 때</span>
        <p>{highlightText(item.pblUsage, query)}</p>
      </div>

      <div className="unit-preview">
        <span>Unit 예시</span>
        <p>{highlightText(item.unitExamples, query)}</p>
      </div>

      <div className="card-footer">
        <div className="card-tags">
          {item.tags.slice(0, 5).map((tag) => (
            <Tag
              key={tag}
              onClick={(event) => {
                event.stopPropagation()
                onTagClick(tag)
              }}
            >
              {tag}
            </Tag>
          ))}
        </div>
        <span className="detail-link">
          상세 보기 <RightOutlined />
        </span>
      </div>
    </Card>
  )
}
