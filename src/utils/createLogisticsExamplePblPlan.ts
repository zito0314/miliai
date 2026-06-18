import type { Mission, PblPlan, Step } from '../types/pbl'
import { normalizePblPlan } from './normalizePblPlan'

const logisticsExampleUrl = '/examples/pbl-plan-ai-logistics-optimization.json'
const equipmentMaintenanceExampleUrl = '/examples/pbl-plan-equipment-maintenance-failure-analysis.json'
const pxSalesBeginnerExampleUrl = '/examples/pbl-beginner-2-px-sales-source.json'

const missionBriefingOverrides: Record<string, Pick<Mission, 'mission_overview' | 'core_learning_action' | 'estimated_time'>> = {
  M01: {
    estimated_time: '1~2주차 / 모바일 4회',
    mission_overview:
      '훈련·작전 일정에 따라 군수 물자 수요가 달라지지만, 재고가 너무 많으면 보관 비용과 폐기 위험이 커지고 너무 적으면 작전 준비에 차질이 생깁니다. 이번 미션에서는 이 상황을 AI가 다룰 수 있는 수요 예측 문제로 바꾸기 위해 필요한 데이터와 판단 기준을 정리합니다.',
    core_learning_action:
      '군수 물자 재고 문제를 정의하고, 과거 소비량·현재 재고·훈련 일정 같은 핵심 데이터 항목을 골라 데이터 전처리 계획을 세웁니다.',
  },
  M02: {
    estimated_time: '3~4주차 / 모바일 4회 + PC 검증 1회',
    mission_overview:
      '가상 군수 데이터에는 물자별 소비량, 재고량, 훈련 일정처럼 수요 예측에 영향을 주는 단서가 섞여 있습니다. 이번 미션에서는 데이터를 탐색해 어떤 패턴이 부족 위험이나 과잉 재고와 연결되는지 확인합니다.',
    core_learning_action:
      '데이터 컬럼을 해석하고, 물자별 소비 패턴과 이상값을 찾아 AI 예측 모델에 넣을 주요 특징을 선정합니다.',
  },
  M03: {
    estimated_time: '5~6주차 / 모바일 4회 + PC 제출 2회',
    mission_overview:
      'AI 예측 결과는 단순히 숫자를 맞히는 데서 끝나지 않고 실제 보급 계획과 재고 기준을 개선하는 판단 근거가 되어야 합니다. 이번 미션에서는 예측 결과를 검증하고, 군수 운영 최적화 제안으로 연결합니다.',
    core_learning_action:
      '예측 결과를 해석하고, 부족 위험 물자와 과잉 재고 물자를 구분해 재고 관리 개선안과 최종 제출물을 완성합니다.',
  },
}

export async function createLogisticsExamplePblPlan(): Promise<PblPlan> {
  const response = await fetch(logisticsExampleUrl)
  if (!response.ok) {
    throw new Error('AI 기반 군수 운영 최적화 예시 JSON을 불러오지 못했습니다.')
  }

  const rawPlan = await response.json() as PblPlan
  return normalizePblPlan({
    ...rawPlan,
    project: {
      ...rawPlan.project,
      team_structure: '2~3인 팀 권장, 개인 수행 가능',
      learning_mode: `${rawPlan.project.learning_mode} 기본 수행은 팀 기반이며, 동료 평가와 피어리뷰를 포함합니다.`,
    },
    missions: rawPlan.missions.map((mission) => ({
      ...mission,
      ...missionBriefingOverrides[mission.mission_id],
      submission: {
        ...mission.submission,
        peer_review_required: true,
        peer_review_mode: mission.submission.peer_review_mode === '필수' ? '필수' : '선택',
      },
    })),
  })
}

export async function createEquipmentMaintenanceExamplePblPlan(): Promise<PblPlan> {
  const response = await fetch(equipmentMaintenanceExampleUrl)
  if (!response.ok) {
    throw new Error('장비 정비 이력 예시 JSON을 불러오지 못했습니다.')
  }

  return await response.json() as PblPlan
}

