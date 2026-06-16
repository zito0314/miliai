import type { TechItem } from '../types/tech'
import { normalizeText } from './normalizeText'

const relatedKeywords: Record<string, string[]> = {
  예측: ['machine learning', 'data science', 'pandas', '시계열', '회귀', '데이터 시각화', '예측'],
  자동화: ['python', 'powershell', 'ai agents', 'rpa', 'api', 'workflow', '자동화'],
  챗봇: ['llm', 'rag', 'prompt engineering', 'chatbot', '자연어', '질의응답'],
  문서: ['nlp', 'rag', '문서', '요약', '생성형 ai', 'prompt'],
  드론: ['최적화', '경로', 'computer vision', '드론', '객체 탐지'],
  추천: ['recommendation', '추천 시스템', 'machine learning', '개인화'],
  대시보드: ['tableau', 'business intelligence', 'data visualization', 'react', 'streamlit'],
}

export function buildTechContext(subjectName: string, techItems: TechItem[]) {
  const normalizedSubject = normalizeText(subjectName)
  const subjectTerms = normalizedSubject.split(' ').filter((term) => term.length > 1)
  const expandedTerms = Object.entries(relatedKeywords)
    .filter(([trigger]) => normalizedSubject.includes(trigger))
    .flatMap(([, keywords]) => keywords)

  return techItems
    .map((item, index) => ({ item, index, score: getRelevanceScore(item, subjectTerms, expandedTerms) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 50)
    .map(({ item }) =>
      [
        `기술명: ${item.name}`,
        `카테고리: ${item.category}`,
        `쉬운 설명: ${item.simpleDescription}`,
        `PBL 활용: ${item.pblUsage}`,
        `Unit 예시: ${item.unitExamples}`,
        `태그: ${item.tags.join(' ')}`,
      ].join('\n'),
    )
    .join('\n\n')
}

function getRelevanceScore(item: TechItem, subjectTerms: string[], expandedTerms: string[]) {
  const name = normalizeText(item.name)
  const tags = normalizeText(item.tags.join(' '))
  const allText = normalizeText(
    [item.category, item.name, item.description, item.simpleDescription, item.useCases, item.pblUsage, item.unitExamples, tags].join(' '),
  )

  return [...subjectTerms, ...expandedTerms].reduce((score, term) => {
    const normalizedTerm = normalizeText(term)
    if (!normalizedTerm) return score
    if (name.includes(normalizedTerm)) return score + 8
    if (tags.includes(normalizedTerm)) return score + 5
    if (allText.includes(normalizedTerm)) return score + 2
    return score
  }, 0)
}
