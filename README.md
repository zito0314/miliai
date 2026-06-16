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

Gemini 기반 PBL 과정 자동 생성 기능까지 로컬에서 실행할 때:

1. `.env.example`을 참고해 프로젝트 루트에 `.env.local`을 만듭니다.
2. Google AI Studio에서 발급한 API 키를 서버 환경변수에 입력합니다.
3. Vercel 개발 서버를 실행합니다.

```bash
GEMINI_API_KEY=발급받은_API_키
GEMINI_MODEL=gemini-2.5-flash
```

```bash
npx vercel dev
```

API 키는 브라우저 코드나 Git 저장소에 넣지 않습니다. 과정설계 요청은 Vercel Function인 `/api/generate-pbl`을 통해 서버에서 Gemini로 전달됩니다.

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
