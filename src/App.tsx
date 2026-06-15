import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { CloseOutlined, FilterOutlined, StarFilled } from '@ant-design/icons'
import { Button, Result, Spin, Tag } from 'antd'
import './App.css'
import { CategoryFilter } from './components/CategoryFilter'
import { DataStatusBar } from './components/DataStatusBar'
import { EmptyState } from './components/EmptyState'
import { Header } from './components/Header'
import { PblGenerator } from './components/PblGenerator'
import { SearchBar } from './components/SearchBar'
import { TagFilter } from './components/TagFilter'
import { TechCard } from './components/TechCard'
import { TechDetailPanel } from './components/TechDetailPanel'
import { UnitBundles } from './components/UnitBundles'
import { REFRESH_INTERVAL_MS } from './config/dataSource.js'
import { fetchTechItems } from './services/fetchTechItems'
import type { TechItem } from './types/tech'
import { buildUnitBundles, matchesQuery } from './utils/search'

const FAVORITES_KEY = 'mili-pbl-tech-favorites'

function App() {
  const [techItems, setTechItems] = useState<TechItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('전체')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedItem, setSelectedItem] = useState<TechItem | null>(null)
  const [favoriteOnly, setFavoriteOnly] = useState(false)
  const requestIdRef = useRef(0)
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(FAVORITES_KEY) ?? '[]')
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
  }, [favorites])

  const loadTechItems = useCallback(async () => {
    const requestId = ++requestIdRef.current
    setLoading(true)
    setError(null)

    try {
      const items = await fetchTechItems()
      if (requestId !== requestIdRef.current) return
      setTechItems(items)
      setLastUpdated(new Date())
      setSelectedItem((current) => (current ? (items.find((item) => item.id === current.id) ?? null) : null))
    } catch (loadError) {
      if (requestId !== requestIdRef.current) return
      setError(loadError instanceof Error ? loadError.message : '알 수 없는 오류가 발생했습니다.')
    } finally {
      if (requestId === requestIdRef.current) setLoading(false)
    }
  }, [])

  useEffect(() => {
    const initialLoadId = window.setTimeout(() => void loadTechItems(), 0)
    const intervalId = window.setInterval(() => void loadTechItems(), REFRESH_INTERVAL_MS)
    return () => {
      window.clearTimeout(initialLoadId)
      window.clearInterval(intervalId)
    }
  }, [loadTechItems])

  const categories = useMemo(() => Array.from(new Set(techItems.map((item) => item.category).filter(Boolean))), [techItems])
  const activeCategory = category === '전체' || categories.includes(category) ? category : '전체'

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 전체: techItems.length }
    categories.forEach((itemCategory) => {
      counts[itemCategory] = techItems.filter((item) => item.category === itemCategory).length
    })
    return counts
  }, [categories, techItems])

  const popularTags = useMemo(() => {
    const counts = new Map<string, number>()
    techItems.forEach((item) => item.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)))
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, 12)
      .map(([tag]) => tag)
  }, [techItems])

  const filteredItems = useMemo(() => {
    return techItems
      .filter((item) => activeCategory === '전체' || item.category === activeCategory)
      .filter((item) => selectedTags.every((tag) => item.tags.includes(tag)))
      .filter((item) => !favoriteOnly || favorites.includes(item.id))
      .filter((item) => matchesQuery(item, query))
      .sort((a, b) => {
        const categoryDifference = categories.indexOf(a.category) - categories.indexOf(b.category)
        return categoryDifference || a.name.localeCompare(b.name)
      })
  }, [activeCategory, categories, favoriteOnly, favorites, query, selectedTags, techItems])

  const unitBundles = useMemo(() => buildUnitBundles(filteredItems), [filteredItems])
  const hasFilters = query.trim() !== '' || activeCategory !== '전체' || selectedTags.length > 0 || favoriteOnly

  const toggleTag = (tag: string) => {
    setSelectedTags((current) => (current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag]))
  }

  const toggleFavorite = (id: string) => {
    setFavorites((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]))
  }

  const resetFilters = () => {
    setQuery('')
    setCategory('전체')
    setSelectedTags([])
    setFavoriteOnly(false)
  }

  const handleDetailTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) setSelectedTags((current) => [...current, tag])
    setSelectedItem(null)
  }

  return (
    <div className="app-shell">
      <Header />
      <SearchBar value={query} resultCount={filteredItems.length} onChange={setQuery} />
      <DataStatusBar
        loading={loading}
        error={error}
        lastUpdated={lastUpdated}
        itemCount={techItems.length}
        onRefresh={() => void loadTechItems()}
      />
      <PblGenerator techItems={techItems} isTechItemsLoading={loading} />

      <main className="workspace">
        <aside className="filter-sidebar" aria-label="검색 필터">
          <div className="filter-sidebar-heading">
            <span>
              <FilterOutlined /> 필터
            </span>
            {hasFilters && (
              <Button type="link" size="small" onClick={resetFilters}>
                초기화
              </Button>
            )}
          </div>
          <CategoryFilter categories={categories} selected={activeCategory} counts={categoryCounts} onChange={setCategory} />
          <TagFilter tags={popularTags} selectedTags={selectedTags} onToggle={toggleTag} />
          <Button
            className={`favorite-filter ${favoriteOnly ? 'is-active' : ''}`}
            icon={<StarFilled />}
            onClick={() => setFavoriteOnly((current) => !current)}
          >
            즐겨찾기만 보기 <span>{favorites.length}</span>
          </Button>
        </aside>

        <div className="results-column">
          {hasFilters && (
            <div className="active-filters" aria-label="선택된 필터">
              <span>적용 중</span>
              {activeCategory !== '전체' && (
                <Tag closable onClose={() => setCategory('전체')}>
                  {activeCategory}
                </Tag>
              )}
              {selectedTags.map((tag) => (
                <Tag key={tag} closable onClose={() => toggleTag(tag)}>
                  {tag}
                </Tag>
              ))}
              {favoriteOnly && (
                <Tag closable onClose={() => setFavoriteOnly(false)}>
                  즐겨찾기
                </Tag>
              )}
              <Button type="text" size="small" icon={<CloseOutlined />} onClick={resetFilters}>
                전체 해제
              </Button>
            </div>
          )}

          {(query.trim() || selectedTags.length > 0) && <UnitBundles bundles={unitBundles} />}

          <section className="results-section" aria-live="polite">
            <div className="results-heading">
              <div>
                <span>기술·Unit 탐색</span>
                <h1>{query.trim() ? `“${query}” 검색 결과` : '전체 기술 목록'}</h1>
              </div>
              <p>
                총 <strong>{filteredItems.length}</strong>개 항목
              </p>
            </div>

            {loading && techItems.length === 0 ? (
              <div className="data-loading-state">
                <Spin size="large" />
                <p>기술 데이터를 불러오는 중이에요.</p>
              </div>
            ) : error && techItems.length === 0 ? (
              <Result
                status="error"
                title="데이터를 불러오지 못했어요."
                subTitle="Google Sheets CSV 링크 또는 게시 상태를 확인해주세요."
                extra={
                  <Button type="primary" onClick={() => void loadTechItems()}>
                    다시 시도
                  </Button>
                }
              />
            ) : filteredItems.length > 0 ? (
              <div className="tech-grid">
                {filteredItems.map((item) => (
                  <TechCard
                    key={item.id}
                    item={item}
                    query={query}
                    favorite={favorites.includes(item.id)}
                    onOpen={setSelectedItem}
                    onTagClick={toggleTag}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <EmptyState onReset={resetFilters} />
            )}
          </section>
        </div>
      </main>

      <TechDetailPanel
        item={selectedItem}
        favorite={selectedItem ? favorites.includes(selectedItem.id) : false}
        onClose={() => setSelectedItem(null)}
        onTagClick={handleDetailTagClick}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  )
}

export default App
