import { Tag } from 'antd'

type TagFilterProps = {
  tags: string[]
  selectedTags: string[]
  onToggle: (tag: string) => void
}

export function TagFilter({ tags, selectedTags, onToggle }: TagFilterProps) {
  return (
    <section className="filter-section">
      <h2>자주 쓰는 태그</h2>
      <div className="tag-cloud">
        {tags.map((tag) => {
          const selected = selectedTags.includes(tag)
          return (
            <Tag.CheckableTag key={tag} checked={selected} onChange={() => onToggle(tag)}>
              {tag}
            </Tag.CheckableTag>
          )
        })}
      </div>
    </section>
  )
}
