# Mili AI PBL 콘텐츠 템플릿

이 문서는 Gemini가 Mili AI PBL 콘텐츠를 생성할 때 따라야 하는 **콘텐츠 데이터 구조 템플릿**이다.
Gemini는 학습자용 카드 요약이 아니라, 플랫폼에 입력 가능한 **JSON-ready PBL 콘텐츠**를 생성해야 한다.

---

## 1. 최상위 구조

최종 JSON은 아래 구조를 따른다.

```json
{
  "project": {},
  "missions": [],
  "ui_blocks": [],
  "environment_tags": [],
  "validation_checklist": []
}
```

Gemini는 `excelWorkbook`을 생성하지 않는다.
엑셀/Google Sheets용 workbook은 서버의 `rebuildExcelWorkbook(plan)` 함수가 이 JSON을 기반으로 다시 생성한다.

---

## 2. project

`project`는 하나의 PBL 프로젝트 전체를 설명한다.

```ts
type Project = {
  project_id: string;
  title: string;
  short_description: string;
  environment_type: string;
  duration_label: string;
  target_learner: string;
  difficulty_label: string;
  project_goal: string;
  learning_mode: string;
  prerequisites: string;
  tech_stack: string;
  final_outputs: string;
  constraints: string;
  pc_alternative: string;
  is_student_visible: boolean;
  content_status: "draft" | "draft_ready_for_test" | "review_needed" | "approved";
  planner_note: string;
  developer_note: string;
};
```

### 작성 기준

- `project_id`는 영문 대문자, 숫자, 하이픈 기반으로 작성한다.
  - 예: `PBL-FOOD-FORECAST-001`, `PBL-DRONE-ROUTE-001`
- `title`은 과목명을 그대로 반복하지 말고 실무 프로젝트명처럼 작성한다.
- `short_description`은 한 문장으로 작성한다.
- `environment_type`은 아래 중 하나를 사용한다.
  - `모바일 완료형`
  - `모바일 중심형`
  - `PC 검증형`
  - `모바일 중심 + PC 검증형`
- `duration_label`은 전체 기간과 세션 구성을 함께 작성한다.
  - 예: `4주 / 모바일 세션 8회(회당 15~25분) + PC 검증 세션 2회(회당 60분)`
- `target_learner`는 군 장병의 수준을 기준으로 작성한다.
- `difficulty_label`은 `1레벨`, `3~4레벨`, `5레벨`처럼 작성한다.
- `learning_mode`에는 모바일 학습, PC 검증, AI 교관, 피어리뷰 활용 방식을 작성한다.
- `constraints`에는 데이터 보안, 개인정보, 실제 군 내부 데이터 사용 제한, 도구 제한을 포함한다.
- `pc_alternative`에는 PC 접근이 어려운 학습자를 위한 대체 과제를 작성한다.
- `planner_note`는 기획자 내부 검토용 메모다.
- `developer_note`는 개발자가 화면/DB 구조를 이해하기 위한 메모다.
- `planner_note`, `developer_note`는 학생에게 노출하지 않는다.

---

## 3. missions

`missions`는 프로젝트를 구성하는 미션 배열이다.
미션은 프로젝트 규모와 난이도에 따라 2~4개로 생성한다.

```ts
type Mission = {
  project_id: string;
  mission_id: string;
  mission_order: number;
  title: string;
  environment_type: string;
  estimated_time: string;
  core_learning_action: string;
  student_outputs: string;
  planner_review_points: string;
  developer_note: string;
  mission_overview: string;
  learning_goal: string;
  prerequisites: string;
  tech_stack: string;
  constraints: string;
  is_pc_required: boolean;
  has_mobile_alternative: boolean;
  steps: Step[];
  submission: Submission;
};
```

### 작성 기준

- `mission_id`는 `M01`, `M02`, `M03`, `M04` 형식으로 작성한다.
- `mission_order`는 1부터 순차 증가한다.
- `title`은 학생이 이해하기 쉬운 행동 중심 제목으로 작성한다.
- `estimated_time`은 모바일 학습 세션 기준으로 짧게 작성한다.
  - 예: `15~25분`, `20~30분`, `40분`, `60분`
- `core_learning_action`은 이 미션에서 학습자가 실제로 하는 행동을 요약한다.
  - 예: `문제 상황 분류, 이해관계자 선택, 데이터 컬럼 의미 매칭`
- `student_outputs`는 학생이 제출하거나 저장해야 하는 결과물이다.
- `planner_review_points`는 기획자가 미션 품질을 검토할 때 확인할 포인트다.
- `mission_overview`, `learning_goal`, `prerequisites`, `tech_stack`, `constraints`는 학생에게 노출 가능한 문장으로 작성한다.
- `is_pc_required`와 `has_mobile_alternative`를 반드시 포함한다.

