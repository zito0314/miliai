# Mili AI PBL JSON 출력 규칙

이 문서는 Gemini가 Mili AI PBL 콘텐츠를 생성할 때 따라야 하는 **최종 출력 규칙**이다.
Gemini는 이 문서를 가장 높은 우선순위로 참고해야 한다.

---

## 1. 출력 형식

반드시 JSON 객체 하나만 반환한다.

금지:

- 마크다운 설명
- 코드블록 표시
- JSON 앞뒤 설명 문장
- 주석
- 스키마에 없는 필드
- `excelWorkbook` 직접 생성

허용:

- 제공된 스키마에 맞는 JSON 객체 하나
- 모든 문자열 값은 한국어
- ID, enum, slug 값은 지정된 형식에 맞는 영문/숫자/하이픈/언더스코어 사용 가능

---

## 2. 최상위 JSON 구조

최상위 구조는 반드시 아래와 같다.

```json
{
  "project": {},
  "missions": [],
  "ui_blocks": [],
  "environment_tags": [],
  "validation_checklist": []
}
```

`excelWorkbook`은 포함하지 않는다.
서버가 `rebuildExcelWorkbook(plan)`으로 workbook을 생성한다.

---

## 3. project 필수 필드

```json
{
  "project_id": "PBL-SAMPLE-001",
  "title": "프로젝트명",
  "short_description": "한 문장 설명",
  "environment_type": "모바일 중심 + PC 검증형",
  "duration_label": "4주 / 모바일 세션 8회 + PC 검증 세션 2회",
  "target_learner": "대상 학습자",
  "difficulty_label": "3~4레벨",
  "project_goal": "프로젝트 목표",
  "learning_mode": "학습 방식",
  "prerequisites": "선행 학습",
  "tech_stack": "활용 기술",
  "final_outputs": "최종 산출물",
  "constraints": "제약조건",
  "pc_alternative": "PC 대체 과제",
  "is_student_visible": true,
  "content_status": "draft",
  "planner_note": "기획자 메모",
  "developer_note": "개발 메모"
}
```

### project enum 규칙

`environment_type`은 아래 중 하나다.

```text
모바일 완료형
모바일 중심형
PC 검증형
모바일 중심 + PC 검증형
```

`content_status`는 아래 중 하나다.

```text
draft
draft_ready_for_test
review_needed
approved
```

---

## 4. missions 필수 필드

`missions`는 2~4개만 생성한다.

```json
{
  "project_id": "PBL-SAMPLE-001",
  "mission_id": "M01",
  "mission_order": 1,
  "title": "미션 제목",
  "environment_type": "모바일 중심형",
  "estimated_time": "20~30분",
  "core_learning_action": "핵심 학습 행동",
  "student_outputs": "학생 산출물",
  "planner_review_points": "기획자 검토 포인트",
  "developer_note": "개발 메모",
  "mission_overview": "미션 개요",
  "learning_goal": "학습 목표",
  "prerequisites": "선행 학습",
  "tech_stack": "활용 기술",
  "constraints": "제약조건",
  "is_pc_required": false,
  "has_mobile_alternative": true,
  "steps": [],
  "submission": {}
}
```

### mission ID 규칙

- 첫 번째 미션: `M01`
- 두 번째 미션: `M02`
- 세 번째 미션: `M03`
- 네 번째 미션: `M04`

`mission_order`는 1부터 순차 증가한다.

---

## 5. steps 필수 필드

각 mission은 최소 5개 이상의 step을 포함한다.

```json
{
  "project_id": "PBL-SAMPLE-001",
  "mission_id": "M01",
  "step_id": "M01-S001",
  "step_order": 1,
  "section": "학습활동",
  "block_type": "single_choice",
  "title": "스텝 제목",
  "learner_text": "학생에게 보여줄 문구",
  "learner_action": "학생이 해야 할 행동",
  "input_type": "single_choice",
  "options_ref": "M01-S001",
  "expected_answer_ref": "M01-S001",
  "expected_answer_text": "예상 답안 또는 기대 기준",
  "is_student_visible": true,
  "required_device": "mobile",
  "completion_rule": "완료 판정 기준",
  "planner_note": "기획자 메모",
  "developer_note": "개발 메모",
  "options": []
}
```

