import type { PblDifficulty, PblDifficultyLevel } from '../types/pbl'

export const DEFAULT_PBL_DIFFICULTY_LEVEL: PblDifficultyLevel = 3

type PblDifficultyInput = Partial<Omit<PblDifficulty, 'level'>> & {
  level?: number
  difficulty_level?: number
  difficulty_label?: string
}

export const PBL_DIFFICULTY_OPTIONS: Array<PblDifficulty & { disabled?: boolean }> = [
  {
    level: 1,
    label: '1레벨 · 초급',
    description: '기본 코딩 실습',
    evaluationScope: '평가기준 불가',
  },
  {
    level: 2,
    label: '2레벨 · 초급',
    description: '단일 알고리즘 구현',
    evaluationScope: '평가기준 불가',
  },
  {
    level: 3,
    label: '3레벨 · 초급',
    description: '데이터 분석',
    evaluationScope: '평가기준 불가',
  },
  {
    level: 4,
    label: '4레벨 · 중급',
    description: '단일 AI 모델 학습',
    evaluationScope: '평가기준 일부 포함',
  },
  {
    level: 5,
    label: '5레벨 · 중급',
    description: '웹/앱 + AI 연결',
    evaluationScope: '평가기준 일부 포함',
  },
  {
    level: 6,
    label: '6레벨 · 중급',
    description: '단일 데이터 기반 AI 서비스',
    evaluationScope: 'CCTV만 분석',
  },
  {
    level: 7,
    label: '7레벨 · 고급',
    description: '실시간 AI 시스템',
    evaluationScope: '실시간 영상 탐지',
  },
  {
    level: 8,
    label: '8레벨 · 고급',
    description: '멀티모달 AI + 운영 시스템',
    evaluationScope: '현재 프로젝트 최소 목표',
  },
  {
    level: 9,
    label: '9레벨 · 고급',
    description: '현장 적용 가능한 AI 서비스',
    evaluationScope: '권장 최종 목표',
  },
  {
    level: 10,
    label: '10레벨 · 마스터',
    description: '대규모 상용·군 운용 체계',
    evaluationScope: '범위 초과',
    disabled: true,
  },
]

export function getPblDifficultyByLevel(level: number | undefined): PblDifficulty {
  return PBL_DIFFICULTY_OPTIONS.find((option) => option.level === level && !option.disabled)
    ?? PBL_DIFFICULTY_OPTIONS.find((option) => option.level === DEFAULT_PBL_DIFFICULTY_LEVEL)!
}

export function normalizePblDifficulty(value: PblDifficultyInput | undefined): PblDifficulty {
  const label = value?.label || value?.difficulty_label
  const levelFromLabel = typeof label === 'string'
    ? Number.parseInt(label.match(/\d+/)?.[0] || '', 10)
    : undefined
  const requestedLevel = [value?.level, value?.difficulty_level, levelFromLabel]
    .find((level) => typeof level === 'number' && Number.isFinite(level))

  return getPblDifficultyByLevel(requestedLevel)
}

export function formatPblDifficultyLabel(difficulty: PblDifficulty) {
  const levelName = difficulty.label.split('·')[1]?.trim() || difficulty.label
  return `${difficulty.level}레벨(${levelName})`
}
