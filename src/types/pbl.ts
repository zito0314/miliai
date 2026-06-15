export type RequiredTechnology = {
  name: string
  category: string
  reason: string
}

export type PblTask = {
  id: string
  title: string
  description: string
  output: string
  assessmentCriteria: string[]
  requiredTechnologies: RequiredTechnology[]
  requiredTags: string[]
}

export type PblMission = {
  id: string
  title: string
  goal: string
  tasks: PblTask[]
}

export type PblUnit = {
  id: string
  title: string
  goal: string
  requiredConcepts: string[]
  missions: PblMission[]
}

export type PblPlan = {
  courseName: string
  curriculumName: string
  subject: {
    id: string
    title: string
    summary: string
    problemContext: string
    finalOutput: string
    recommendedTags: string[]
  }
  units: PblUnit[]
}

export type PblPlanRow = {
  key: string
  courseName: string
  curriculumName: string
  subjectTitle: string
  unitId: string
  unitTitle: string
  missionId: string
  missionTitle: string
  taskId: string
  taskTitle: string
  description: string
  output: string
  assessmentCriteria: string
  requiredTechnologies: string
  requiredTechnologyDetails: string
  requiredTags: string
}
