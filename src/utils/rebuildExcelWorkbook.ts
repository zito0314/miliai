import type { ExcelWorkbook, MissionSheet, PblPlan, PblReferences, ProjectEvaluationSummary } from '../types/pbl'

export function rebuildExcelWorkbook(plan: PblPlan): ExcelWorkbook {
  return {
    sheets: [
      { sheetName: '프로젝트개요', rows: buildProjectOverviewRows(plan) },
      ...plan.missionSheets.map((sheet) => ({ sheetName: sheet.sheetName, rows: buildMissionSheetRows(sheet) })),
      { sheetName: '전체 프로젝트 평가 종합', rows: buildProjectEvaluationRows(plan.projectEvaluationSummary) },
      { sheetName: '참고자료', rows: buildReferenceRows(plan.references) },
    ],
  }
}

function buildProjectOverviewRows(plan: PblPlan) {
  const overview = plan.projectOverview
  return [
    ['항목', '내용'],
    ['프로젝트명', overview.projectTitle],
    ['총 소요 시간', overview.totalDuration],
    ['팀 구성', overview.teamComposition],
    ['난이도', `${overview.difficultyLevelNumber}레벨 / ${overview.difficultyLevelLabel}`],
    ['난이도 설명', overview.difficultyDescription],
    ['난이도 선정 이유', overview.difficultyReason],
    ['기획자 검토 포인트', overview.difficultyReviewNote],
    ['프로젝트 목표', overview.projectGoal],
    ['최종 산출물', overview.finalOutput],
    ['제약조건', overview.constraints],
    ['평가기준', overview.evaluationCriteria],
    ['하위미션 목록', overview.subMissionList.join('\n')],
    ['미션지 개수', String(plan.missionSheetCount)],
    ['미션지 개수 판단 이유', plan.missionSheetCountReason],
  ]
}

function buildMissionSheetRows(sheet: MissionSheet) {
  return [
    ['항목', '내용'],
    ['미션 단계명', sheet.missionStageName],
    ['기간', sheet.duration],
    ['차시 개요', sheet.overview],
    ['학습 목표', sheet.learningGoals.join('\n')],
    ['선행 학습 권장 과목', sheet.prerequisiteLessons.map((lesson) => `${lesson.title}: ${lesson.reason}`).join('\n')],
    ['활용 기술 스택', sheet.techStack.map((technology) => `${technology.name} (${technology.category}): ${technology.usage} ${technology.tags.join(' ')}`).join('\n')],
    ['PBL 문제 - 문제 상황', sheet.pblProblem.problemSituation],
    ['PBL 문제 - 미션', sheet.pblProblem.mission],
    ['5단계 실행 가이드', sheet.fiveStepGuide.map(formatStep).join('\n\n')],
    ['제출물', sheet.submissions.map(formatSubmission).join('\n\n')],
    ['평가 기준', sheet.evaluationCriteria.map(formatEvaluationCriterion).join('\n\n')],
    ['AI 지시문 가이드', formatAiUsageGuide(sheet.aiUsageGuide)],
  ]
}

function buildProjectEvaluationRows(summary: ProjectEvaluationSummary) {
  return [
    ['항목', '내용'],
    ['전체 평가 개요', summary.evaluationOverview],
    ['평가 항목', summary.evaluationItems.map(formatProjectEvaluationItem).join('\n\n')],
    ['최종 PASS 기준', summary.finalPassCriteria.join('\n')],
    ['동료평가 질문', summary.peerReviewQuestions.join('\n')],
    ['AI 교관 검토 질문', summary.aiTutorReviewQuestions.join('\n')],
    ['개선 질문', summary.improvementQuestions.join('\n')],
  ]
}

function buildReferenceRows(references: PblReferences) {
  return [
    ['항목', '내용'],
    ['추천 VOD 주제', references.recommendedVodTopics.join('\n')],
    ['추천 데이터셋', references.recommendedDatasets.map((dataset) => `${dataset.name}: ${dataset.usage} (${dataset.note})`).join('\n')],
    ['추천 도구', references.recommendedTools.join('\n')],
    ['추천 읽을거리', references.recommendedReadings.join('\n')],
    ['관련 스킬/태그', references.relatedSkills.map((skill) => `${skill.skill}: ${skill.tags.join(' ')}`).join('\n')],
    ['검색 키워드', references.searchKeywords.join('\n')],
  ]
}

function formatStep(step: MissionSheet['fiveStepGuide'][number]) {
  return `${step.step}. ${step.title}
설명: ${step.description}
수행 행동: ${step.actions.join(' / ')}
산출물: ${step.output}
체크포인트: ${step.checkPoint}
추천 도구: ${step.recommendedTools.join(', ')}
예상 시간: ${step.estimatedTime}`
}

function formatSubmission(submission: MissionSheet['submissions'][number]) {
  return `${submission.title} (${submission.format})
상세 항목: ${submission.detailList.join(' / ')}
PASS 조건: ${submission.passCondition}`
}

function formatEvaluationCriterion(criterion: MissionSheet['evaluationCriteria'][number]) {
  return `${criterion.area} ${criterion.weight}
질문: ${criterion.question}
PASS 기준: ${criterion.passCriteria.join(' / ')}
결과 옵션: ${criterion.resultOptions.join(', ')}`
}

function formatProjectEvaluationItem(item: ProjectEvaluationSummary['evaluationItems'][number]) {
  return `${item.area}
질문: ${item.question}
PASS 기준: ${item.passCriteria.join(' / ')}
확인 자료: ${item.evidence}
결과 옵션: ${item.resultOptions.join(', ')}`
}

function formatAiUsageGuide(guide: MissionSheet['aiUsageGuide']) {
  return [
    `허용되는 AI 활용\n${guide.allowedUses.map((item) => `- ${item.title}: ${item.examplePrompt}`).join('\n')}`,
    `금지되는 AI 활용\n${guide.prohibitedUses.map((item) => `- ${item.title}: ${item.examplePrompt}`).join('\n')}`,
    `AI 활용 원칙\n${guide.principles.map((item) => `- ${item}`).join('\n')}`,
  ].join('\n\n')
}