export async function createPxSalesBeginnerExamplePblPlan(): Promise<PblPlan> {
  const response = await fetch(pxSalesBeginnerExampleUrl)
  if (!response.ok) {
    throw new Error('PX 인기 품목 분석 예시 JSON을 불러오지 못했습니다.')
  }

  const source = await response.json() as PxBeginnerSource
  return normalizePblPlan({
    project: {
      project_id: source.id,
      title: source.title,
      short_description: source.cardDescription || source.overview,
      environment_type: '모바일 중심 + PC 검증형',
      duration_label: source.weeks,
      target_learner: '데이터 분석을 처음 시작하는 군 장병',
      team_structure: `2~3인 팀 권장, 개인 수행 가능 (원본 구성: ${source.team})`,
      difficulty_label: source.difficulty,
      project_goal: source.goal,
      learning_mode: `${source.learningFlow.join(' → ')}. 개인 수행 후 동료 평가와 수정 보완을 진행합니다.`,
      prerequisites: '파일 열기, 컬럼 읽기, 기초 데이터 탐색',
      tech_stack: source.techStack.join(', '),
      final_outputs: source.outputs.join(', '),
      constraints: source.constraints.join(', '),
      pc_alternative: 'PC 사용이 어려운 경우 제공된 결과표와 시각화 자료를 바탕으로 모바일에서 해석과 제안서를 작성합니다.',
      is_student_visible: true,
      content_status: 'draft_ready_for_test',
      planner_note: '원본 beginner PBL 콘텐츠를 앱 미리보기용 PBL Plan으로 변환했습니다. 문제 유형이 다양하게 보이도록 스텝을 구성했습니다.',
      developer_note: '원본 미션의 problem, objectives, deliverables, evaluation을 기반으로 렌더링 가능한 step과 submission을 생성합니다.',
    },
    missions: source.missions.map((mission, index) => createPxMission(source, mission, index)),
    ui_blocks: [],
    environment_tags: [
      {
        tag_id: 'ENV-PX-SALES-BEGINNER',
        tag_label: 'PX 매출 데이터 분석',
        description: 'PX 판매 데이터를 활용해 초급 데이터 분석과 운영 개선 제안을 수행합니다.',
        ui_usage: '초급 예시 콘텐츠 태그',
      },
    ],
    validation_checklist: source.evaluationSummary.slice(0, 6).map((item, index) => ({
      check_id: `PX-CHECK-${String(index + 1).padStart(2, '0')}`,
      category: index < 4 ? '평가 기준' : '미션 질문',
      check_item: item,
      planner_criteria: '원본 beginner 콘텐츠의 평가 요약을 유지합니다.',
      developer_criteria: '체크 항목이 검토 체크리스트에 표시되어야 합니다.',
      status: '검토 필요',
    })),
    excelWorkbook: { sheets: [] },
  } as PblPlan)
}

type PxBeginnerSource = {
  id: string
  title: string
  cardDescription: string
  overview: string
  difficulty: string
  weeks: string
  team: string
  goal: string
  learningFlow: string[]
  outputs: string[]
  constraints: string[]
  evaluationSummary: string[]
  techStack: string[]
  missions: PxBeginnerMission[]
}

type PxBeginnerMission = {
  id: number
  title: string
  weeks: string
  progressLabel: string
  summary: string
  purpose: string
  question: string
  problemTypes: string[]
  objectives: string[]
  prerequisites: string[]
  techStack: string[]
  problem: {
    situation: string
    mission: string
    steps: string[]
  }
  deliverables: string[]
  evaluation: string[]
  aiGuide: {
    coachPrompt: string
    allowed: string[]
    prohibited: string[]
    principles: string[]
  }
  checklist: string[]
}

function createPxMission(source: PxBeginnerSource, mission: PxBeginnerMission, index: number): Mission {
  const missionId = `M${String(index + 1).padStart(2, '0')}`

  return {
    project_id: source.id,
    mission_id: missionId,
    mission_order: index + 1,
    title: mission.title,
    environment_type: index === 1 ? '모바일 중심 + PC 검증형' : '모바일 중심형',
    estimated_time: mission.weeks,
    core_learning_action: mission.problem.mission,
    student_outputs: mission.deliverables.join(', '),
    planner_review_points: `${mission.problemTypes.join(' / ')} 문제 유형이 골고루 보이는지 확인합니다.`,
    developer_note: '원본 beginner 미션을 앱용 step 구조로 변환했습니다. 원본 문제 상황과 미션 문구를 유지합니다.',
    mission_overview: mission.problem.situation,
    learning_goal: mission.objectives.join(' '),
    prerequisites: mission.prerequisites.join(', '),
    tech_stack: mission.techStack.join(', '),
    constraints: source.constraints.join(', '),
    is_pc_required: index >= 1,
    has_mobile_alternative: true,
    steps: createPxSteps(source.id, missionId, mission, index),
    submission: {
      project_id: source.id,
      mission_id: missionId,
      submission_id: `${missionId}-SUB`,
      submission_title: `${mission.title} 산출물 제출`,
      student_instruction: `${mission.deliverables.join(', ')}을 제출하세요.`,
      evaluation_text: mission.evaluation.join(' '),
      pass_criteria: mission.evaluation.join(' / '),
      needs_revision_example: '분석 근거 없이 결론만 쓰거나, 직접 확인한 값과 설명이 빠진 경우 보완이 필요합니다.',
      peer_review_required: index >= 1,
      peer_review_mode: index >= 1 ? '필수' : '선택',
      developer_note: '텍스트 제출, 파일 업로드, 피어리뷰 연결을 지원해야 합니다.',
    },
  }
}

