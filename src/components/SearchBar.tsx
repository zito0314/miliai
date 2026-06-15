import { SearchOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'

type SearchBarProps = {
  value: string
  resultCount: number
  onChange: (value: string) => void
}

const examples = ['식자재 발주량 예측', '드론 경로 최적화', '문서 자동 검토', '학습자 추천', '챗봇']

export function SearchBar({ value, resultCount, onChange }: SearchBarProps) {
  return (
    <section className="search-section" aria-label="기술 검색">
      <div className="search-inner">
        <label className="search-label" htmlFor="tech-search">
          어떤 프로젝트를 기획하고 있나요?
        </label>
        <Input
          id="tech-search"
          className="main-search"
          size="large"
          allowClear
          prefix={<SearchOutlined aria-hidden="true" />}
          placeholder="예: 식자재 예측, 데이터 시각화, 챗봇, 자동화, 이미지 분류"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <div className="search-meta">
          <div className="example-queries" aria-label="검색 예시">
            <span>빠른 검색</span>
            {examples.map((example) => (
              <Button key={example} type="text" size="small" onClick={() => onChange(example)}>
                {example}
              </Button>
            ))}
          </div>
          <strong>{resultCount}개 기술</strong>
        </div>
      </div>
    </section>
  )
}
