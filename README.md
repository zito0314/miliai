# Mili AI PBL 기술 검색

Mili AI PBL 콘텐츠 기획자가 프로젝트 주제와 연결되는 기술 개념, PBL 활용 방식, Unit 후보를 빠르게 찾는 내부 검색 도구입니다.

Google Sheets API나 API Key 없이, Google Sheets의 `웹에 게시 > CSV` 공개 링크를 데이터 소스로 사용합니다.

## Google Sheets 연결 방법

1. Google Sheets에서 `파일 > 공유 > 웹에 게시`를 클릭합니다.
2. `tech_items` 시트를 CSV 형식으로 게시합니다.
3. 발급된 CSV 링크를 `src/config/dataSource.js`의 `GOOGLE_SHEET_CSV_URL`에 입력합니다.
4. `npm install`을 실행합니다.
5. `npm run dev`를 실행합니다.

현재 설정 파일은 아래 형태입니다.

```js
export const GOOGLE_SHEET_CSV_URL = 'Google Sheets CSV 공개 링크'
export const REFRESH_INTERVAL_MS = 60000
```

Google Sheets에서 받은 링크가 `/pubhtml`로 끝난다면, 데이터 연결에는 같은 게시 문서의 `/pub?output=csv` 주소를 사용해야 합니다.

## 실행 방법

검색 화면만 실행할 때:

```bash
npm install
npm run dev
```

AI 기반 PBL 과정 자동 생성 기능까지 로컬에서 실행할 때:

1. `.env.example`을 참고해 프로젝트 루트에 `.env.local`을 만듭니다.
2. Google AI Studio와 Groq에서 발급한 API 키를 서버 환경변수에 입력합니다.
3. Vercel 개발 서버를 실행합니다.

```bash
GEMINI_API_KEY=발급받은_API_키
GEMINI_MODEL=gemini-2.5-flash
GROQ_API_KEY=발급받은_GROQ_API_키
PBL_HISTORY_SCRIPT_URL=발급받은_APPS_SCRIPT_웹앱_URL
PBL_HISTORY_SCRIPT_SECRET=Apps_Script와_같은_시크릿
```

```bash
npx vercel dev
```

API 키는 브라우저 코드나 Git 저장소에 넣지 않습니다. 과정설계 요청은 Vercel Function인 `/api/generate-pbl`을 통해 서버에서 선택한 모델로 전달됩니다. 기본 선택 모델은 기존 Gemini 2.5 Flash(`gemini-2.5-flash`)이며, 추가 선택지는 Groq Llama 3.3 70B Versatile(`llama-3.3-70b-versatile`)입니다.

## PBL 생성 이력 저장소 설정

현재 코드베이스에는 별도 DB 설정이 없으므로 PBL 생성 이력은 Google Sheets + Apps Script Web App으로 저장합니다. 원격 저장소가 아직 설정되지 않았거나 장애가 나면 브라우저 `localStorage`가 fallback 캐시로 동작합니다.

사용할 스프레드시트:

```text
https://docs.google.com/spreadsheets/d/1tkMOIhMh3Y762vsXra4l9HwYwKeXM10hv1rWdBtGVdM/edit
```

Apps Script 설정 순서:

1. 위 Google Sheet를 엽니다.
2. 상단 메뉴에서 `확장 프로그램 > Apps Script`를 엽니다.
3. 기본 `Code.gs` 내용을 지우고, 이 저장소의 `scripts/pbl-history-google-apps-script.gs` 내용을 그대로 붙여넣습니다.
4. Apps Script 왼쪽의 `프로젝트 설정`에서 `스크립트 속성`을 추가합니다.
5. 속성 이름은 `PBL_HISTORY_SCRIPT_SECRET`, 값은 충분히 긴 임의 문자열로 입력합니다.
6. 우측 상단 `배포 > 새 배포`를 클릭합니다.
7. 유형은 `웹 앱`, 실행 사용자는 `나`, 액세스 권한은 `모든 사용자`로 설정합니다.
8. 배포 후 발급되는 `/exec` URL을 복사합니다.
9. 프로젝트 루트의 `.env.local`에 아래 값을 입력합니다.

```bash
PBL_HISTORY_SCRIPT_URL=복사한_/exec_URL
PBL_HISTORY_SCRIPT_SECRET=5번에서_입력한_값
```

10. `npx vercel dev`를 다시 시작합니다.

처음 저장 요청이 들어가면 스프레드시트에 `pbl_generation_history`, `pbl_generation_history_chunks` 시트가 자동 생성됩니다. PBL 결과 JSON은 크기가 커질 수 있어 chunks 시트에 분할 저장됩니다.

프로덕션 빌드:

```bash
npm run build
```

코드 검사:

```bash
npm run lint
```

## 시트 컬럼

첫 번째 행에 아래 컬럼이 모두 있어야 합니다.

```text
id | category | name | description | simpleDescription | useCases | pblUsage | tags | unitExamples | isActive
```

- `tags`: `#Python #기초문법 #자동화`처럼 공백으로 구분합니다.
- `unitExamples`: 여러 항목은 줄바꿈, `|`, `;`로 구분할 수 있습니다.
- `isActive`: `TRUE`인 행만 화면에 표시됩니다.
- 빈 행은 자동으로 무시됩니다.

## 데이터 갱신

- 최초 진입 시 CSV를 자동으로 불러옵니다.
- 60초마다 자동으로 다시 불러옵니다.
- 화면의 `데이터 새로고침` 버튼으로 즉시 갱신할 수 있습니다.
- 요청 URL에 현재 시간을 추가하고 `no-store` 옵션을 사용해 브라우저 캐시를 방지합니다.

## 주요 기능

- 모든 CSV 필드를 대상으로 하는 실시간 부분 검색
- CSV의 카테고리 값으로 자동 생성되는 필터
- CSV 태그 빈도로 자동 생성되는 자주 쓰는 태그
- 기술 카드, Unit 예시, 상세 정보 패널
- 과목명과 검색 데이터 맥락을 활용한 PBL 과정·Unit·Mission·Task 초안 생성
- Google Sheets 원격 저장소와 브라우저 fallback 캐시를 활용한 PBL 생성 이력 조회·불러오기·삭제
- 각 Task에 필요한 기술명·카테고리·필요 이유 연결
- 프로젝트 개요와 Unit별 미션지 데이터 생성
- `excelRows` 기반 PBL 템플릿 표, Google Sheets용 TSV 복사, JSON 다운로드
- 마지막 업데이트 시간 및 로딩·오류·빈 상태
- 브라우저에 저장되는 즐겨찾기
- 데스크톱과 모바일 반응형 레이아웃

## 주요 구조

```text
src/
  config/
    dataSource.js
  services/
    fetchTechItems.ts
    generatePblPlan.ts
  components/
    Header.tsx
    SearchBar.tsx
    DataStatusBar.tsx
    CategoryFilter.tsx
    TagFilter.tsx
    TechCard.tsx
    TechDetailPanel.tsx
    EmptyState.tsx
    PblGenerator.tsx
    PblPlanResult.tsx
    PblPlanTable.tsx
    UnitBundles.tsx
  types/
    pbl.ts
  utils/
    copyPblPlanAsTsv.ts
    downloadJson.ts
    normalizeText.ts
    parseTags.ts
    search.tsx
api/
  generate-pbl.js
```