function createPxSteps(projectId: string, missionId: string, mission: PxBeginnerMission, missionIndex: number) {
  if (missionIndex === 0) {
    return [
      createPxStep(projectId, missionId, 1, 'situation_card', 'understand', '문제 상황 읽기', mission.problem.situation, '상황을 읽고 분석 목표를 확인합니다.'),
      createPxStep(projectId, missionId, 2, 'single_choice', 'decide', 'Excel 파일 불러오기 코드 선택', 'PX 샘플 매출 파일을 pandas로 불러오는 가장 적절한 코드를 고르세요.', '올바른 코드 선택', {
        question: 'px_sales_data.xlsx 파일을 읽는 코드로 가장 적절한 것은?',
        code_template: 'import pandas as pd\n___',
        correct_answer: 'df = pd.read_excel("px_sales_data.xlsx")',
        options: [
          ['read_excel', 'df = pd.read_excel("px_sales_data.xlsx")', true, 'Excel 파일을 읽는 pandas 함수입니다.'],
          ['read_csv', 'df = pd.read_csv("px_sales_data.xlsx")', false, 'CSV가 아니라 Excel 파일입니다.'],
          ['open_text', 'df = open("px_sales_data.xlsx")', false, '데이터프레임으로 읽어오지 못합니다.'],
          ['plot', 'df.plot("px_sales_data.xlsx")', false, '파일을 읽는 코드가 아닙니다.'],
        ],
      }),
      createPxStep(projectId, missionId, 3, 'multiple_choice', 'decide', '핵심 컬럼 고르기', 'PX 판매 분석에 필요한 핵심 컬럼을 모두 고르세요.', '필요한 컬럼 선택', {
        question: '판매 규모와 인기 품목을 분석할 때 필요한 컬럼은?',
        correct_answer: '품목명, 판매수량, 총매출',
        options: [
          ['item', '품목명', true, '품목별 집계 기준입니다.'],
          ['qty', '판매수량', true, '얼마나 팔렸는지 확인합니다.'],
          ['sales', '총매출', true, '매출 기여도를 계산합니다.'],
          ['wall_color', 'PX 벽 색상', false, '판매 데이터 분석 핵심 컬럼이 아닙니다.'],
        ],
      }),
      createPxStep(projectId, missionId, 4, 'result_prediction', 'decide', '총 판매 건수 예측하기', '행 개수를 세는 코드의 실행 결과가 무엇을 의미하는지 예측합니다.', '실행 결과 선택', {
        question: '아래 코드의 출력값은 무엇을 의미하나요?',
        code: 'print(len(df))',
        correct_answer: '전체 판매 기록 건수',
        options: [
          ['rows', '전체 판매 기록 건수', true, 'len(df)는 데이터프레임의 행 수입니다.'],
          ['columns', '전체 컬럼 개수', false, '컬럼 개수는 len(df.columns)로 확인합니다.'],
          ['sum', '총매출 합계', false, '총매출 합계는 sum을 사용합니다.'],
          ['name', '가장 많이 팔린 품목명', false, '품목명은 집계가 필요합니다.'],
        ],
      }),
      createPxStep(projectId, missionId, 5, 'self_checklist', 'review', '데이터 이해 체크리스트', '파일, 컬럼, 판매 건수 확인이 끝났는지 점검합니다.', '체크리스트 완료', {
        checklist_items: mission.checklist,
      }),
    ]
  }

  if (missionIndex === 1) {
    return [
      createPxStep(projectId, missionId, 1, 'situation_card', 'understand', '인기 품목 분석 문제 확인', mission.problem.situation, '분석 목표를 확인합니다.'),
      createPxStep(projectId, missionId, 2, 'code_fill_blank', 'assemble', '품목별 총매출 집계 코드 완성', '품목별 총매출을 계산하는 코드의 빈칸을 채웁니다.', '코드 빈칸 채우기', {
        question: '품목명별 총매출을 집계하려면 빈칸에 무엇이 들어가야 하나요?',
        code_template: 'sales_by_item = df.___("품목명")["총매출"].sum()',
        correct_answer: 'groupby',
        options: [
          ['groupby', 'groupby', true, '품목명별로 묶어 총매출을 합산합니다.'],
          ['dropna', 'dropna', false, '결측치 제거 함수입니다.'],
          ['rename', 'rename', false, '컬럼명을 바꾸는 함수입니다.'],
          ['head', 'head', false, '상위 행 일부만 확인합니다.'],
        ],
      }),
      createPxStep(projectId, missionId, 3, 'sequence_order', 'assemble', '인기 품목 분석 순서 배열', '품목별 매출 분석을 수행하는 순서를 올바르게 배열합니다.', '순서 배열', {
        question: '인기 품목 분석의 올바른 순서는?',
        correct_answer: '데이터 불러오기 → 품목별 매출 집계 → 상위 품목 정렬 → 그래프 작성',
        options: [
          ['load', '데이터 불러오기', true, '분석의 시작입니다.', 1],
          ['aggregate', '품목별 매출 집계', true, '품목 기준으로 매출을 합산합니다.', 2],
          ['sort', '상위 품목 정렬', true, '인기 품목을 찾습니다.', 3],
          ['visualize', '그래프 작성', true, '결과를 보기 쉽게 표현합니다.', 4],
        ],
      }),
      createPxStep(projectId, missionId, 4, 'single_choice', 'decide', '시각화 방식 선택', '품목별 총매출 상위 5개를 보여주기 좋은 그래프를 선택합니다.', '그래프 선택', {
        question: '품목별 총매출 상위 5개 비교에 가장 적절한 시각화는?',
        correct_answer: '막대그래프',
        options: [
          ['bar', '막대그래프', true, '품목별 크기 비교에 적합합니다.'],
          ['pie', '원형그래프만 사용', false, '항목이 많으면 비교가 어렵습니다.'],
          ['scatter', '산점도', false, '두 수치 변수 관계를 볼 때 적합합니다.'],
          ['none', '표현하지 않음', false, '결과 공유에 불리합니다.'],
        ],
      }),
      createPxStep(projectId, missionId, 5, 'pc_verification', 'execute', 'PC에서 집계 결과 검증', 'PC에서 Excel 또는 Python으로 품목별 총매출을 계산하고 상위 품목을 확인합니다.', 'PC 검증 실행', {
        pc_detail: '1. px_sales_data.xlsx를 엽니다.\n2. 품목명별 총매출을 집계합니다.\n3. 상위 5개 품목을 표 또는 그래프로 저장합니다.\n4. 결과를 미션 산출물에 첨부합니다.',
        mobile_summary: 'PC에서 집계할 품목명, 판매수량, 총매출 컬럼을 모바일에서 먼저 확인합니다.',
      }),
    ]
  }

  return [
    createPxStep(projectId, missionId, 1, 'situation_card', 'understand', '매출 증대 제안 상황 확인', mission.problem.situation, '분석 결과를 운영 개선으로 연결합니다.'),
    createPxStep(projectId, missionId, 2, 'ai_tutor_question', 'review', 'AI 교관에게 제안 아이디어 묻기', '인기 품목 분석 결과를 바탕으로 PX 매출 증대 방안을 구체화합니다.', 'AI 교관 질문 작성', {
      ai_tutor_questions: mission.aiGuide.allowed,
      question: mission.aiGuide.coachPrompt,
    }),
    createPxStep(projectId, missionId, 3, 'multiple_choice', 'decide', '최종 제안 기준 고르기', '최종 제안서에 꼭 들어가야 할 판단 기준을 모두 선택합니다.', '판단 기준 선택', {
      question: 'PX 매출 증대 제안에 포함해야 할 기준은?',
      correct_answer: '인기 품목 근거, 실행 가능성, 예상 효과',
      options: [
        ['evidence', '인기 품목 분석 근거', true, '데이터 기반 제안의 핵심입니다.'],
        ['feasible', 'PX에서 실행 가능한 운영 방안', true, '실무 적용 가능성이 필요합니다.'],
        ['impact', '예상 효과와 확인 방법', true, '제안의 성과를 판단할 수 있습니다.'],
        ['guess', '근거 없는 개인 취향', false, '데이터 분석 결과와 연결되지 않습니다.'],
      ],
    }),
    createPxStep(projectId, missionId, 4, 'peer_review_request', 'review', '동료 평가로 제안서 개선', '동료에게 제안서 초안을 보여주고 데이터 근거와 실행 가능성을 점검받습니다.', '피어리뷰 요청', {
      peer_review_points: [
        '제안이 인기 품목 분석 결과와 연결되어 있나요?',
        'PX 운영자가 실제로 실행할 수 있는 방안인가요?',
        '예상 효과와 확인 방법이 분명한가요?',
      ],
    }),
    createPxStep(projectId, missionId, 5, 'submission', 'submit', 'PX 매출 증대 방안 제출', '최종 제안서를 제출합니다.', '최종 제출', {
      submission_type: ['text', 'file_upload'],
      evaluation_criteria: mission.evaluation,
      expected_output: mission.deliverables.join(', '),
    }),
  ]
}