---

## 4. steps

`steps`는 실제 화면 또는 학습 활동 단위다.
기존의 긴 5단계 가이드보다 더 작은 단위로 나누어, 모바일/PC 화면에 배치 가능한 활동으로 작성한다.

```ts
type Step = {
  project_id: string;
  mission_id: string;
  step_id: string;
  step_order: number;
  section: string;
  block_type: string;
  title: string;
  learner_text: string;
  learner_action: string;
  input_type: string;
  options_ref: string | null;
  expected_answer_ref: string | null;
  expected_answer_text: string | null;
  is_student_visible: boolean;
  required_device: "mobile" | "pc" | "both";
  completion_rule: string;
  planner_note: string;
  developer_note: string;
  options: StepOption[];
};
```

### 작성 기준

- `step_id`는 `M01-S001`, `M01-S002` 형식으로 작성한다.
- `step_order`는 미션 내부에서 1부터 순차 증가한다.
- `section`은 아래 값 중 하나를 우선 사용한다.
  - `기본정보`
  - `학습활동`
  - `제출안내`
  - `평가기준`
- `title`은 학생에게 보이는 짧은 제목이다.
- `learner_text`는 학생에게 실제로 보여줄 문구다.
- `learner_action`은 학생이 해야 하는 행동이다.
- `input_type`은 입력 또는 상호작용 방식이다.
- 선택지가 필요한 step은 `options_ref`와 `expected_answer_ref`에 해당 `step_id`를 넣는다.
- 선택지가 없는 step은 `options_ref`, `expected_answer_ref`를 `null`로 둔다.
- `expected_answer_text`는 기획자와 평가자가 확인할 수 있는 예상 답안 또는 기대 기준이다.
- `is_student_visible`은 학생 화면 노출 여부다.
- `required_device`는 `mobile`, `pc`, `both` 중 하나다.
- `completion_rule`은 완료 판정 기준이다.
- `planner_note`는 기획자 내부 검토용이다.
- `developer_note`는 UI 컴포넌트, 데이터 저장 방식 참고용이다.
- `options`는 해당 step에 선택지가 있을 때만 작성하고, 없으면 빈 배열로 둔다.

---

## 5. block_type / input_type

### 권장 block_type

```text
mission_overview
learning_goal
prerequisite_courses
tech_stack
constraints
scenario_intro
scenario_card
single_choice
multi_choice
matching
sequence_sort
fill_blank
short_text
content
checklist
ai_tutor_prompt
pc_execution
file_upload
comparison
peer_review_request
peer_review
submission
evaluation
```

### 권장 input_type

```text
read
single_choice
multi_choice
matching
sequence_sort
fill_blank
short_text
checklist
ai_tutor
pc_execution
file_upload
compare
peer_review_request
peer_review
submit
```

### 모바일/PC 기준

- 모바일에서는 긴 코드 입력을 요구하지 않는다.
- 모바일 step은 선택형, 매칭형, 순서 배열, 짧은 서술, 체크리스트, AI 교관 질문, 피어리뷰 중심으로 구성한다.
- 긴 코드 작성이나 실제 실행은 `required_device: "pc"` 또는 `input_type: "pc_execution"`으로 분리한다.
- PC가 필요한 경우 가능하면 모바일 대체 과제를 제공한다.

---

## 6. options

`options`는 선택형, 매칭형, 순서 배열형, 체크리스트형 step에 사용한다.

```ts
type StepOption = {
  project_id: string;
  mission_id: string;
  step_id: string;
  option_order: number;
  option_value: string;
  option_label: string;
  is_expected: boolean;
  expected_order: number | null;
  option_group: string;
};
```

### 작성 기준

- `option_value`는 영문 또는 한글 slug 형태로 작성한다.
- `option_label`은 학생에게 보이는 문구다.
- 정답 또는 기대값이 있는 경우 `is_expected: true`로 표시한다.
- 정답이 없는 의견형/체크리스트형 항목은 `is_expected: false`로 둔다.
- 순서 배열형은 `expected_order`를 1부터 작성한다.
- 순서가 없는 선택형은 `expected_order`를 `null`로 둔다.
- `option_group`은 해당 step의 `input_type`과 맞춘다.

---

## 7. submission

각 mission에는 반드시 하나의 `submission`을 포함한다.

```ts
type Submission = {
  project_id: string;
  mission_id: string;
  submission_id: string;
  submission_title: string;
  student_instruction: string;
  evaluation_text: string;
  pass_criteria: string;
  needs_revision_example: string;
  peer_review_required: boolean;
  peer_review_mode: string;
  developer_note: string;
};
```

### 작성 기준

