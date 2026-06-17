# miliai 인수인계 문서 - 2026-06-17

## 현재 브랜치 상태

- 저장소: `zito0314/miliai`
- 로컬 경로: `/Users/hddn2/Desktop/mili AI/dev/miliai`
- 작업 브랜치: `main`
- 직전 기준 커밋: `0624fab Add staged Groq PBL generation`

## 이번 작업 요약

`miliai` 콘텐츠 생성기의 기존 workbook/표 결과는 유지하면서, 생성된 PBL JSON이 실제 Mili AI 학습 플랫폼에서 어떻게 보일지 확인할 수 있는 `모바일/PC 미리보기` 영역을 추가했다.

결과 화면의 상위 탭은 다음 순서다.

1. `모바일/PC 미리보기`
2. `워크북`
3. `JSON 미리보기`

기존 기획자용 예상 답안 생성/표시 영역은 이 탭 아래에 그대로 유지된다.

## 주요 변경 파일

### `src/utils/toPreviewPblContent.ts`

- `PblPlan`을 미리보기용 `PblContent` 구조로 변환한다.
- 이미 `projects[]`를 가진 구조가 들어오면 미리보기용으로 정규화해서 그대로 수용한다.
- 현재 생성기 구조인 `{ project, missions[] }`는 `projects[0]` 형태로 변환한다.
- `answerGuides`, `excelWorkbook`은 미리보기 콘텐츠에는 포함하지 않는다.
- 누락된 `project_id`, `mission_id`, `step_id`, `mission_order`, `step_order`를 기본값으로 보정한다.
- `planner_note`, `developer_note`, `planner_review_points` 등 내부 검토 메모는 삭제하지 않고 보존한다.
- `validatePreviewPblContent()`로 미리보기용 최소 구조 검사를 제공한다.

### `src/components/PblPreviewPanel.tsx`

- 모바일/PC 모드 전환 UI를 제공한다.
- 프로젝트/미션 선택 드롭다운을 제공한다.
- 모바일 모드에서는 390px 내외의 카드형 학습 화면처럼 표시한다.
- PC 모드에서는 왼쪽 step 목록, 오른쪽 상세 영역으로 표시한다.
- `mobile_visible === false`, `pc_visible === false` 조건을 반영한다.
- 디바이스 대상이 현재 모드와 다르면 summary 카드로 표시한다.
- 각 step 하단에 접힘 영역 `기획자 정보 보기`를 제공한다.
- 미션에도 `미션 기획자 정보 보기` 접힘 영역을 제공한다.
- 알 수 없는 `block_type`도 앱이 깨지지 않도록 안내 카드로 표시한다.

지원한 주요 `block_type`:

- `situation_card`
- `concept_card`
- `vod_recommendation`
- `single_choice`
- `multiple_choice`
- `sequence_order`
- `code_block`
- `code_fill_blank`
- `code_error_finding`
- `result_prediction`
- `ai_tutor_question`
- `self_checklist`
- `peer_review_request`
- `pc_verification`
- `submission`

### `src/components/PblPlanResult.tsx`

- 기존 workbook tabs를 상위 `워크북` 탭 안으로 이동했다.
- 새 상위 탭 `모바일/PC 미리보기`를 추가했다.
- 새 상위 탭 `JSON 미리보기`를 추가했다.
- 기존 복사, JSON 다운로드, 피드백 반영, 섹션 수정, 예상 답안 생성 흐름은 유지했다.

### `src/App.css`

- 미리보기 패널, 모바일 프레임, PC 2단 레이아웃, step 카드, 내부 정보 접힘 영역, 검증 알림, JSON 미리보기 스타일을 추가했다.
- 1080px, 780px, 520px 이하 반응형 보정을 추가했다.

## 동작 기준

- PBL 생성 후 결과 화면에서 `모바일/PC 미리보기` 탭이 기본으로 열린다.
- 모바일 모드에서 PC 전용 step은 `PC에서 이어하기` 안내 카드로 표시된다.
- PC 모드에서 모바일 전용 step은 `모바일 선행 학습 요약` 카드로 표시된다.
- 선택형 step은 Radio/Checkbox로 보여준다.
- 코드 빈칸/오류 찾기/결과 예측 step도 선택 UI를 제공한다.
- `sequence_order`는 순서 목록으로 보여준다.
- `submission`은 제출 유형, 평가 기준, PASS 기준을 보여준다.
- 내부 검토 정보는 기본적으로 접혀 있고, `기획자 정보 보기`에서 확인한다.

## 검증 완료

아래 명령은 통과했다.

```bash
npm run lint
npm run build
git diff --check
```

`npm run build`에서는 Vite의 기존 번들 크기 경고가 나타난다. 실패가 아니며 이번 변경 전에도 같은 계열의 경고가 있었다.

로컬 앱도 `http://127.0.0.1:5173/`에서 첫 화면 로딩과 콘솔 에러 없음까지 확인했다. 생성 결과가 없는 첫 화면에서는 미리보기 탭이 DOM에 보이지 않는 것이 정상이다.

## 다음 채팅 시작용 메시지

새 채팅에서는 아래 문장을 붙여넣으면 된다.

```text
이 프로젝트는 /Users/hddn2/Desktop/mili AI/dev/miliai 에 있는 zito0314/miliai 저장소입니다.
main 브랜치에서 작업합니다.

최근 작업:
- PBL 생성 결과 화면에 모바일/PC 학습 화면 미리보기 탭을 추가했습니다.
- PblPlan 또는 projects[] 구조를 미리보기용 PblContent로 변환하는 src/utils/toPreviewPblContent.ts가 있습니다.
- src/components/PblPreviewPanel.tsx가 모바일/PC 토글, 프로젝트/미션 선택, block_type별 step 렌더링, 기획자 정보 보기 접힘 영역을 담당합니다.
- 기존 workbook 탭, JSON 다운로드, TSV 복사, 피드백 반영, 예상 답안 기능은 유지되어야 합니다.

먼저 git status --short --branch 로 상태를 확인하고, 필요한 경우 npm run lint / npm run build로 검증해주세요.
```