function createPxStep(
  projectId: string,
  missionId: string,
  stepOrder: number,
  blockType: Step['block_type'],
  learningRole: NonNullable<Step['learning_role']>,
  title: string,
  learnerText: string,
  learnerAction: string,
  extras: Record<string, unknown> = {},
): Step {
  const stepId = `${missionId}-S${String(stepOrder).padStart(3, '0')}`
  const requiredDevice: Step['required_device'] = blockType === 'pc_verification' || blockType === 'submission' ? 'pc' : 'mobile'
  const options = Array.isArray(extras.options)
    ? (extras.options as [string, string, boolean, string, number?][]).map(([value, label, isCorrect, explanation, expectedOrder], index) => ({
        project_id: projectId,
        mission_id: missionId,
        step_id: stepId,
        option_id: `${stepId}-O${String(index + 1).padStart(2, '0')}`,
        option_order: index + 1,
        option_value: value,
        option_label: label,
        label,
        is_correct: isCorrect,
        is_expected: isCorrect,
        explanation,
        expected_order: expectedOrder ?? null,
        option_group: 'default',
        order: index + 1,
      }))
    : []

  return {
    project_id: projectId,
    mission_id: missionId,
    step_id: stepId,
    step_order: stepOrder,
    section: stepOrder === 1 ? '문제상황' : stepOrder === 5 ? '정리/제출' : '학습활동',
    block_type: blockType,
    title,
    learner_text: learnerText,
    learner_action: learnerAction,
    input_type: blockType,
    options_ref: options.length ? `${stepId}-OPTIONS` : null,
    expected_answer_ref: `${stepId}-EXPECTED`,
    expected_answer_text: typeof extras.correct_answer === 'string' ? extras.correct_answer : '문제 상황과 판단 근거가 연결되면 적절합니다.',
    is_student_visible: true,
    required_device: requiredDevice,
    completion_rule: '응답을 저장하고 근거를 확인하면 완료됩니다.',
    planner_note: '초급 학습자가 다양한 문제 유형으로 데이터 분석 흐름을 연습하도록 구성합니다.',
    developer_note: '원본 beginner 콘텐츠를 렌더링 가능한 step으로 변환했습니다.',
    options,
    body: learnerText,
    question: extras.question as string | undefined,
    code: extras.code as string | undefined,
    code_template: extras.code_template as string | undefined,
    correct_answer: extras.correct_answer as string | undefined,
    explanation: extras.correct_answer ? `기대 기준: ${extras.correct_answer}` : undefined,
    checklist_items: extras.checklist_items as string[] | undefined,
    ai_tutor_questions: extras.ai_tutor_questions as string[] | undefined,
    peer_review_points: extras.peer_review_points as string[] | undefined,
    pc_detail: extras.pc_detail as string | undefined,
    mobile_summary: (extras.mobile_summary as string | undefined) || learnerText,
    is_required: true,
    device: requiredDevice,
    device_target: requiredDevice,
    mobile_visible: true,
    pc_visible: requiredDevice === 'pc',
    learning_role: learningRole,
    mobile_continue_label: requiredDevice === 'pc' ? 'PC에서 이어하기' : '다음 활동',
    pc_continue_label: '결과 저장',
    submission_type: extras.submission_type as string[] | undefined,
    evaluation_criteria: extras.evaluation_criteria as string[] | undefined,
    expected_output: extras.expected_output as string | undefined,
  }
}
