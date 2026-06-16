export type DifficultyLevelLabel = '초급' | '중급' | '고급' | '마스터'
export type PassFail = 'PASS' | 'FAIL'

export type PblPlan = {
  courseName: string
  curriculumName: string
  subjectName: string
  missionSheetCount: number
  missionSheetCountReason: string
  projectOverview: ProjectOverview
  missionSheets: MissionSheet[]
  projectEvaluationSummary: ProjectEvaluationSummary
  references: PblReferences
  excelWorkbook: ExcelWorkbook
}

export type ProjectOverview = {
  projectTitle: string
  totalDuration: string
  teamComposition: string
  difficultyLevelNumber: number
  difficultyLevelLabel: DifficultyLevelLabel
  difficultyDescription: string
  difficultyReason: string
  difficultyReviewNote: string
  projectGoal: string
  finalOutput: string
  constraints: string
  evaluationCriteria: string
  subMissionList: string[]
}

export type MissionSheet = {
  sheetName: string
  missionStageName: string
  duration: string
  overview: string
  learningGoals: string[]
  prerequisiteLessons: Array<{
    title: string
    reason: string
  }>
  techStack: Array<{
    name: string
    category: string
    usage: string
    tags: string[]
  }>
  pblProblem: {
    problemSituation: string
    mission: string
  }
  missionStatement: string
  fiveStepGuide: Array<{
    step: string
    title: string
    description: string
    actions: string[]
    output: string
    checkPoint: string
    recommendedTools: string[]
    estimatedTime: string
  }>
  submissions: Array<{
    title: string
    format: string
    detailList: string[]
    passCondition: string
  }>
  evaluationCriteria: Array<{
    area: string
    weight: string
    question: string
    passCriteria: string[]
    resultOptions: PassFail[]
  }>
  aiUsageGuide: {
    allowedUses: Array<{ title: string; examplePrompt: string }>
    prohibitedUses: Array<{ title: string; examplePrompt: string }>
    principles: string[]
  }
}

export type ProjectEvaluationSummary = {
  evaluationOverview: string
  evaluationItems: Array<{
    area: string
    question: string
    passCriteria: string[]
    evidence: string
    resultOptions: PassFail[]
  }>
  finalPassCriteria: string[]
  peerReviewQuestions: string[]
  aiTutorReviewQuestions: string[]
  improvementQuestions: string[]
}

export type PblReferences = {
  recommendedVodTopics: string[]
  recommendedDatasets: Array<{
    name: string
    usage: string
    note: string
  }>
  recommendedTools: string[]
  recommendedReadings: string[]
  relatedSkills: Array<{
    skill: string
    tags: string[]
  }>
  searchKeywords: string[]
}

export type ExcelWorkbook = {
  sheets: ExcelWorkbookSheet[]
}

export type ExcelWorkbookSheet = {
  sheetName: string
  rows: string[][]
}
