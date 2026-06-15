import type { ReactNode } from 'react'
import type { TechItem, UnitBundle } from '../types/tech'
import { normalizeText } from './normalizeText'

export const searchableText = (item: TechItem) =>
  normalizeText(
    [
      item.name,
      item.category,
      item.description,
      item.simpleDescription,
      item.useCases,
      item.pblUsage,
      ...item.tags,
      item.unitExamples,
    ].join(' '),
  )

export const matchesQuery = (item: TechItem, query: string) => {
  const terms = normalizeText(query).split(' ').filter(Boolean)
  if (terms.length === 0) return true
  const haystack = searchableText(item)
  return terms.every((term) => haystack.includes(term))
}

export const highlightText = (text: string, query: string): ReactNode => {
  const terms = normalizeText(query).split(' ').filter((term) => term.length > 1)
  if (terms.length === 0) return text

  const pattern = new RegExp(`(${terms.map(escapeRegExp).join('|')})`, 'gi')
  return text.split(pattern).map((part, index) =>
    terms.some((term) => normalizeText(part) === term) ? <mark key={`${part}-${index}`}>{part}</mark> : part,
  )
}

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

export const buildUnitBundles = (items: TechItem[]): UnitBundle[] => {
  const categoryGroups = new Map<string, string[]>()

  items.forEach((item) => {
    if (!item.unitExamples) return
    const units = categoryGroups.get(item.category) ?? []
    if (!units.includes(item.unitExamples)) units.push(item.unitExamples)
    categoryGroups.set(item.category, units)
  })

  return Array.from(categoryGroups.entries())
    .slice(0, 3)
    .map(([title, units]) => ({
      title,
      description: `${title} 분야에서 프로젝트와 연결하기 좋은 Unit 후보예요.`,
      units: units.slice(0, 3),
    }))
}
