import { Button } from 'antd'

type CategoryFilterProps = {
  categories: string[]
  selected: string
  counts: Record<string, number>
  onChange: (category: string) => void
}

export function CategoryFilter({ categories, selected, counts, onChange }: CategoryFilterProps) {
  return (
    <section className="filter-section">
      <h2>카테고리</h2>
      <div className="category-list">
        {['전체', ...categories].map((category) => (
          <Button
            key={category}
            className="category-button"
            type={selected === category ? 'primary' : 'text'}
            onClick={() => onChange(category)}
          >
            <span>{category}</span>
            <span className="category-count">{counts[category] ?? 0}</span>
          </Button>
        ))}
      </div>
    </section>
  )
}