### step ID 규칙

- `M01-S001`
- `M01-S002`
- `M02-S001`
- `M02-S002`

`step_order`는 미션 내부에서 1부터 순차 증가한다.

### section enum

`section`은 아래 중 하나를 우선 사용한다.

```text
기본정보
학습활동
제출안내
평가기준
```

### required_device enum

`required_device`는 아래 중 하나다.

```text
mobile
pc
both
```

---

## 6. block_type 허용값

`block_type`은 아래 값을 우선 사용한다.

```text
situation_card
concept_card
vod_recommendation
single_choice
multiple_choice
sequence_order
code_block
code_fill_blank
code_error_finding
result_prediction
ai_tutor_question
self_checklist
peer_review_request
pc_verification
submission
```

스키마에 없는 값을 임의로 만들지 않는다.
legacy 값이 필요한 경우 아래처럼 변환한다.

- `multi_choice` → `multiple_choice`
- `sequence_sort` → `sequence_order`
- `fill_blank` → `code_fill_blank`
- `ai_tutor_prompt` → `ai_tutor_question`
- `pc_execution` → `pc_verification`

---

## 7. input_type 허용값

`input_type`은 아래 값을 우선 사용한다.

```text
read
single_choice
multiple_choice
sequence_order
code_fill_blank
code_error_finding
result_prediction
short_text
self_checklist
ai_tutor_question
pc_verification
peer_review_request
submit
```

---

## 8. options 규칙

선택형, 순서 배열형, 코드 빈칸 채우기, 오류 찾기, 결과 예측, 체크리스트형 step에는 `options`를 작성한다.
선택지가 없는 step은 `options: []`로 둔다.

```json
{
  "project_id": "PBL-SAMPLE-001",
  "mission_id": "M01",
  "step_id": "M01-S001",
  "option_id": "M01-S001-OPT-001",
  "option_order": 1,
  "option_value": "option_1",
  "option_label": "학생에게 보이는 선택지",
  "label": "학생에게 보이는 선택지",
  "is_correct": true,
  "is_expected": true,
  "explanation": "이 선택지가 정답인 이유",
  "expected_order": null,
  "option_group": "single_choice",
  "order": 1
}
```

### options_ref / expected_answer_ref 규칙

선택지가 필요한 step:

```json
{
  "options_ref": "M01-S001",
  "expected_answer_ref": "M01-S001"
}
```

선택지가 없는 step:

```json
{
  "options_ref": null,
  "expected_answer_ref": null
}
```

### expected_order 규칙

- `sequence_order` 유형에서는 정답 순서를 1부터 작성한다.
- 그 외 유형에서는 `expected_order: null`로 둔다.

---

## 9. submission 필수 필드

각 mission에는 반드시 하나의 submission이 있어야 한다.

```json
{
  "project_id": "PBL-SAMPLE-001",
  "mission_id": "M01",
  "submission_id": "M01-SUB",
  "submission_title": "제출물 제목",
  "student_instruction": "학생에게 보여줄 제출 안내",
  "evaluation_text": "학생이 이해할 수 있는 평가 기준",
  "pass_criteria": "PASS 판단 기준",
  "needs_revision_example": "보완 필요 예시",
  "peer_review_required": true,
  "peer_review_mode": "선택",
  "developer_note": "제출 UI 및 저장 방식 메모"
}
```

### peer_review_mode enum

```text
선택
필수
없음
```

---

## 10. ui_blocks 규칙

`ui_blocks`는 아래 구조를 따른다.

```json
{
  "ui_block_type": "situation_card",
  "content_unit": "상황 카드",
  "purpose": "학생에게 문제 상황을 짧게 제시한다.",
  "screen_elements": "제목, 설명, 선택 버튼",
  "learner_action": "상황을 읽고 판단한다.",
  "data_to_store": "읽음 여부, 선택값",
  "student_visibility": "학생 노출",
  "developer_note": "카드형 UI로 구현"
}
```

