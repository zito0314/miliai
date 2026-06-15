export type RequiredTechnology = {
  name: string
  category: string
  reason: string
}

export type DifficultyLevel = '초급' | '중급' | '고급'

export type PblTask = {
  id: string
  title: string
  description: string
  output: string
  assessmentCriteria: string[]
  requiredTechnologies: RequiredTechnology[]
  requiredTags: string[]
  estimatedTime: string
  difficultyLevel: DifficultyLevel
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
  projectOverview: {
    projectTitle: string
    totalDuration: string
    teamComposition: string
    difficultyLevel: DifficultyLevel
    projectGoal: string
    finalOutput: string
    constraints: string
    evaluationCriteria: string
    missionList: string
  }
  subject: {
    id: string
    title: string
    summary: string
    problemContext: string
    finalOutput: string
    recommendedTags: string[]
  }
  units: PblUnit[]
  excelRows: PblExcelRow[]
  missionSheets: MissionSheet[]
}

export type PblExcelRow = {
  courseName: string
  curriculumName: string
  subjectTitle: string
  subjectSummary: string
  unitId: string
  unitTitle: string
  unitGoal: string
  missionId: string
  missionTitle: string
  missionGoal: string
  taskId: string
  taskTitle: string
  taskDescription: string
  output: string
  requiredTechnologiesText: string
  requiredTagsText: string
  assessmentCriteriaText: string
  firstEvaluation: string
  secondEvaluation: string
  thirdEvaluation: string
  finalResult: string
  estimatedTime: string
  difficultyLevel: DifficultyLevel
}

export type MissionSheet = {
  unitId: string
  unitTitle: string
  overview: string
  learningGoals: string[]
  prerequisiteLessons: string[]
  techStack: string[]
  pblProblem: string
  missionStatement: string
  fiveStepGuide: Array<{
    step: string
    title: string
    actions: string[]
    output: string
  }>
  submissions: string[]
  evaluationRubric: Array<{
    area: string
    question: string
    passCriteria: string[]
    resultOptions: Array<'PASS' | 'FAIL'>
  }>
  aiUsageGuide: {
    allowedUses: Array<{ title: string; examplePrompt: string }>
    prohibitedUses: Array<{ title: string; examplePrompt: string }>
    principles: string[]
  }
}