- `submission_id`는 `M01-SUB`, `M02-SUB` 형식으로 작성한다.
- `student_instruction`은 학생에게 보여줄 제출 안내다.
- `evaluation_text`는 학생이 이해할 수 있는 평가 기준이다.
- `pass_criteria`는 PASS 판단 기준이다.
- `needs_revision_example`은 보완 필요 예시다.
- `peer_review_required`는 해당 미션에 피어리뷰가 필요한지 여부다.
- `peer_review_mode`는 `선택`, `필수`, `없음` 중 하나로 작성한다.
- `developer_note`는 제출 UI와 저장 방식 참고 메모다.

---

## 8. ui_blocks

`ui_blocks`는 화면 블록 사전이다.
기본 사전 데이터로 코드에서 제공할 수 있으므로, Gemini는 새 항목을 임의로 많이 만들지 않는다.

```ts
type UiBlockDictionaryItem = {
  ui_block_type: string;
  content_unit: string;
  purpose: string;
  screen_elements: string;
  learner_action: string;
  data_to_store: string;
  student_visibility: string;
  developer_note: string;
};
```

권장 기본 항목:

- `scenario_card`
- `single_or_multi_choice`
- `matching`
- `sequence_sort`
- `fill_blank`
- `ai_tutor_prompt`
- `checklist`
- `file_or_text_submission`
- `peer_review`

---

## 9. environment_tags

`environment_tags`는 학습 환경, 입력 방식, 평가 방식 태그 사전이다.
기본 사전 데이터로 코드에서 제공할 수 있다.

```ts
type EnvironmentTag = {
  tag_id: string;
  tag_label: string;
  description: string;
  ui_usage: string;
};
```

권장 기본 항목:

- `ENV_MOBILE_DONE`
- `ENV_MOBILE_PC`
- `ENV_PC_REQUIRED`
- `ACT_AI_TUTOR`
- `ACT_PEER_REVIEW`
- `INPUT_SHORT_CODE`
- `INPUT_LONG_CODE`
- `EVAL_AUTO`
- `EVAL_PEER`

---

## 10. validation_checklist

`validation_checklist`는 기획자와 개발자가 생성 결과를 검토하기 위한 체크리스트다.

```ts
type ValidationChecklistItem = {
  check_id: string;
  category: string;
  check_item: string;
  planner_criteria: string;
  developer_criteria: string;
  status: "검토 필요" | "통과" | "보완 필요";
};
```

### 작성 기준

- 기본적으로 6~10개의 체크리스트를 생성한다.
- 아래 관점을 포함한다.
  - 콘텐츠 흐름
  - 학생 노출 문구
  - 모바일 수행성
  - PC 검증
  - 제약조건
  - 제출물
  - 평가 기준
  - AI 교관
  - 피어리뷰
- `status`는 기본적으로 `검토 필요`로 작성한다.

---

## 11. 전체 예시 구조

```json
{
  "project": {
    "project_id": "PBL-FOOD-FORECAST-001",
    "title": "급식 소요 예측을 위한 데이터 기반 발주 판단 프로젝트",
    "short_description": "부대 급식 데이터를 바탕으로 과발주와 부족 문제를 줄이는 데이터 기반 판단 흐름을 설계한다.",
    "environment_type": "모바일 중심 + PC 검증형",
    "duration_label": "4주 / 모바일 세션 8회 + PC 검증 세션 2회",
    "target_learner": "AI와 데이터 분석을 처음 접하는 일반 장병",
    "difficulty_label": "3~4레벨",
    "project_goal": "급식 발주 문제를 데이터 분석 문제로 재정의하고, 예측 결과를 활용한 의사결정 기준을 제안한다.",
    "learning_mode": "모바일에서 상황 판단과 선택형 활동을 수행하고, PC 세션에서 데이터 확인 및 간단한 분석 결과를 검증한다.",
    "prerequisites": "데이터 표 읽기, Python 또는 스프레드시트 기초, AI 교관 질문 활용법",
    "tech_stack": "Python, pandas, Excel, Data Visualization",
    "final_outputs": "문제 정의서, 데이터 컬럼 해석표, 발주 판단 기준표, 최종 제안서",
    "constraints": "실제 군 급식 데이터나 개인정보를 사용하지 않고 가상 데이터 또는 공개 대체 데이터를 사용한다.",
    "pc_alternative": "PC 사용이 어려운 경우 제공된 요약 통계표와 차트를 보고 판단 기준을 작성한다.",
    "is_student_visible": true,
    "content_status": "draft",
    "planner_note": "초급 장병도 수행할 수 있도록 모바일 선택형 활동과 PC 검증 활동을 분리한다.",
    "developer_note": "project_id를 기준으로 missions, steps, submissions를 연결한다."
  },
  "missions": [],
  "ui_blocks": [],
  "environment_tags": [],
  "validation_checklist": []
}
```
