export type TechItem = {
  id: string
  category: string
  name: string
  description: string
  simpleDescription: string
  useCases: string
  pblUsage: string
  tags: string[]
  unitExamples: string
  isActive: boolean
}

export type UnitBundle = {
  title: string
  description: string
  units: string[]
}