가능하면 기본 사전 항목을 사용한다.

권장 항목:

```text
situation_card
concept_card
single_choice
multiple_choice
sequence_order
code_fill_blank
code_error_finding
result_prediction
ai_tutor_question
self_checklist
peer_review_request
pc_verification
submission
```

---

## 11. environment_tags 규칙

`environment_tags`는 아래 구조를 따른다.

```json
{
  "tag_id": "ENV_MOBILE_PC",
  "tag_label": "모바일 중심 + PC 검증",
  "description": "모바일에서 대부분 수행하고 일부 검증은 PC에서 수행한다.",
  "ui_usage": "프로젝트/미션 환경 배지로 표시"
}
```

권장 항목:

```text
ENV_MOBILE_DONE
ENV_MOBILE_PC
ENV_PC_REQUIRED
ACT_AI_TUTOR
ACT_PEER_REVIEW
INPUT_SHORT_CODE
INPUT_LONG_CODE
EVAL_AUTO
EVAL_PEER
```

---

## 12. validation_checklist 규칙

`validation_checklist`는 6~10개 작성한다.

```json
{
  "check_id": "CHK-001",
  "category": "모바일 수행성",
  "check_item": "모바일에서 긴 코드 입력을 요구하지 않는가?",
  "planner_criteria": "모바일 step은 선택형, 짧은 서술, 체크리스트 중심으로 구성되어야 한다.",
  "developer_criteria": "required_device와 input_type이 화면 구현 가능한 값으로 작성되어야 한다.",
  "status": "검토 필요"
}
```

### status enum

```text
검토 필요
통과
보완 필요
```

기본 status는 `검토 필요`로 작성한다.

---

## 13. 학생 노출/비노출 규칙

학생에게 보여도 되는 필드:

```text
title
short_description
mission_overview
learning_goal
prerequisites
tech_stack
constraints
learner_text
learner_action
student_instruction
evaluation_text
option_label
completion_rule
```

학생에게 직접 노출하지 않는 필드:

```text
planner_note
developer_note
planner_review_points
expected_answer_text
is_expected
expected_order
validation_checklist
```

---

## 14. 예상 답안 규칙

`expected_answer_text`는 학생에게 보여줄 정답이 아니라 기획자/평가자용 기대 기준이다.

선택형 step에서는 올바른 선택 근거를 작성한다.
서술형 step에서는 좋은 답변이 포함해야 할 요소를 작성한다.
PC 실행 step에서는 코드 실행 결과나 확인해야 할 결과를 작성한다.

---

## 15. 모바일/PC 규칙

모바일 step:

```json
{
  "required_device": "mobile",
  "input_type": "single_choice"
}
```

PC 실행 step:

```json
{
  "required_device": "pc",
  "device_target": "pc",
  "input_type": "pc_verification",
  "block_type": "pc_verification"
}
```

모바일과 PC 모두 가능한 step:

```json
{
  "required_device": "both"
}
```

모바일 step에서 긴 코드를 요구하지 않는다.

---

## 16. 최종 자기 점검

JSON을 반환하기 전 반드시 내부적으로 아래를 확인한다.

- 최상위 구조가 `project`, `missions`, `ui_blocks`, `environment_tags`, `validation_checklist`로 되어 있는가?
- `excelWorkbook`을 포함하지 않았는가?
- missions가 2~4개인가?
- 각 mission에 steps와 submission이 있는가?
- 각 step에 필수 필드가 모두 있는가?
- 선택형 step에 options가 있는가?
- 선택지가 없는 step은 options가 빈 배열인가?
- 학생 노출 문구와 내부 메모가 분리되어 있는가?
- 모바일 step에서 긴 코드 입력을 요구하지 않는가?
- PC가 필요한 step은 required_device가 pc 또는 both인가?
- 실제 군 내부 데이터나 개인정보를 요구하지 않는가?
- validation_checklist가 6~10개인가?
- JSON 외의 문장을 반환하지 않았는가?
