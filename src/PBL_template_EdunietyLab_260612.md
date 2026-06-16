# PBL템플릿예시_260612

## Migration Audit

- Source file: `/Users/hddn/Downloads/PBL템플릿예시_260612.xlsx`
- Output file: `/Users/hddn/Documents/밀리AI/PBL_template_example_260612_markdown/PBL템플릿예시_260612.md`
- Scope: workbook metadata, all visible worksheet used ranges, non-empty cell records, merged ranges, layout metadata, relationships, and OOXML drawing/image assets.
- Exact cell values are preserved in JSONL records. The grid view is for readable inspection and escapes Markdown-sensitive characters.

## Workbook Metadata

```json
{
  "sheet_count": 7,
  "sheet_names": [
    "프로젝트개요",
    "미션지_1",
    "미션지_2",
    "미션지_3",
    "미션지_4",
    "프로젝트평가",
    "과제난이도"
  ],
  "creator": "김수보",
  "last_modified_by": "수보 김",
  "created": "2015-06-05T18:19:34",
  "modified": "2026-06-12T11:52:29",
  "title": null,
  "subject": null,
  "description": null,
  "keywords": null,
  "category": null,
  "defined_names": [],
  "package_entry_count": 18,
  "package_entries": [
    "[Content_Types].xml",
    "_rels/.rels",
    "xl/workbook.xml",
    "xl/_rels/workbook.xml.rels",
    "xl/worksheets/sheet1.xml",
    "xl/worksheets/sheet2.xml",
    "xl/worksheets/sheet3.xml",
    "xl/worksheets/sheet4.xml",
    "xl/worksheets/sheet5.xml",
    "xl/worksheets/sheet6.xml",
    "xl/worksheets/sheet7.xml",
    "xl/theme/theme1.xml",
    "xl/styles.xml",
    "xl/sharedStrings.xml",
    "xl/worksheets/_rels/sheet1.xml.rels",
    "xl/printerSettings/printerSettings1.bin",
    "docProps/core.xml",
    "docProps/app.xml"
  ]
}
```

## Sheet: 프로젝트개요

```json
{
  "title": "프로젝트개요",
  "state": "visible",
  "used_range": "A2:C14",
  "min_row": 2,
  "min_column": 1,
  "max_row": 14,
  "max_column": 3,
  "nonempty_record_count": 30,
  "merged_range_count": 2,
  "data_validation_count": 0,
  "table_count": 0,
  "relationship_count": 1,
  "asset_count": 0
}
```

### Grid View

| row | A | B | C |
| --- | --- | --- | --- |
| 2 | PBL 1-1: 군사시설 침입 탐지 시스템 개발 |  |  |
| 3 | 실전 수업용 상세 프로젝트 설계서 |  |  |
| 4 | 프로젝트명 | AI 기반 군사시설 경계 침입 탐지 시스템 개발 | Text |
| 5 | 총 소요 시간 | 학습 시간 : 12주 (주당 3시간 × 12주 = 36시간) + 공유 시간 3주 (오리엔테이션 1주 + 중간발표 1주 + 최종발표 1주 ) | Text |
| 6 | 팀 구성 | 3명 | Text |
| 7 | 난이도 | 9레벨(고급) | Text |
| 8 | 프로젝트 목표 | 실제 군사시설 경계 지역에 설치된 CCTV와 센서 데이터를 활용하여 비인가 침입을 자동으로 탐지하는 AI 시스템을 개발합니다. <br>영상 데이터와 센서 로그를 결합한 멀티모달 이상탐지 시스템을 구축하고, 실시간 경보 발생 메커니즘까지 구현합니다. | Text |
| 9 | 최종산출물 | 데이터 명세서, 문제정의서, AI 모델 등 | Text |
| 10 | 제약조건 | 추론시간 1초 이내, 클라우드 API 호출 금지, 이벤트 후 3초 이내 경보, AI 판단 근거 제시 | Text |
| 11 | 평가기준 | 기능완성도, 알고리즘 이해, 토론 참여도 | Text |
| 12 | 하위미션 목록 | 1단계: 문제의 정의 및 데이터의 정의 (1~3주차)<br>2단계: 구조 설계 (4~6주차)<br>3단계: 제작 및 연동 (7~9주차)<br>4단계: 완성(배포) 및 분석 (10~12주차)<br> | Text |
| 13 |  |  |  |
| 14 |  | * 위 내용은 Text 형태로 DB에 입력됩니다. |  |

### Non-Empty Cell Records

```jsonl
{"address":"A2","row":2,"column":1,"column_letter":"A","raw_value":"PBL 1-1: 군사시설 침입 탐지 시스템 개발","cached_value":"PBL 1-1: 군사시설 침입 탐지 시스템 개발","formula":null,"data_type":"s","number_format":"General","style_id":23,"merged_range":"A2:B2","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A3","row":3,"column":1,"column_letter":"A","raw_value":"실전 수업용 상세 프로젝트 설계서","cached_value":"실전 수업용 상세 프로젝트 설계서","formula":null,"data_type":"s","number_format":"General","style_id":23,"merged_range":"A3:B3","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A4","row":4,"column":1,"column_letter":"A","raw_value":"프로젝트명","cached_value":"프로젝트명","formula":null,"data_type":"s","number_format":"General","style_id":23,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B4","row":4,"column":2,"column_letter":"B","raw_value":"AI 기반 군사시설 경계 침입 탐지 시스템 개발","cached_value":"AI 기반 군사시설 경계 침입 탐지 시스템 개발","formula":null,"data_type":"s","number_format":"General","style_id":14,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C4","row":4,"column":3,"column_letter":"C","raw_value":"Text","cached_value":"Text","formula":null,"data_type":"s","number_format":"General","style_id":0,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"A5","row":5,"column":1,"column_letter":"A","raw_value":"총 소요 시간","cached_value":"총 소요 시간","formula":null,"data_type":"s","number_format":"General","style_id":13,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B5","row":5,"column":2,"column_letter":"B","raw_value":"학습 시간 : 12주 (주당 3시간 × 12주 = 36시간) + 공유 시간 3주 (오리엔테이션 1주 + 중간발표 1주 + 최종발표 1주 )","cached_value":"학습 시간 : 12주 (주당 3시간 × 12주 = 36시간) + 공유 시간 3주 (오리엔테이션 1주 + 중간발표 1주 + 최종발표 1주 )","formula":null,"data_type":"s","number_format":"General","style_id":14,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C5","row":5,"column":3,"column_letter":"C","raw_value":"Text","cached_value":"Text","formula":null,"data_type":"s","number_format":"General","style_id":0,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"A6","row":6,"column":1,"column_letter":"A","raw_value":"팀 구성","cached_value":"팀 구성","formula":null,"data_type":"s","number_format":"General","style_id":13,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B6","row":6,"column":2,"column_letter":"B","raw_value":"3명","cached_value":"3명","formula":null,"data_type":"s","number_format":"General","style_id":14,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C6","row":6,"column":3,"column_letter":"C","raw_value":"Text","cached_value":"Text","formula":null,"data_type":"s","number_format":"General","style_id":0,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"A7","row":7,"column":1,"column_letter":"A","raw_value":"난이도","cached_value":"난이도","formula":null,"data_type":"s","number_format":"General","style_id":13,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B7","row":7,"column":2,"column_letter":"B","raw_value":"9레벨(고급)","cached_value":"9레벨(고급)","formula":null,"data_type":"s","number_format":"General","style_id":14,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C7","row":7,"column":3,"column_letter":"C","raw_value":"Text","cached_value":"Text","formula":null,"data_type":"s","number_format":"General","style_id":0,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"A8","row":8,"column":1,"column_letter":"A","raw_value":"프로젝트 목표","cached_value":"프로젝트 목표","formula":null,"data_type":"s","number_format":"General","style_id":23,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B8","row":8,"column":2,"column_letter":"B","raw_value":"실제 군사시설 경계 지역에 설치된 CCTV와 센서 데이터를 활용하여 비인가 침입을 자동으로 탐지하는 AI 시스템을 개발합니다. \n영상 데이터와 센서 로그를 결합한 멀티모달 이상탐지 시스템을 구축하고, 실시간 경보 발생 메커니즘까지 구현합니다.","cached_value":"실제 군사시설 경계 지역에 설치된 CCTV와 센서 데이터를 활용하여 비인가 침입을 자동으로 탐지하는 AI 시스템을 개발합니다. \n영상 데이터와 센서 로그를 결합한 멀티모달 이상탐지 시스템을 구축하고, 실시간 경보 발생 메커니즘까지 구현합니다.","formula":null,"data_type":"s","number_format":"General","style_id":14,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C8","row":8,"column":3,"column_letter":"C","raw_value":"Text","cached_value":"Text","formula":null,"data_type":"s","number_format":"General","style_id":0,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"A9","row":9,"column":1,"column_letter":"A","raw_value":"최종산출물","cached_value":"최종산출물","formula":null,"data_type":"s","number_format":"General","style_id":23,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B9","row":9,"column":2,"column_letter":"B","raw_value":"데이터 명세서, 문제정의서, AI 모델 등","cached_value":"데이터 명세서, 문제정의서, AI 모델 등","formula":null,"data_type":"s","number_format":"General","style_id":14,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C9","row":9,"column":3,"column_letter":"C","raw_value":"Text","cached_value":"Text","formula":null,"data_type":"s","number_format":"General","style_id":0,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"A10","row":10,"column":1,"column_letter":"A","raw_value":"제약조건","cached_value":"제약조건","formula":null,"data_type":"s","number_format":"General","style_id":23,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B10","row":10,"column":2,"column_letter":"B","raw_value":"추론시간 1초 이내, 클라우드 API 호출 금지, 이벤트 후 3초 이내 경보, AI 판단 근거 제시","cached_value":"추론시간 1초 이내, 클라우드 API 호출 금지, 이벤트 후 3초 이내 경보, AI 판단 근거 제시","formula":null,"data_type":"s","number_format":"General","style_id":14,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C10","row":10,"column":3,"column_letter":"C","raw_value":"Text","cached_value":"Text","formula":null,"data_type":"s","number_format":"General","style_id":0,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"A11","row":11,"column":1,"column_letter":"A","raw_value":"평가기준","cached_value":"평가기준","formula":null,"data_type":"s","number_format":"General","style_id":23,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B11","row":11,"column":2,"column_letter":"B","raw_value":"기능완성도, 알고리즘 이해, 토론 참여도","cached_value":"기능완성도, 알고리즘 이해, 토론 참여도","formula":null,"data_type":"s","number_format":"General","style_id":14,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C11","row":11,"column":3,"column_letter":"C","raw_value":"Text","cached_value":"Text","formula":null,"data_type":"s","number_format":"General","style_id":0,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"A12","row":12,"column":1,"column_letter":"A","raw_value":"하위미션 목록","cached_value":"하위미션 목록","formula":null,"data_type":"s","number_format":"General","style_id":23,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B12","row":12,"column":2,"column_letter":"B","raw_value":"1단계: 문제의 정의 및 데이터의 정의 (1~3주차)\n2단계: 구조 설계 (4~6주차)\n3단계: 제작 및 연동 (7~9주차)\n4단계: 완성(배포) 및 분석 (10~12주차)\n","cached_value":"1단계: 문제의 정의 및 데이터의 정의 (1~3주차)\n2단계: 구조 설계 (4~6주차)\n3단계: 제작 및 연동 (7~9주차)\n4단계: 완성(배포) 및 분석 (10~12주차)\n","formula":null,"data_type":"s","number_format":"General","style_id":15,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"C12","row":12,"column":3,"column_letter":"C","raw_value":"Text","cached_value":"Text","formula":null,"data_type":"s","number_format":"General","style_id":0,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B14","row":14,"column":2,"column_letter":"B","raw_value":"* 위 내용은 Text 형태로 DB에 입력됩니다.","cached_value":"* 위 내용은 Text 형태로 DB에 입력됩니다.","formula":null,"data_type":"s","number_format":"General","style_id":16,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
```

### Merged Ranges

| range | anchor | anchor_raw_value |
| --- | --- | --- |
| A2:B2 | A2 | PBL 1-1: 군사시설 침입 탐지 시스템 개발 |
| A3:B3 | A3 | 실전 수업용 상세 프로젝트 설계서 |

### Layout Metadata

```json
{
  "freeze_panes": null,
  "sheet_view_show_grid_lines": null,
  "column_dimensions": [
    {
      "column": "A",
      "width": 18.19921875,
      "hidden": false,
      "outline_level": 0
    },
    {
      "column": "B",
      "width": 125.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "column": "C",
      "width": 10.19921875,
      "hidden": false,
      "outline_level": 0
    }
  ],
  "row_dimensions": [
    {
      "row": 2,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 3,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 4,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 5,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 6,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 7,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 8,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 9,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 10,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 11,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 12,
      "height": 96.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 13,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 14,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 15,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 16,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 17,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 18,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 19,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 20,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 21,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 22,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 23,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    }
  ]
}
```

### Data Validations

```json
[]
```

### Tables

```json
[]
```

### Worksheet Relationships

```json
[
  {
    "id": "rId1",
    "type": "http://schemas.openxmlformats.org/officeDocument/2006/relationships/printerSettings",
    "target": "../printerSettings/printerSettings1.bin",
    "target_mode": null
  }
]
```

### OOXML Assets

_None_

## Sheet: 미션지_1

```json
{
  "title": "미션지_1",
  "state": "visible",
  "used_range": "A1:U96",
  "min_row": 1,
  "min_column": 1,
  "max_row": 96,
  "max_column": 21,
  "nonempty_record_count": 174,
  "merged_range_count": 104,
  "data_validation_count": 0,
  "table_count": 0,
  "relationship_count": 0,
  "asset_count": 0
}
```

### Grid View

| row | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1단계: 문제의 정의 및 데이터의 정의 (1~3주차) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | 차시 개요 | 군사시설 침입 탐지 문제를 AI 관점에서 재정의하고, 필요한 데이터 유형을 파악하며, <br>실제 또는 유사 데이터셋을 확보하여 탐색적 데이터 분석(EDA)을 수행합니다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | 학습목표 | 실제 보안 현장의 요구사항을 이해하고 이를 머신러닝 문제(이상탐지, 분류)로 구조화할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | 비디오 스트림, 센서 로그 등 다양한 형태의 시계열 데이터의 특성을 이해하고 EDA를 수행할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | 데이터 불균형, 라벨링 이슈, 데이터 프라이버시 등 실무 제약사항을 파악하고 해결 방안을 제시할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | 선행 학습 권장 과목 | 데이터사이언스: EDA, 데이터 시각화, pandas/numpy 활용 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | 인공지능기초 / 머신러닝: 지도/비지도 학습, 이상탐지 알고리즘 개념 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | Python 프로그래밍: 데이터 처리, 파일 I/O, 시각화 라이브러리 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | 컴퓨터비전 (선택): 영상 데이터 구조, OpenCV 기 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | 활용 기술 스택 | Python (pandas, numpy, matplotlib, seaborn) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | Jupyter Notebook |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | OpenCV (기본적인 영상 읽기/쓰기) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | PBL 문제 (학생 제시용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | 문제 상황 | K군 부대는 경계 지역 약 5km에 30대의 CCTV와 50개의 PIR(Passive Infrared) 센서를 설치하여 24시간 감시 체계를 운영하고 있습니다. <br>그러나 현재는 병력이 직접 모니터를 주시해야 하며, 야간에는 가시성이 떨어져 침입 탐지율이 60% 수준에 불과합니다. <br>또한 동물, 기상 변화로 인한 오탐(False Positive)이 하루 평균 15건 발생하여 인력 피로도가 높습니다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | 미션 | AI 기반 자동 침입 탐지 시스템을 개발하여 탐지율을 90% 이상으로 높이고, 오탐률을 하루 3건 이하로 낮추어야 합니다 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | 5단계 실행 가이드 | Step 1: 문제 분석 및 정의 (팀 브레인스토밍) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | 1 | 군사시설 침입 탐지가 왜 중요한지, 현재 시스템의 문제점이 무엇인지 토론 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | 2 | 이 문제를 AI로 해결하려면 어떤 방식이 적합한지 논의 (분류? 이상탐지? 객체 탐지?) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | 3 | 성공 기준(KPI) 정의: 탐지율, 오탐률, 반응 속도 등 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | 산출물 |  | 문제 정의서 (1~2페이지) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | Step 2: 데이터 요구사항 정의 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | 1 | 필요한 데이터 유형 나열: CCTV 영상, 센서 로그, 침입 사건 기록, 환경 데이터(날씨, 조도) 등 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | 2 | 각 데이터의 수집 주기, 형식, 저장 방법 조사 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | 3 | 실제 군사 데이터는 접근 불가하므로 대체 가능한 공개 데이터셋 탐색 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  |  | 활용 가능 데이터셋 예시: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  |  | 1 | UCSD Anomaly Detection Dataset (보행자 영상) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  |  | 2 | COCO Dataset (객체 탐지용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  |  | 3 | IoT 센서 로그 공개 데이터 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  |  | 4 | Kaggle: "Human Activity Recognition", "Video Anomaly Detection" |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | Step 3: 데이터 수집 및 확보 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | 1 | 선정한 데이터셋 다운로드 (최소 1,000개 이상의 샘플) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | 2 | 데이터 구조 파악: 파일 형식, 해상도, 프레임률, 라벨 정보 등 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | 3 | 데이터 저장소 구성 (로컬 또는 클라우드) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | Step 4: 탐색적 데이터 분석 (EDA) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 36 |  | 1 | 영상 데이터: 샘플 영상 시각화, 해상도/밝기 분포, 프레임 수 분석 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 37 |  | 2 | 센서 데이터: 시계열 그래프, 이상치 확인, 통계 요약 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 38 |  | 3 | 라벨 분포 확인: 정상/침입 비율 → 데이터 불균형 정도 파악 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  | 4 | EDA 결과를 시각화(그래프, 차트)로 정리 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 40 |  | Step 5: 데이터 품질 평가 및 문제점 도출 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 41 |  | 1 | 결측치, 노이즈, 라벨 오류 등 데이터 품질 이슈 파악 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 42 |  | 2 | 데이터 불균형 문제 (정상 데이터 >> 침입 데이터) 인지 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  | 3 | 다음 단계(전처리)에서 해결해야 할 과제 리스트업 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 44 | 제출물 | 1. 문제 정의서 (1~2 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 45 |  | 1 | 문제 배경 및 현황 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 46 |  | 2 | AI 문제로 재정의 (분류/이상탐지 등) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 47 |  | 3 | 성공 기준(KPI) 정의 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 48 |  | 4 | 제약 조건 및 윤리적 고려사항 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 49 |  | 2. 데이터 명세서 (2~3 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 50 |  | 1 | 사용할 데이터셋 목록 및 출처 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 51 |  | 2 | 각 데이터의 형식, 크기, 샘플 수 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 52 |  | 3 | 데이터 구조 다이어그램 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 53 |  | 4 | 라이선스 및 사용 제한 사항 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 54 |  | 3. EDA 보고서 (Jupyter Notebook + PDF 요약본) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 55 |  | 1 | 데이터 시각화 (최소 10개 이상의 그래프/차트) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 56 |  | 2 | 통계 요약 (평균, 분산, 분포 등) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 57 |  | 3 | 데이터 품질 분석 결과 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 58 |  | 4 | 발견된 인사이트 및 다음 단계 제안 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 59 |  | 4. 팀 회의록 (1페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 60 |  | 1 | 각 팀원의 역할 분담 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 61 |  | 2 | 주차별 진행 상황 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 62 |  | 3 | 의사결정 과정 기록 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 63 | 평가 기준 | 완성도 평가 (70%) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 64 |  | 1 | Q1. 군사시설 침입 탐지 문제를 분석하고 AI 적용 필요성을 설명했는가?<br>PASS 기준:<br>- 기존 감시 방식의 한계 2개 이상 제시<br>- AI 적용 목적 설명 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 65 |  | 2 | Q2. 침입 탐지를 위한 입력 데이터와 수집 방안을 정의했는가?<br>PASS 기준:<br>- CCTV, 센서, 라벨 등 최소 3종 정의<br>- 데이터 출처 또는 확보 방법 포함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 66 |  | 3 | Q3. 데이터의 품질을 분석하고 개선 방안을 제안했는가?<br>PASS 기준:<br>- 데이터 문제 1개 이상 발견<br>- 해결 방법 제안 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 67 |  | 4 | Q4. 침입 탐지를 위한 AI 처리 흐름을 설계했는가?<br>PASS 기준:<br>- 입력 → 분석 → 탐지 → 경보 단계 포함<br>- 모델 또는 알고리즘 선택 근거 제시 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 68 |  | 5 | Q5. 성능 목표와 검증 방법을 제시했는가?<br>PASS 기준:<br>- 최소 2개 이상의 평가 지표 정의<br>- 목표 달성 여부 판단 기준 제시 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 69 |  | 팀워크 평가 (30%) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 70 |  | 1 | Q. 팀원별 역할이 명확하게 정의되었고, 각자 맡은 업무를 수행했는가?<br>PASS 기준:<br>- 팀원별 담당 역할이 문서화되어 있음<br>- 역할의 산출물 또는 수행 기록 존재<br>- 특정 인원에게 과도하게 업무가 집중되지 않음 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 71 |  | 2 | 프로젝트 진행 과정에서 팀 의사결정과 협업 기록을 남겼는가?<br>PASS 기준:<br>- 회의 기록 또는 협업 로그 존재<br>- 주요 결정 사항과 변경 이유 기록<br>- 팀원 간 피드백 또는 의견 반영 사례 포함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 72 | AI 지시문 가이드 (학생용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 73 | 생성형 AI 활용 가이드 | 허용되는 AI 활용 (권장) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 74 |  | 1 | 문제 정의 아이디어 브레인스토밍 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 75 |  |  | "군사시설 침입 탐지 문제를 머신러닝으로 해결하려고 합니다. <br>이 문제를 분류, 이상탐지, 객체 탐지 중 어떤 방식으로 <br>접근하는 것이 좋을까요? 각 방법의 장단점을 비교해주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 76 |  | 2 | 데이터셋 탐색 지원 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 77 |  |  | "침입 탐지 또는 비디오 이상탐지를 위한 공개 데이터셋을 <br>추천해주세요. Kaggle, UCI ML Repository, <br>또는 연구 논문에서 공개한 데이터셋 중심으로 알려주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 78 |  | 3 | EDA 코드 작성 보조 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 79 |  |  | "Python pandas를 사용하여 비디오 데이터셋의 <br>메타데이터(파일명, 해상도, 프레임 수)를 추출하고 <br>통계 요약을 출력하는 코드를 작성해주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 80 |  | 4 | 데이터 시각화 코드 예시 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 81 |  |  | "matplotlib을 사용하여 시계열 센서 데이터를 <br>라인 플롯으로 시각화하는 코드를 작성해주세요. <br>정상 데이터는 파란색, 이상 데이터는 빨간색으로 표시하고 싶습니다." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 82 |  | 5 | 보고서 작성 구조 제안 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 83 |  |  | "침입 탐지 프로젝트의 문제 정의서를 작성 중입니다. <br>목차 구성을 어떻게 하면 좋을까요? <br>학술 보고서 형식으로 제안해주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 84 |  | 금지되는 AI 활용 (부정행위) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 85 |  | 1 | 전체 보고서 작성 요청 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 86 |  |  | "침입 탐지 프로젝트의 EDA 보고서 전체를 작성해줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 87 |  | 2 | 분석 결과 조작 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 88 |  |  | "이 데이터셋이 우수하다는 근거를 만들어줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 89 |  | 3 | 팀원 기여도 허위 작성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 90 |  |  | "회의록에 들어갈 팀원 역할 분담 내용을 그럴듯하게 만들어줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 91 |  | AI 활용 시 반드시 지켜야 할 원칙 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 92 |  | 1 | 출처 명시: AI가 제공한 코드나 아이디어를 사용할 경우 보고서에 명시 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 93 |  |  | 예: "본 EDA 코드는 ChatGPT의 제안을 참고하여 작성하였으며, <br>팀원이 데이터셋에 맞게 수정하였음." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 94 |  | 2 | 검증 필수: AI가 제공한 코드는 반드시 실행하여 오류 확인 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 95 |  | 3 | 이해 후 사용: 코드의 동작 원리를 이해한 후 활용 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 96 |  | 4 | 자신의 언어로 재작성: AI 답변을 그대로 복사하지 말고 자신의 표현으로 변환 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

### Non-Empty Cell Records

```jsonl
{"address":"A1","row":1,"column":1,"column_letter":"A","raw_value":"1단계: 문제의 정의 및 데이터의 정의 (1~3주차)","cached_value":"1단계: 문제의 정의 및 데이터의 정의 (1~3주차)","formula":null,"data_type":"s","number_format":"General","style_id":112,"merged_range":"A1:U1","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFCCCCCC"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A2","row":2,"column":1,"column_letter":"A","raw_value":"차시 개요","cached_value":"차시 개요","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B2","row":2,"column":2,"column_letter":"B","raw_value":"군사시설 침입 탐지 문제를 AI 관점에서 재정의하고, 필요한 데이터 유형을 파악하며, \n실제 또는 유사 데이터셋을 확보하여 탐색적 데이터 분석(EDA)을 수행합니다.","cached_value":"군사시설 침입 탐지 문제를 AI 관점에서 재정의하고, 필요한 데이터 유형을 파악하며, \n실제 또는 유사 데이터셋을 확보하여 탐색적 데이터 분석(EDA)을 수행합니다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B2:U2","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A3","row":3,"column":1,"column_letter":"A","raw_value":"학습목표","cached_value":"학습목표","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A3:A5","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B3","row":3,"column":2,"column_letter":"B","raw_value":"실제 보안 현장의 요구사항을 이해하고 이를 머신러닝 문제(이상탐지, 분류)로 구조화할 수 있다.","cached_value":"실제 보안 현장의 요구사항을 이해하고 이를 머신러닝 문제(이상탐지, 분류)로 구조화할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B3:U3","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B4","row":4,"column":2,"column_letter":"B","raw_value":"비디오 스트림, 센서 로그 등 다양한 형태의 시계열 데이터의 특성을 이해하고 EDA를 수행할 수 있다.","cached_value":"비디오 스트림, 센서 로그 등 다양한 형태의 시계열 데이터의 특성을 이해하고 EDA를 수행할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B4:U4","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B5","row":5,"column":2,"column_letter":"B","raw_value":"데이터 불균형, 라벨링 이슈, 데이터 프라이버시 등 실무 제약사항을 파악하고 해결 방안을 제시할 수 있다.","cached_value":"데이터 불균형, 라벨링 이슈, 데이터 프라이버시 등 실무 제약사항을 파악하고 해결 방안을 제시할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B5:U5","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A6","row":6,"column":1,"column_letter":"A","raw_value":"선행 학습 권장 과목","cached_value":"선행 학습 권장 과목","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A6:A9","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B6","row":6,"column":2,"column_letter":"B","raw_value":"데이터사이언스: EDA, 데이터 시각화, pandas/numpy 활용","cached_value":"데이터사이언스: EDA, 데이터 시각화, pandas/numpy 활용","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B6:U6","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B7","row":7,"column":2,"column_letter":"B","raw_value":"인공지능기초 / 머신러닝: 지도/비지도 학습, 이상탐지 알고리즘 개념","cached_value":"인공지능기초 / 머신러닝: 지도/비지도 학습, 이상탐지 알고리즘 개념","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B7:U7","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B8","row":8,"column":2,"column_letter":"B","raw_value":"Python 프로그래밍: 데이터 처리, 파일 I/O, 시각화 라이브러리","cached_value":"Python 프로그래밍: 데이터 처리, 파일 I/O, 시각화 라이브러리","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B8:U8","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B9","row":9,"column":2,"column_letter":"B","raw_value":"컴퓨터비전 (선택): 영상 데이터 구조, OpenCV 기","cached_value":"컴퓨터비전 (선택): 영상 데이터 구조, OpenCV 기","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B9:U9","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A10","row":10,"column":1,"column_letter":"A","raw_value":"활용 기술 스택","cached_value":"활용 기술 스택","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A10:A12","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B10","row":10,"column":2,"column_letter":"B","raw_value":"Python (pandas, numpy, matplotlib, seaborn)","cached_value":"Python (pandas, numpy, matplotlib, seaborn)","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B10:U10","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B11","row":11,"column":2,"column_letter":"B","raw_value":"Jupyter Notebook","cached_value":"Jupyter Notebook","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B11:U11","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B12","row":12,"column":2,"column_letter":"B","raw_value":"OpenCV (기본적인 영상 읽기/쓰기)","cached_value":"OpenCV (기본적인 영상 읽기/쓰기)","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B12:U12","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A14","row":14,"column":1,"column_letter":"A","raw_value":"PBL 문제 (학생 제시용)","cached_value":"PBL 문제 (학생 제시용)","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A14:U14","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A15","row":15,"column":1,"column_letter":"A","raw_value":"문제 상황","cached_value":"문제 상황","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B15","row":15,"column":2,"column_letter":"B","raw_value":"K군 부대는 경계 지역 약 5km에 30대의 CCTV와 50개의 PIR(Passive Infrared) 센서를 설치하여 24시간 감시 체계를 운영하고 있습니다. \n그러나 현재는 병력이 직접 모니터를 주시해야 하며, 야간에는 가시성이 떨어져 침입 탐지율이 60% 수준에 불과합니다. \n또한 동물, 기상 변화로 인한 오탐(False Positive)이 하루 평균 15건 발생하여 인력 피로도가 높습니다.","cached_value":"K군 부대는 경계 지역 약 5km에 30대의 CCTV와 50개의 PIR(Passive Infrared) 센서를 설치하여 24시간 감시 체계를 운영하고 있습니다. \n그러나 현재는 병력이 직접 모니터를 주시해야 하며, 야간에는 가시성이 떨어져 침입 탐지율이 60% 수준에 불과합니다. \n또한 동물, 기상 변화로 인한 오탐(False Positive)이 하루 평균 15건 발생하여 인력 피로도가 높습니다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B15:U15","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A16","row":16,"column":1,"column_letter":"A","raw_value":"미션","cached_value":"미션","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B16","row":16,"column":2,"column_letter":"B","raw_value":"AI 기반 자동 침입 탐지 시스템을 개발하여 탐지율을 90% 이상으로 높이고, 오탐률을 하루 3건 이하로 낮추어야 합니다","cached_value":"AI 기반 자동 침입 탐지 시스템을 개발하여 탐지율을 90% 이상으로 높이고, 오탐률을 하루 3건 이하로 낮추어야 합니다","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B16:U16","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A17","row":17,"column":1,"column_letter":"A","raw_value":"5단계 실행 가이드","cached_value":"5단계 실행 가이드","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A17:A43","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B17","row":17,"column":2,"column_letter":"B","raw_value":"Step 1: 문제 분석 및 정의 (팀 브레인스토밍)","cached_value":"Step 1: 문제 분석 및 정의 (팀 브레인스토밍)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B17:U17","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B18","row":18,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C18","row":18,"column":3,"column_letter":"C","raw_value":"군사시설 침입 탐지가 왜 중요한지, 현재 시스템의 문제점이 무엇인지 토론","cached_value":"군사시설 침입 탐지가 왜 중요한지, 현재 시스템의 문제점이 무엇인지 토론","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C18:U18","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B19","row":19,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C19","row":19,"column":3,"column_letter":"C","raw_value":"이 문제를 AI로 해결하려면 어떤 방식이 적합한지 논의 (분류? 이상탐지? 객체 탐지?)","cached_value":"이 문제를 AI로 해결하려면 어떤 방식이 적합한지 논의 (분류? 이상탐지? 객체 탐지?)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C19:U19","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B20","row":20,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C20","row":20,"column":3,"column_letter":"C","raw_value":"성공 기준(KPI) 정의: 탐지율, 오탐률, 반응 속도 등","cached_value":"성공 기준(KPI) 정의: 탐지율, 오탐률, 반응 속도 등","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C20:U20","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B21","row":21,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B21:C21","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D21","row":21,"column":4,"column_letter":"D","raw_value":"문제 정의서 (1~2페이지)","cached_value":"문제 정의서 (1~2페이지)","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D21:U21","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B22","row":22,"column":2,"column_letter":"B","raw_value":"Step 2: 데이터 요구사항 정의","cached_value":"Step 2: 데이터 요구사항 정의","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B22:U22","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B23","row":23,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C23","row":23,"column":3,"column_letter":"C","raw_value":"필요한 데이터 유형 나열: CCTV 영상, 센서 로그, 침입 사건 기록, 환경 데이터(날씨, 조도) 등","cached_value":"필요한 데이터 유형 나열: CCTV 영상, 센서 로그, 침입 사건 기록, 환경 데이터(날씨, 조도) 등","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C23:U23","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B24","row":24,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C24","row":24,"column":3,"column_letter":"C","raw_value":"각 데이터의 수집 주기, 형식, 저장 방법 조사","cached_value":"각 데이터의 수집 주기, 형식, 저장 방법 조사","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C24:U24","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B25","row":25,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C25","row":25,"column":3,"column_letter":"C","raw_value":"실제 군사 데이터는 접근 불가하므로 대체 가능한 공개 데이터셋 탐색","cached_value":"실제 군사 데이터는 접근 불가하므로 대체 가능한 공개 데이터셋 탐색","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C25:U25","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C26","row":26,"column":3,"column_letter":"C","raw_value":"활용 가능 데이터셋 예시:","cached_value":"활용 가능 데이터셋 예시:","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"C26:U26","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C27","row":27,"column":3,"column_letter":"C","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D27","row":27,"column":4,"column_letter":"D","raw_value":"UCSD Anomaly Detection Dataset (보행자 영상)","cached_value":"UCSD Anomaly Detection Dataset (보행자 영상)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"D27:U27","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C28","row":28,"column":3,"column_letter":"C","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D28","row":28,"column":4,"column_letter":"D","raw_value":"COCO Dataset (객체 탐지용)","cached_value":"COCO Dataset (객체 탐지용)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"D28:U28","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C29","row":29,"column":3,"column_letter":"C","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D29","row":29,"column":4,"column_letter":"D","raw_value":"IoT 센서 로그 공개 데이터","cached_value":"IoT 센서 로그 공개 데이터","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"D29:U29","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C30","row":30,"column":3,"column_letter":"C","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D30","row":30,"column":4,"column_letter":"D","raw_value":"Kaggle: \"Human Activity Recognition\", \"Video Anomaly Detection\"","cached_value":"Kaggle: \"Human Activity Recognition\", \"Video Anomaly Detection\"","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"D30:U30","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B31","row":31,"column":2,"column_letter":"B","raw_value":"Step 3: 데이터 수집 및 확보","cached_value":"Step 3: 데이터 수집 및 확보","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B31:U31","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B32","row":32,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C32","row":32,"column":3,"column_letter":"C","raw_value":"선정한 데이터셋 다운로드 (최소 1,000개 이상의 샘플)","cached_value":"선정한 데이터셋 다운로드 (최소 1,000개 이상의 샘플)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C32:U32","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B33","row":33,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C33","row":33,"column":3,"column_letter":"C","raw_value":"데이터 구조 파악: 파일 형식, 해상도, 프레임률, 라벨 정보 등","cached_value":"데이터 구조 파악: 파일 형식, 해상도, 프레임률, 라벨 정보 등","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C33:U33","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B34","row":34,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C34","row":34,"column":3,"column_letter":"C","raw_value":"데이터 저장소 구성 (로컬 또는 클라우드)","cached_value":"데이터 저장소 구성 (로컬 또는 클라우드)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C34:U34","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B35","row":35,"column":2,"column_letter":"B","raw_value":"Step 4: 탐색적 데이터 분석 (EDA)","cached_value":"Step 4: 탐색적 데이터 분석 (EDA)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B35:U35","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B36","row":36,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C36","row":36,"column":3,"column_letter":"C","raw_value":"영상 데이터: 샘플 영상 시각화, 해상도/밝기 분포, 프레임 수 분석","cached_value":"영상 데이터: 샘플 영상 시각화, 해상도/밝기 분포, 프레임 수 분석","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C36:U36","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B37","row":37,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C37","row":37,"column":3,"column_letter":"C","raw_value":"센서 데이터: 시계열 그래프, 이상치 확인, 통계 요약","cached_value":"센서 데이터: 시계열 그래프, 이상치 확인, 통계 요약","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C37:U37","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B38","row":38,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C38","row":38,"column":3,"column_letter":"C","raw_value":"라벨 분포 확인: 정상/침입 비율 → 데이터 불균형 정도 파악","cached_value":"라벨 분포 확인: 정상/침입 비율 → 데이터 불균형 정도 파악","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C38:U38","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B39","row":39,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C39","row":39,"column":3,"column_letter":"C","raw_value":"EDA 결과를 시각화(그래프, 차트)로 정리","cached_value":"EDA 결과를 시각화(그래프, 차트)로 정리","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C39:U39","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B40","row":40,"column":2,"column_letter":"B","raw_value":"Step 5: 데이터 품질 평가 및 문제점 도출","cached_value":"Step 5: 데이터 품질 평가 및 문제점 도출","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B40:U40","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B41","row":41,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C41","row":41,"column":3,"column_letter":"C","raw_value":"결측치, 노이즈, 라벨 오류 등 데이터 품질 이슈 파악","cached_value":"결측치, 노이즈, 라벨 오류 등 데이터 품질 이슈 파악","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C41:U41","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B42","row":42,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C42","row":42,"column":3,"column_letter":"C","raw_value":"데이터 불균형 문제 (정상 데이터 >> 침입 데이터) 인지","cached_value":"데이터 불균형 문제 (정상 데이터 >> 침입 데이터) 인지","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C42:U42","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B43","row":43,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C43","row":43,"column":3,"column_letter":"C","raw_value":"다음 단계(전처리)에서 해결해야 할 과제 리스트업","cached_value":"다음 단계(전처리)에서 해결해야 할 과제 리스트업","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C43:U43","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A44","row":44,"column":1,"column_letter":"A","raw_value":"제출물","cached_value":"제출물","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A44:A62","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B44","row":44,"column":2,"column_letter":"B","raw_value":"1. 문제 정의서 (1~2 페이지, PDF)","cached_value":"1. 문제 정의서 (1~2 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B44:U44","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B45","row":45,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C45","row":45,"column":3,"column_letter":"C","raw_value":"문제 배경 및 현황","cached_value":"문제 배경 및 현황","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C45:U45","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B46","row":46,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C46","row":46,"column":3,"column_letter":"C","raw_value":"AI 문제로 재정의 (분류/이상탐지 등)","cached_value":"AI 문제로 재정의 (분류/이상탐지 등)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C46:U46","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B47","row":47,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C47","row":47,"column":3,"column_letter":"C","raw_value":"성공 기준(KPI) 정의","cached_value":"성공 기준(KPI) 정의","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C47:U47","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B48","row":48,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C48","row":48,"column":3,"column_letter":"C","raw_value":"제약 조건 및 윤리적 고려사항","cached_value":"제약 조건 및 윤리적 고려사항","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C48:U48","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B49","row":49,"column":2,"column_letter":"B","raw_value":"2. 데이터 명세서 (2~3 페이지, PDF)","cached_value":"2. 데이터 명세서 (2~3 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B49:U49","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B50","row":50,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C50","row":50,"column":3,"column_letter":"C","raw_value":"사용할 데이터셋 목록 및 출처","cached_value":"사용할 데이터셋 목록 및 출처","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C50:U50","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B51","row":51,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C51","row":51,"column":3,"column_letter":"C","raw_value":"각 데이터의 형식, 크기, 샘플 수","cached_value":"각 데이터의 형식, 크기, 샘플 수","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C51:U51","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B52","row":52,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C52","row":52,"column":3,"column_letter":"C","raw_value":"데이터 구조 다이어그램","cached_value":"데이터 구조 다이어그램","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C52:U52","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B53","row":53,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C53","row":53,"column":3,"column_letter":"C","raw_value":"라이선스 및 사용 제한 사항","cached_value":"라이선스 및 사용 제한 사항","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C53:U53","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B54","row":54,"column":2,"column_letter":"B","raw_value":"3. EDA 보고서 (Jupyter Notebook + PDF 요약본)","cached_value":"3. EDA 보고서 (Jupyter Notebook + PDF 요약본)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B54:U54","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B55","row":55,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C55","row":55,"column":3,"column_letter":"C","raw_value":"데이터 시각화 (최소 10개 이상의 그래프/차트)","cached_value":"데이터 시각화 (최소 10개 이상의 그래프/차트)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C55:U55","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B56","row":56,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C56","row":56,"column":3,"column_letter":"C","raw_value":"통계 요약 (평균, 분산, 분포 등)","cached_value":"통계 요약 (평균, 분산, 분포 등)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C56:U56","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B57","row":57,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C57","row":57,"column":3,"column_letter":"C","raw_value":"데이터 품질 분석 결과","cached_value":"데이터 품질 분석 결과","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C57:U57","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B58","row":58,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C58","row":58,"column":3,"column_letter":"C","raw_value":"발견된 인사이트 및 다음 단계 제안","cached_value":"발견된 인사이트 및 다음 단계 제안","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C58:U58","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B59","row":59,"column":2,"column_letter":"B","raw_value":"4. 팀 회의록 (1페이지, PDF)","cached_value":"4. 팀 회의록 (1페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B59:U59","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B60","row":60,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C60","row":60,"column":3,"column_letter":"C","raw_value":"각 팀원의 역할 분담","cached_value":"각 팀원의 역할 분담","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C60:U60","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B61","row":61,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C61","row":61,"column":3,"column_letter":"C","raw_value":"주차별 진행 상황","cached_value":"주차별 진행 상황","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C61:U61","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B62","row":62,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C62","row":62,"column":3,"column_letter":"C","raw_value":"의사결정 과정 기록","cached_value":"의사결정 과정 기록","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C62:U62","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A63","row":63,"column":1,"column_letter":"A","raw_value":"평가 기준","cached_value":"평가 기준","formula":null,"data_type":"s","number_format":"General","style_id":29,"merged_range":"A63:A71","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B63","row":63,"column":2,"column_letter":"B","raw_value":"완성도 평가 (70%)","cached_value":"완성도 평가 (70%)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B63:U63","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B64","row":64,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C64","row":64,"column":3,"column_letter":"C","raw_value":"Q1. 군사시설 침입 탐지 문제를 분석하고 AI 적용 필요성을 설명했는가?\nPASS 기준:\n- 기존 감시 방식의 한계 2개 이상 제시\n- AI 적용 목적 설명","cached_value":"Q1. 군사시설 침입 탐지 문제를 분석하고 AI 적용 필요성을 설명했는가?\nPASS 기준:\n- 기존 감시 방식의 한계 2개 이상 제시\n- AI 적용 목적 설명","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C64:S64","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T64","row":64,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U64","row":64,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B65","row":65,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C65","row":65,"column":3,"column_letter":"C","raw_value":"Q2. 침입 탐지를 위한 입력 데이터와 수집 방안을 정의했는가?\nPASS 기준:\n- CCTV, 센서, 라벨 등 최소 3종 정의\n- 데이터 출처 또는 확보 방법 포함","cached_value":"Q2. 침입 탐지를 위한 입력 데이터와 수집 방안을 정의했는가?\nPASS 기준:\n- CCTV, 센서, 라벨 등 최소 3종 정의\n- 데이터 출처 또는 확보 방법 포함","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C65:S65","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T65","row":65,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U65","row":65,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B66","row":66,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C66","row":66,"column":3,"column_letter":"C","raw_value":"Q3. 데이터의 품질을 분석하고 개선 방안을 제안했는가?\nPASS 기준:\n- 데이터 문제 1개 이상 발견\n- 해결 방법 제안","cached_value":"Q3. 데이터의 품질을 분석하고 개선 방안을 제안했는가?\nPASS 기준:\n- 데이터 문제 1개 이상 발견\n- 해결 방법 제안","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C66:S66","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T66","row":66,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U66","row":66,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B67","row":67,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C67","row":67,"column":3,"column_letter":"C","raw_value":"Q4. 침입 탐지를 위한 AI 처리 흐름을 설계했는가?\nPASS 기준:\n- 입력 → 분석 → 탐지 → 경보 단계 포함\n- 모델 또는 알고리즘 선택 근거 제시","cached_value":"Q4. 침입 탐지를 위한 AI 처리 흐름을 설계했는가?\nPASS 기준:\n- 입력 → 분석 → 탐지 → 경보 단계 포함\n- 모델 또는 알고리즘 선택 근거 제시","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C67:S67","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T67","row":67,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U67","row":67,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B68","row":68,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C68","row":68,"column":3,"column_letter":"C","raw_value":"Q5. 성능 목표와 검증 방법을 제시했는가?\nPASS 기준:\n- 최소 2개 이상의 평가 지표 정의\n- 목표 달성 여부 판단 기준 제시","cached_value":"Q5. 성능 목표와 검증 방법을 제시했는가?\nPASS 기준:\n- 최소 2개 이상의 평가 지표 정의\n- 목표 달성 여부 판단 기준 제시","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C68:S68","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T68","row":68,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U68","row":68,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B69","row":69,"column":2,"column_letter":"B","raw_value":"팀워크 평가 (30%)","cached_value":"팀워크 평가 (30%)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B69:U69","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B70","row":70,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":44,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C70","row":70,"column":3,"column_letter":"C","raw_value":"Q. 팀원별 역할이 명확하게 정의되었고, 각자 맡은 업무를 수행했는가?\nPASS 기준:\n- 팀원별 담당 역할이 문서화되어 있음\n- 역할의 산출물 또는 수행 기록 존재\n- 특정 인원에게 과도하게 업무가 집중되지 않음","cached_value":"Q. 팀원별 역할이 명확하게 정의되었고, 각자 맡은 업무를 수행했는가?\nPASS 기준:\n- 팀원별 담당 역할이 문서화되어 있음\n- 역할의 산출물 또는 수행 기록 존재\n- 특정 인원에게 과도하게 업무가 집중되지 않음","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C70:S70","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T70","row":70,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U70","row":70,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B71","row":71,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":44,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C71","row":71,"column":3,"column_letter":"C","raw_value":"프로젝트 진행 과정에서 팀 의사결정과 협업 기록을 남겼는가?\nPASS 기준:\n- 회의 기록 또는 협업 로그 존재\n- 주요 결정 사항과 변경 이유 기록\n- 팀원 간 피드백 또는 의견 반영 사례 포함","cached_value":"프로젝트 진행 과정에서 팀 의사결정과 협업 기록을 남겼는가?\nPASS 기준:\n- 회의 기록 또는 협업 로그 존재\n- 주요 결정 사항과 변경 이유 기록\n- 팀원 간 피드백 또는 의견 반영 사례 포함","formula":null,"data_type":"s","number_format":"General","style_id":28,"merged_range":"C71:S71","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T71","row":71,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U71","row":71,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A72","row":72,"column":1,"column_letter":"A","raw_value":"AI 지시문 가이드 (학생용)","cached_value":"AI 지시문 가이드 (학생용)","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A72:U72","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A73","row":73,"column":1,"column_letter":"A","raw_value":"생성형 AI 활용 가이드","cached_value":"생성형 AI 활용 가이드","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A73:A96","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B73","row":73,"column":2,"column_letter":"B","raw_value":"허용되는 AI 활용 (권장)","cached_value":"허용되는 AI 활용 (권장)","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B73:U73","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B74","row":74,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C74","row":74,"column":3,"column_letter":"C","raw_value":"문제 정의 아이디어 브레인스토밍","cached_value":"문제 정의 아이디어 브레인스토밍","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C74:U74","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C75","row":75,"column":3,"column_letter":"C","raw_value":"\"군사시설 침입 탐지 문제를 머신러닝으로 해결하려고 합니다. \n이 문제를 분류, 이상탐지, 객체 탐지 중 어떤 방식으로 \n접근하는 것이 좋을까요? 각 방법의 장단점을 비교해주세요.\"","cached_value":"\"군사시설 침입 탐지 문제를 머신러닝으로 해결하려고 합니다. \n이 문제를 분류, 이상탐지, 객체 탐지 중 어떤 방식으로 \n접근하는 것이 좋을까요? 각 방법의 장단점을 비교해주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C75:U75","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B76","row":76,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C76","row":76,"column":3,"column_letter":"C","raw_value":"데이터셋 탐색 지원","cached_value":"데이터셋 탐색 지원","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C76:U76","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C77","row":77,"column":3,"column_letter":"C","raw_value":"\"침입 탐지 또는 비디오 이상탐지를 위한 공개 데이터셋을 \n추천해주세요. Kaggle, UCI ML Repository, \n또는 연구 논문에서 공개한 데이터셋 중심으로 알려주세요.\"","cached_value":"\"침입 탐지 또는 비디오 이상탐지를 위한 공개 데이터셋을 \n추천해주세요. Kaggle, UCI ML Repository, \n또는 연구 논문에서 공개한 데이터셋 중심으로 알려주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C77:U77","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B78","row":78,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C78","row":78,"column":3,"column_letter":"C","raw_value":"EDA 코드 작성 보조","cached_value":"EDA 코드 작성 보조","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C78:U78","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C79","row":79,"column":3,"column_letter":"C","raw_value":"\"Python pandas를 사용하여 비디오 데이터셋의 \n메타데이터(파일명, 해상도, 프레임 수)를 추출하고 \n통계 요약을 출력하는 코드를 작성해주세요.\"","cached_value":"\"Python pandas를 사용하여 비디오 데이터셋의 \n메타데이터(파일명, 해상도, 프레임 수)를 추출하고 \n통계 요약을 출력하는 코드를 작성해주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C79:U79","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B80","row":80,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C80","row":80,"column":3,"column_letter":"C","raw_value":"데이터 시각화 코드 예시","cached_value":"데이터 시각화 코드 예시","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C80:U80","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C81","row":81,"column":3,"column_letter":"C","raw_value":"\"matplotlib을 사용하여 시계열 센서 데이터를 \n라인 플롯으로 시각화하는 코드를 작성해주세요. \n정상 데이터는 파란색, 이상 데이터는 빨간색으로 표시하고 싶습니다.\"","cached_value":"\"matplotlib을 사용하여 시계열 센서 데이터를 \n라인 플롯으로 시각화하는 코드를 작성해주세요. \n정상 데이터는 파란색, 이상 데이터는 빨간색으로 표시하고 싶습니다.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C81:U81","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B82","row":82,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C82","row":82,"column":3,"column_letter":"C","raw_value":"보고서 작성 구조 제안","cached_value":"보고서 작성 구조 제안","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C82:U82","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C83","row":83,"column":3,"column_letter":"C","raw_value":"\"침입 탐지 프로젝트의 문제 정의서를 작성 중입니다. \n목차 구성을 어떻게 하면 좋을까요? \n학술 보고서 형식으로 제안해주세요.\"","cached_value":"\"침입 탐지 프로젝트의 문제 정의서를 작성 중입니다. \n목차 구성을 어떻게 하면 좋을까요? \n학술 보고서 형식으로 제안해주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C83:U83","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B84","row":84,"column":2,"column_letter":"B","raw_value":"금지되는 AI 활용 (부정행위)","cached_value":"금지되는 AI 활용 (부정행위)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B84:U84","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B85","row":85,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C85","row":85,"column":3,"column_letter":"C","raw_value":"전체 보고서 작성 요청","cached_value":"전체 보고서 작성 요청","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C85:U85","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C86","row":86,"column":3,"column_letter":"C","raw_value":"\"침입 탐지 프로젝트의 EDA 보고서 전체를 작성해줘\" ❌","cached_value":"\"침입 탐지 프로젝트의 EDA 보고서 전체를 작성해줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C86:U86","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B87","row":87,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C87","row":87,"column":3,"column_letter":"C","raw_value":"분석 결과 조작","cached_value":"분석 결과 조작","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C87:U87","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C88","row":88,"column":3,"column_letter":"C","raw_value":"\"이 데이터셋이 우수하다는 근거를 만들어줘\" ❌","cached_value":"\"이 데이터셋이 우수하다는 근거를 만들어줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C88:U88","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B89","row":89,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C89","row":89,"column":3,"column_letter":"C","raw_value":"팀원 기여도 허위 작성","cached_value":"팀원 기여도 허위 작성","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C89:U89","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C90","row":90,"column":3,"column_letter":"C","raw_value":"\"회의록에 들어갈 팀원 역할 분담 내용을 그럴듯하게 만들어줘\" ❌","cached_value":"\"회의록에 들어갈 팀원 역할 분담 내용을 그럴듯하게 만들어줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C90:U90","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B91","row":91,"column":2,"column_letter":"B","raw_value":"AI 활용 시 반드시 지켜야 할 원칙","cached_value":"AI 활용 시 반드시 지켜야 할 원칙","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B91:U91","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B92","row":92,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C92","row":92,"column":3,"column_letter":"C","raw_value":"출처 명시: AI가 제공한 코드나 아이디어를 사용할 경우 보고서에 명시","cached_value":"출처 명시: AI가 제공한 코드나 아이디어를 사용할 경우 보고서에 명시","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C92:U92","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C93","row":93,"column":3,"column_letter":"C","raw_value":"예: \"본 EDA 코드는 ChatGPT의 제안을 참고하여 작성하였으며, \n팀원이 데이터셋에 맞게 수정하였음.\"","cached_value":"예: \"본 EDA 코드는 ChatGPT의 제안을 참고하여 작성하였으며, \n팀원이 데이터셋에 맞게 수정하였음.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C93:U93","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B94","row":94,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C94","row":94,"column":3,"column_letter":"C","raw_value":"검증 필수: AI가 제공한 코드는 반드시 실행하여 오류 확인","cached_value":"검증 필수: AI가 제공한 코드는 반드시 실행하여 오류 확인","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C94:U94","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B95","row":95,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C95","row":95,"column":3,"column_letter":"C","raw_value":"이해 후 사용: 코드의 동작 원리를 이해한 후 활용","cached_value":"이해 후 사용: 코드의 동작 원리를 이해한 후 활용","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C95:U95","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B96","row":96,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C96","row":96,"column":3,"column_letter":"C","raw_value":"자신의 언어로 재작성: AI 답변을 그대로 복사하지 말고 자신의 표현으로 변환","cached_value":"자신의 언어로 재작성: AI 답변을 그대로 복사하지 말고 자신의 표현으로 변환","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C96:U96","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
```

### Merged Ranges

| range | anchor | anchor_raw_value |
| --- | --- | --- |
| A1:U1 | A1 | 1단계: 문제의 정의 및 데이터의 정의 (1~3주차) |
| B2:U2 | B2 | 군사시설 침입 탐지 문제를 AI 관점에서 재정의하고, 필요한 데이터 유형을 파악하며, <br>실제 또는 유사 데이터셋을 확보하여 탐색적 데이터 분석(EDA)을 수행합니다. |
| A3:A5 | A3 | 학습목표 |
| B3:U3 | B3 | 실제 보안 현장의 요구사항을 이해하고 이를 머신러닝 문제(이상탐지, 분류)로 구조화할 수 있다. |
| B4:U4 | B4 | 비디오 스트림, 센서 로그 등 다양한 형태의 시계열 데이터의 특성을 이해하고 EDA를 수행할 수 있다. |
| B5:U5 | B5 | 데이터 불균형, 라벨링 이슈, 데이터 프라이버시 등 실무 제약사항을 파악하고 해결 방안을 제시할 수 있다. |
| A6:A9 | A6 | 선행 학습 권장 과목 |
| B6:U6 | B6 | 데이터사이언스: EDA, 데이터 시각화, pandas/numpy 활용 |
| B7:U7 | B7 | 인공지능기초 / 머신러닝: 지도/비지도 학습, 이상탐지 알고리즘 개념 |
| B8:U8 | B8 | Python 프로그래밍: 데이터 처리, 파일 I/O, 시각화 라이브러리 |
| B9:U9 | B9 | 컴퓨터비전 (선택): 영상 데이터 구조, OpenCV 기 |
| A10:A12 | A10 | 활용 기술 스택 |
| B10:U10 | B10 | Python (pandas, numpy, matplotlib, seaborn) |
| B11:U11 | B11 | Jupyter Notebook |
| B12:U12 | B12 | OpenCV (기본적인 영상 읽기/쓰기) |
| B13:U13 | B13 |  |
| A14:U14 | A14 | PBL 문제 (학생 제시용) |
| B15:U15 | B15 | K군 부대는 경계 지역 약 5km에 30대의 CCTV와 50개의 PIR(Passive Infrared) 센서를 설치하여 24시간 감시 체계를 운영하고 있습니다. <br>그러나 현재는 병력이 직접 모니터를 주시해야 하며, 야간에는 가시성이 떨어져 침입 탐지율이 60% 수준에 불과합니다. <br>또한 동물, 기상 변화로 인한 오탐(False Positive)이 하루 평균 15건 발생하여 인력 피로도가 높습니다. |
| B16:U16 | B16 | AI 기반 자동 침입 탐지 시스템을 개발하여 탐지율을 90% 이상으로 높이고, 오탐률을 하루 3건 이하로 낮추어야 합니다 |
| A17:A43 | A17 | 5단계 실행 가이드 |
| B17:U17 | B17 | Step 1: 문제 분석 및 정의 (팀 브레인스토밍) |
| C18:U18 | C18 | 군사시설 침입 탐지가 왜 중요한지, 현재 시스템의 문제점이 무엇인지 토론 |
| C19:U19 | C19 | 이 문제를 AI로 해결하려면 어떤 방식이 적합한지 논의 (분류? 이상탐지? 객체 탐지?) |
| C20:U20 | C20 | 성공 기준(KPI) 정의: 탐지율, 오탐률, 반응 속도 등 |
| B21:C21 | B21 | 산출물 |
| D21:U21 | D21 | 문제 정의서 (1~2페이지) |
| B22:U22 | B22 | Step 2: 데이터 요구사항 정의 |
| C23:U23 | C23 | 필요한 데이터 유형 나열: CCTV 영상, 센서 로그, 침입 사건 기록, 환경 데이터(날씨, 조도) 등 |
| C24:U24 | C24 | 각 데이터의 수집 주기, 형식, 저장 방법 조사 |
| C25:U25 | C25 | 실제 군사 데이터는 접근 불가하므로 대체 가능한 공개 데이터셋 탐색 |
| C26:U26 | C26 | 활용 가능 데이터셋 예시: |
| D27:U27 | D27 | UCSD Anomaly Detection Dataset (보행자 영상) |
| D28:U28 | D28 | COCO Dataset (객체 탐지용) |
| D29:U29 | D29 | IoT 센서 로그 공개 데이터 |
| D30:U30 | D30 | Kaggle: "Human Activity Recognition", "Video Anomaly Detection" |
| B31:U31 | B31 | Step 3: 데이터 수집 및 확보 |
| C32:U32 | C32 | 선정한 데이터셋 다운로드 (최소 1,000개 이상의 샘플) |
| C33:U33 | C33 | 데이터 구조 파악: 파일 형식, 해상도, 프레임률, 라벨 정보 등 |
| C34:U34 | C34 | 데이터 저장소 구성 (로컬 또는 클라우드) |
| B35:U35 | B35 | Step 4: 탐색적 데이터 분석 (EDA) |
| C36:U36 | C36 | 영상 데이터: 샘플 영상 시각화, 해상도/밝기 분포, 프레임 수 분석 |
| C37:U37 | C37 | 센서 데이터: 시계열 그래프, 이상치 확인, 통계 요약 |
| C38:U38 | C38 | 라벨 분포 확인: 정상/침입 비율 → 데이터 불균형 정도 파악 |
| C39:U39 | C39 | EDA 결과를 시각화(그래프, 차트)로 정리 |
| B40:U40 | B40 | Step 5: 데이터 품질 평가 및 문제점 도출 |
| C41:U41 | C41 | 결측치, 노이즈, 라벨 오류 등 데이터 품질 이슈 파악 |
| C42:U42 | C42 | 데이터 불균형 문제 (정상 데이터 >> 침입 데이터) 인지 |
| C43:U43 | C43 | 다음 단계(전처리)에서 해결해야 할 과제 리스트업 |
| A44:A62 | A44 | 제출물 |
| B44:U44 | B44 | 1. 문제 정의서 (1~2 페이지, PDF) |
| C45:U45 | C45 | 문제 배경 및 현황 |
| C46:U46 | C46 | AI 문제로 재정의 (분류/이상탐지 등) |
| C47:U47 | C47 | 성공 기준(KPI) 정의 |
| C48:U48 | C48 | 제약 조건 및 윤리적 고려사항 |
| B49:U49 | B49 | 2. 데이터 명세서 (2~3 페이지, PDF) |
| C50:U50 | C50 | 사용할 데이터셋 목록 및 출처 |
| C51:U51 | C51 | 각 데이터의 형식, 크기, 샘플 수 |
| C52:U52 | C52 | 데이터 구조 다이어그램 |
| C53:U53 | C53 | 라이선스 및 사용 제한 사항 |
| B54:U54 | B54 | 3. EDA 보고서 (Jupyter Notebook + PDF 요약본) |
| C55:U55 | C55 | 데이터 시각화 (최소 10개 이상의 그래프/차트) |
| C56:U56 | C56 | 통계 요약 (평균, 분산, 분포 등) |
| C57:U57 | C57 | 데이터 품질 분석 결과 |
| C58:U58 | C58 | 발견된 인사이트 및 다음 단계 제안 |
| B59:U59 | B59 | 4. 팀 회의록 (1페이지, PDF) |
| C60:U60 | C60 | 각 팀원의 역할 분담 |
| C61:U61 | C61 | 주차별 진행 상황 |
| C62:U62 | C62 | 의사결정 과정 기록 |
| A63:A71 | A63 | 평가 기준 |
| B63:U63 | B63 | 완성도 평가 (70%) |
| C64:S64 | C64 | Q1. 군사시설 침입 탐지 문제를 분석하고 AI 적용 필요성을 설명했는가?<br>PASS 기준:<br>- 기존 감시 방식의 한계 2개 이상 제시<br>- AI 적용 목적 설명 |
| C65:S65 | C65 | Q2. 침입 탐지를 위한 입력 데이터와 수집 방안을 정의했는가?<br>PASS 기준:<br>- CCTV, 센서, 라벨 등 최소 3종 정의<br>- 데이터 출처 또는 확보 방법 포함 |
| C66:S66 | C66 | Q3. 데이터의 품질을 분석하고 개선 방안을 제안했는가?<br>PASS 기준:<br>- 데이터 문제 1개 이상 발견<br>- 해결 방법 제안 |
| C67:S67 | C67 | Q4. 침입 탐지를 위한 AI 처리 흐름을 설계했는가?<br>PASS 기준:<br>- 입력 → 분석 → 탐지 → 경보 단계 포함<br>- 모델 또는 알고리즘 선택 근거 제시 |
| C68:S68 | C68 | Q5. 성능 목표와 검증 방법을 제시했는가?<br>PASS 기준:<br>- 최소 2개 이상의 평가 지표 정의<br>- 목표 달성 여부 판단 기준 제시 |
| B69:U69 | B69 | 팀워크 평가 (30%) |
| C70:S70 | C70 | Q. 팀원별 역할이 명확하게 정의되었고, 각자 맡은 업무를 수행했는가?<br>PASS 기준:<br>- 팀원별 담당 역할이 문서화되어 있음<br>- 역할의 산출물 또는 수행 기록 존재<br>- 특정 인원에게 과도하게 업무가 집중되지 않음 |
| C71:S71 | C71 | 프로젝트 진행 과정에서 팀 의사결정과 협업 기록을 남겼는가?<br>PASS 기준:<br>- 회의 기록 또는 협업 로그 존재<br>- 주요 결정 사항과 변경 이유 기록<br>- 팀원 간 피드백 또는 의견 반영 사례 포함 |
| A72:U72 | A72 | AI 지시문 가이드 (학생용) |
| A73:A96 | A73 | 생성형 AI 활용 가이드 |
| B73:U73 | B73 | 허용되는 AI 활용 (권장) |
| C74:U74 | C74 | 문제 정의 아이디어 브레인스토밍 |
| C75:U75 | C75 | "군사시설 침입 탐지 문제를 머신러닝으로 해결하려고 합니다. <br>이 문제를 분류, 이상탐지, 객체 탐지 중 어떤 방식으로 <br>접근하는 것이 좋을까요? 각 방법의 장단점을 비교해주세요." |
| C76:U76 | C76 | 데이터셋 탐색 지원 |
| C77:U77 | C77 | "침입 탐지 또는 비디오 이상탐지를 위한 공개 데이터셋을 <br>추천해주세요. Kaggle, UCI ML Repository, <br>또는 연구 논문에서 공개한 데이터셋 중심으로 알려주세요." |
| C78:U78 | C78 | EDA 코드 작성 보조 |
| C79:U79 | C79 | "Python pandas를 사용하여 비디오 데이터셋의 <br>메타데이터(파일명, 해상도, 프레임 수)를 추출하고 <br>통계 요약을 출력하는 코드를 작성해주세요." |
| C80:U80 | C80 | 데이터 시각화 코드 예시 |
| C81:U81 | C81 | "matplotlib을 사용하여 시계열 센서 데이터를 <br>라인 플롯으로 시각화하는 코드를 작성해주세요. <br>정상 데이터는 파란색, 이상 데이터는 빨간색으로 표시하고 싶습니다." |
| C82:U82 | C82 | 보고서 작성 구조 제안 |
| C83:U83 | C83 | "침입 탐지 프로젝트의 문제 정의서를 작성 중입니다. <br>목차 구성을 어떻게 하면 좋을까요? <br>학술 보고서 형식으로 제안해주세요." |
| B84:U84 | B84 | 금지되는 AI 활용 (부정행위) |
| C85:U85 | C85 | 전체 보고서 작성 요청 |
| C86:U86 | C86 | "침입 탐지 프로젝트의 EDA 보고서 전체를 작성해줘" ❌ |
| C87:U87 | C87 | 분석 결과 조작 |
| C88:U88 | C88 | "이 데이터셋이 우수하다는 근거를 만들어줘" ❌ |
| C89:U89 | C89 | 팀원 기여도 허위 작성 |
| C90:U90 | C90 | "회의록에 들어갈 팀원 역할 분담 내용을 그럴듯하게 만들어줘" ❌ |
| B91:U91 | B91 | AI 활용 시 반드시 지켜야 할 원칙 |
| C92:U92 | C92 | 출처 명시: AI가 제공한 코드나 아이디어를 사용할 경우 보고서에 명시 |
| C93:U93 | C93 | 예: "본 EDA 코드는 ChatGPT의 제안을 참고하여 작성하였으며, <br>팀원이 데이터셋에 맞게 수정하였음." |
| C94:U94 | C94 | 검증 필수: AI가 제공한 코드는 반드시 실행하여 오류 확인 |
| C95:U95 | C95 | 이해 후 사용: 코드의 동작 원리를 이해한 후 활용 |
| C96:U96 | C96 | 자신의 언어로 재작성: AI 답변을 그대로 복사하지 말고 자신의 표현으로 변환 |

### Layout Metadata

```json
{
  "freeze_panes": null,
  "sheet_view_show_grid_lines": null,
  "column_dimensions": [
    {
      "column": "A",
      "width": 14.3984375,
      "hidden": false,
      "outline_level": 0
    }
  ],
  "row_dimensions": [
    {
      "row": 1,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 2,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 3,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 4,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 5,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 6,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 7,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 8,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 9,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 10,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 11,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 12,
      "height": 45.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 13,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 14,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 15,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 16,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 17,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 18,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 19,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 20,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 21,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 22,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 23,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 24,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 25,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 26,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 27,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 28,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 29,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 30,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 31,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 32,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 33,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 34,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 35,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 36,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 37,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 38,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 39,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 40,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 41,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 42,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 43,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 44,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 45,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 46,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 47,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 48,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 49,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 50,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 51,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 52,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 53,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 54,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 55,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 56,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 57,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 58,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 59,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 60,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 61,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 62,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 63,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 64,
      "height": 75.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 65,
      "height": 69.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 66,
      "height": 75.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 67,
      "height": 77.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 68,
      "height": 72.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 69,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 70,
      "height": 93.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 71,
      "height": 95.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 72,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 73,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 74,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 75,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 76,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 77,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 78,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 79,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 80,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 81,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 82,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 83,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 84,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 85,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 86,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 87,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 88,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 89,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 90,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 91,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 92,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 93,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 94,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 95,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 96,
      "height": 40.8,
      "hidden": false,
      "outline_level": 0
    }
  ]
}
```

### Data Validations

```json
[]
```

### Tables

```json
[]
```

### Worksheet Relationships

```json
[]
```

### OOXML Assets

_None_

## Sheet: 미션지_2

```json
{
  "title": "미션지_2",
  "state": "visible",
  "used_range": "A1:U103",
  "min_row": 1,
  "min_column": 1,
  "max_row": 103,
  "max_column": 21,
  "nonempty_record_count": 186,
  "merged_range_count": 114,
  "data_validation_count": 0,
  "table_count": 0,
  "relationship_count": 0,
  "asset_count": 0
}
```

### Grid View

| row | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 2단계: 구조 설계 (4~6주차) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | 차시 개요 | 1단계에서 정의한 문제를 해결하기 위한 AI 시스템의 전체 아키텍처를 설계합니다. <br>데이터 전처리 파이프라인, 모델 선택, 학습 전략, 평가 방법을 구체화하고 기술 스택을 결정합니다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | 학습목표 | 침입 탐지 문제에 적합한 AI 모델(CNN, LSTM, Hybrid)을 비교 분석하고 최적 모델을 선정할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | 데이터 전처리, 모델 학습, 추론, 경보 발생까지의 전체 파이프라인을 설계하고 시스템 아키텍처 다이어그램으로 표현할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | 모델 평가 지표(Precision, Recall, F1-score, AUC-ROC)를 이해하고 프로젝트 목표에 맞는 평가 전략을 수립할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | 선행 학습 권장 과목 | 딥러닝: CNN, RNN/LSTM 구조 이해, 전이학습 개념 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | 소프트웨어설계: 시스템 아키텍처, 모듈 설계, UML 다이어그램 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | 알고리즘: 시간/공간 복잡도 분석, 최적화 기법 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | 컴퓨터비전: 객체 탐지(YOLO, Faster R-CNN), 영상 전처리 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | 활용 기술 스택 | PyTorch / TensorFlow (딥러닝 프레임워크) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | OpenCV (영상 전처리) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | scikit-learn (전처리, 평가) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | Draw.io / Lucidchart (시스템 다이어그램 작성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | PBL 문제 (학생 제시용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | 문제 상황 | 1단계에서 데이터를 확보하고 분석한 결과, 다음과 같은 과제가 도출되었습니다:<br>- 영상 데이터는 야간에 가시성이 낮음 → 전처리 필요<br>- 센서 데이터에 노이즈가 많음 → 필터링 필요<br>- 정상 데이터 대비 침입 데이터가 1:20으로 불균형 → 증강 또는 가중치 조정 필요 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | 미션 | 이러한 데이터 특성을 고려하여 실시간 침입 탐지가 가능한 AI 시스템의 구조를 설계하세요. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | 5단계 실행 가이드 | Step 1: 모델 후보 조사 및 비교 분석 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  | 1 | 침입 탐지에 적용 가능한 모델 리스트업<br>- CNN (영상 기반 분류)<br>- LSTM (시계열 센서 데이터 분석)<br>- CNN + LSTM 하이브리드 (멀티모달)<br>- Autoencoder (이상탐지)<br>- YOLO / Faster R-CNN (객체 탐지) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | 2 | 각 모델의 장단점, 계산 복잡도, 실시간 처리 가능성 비교 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | 3 | 프로젝트 목표(탐지율 90%, 오탐률 낮춤)에 가장 적합한 모델 선정 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | 산출물 |  | 모델 비교 분석표 (표 형식) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | Step 2: 데이터 전처리 파이프라인 설계 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | 1 | 영상 데이터 전처리:<br><br>- 해상도 통일 (예: 640×480)<br>- 프레임 샘플링 (초당 3~5프레임)<br>- 야간 영상 밝기 보정 (히스토그램 평활화)<br>- 데이터 증강 (회전, 플립, 노이즈 추가) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | 2 | 센서 데이터 전처리:<br><br>- 노이즈 필터링 (이동평균, Kalman Filter)<br>- 정규화 (Min-Max Scaling)<br>- 시간 윈도우 생성 (예: 10초 단위 시퀀스) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | 3 | 데이터 불균형 해결:<br><br>- 오버샘플링 (SMOTE, ADASYN)<br>- 클래스 가중치 조정<br>- Focal Loss 적용 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | 산출물 |  | 전처리 파이프라인 플로우차트 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | Step 3: 시스템 아키텍처 설계 <br>전체 시스템을 다음 모듈로 구성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | 1 | 데이터 수집 모듈: CCTV/센서 → 데이터 저장 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | 2 | 전처리 모듈: 실시간 전처리 파이프라인 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | 3 | AI 추론 모듈: 학습된 모델로 침입 여부 판단 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | 4 | 경보 발생 모듈: 침입 탐지 시 알림 (SMS, 앱 푸시) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | 5 | 모니터링 대시보드: 실시간 상황 시각화 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | 산출물 |  | 시스템 아키텍처 다이어그램 (블록 다이어그램) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | Step 4: 모델 평가 전략 수립 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | 1 | 평가 지표 선정:<br><br>- Precision (오탐률 최소화 중요)<br>- Recall (침입 놓치지 않기 중요)<br>- F1-score (균형 지표)<br>- AUC-ROC (임계값 조정용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 36 |  | 2 | 검증 전략:<br><br>- Train/Validation/Test 분할 비율 (6:2:2)<br>- K-Fold Cross Validation (K=5)<br>- 시간 기반 분할 (과거 데이터로 학습, 미래 데이터로 테스트) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 37 |  | 3 | 성능 목표 수치화:<br><br>- Recall ≥ 90% (침입 탐지율)<br>- Precision ≥ 85% (오탐률 15% 이하)<br>- 추론 속도 ≤ 100ms (실시간 처리) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 38 |  | 산출물 |  | 평가 전략 문서 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  | Step 5: 기술 스택 및 개발 환경 구성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 40 |  | 1 | 프로그래밍 언어: Python 3.8+ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 41 |  | 2 | 딥러닝 프레임워크: PyTorch (유연성) 또는 TensorFlow (배포 용이) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 42 |  | 3 | 영상 처리: OpenCV |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  | 4 | 데이터 관리: pandas, numpy |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 44 |  | 5 | 버전 관리: Git + GitHub |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 45 |  | 6 | 실험 관리: MLflow 또는 Weights & Biases |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 46 |  | 7 | 협업 도구: Notion, Slack |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 47 | 제출물 | 1. 모델 설계 보고서 (5~7 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 48 |  | 1 | 모델 후보 비교 분석표 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 49 |  | 2 | 최종 선정 모델 및 근거 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 50 |  | 3 | 모델 구조도 (Layer 구성도) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 51 |  | 4 | 하이퍼파라미터 초기 설정값 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 52 |  | 2. 시스템 아키텍처 문서 (3~5 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 53 |  | 1 | 전체 시스템 블록 다이어그램 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 54 |  | 2 | 각 모듈의 기능 명세 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 55 |  | 3 | 데이터 흐름도 (Data Flow Diagram) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 56 |  | 4 | 모듈 간 인터페이스 정의 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 57 |  | 3. 데이터 전처리 파이프라인 설계서 (2~3 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 58 |  | 1 | 전처리 순서도 (Flowchart) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 59 |  | 2 | 각 전처리 기법의 적용 근거 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 60 |  | 3 | 샘플 코드 스니펫 (핵심 로직만) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 61 |  | 4. 평가 전략 문서 (2 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 62 |  | 1 | 평가 지표 정의 및 선정 이유 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 63 |  | 2 | 검증 전략 (데이터 분할 방법) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 64 |  | 3 | 성능 목표 수치 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 65 |  | 5. 프로젝트 계획서 (Gantt Chart, 1 페이지) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 66 |  | 1 | 3~8주차까지의 주차별 작업 계획 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 67 |  | 2 | 팀원별 역할 및 책임 (RACI Matrix) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 68 | 평가 기준 | 완성도 평가 (70%) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 69 |  | 1 | Q1. 침입 탐지 문제에 적합한 AI 모델을 비교 분석하고 최종 모델을 선정했는가?<br>PASS 기준:<br>- 후보 모델 2개 이상 비교<br>- 장단점 및 선택 기준 제시<br>- 최종 선정 근거 설명 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 70 |  | 2 | Q2. 데이터 특성을 반영한 전처리 파이프라인을 설계했는가?<br>PASS 기준:<br>- 영상 또는 센서 전처리 포함<br>- 데이터 품질 문제 해결 방안 포함<br>- 처리 흐름(Flow) 표현 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 71 |  | 3 | Q3. 실시간 침입 탐지를 위한 전체 시스템 구조를 설계했는가?<br>PASS 기준:<br>- 데이터 수집 → 전처리 → 추론 → 경보 흐름 포함<br>- 주요 모듈 기능 설명<br>- 구조도 또는 다이어그램 제출 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 72 |  | 4 | Q4. 모델 성능을 검증하기 위한 평가 전략을 수립했는가?<br>PASS 기준:<br>- 평가 지표 2개 이상 정의<br>- 검증 방법 포함<br>- 목표 성능 수치 제시 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 73 |  | 5 | Q5. 개발 및 운영을 위한 기술 스택과 프로젝트 실행 계획을 수립했는가?<br>PASS 기준:<br>- 사용 기술 명시<br>- 개발 환경 구성 포함<br>- 일정 또는 실행 계획 포함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 74 |  | 팀워크 평가 (30%) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 75 |  | 1 | Q. 모델·아키텍처 설계 과정에서 팀원이 함께 의사결정을 수행했는가?<br>PASS 기준:<br>- 설계 대안 검토 기록 존재<br>- 최종 선택 근거 문서화<br>- 팀원 의견 반영 사례 포함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 76 |  | 2 | Q. 팀원별 역할을 수행하고 결과물을 통합하여 제출했는가?<br>PASS 기준:<br>- 역할 분담 문서 존재<br>- 개인 산출물이 최종 결과물에 반영됨<br>- 일정 내 통합 완료 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 77 | AI 지시문 가이드 (학생용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 78 | 생성형 AI 활용 가이드 | 허용되는 AI 활용 (권장) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 79 |  | 1 | 모델 비교 정보 수집 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 80 |  |  | "침입 탐지 문제에 CNN, LSTM, Autoencoder, YOLO를 적용할 때 <br>각각의 장단점을 표로 비교해주세요. <br>특히 실시간 처리 속도와 정확도 측면에서 비교해주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 81 |  | 2 | 전처리 기법 조사 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 82 |  |  | "야간 CCTV 영상의 가시성을 개선하기 위한 <br>영상 전처리 기법을 3가지 이상 추천해주세요. <br>각 기법의 OpenCV 구현 방법도 알려주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 83 |  | 3 | 아키텍처 다이어그램 작성 지원 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 84 |  |  | "실시간 영상 분석 시스템의 아키텍처를 <br>데이터 수집 → 전처리 → AI 추론 → 경보 발생 <br>순서로 설명하고, Mermaid 다이어그램 코드를 작성해주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 85 |  | 4 | 평가 지표 설명 요청 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 86 |  |  | "보안 시스템에서 Precision과 Recall 중 <br>어느 것이 더 중요한가요? <br>False Positive와 False Negative의 <br>비즈니스 영향을 비교해주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 87 |  | 5 | 기술 스택 선정 조언 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 88 |  |  | "PyTorch와 TensorFlow 중 <br>실시간 영상 분석 프로젝트에 어느 것이 더 적합한가요? <br>배포 환경(엣지 디바이스)을 고려하여 비교해주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 89 |  | 금지되는 AI 활용 (부정행위) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 90 |  | 1 | 설계 문서 전체 작성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 91 |  |  | "침입 탐지 시스템의 아키텍처 설계 보고서를 작성해줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 92 |  | 2 | 평가 기준 조작 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 93 |  |  | "우리 모델이 더 좋아 보이도록 비교표를 만들어줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 94 |  | 3 | 다이어그램 대신 작성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 95 |  |  | "시스템 아키텍처 다이어그램을 완성해줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 96 |  |  | (힌트나 예시 요청은 가능하나, 최종 산출물은 학생이 작성) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 97 |  | AI 활용 시 반드시 지켜야 할 원칙 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 98 |  | 1 | 참고만 하고 자신의 프로젝트에 맞게 수정 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 99 |  |  | AI가 제공한 일반적인 아키텍처를 우리 데이터셋과 목표에 맞게 변형 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 100 |  | 2 | 출처 명시 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 101 |  |  | 예: "시스템 아키텍처 설계 시 Perplexity의 제안을 참고하였으며, <br>실시간 처리를 위한 경량화 전략은 팀이 독자적으로 추가하였음." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 102 |  | 3 | 기술적 타당성 검증 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 103 |  |  | AI가 제안한 모델이나 기법이 실제로 우리 문제에 적용 가능한지 논문이나 벤치마크 자료로 확인 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

### Non-Empty Cell Records

```jsonl
{"address":"A1","row":1,"column":1,"column_letter":"A","raw_value":"2단계: 구조 설계 (4~6주차)","cached_value":"2단계: 구조 설계 (4~6주차)","formula":null,"data_type":"s","number_format":"General","style_id":112,"merged_range":"A1:U1","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFCCCCCC"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A2","row":2,"column":1,"column_letter":"A","raw_value":"차시 개요","cached_value":"차시 개요","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B2","row":2,"column":2,"column_letter":"B","raw_value":"1단계에서 정의한 문제를 해결하기 위한 AI 시스템의 전체 아키텍처를 설계합니다. \n데이터 전처리 파이프라인, 모델 선택, 학습 전략, 평가 방법을 구체화하고 기술 스택을 결정합니다.","cached_value":"1단계에서 정의한 문제를 해결하기 위한 AI 시스템의 전체 아키텍처를 설계합니다. \n데이터 전처리 파이프라인, 모델 선택, 학습 전략, 평가 방법을 구체화하고 기술 스택을 결정합니다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B2:U2","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A3","row":3,"column":1,"column_letter":"A","raw_value":"학습목표","cached_value":"학습목표","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A3:A5","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B3","row":3,"column":2,"column_letter":"B","raw_value":"침입 탐지 문제에 적합한 AI 모델(CNN, LSTM, Hybrid)을 비교 분석하고 최적 모델을 선정할 수 있다.","cached_value":"침입 탐지 문제에 적합한 AI 모델(CNN, LSTM, Hybrid)을 비교 분석하고 최적 모델을 선정할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B3:U3","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B4","row":4,"column":2,"column_letter":"B","raw_value":"데이터 전처리, 모델 학습, 추론, 경보 발생까지의 전체 파이프라인을 설계하고 시스템 아키텍처 다이어그램으로 표현할 수 있다.","cached_value":"데이터 전처리, 모델 학습, 추론, 경보 발생까지의 전체 파이프라인을 설계하고 시스템 아키텍처 다이어그램으로 표현할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B4:U4","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B5","row":5,"column":2,"column_letter":"B","raw_value":"모델 평가 지표(Precision, Recall, F1-score, AUC-ROC)를 이해하고 프로젝트 목표에 맞는 평가 전략을 수립할 수 있다.","cached_value":"모델 평가 지표(Precision, Recall, F1-score, AUC-ROC)를 이해하고 프로젝트 목표에 맞는 평가 전략을 수립할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B5:U5","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A6","row":6,"column":1,"column_letter":"A","raw_value":"선행 학습 권장 과목","cached_value":"선행 학습 권장 과목","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A6:A9","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B6","row":6,"column":2,"column_letter":"B","raw_value":"딥러닝: CNN, RNN/LSTM 구조 이해, 전이학습 개념","cached_value":"딥러닝: CNN, RNN/LSTM 구조 이해, 전이학습 개념","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B6:U6","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B7","row":7,"column":2,"column_letter":"B","raw_value":"소프트웨어설계: 시스템 아키텍처, 모듈 설계, UML 다이어그램","cached_value":"소프트웨어설계: 시스템 아키텍처, 모듈 설계, UML 다이어그램","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B7:U7","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B8","row":8,"column":2,"column_letter":"B","raw_value":"알고리즘: 시간/공간 복잡도 분석, 최적화 기법","cached_value":"알고리즘: 시간/공간 복잡도 분석, 최적화 기법","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B8:U8","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B9","row":9,"column":2,"column_letter":"B","raw_value":"컴퓨터비전: 객체 탐지(YOLO, Faster R-CNN), 영상 전처리","cached_value":"컴퓨터비전: 객체 탐지(YOLO, Faster R-CNN), 영상 전처리","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B9:U9","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A10","row":10,"column":1,"column_letter":"A","raw_value":"활용 기술 스택","cached_value":"활용 기술 스택","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A10:A13","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B10","row":10,"column":2,"column_letter":"B","raw_value":"PyTorch / TensorFlow (딥러닝 프레임워크)","cached_value":"PyTorch / TensorFlow (딥러닝 프레임워크)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B10:U10","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B11","row":11,"column":2,"column_letter":"B","raw_value":"OpenCV (영상 전처리)","cached_value":"OpenCV (영상 전처리)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B11:U11","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B12","row":12,"column":2,"column_letter":"B","raw_value":"scikit-learn (전처리, 평가)","cached_value":"scikit-learn (전처리, 평가)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B12:U12","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B13","row":13,"column":2,"column_letter":"B","raw_value":"Draw.io / Lucidchart (시스템 다이어그램 작성","cached_value":"Draw.io / Lucidchart (시스템 다이어그램 작성","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B13:U13","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A14","row":14,"column":1,"column_letter":"A","raw_value":"PBL 문제 (학생 제시용)","cached_value":"PBL 문제 (학생 제시용)","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A14:U14","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A15","row":15,"column":1,"column_letter":"A","raw_value":"문제 상황","cached_value":"문제 상황","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B15","row":15,"column":2,"column_letter":"B","raw_value":"1단계에서 데이터를 확보하고 분석한 결과, 다음과 같은 과제가 도출되었습니다:\n- 영상 데이터는 야간에 가시성이 낮음 → 전처리 필요\n- 센서 데이터에 노이즈가 많음 → 필터링 필요\n- 정상 데이터 대비 침입 데이터가 1:20으로 불균형 → 증강 또는 가중치 조정 필요","cached_value":"1단계에서 데이터를 확보하고 분석한 결과, 다음과 같은 과제가 도출되었습니다:\n- 영상 데이터는 야간에 가시성이 낮음 → 전처리 필요\n- 센서 데이터에 노이즈가 많음 → 필터링 필요\n- 정상 데이터 대비 침입 데이터가 1:20으로 불균형 → 증강 또는 가중치 조정 필요","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B15:U15","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A16","row":16,"column":1,"column_letter":"A","raw_value":"미션","cached_value":"미션","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B16","row":16,"column":2,"column_letter":"B","raw_value":"이러한 데이터 특성을 고려하여 실시간 침입 탐지가 가능한 AI 시스템의 구조를 설계하세요.","cached_value":"이러한 데이터 특성을 고려하여 실시간 침입 탐지가 가능한 AI 시스템의 구조를 설계하세요.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B16:U16","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A17","row":17,"column":1,"column_letter":"A","raw_value":"5단계 실행 가이드","cached_value":"5단계 실행 가이드","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A17:A46","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B17","row":17,"column":2,"column_letter":"B","raw_value":"Step 1: 모델 후보 조사 및 비교 분석","cached_value":"Step 1: 모델 후보 조사 및 비교 분석","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B17:U17","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B18","row":18,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C18","row":18,"column":3,"column_letter":"C","raw_value":"침입 탐지에 적용 가능한 모델 리스트업\n- CNN (영상 기반 분류)\n- LSTM (시계열 센서 데이터 분석)\n- CNN + LSTM 하이브리드 (멀티모달)\n- Autoencoder (이상탐지)\n- YOLO / Faster R-CNN (객체 탐지)","cached_value":"침입 탐지에 적용 가능한 모델 리스트업\n- CNN (영상 기반 분류)\n- LSTM (시계열 센서 데이터 분석)\n- CNN + LSTM 하이브리드 (멀티모달)\n- Autoencoder (이상탐지)\n- YOLO / Faster R-CNN (객체 탐지)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C18:U18","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B19","row":19,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C19","row":19,"column":3,"column_letter":"C","raw_value":"각 모델의 장단점, 계산 복잡도, 실시간 처리 가능성 비교","cached_value":"각 모델의 장단점, 계산 복잡도, 실시간 처리 가능성 비교","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C19:U19","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B20","row":20,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C20","row":20,"column":3,"column_letter":"C","raw_value":"프로젝트 목표(탐지율 90%, 오탐률 낮춤)에 가장 적합한 모델 선정","cached_value":"프로젝트 목표(탐지율 90%, 오탐률 낮춤)에 가장 적합한 모델 선정","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C20:U20","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B21","row":21,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B21:C21","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D21","row":21,"column":4,"column_letter":"D","raw_value":"모델 비교 분석표 (표 형식)","cached_value":"모델 비교 분석표 (표 형식)","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D21:U21","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B22","row":22,"column":2,"column_letter":"B","raw_value":"Step 2: 데이터 전처리 파이프라인 설계","cached_value":"Step 2: 데이터 전처리 파이프라인 설계","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B22:U22","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B23","row":23,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C23","row":23,"column":3,"column_letter":"C","raw_value":"영상 데이터 전처리:\n\n- 해상도 통일 (예: 640×480)\n- 프레임 샘플링 (초당 3~5프레임)\n- 야간 영상 밝기 보정 (히스토그램 평활화)\n- 데이터 증강 (회전, 플립, 노이즈 추가)","cached_value":"영상 데이터 전처리:\n\n- 해상도 통일 (예: 640×480)\n- 프레임 샘플링 (초당 3~5프레임)\n- 야간 영상 밝기 보정 (히스토그램 평활화)\n- 데이터 증강 (회전, 플립, 노이즈 추가)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C23:U23","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B24","row":24,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C24","row":24,"column":3,"column_letter":"C","raw_value":"센서 데이터 전처리:\n\n- 노이즈 필터링 (이동평균, Kalman Filter)\n- 정규화 (Min-Max Scaling)\n- 시간 윈도우 생성 (예: 10초 단위 시퀀스)","cached_value":"센서 데이터 전처리:\n\n- 노이즈 필터링 (이동평균, Kalman Filter)\n- 정규화 (Min-Max Scaling)\n- 시간 윈도우 생성 (예: 10초 단위 시퀀스)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C24:U24","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B25","row":25,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C25","row":25,"column":3,"column_letter":"C","raw_value":"데이터 불균형 해결:\n\n- 오버샘플링 (SMOTE, ADASYN)\n- 클래스 가중치 조정\n- Focal Loss 적용","cached_value":"데이터 불균형 해결:\n\n- 오버샘플링 (SMOTE, ADASYN)\n- 클래스 가중치 조정\n- Focal Loss 적용","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C25:U25","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B26","row":26,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B26:C26","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D26","row":26,"column":4,"column_letter":"D","raw_value":"전처리 파이프라인 플로우차트","cached_value":"전처리 파이프라인 플로우차트","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D26:U26","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B27","row":27,"column":2,"column_letter":"B","raw_value":"Step 3: 시스템 아키텍처 설계 \n전체 시스템을 다음 모듈로 구성","cached_value":"Step 3: 시스템 아키텍처 설계 \n전체 시스템을 다음 모듈로 구성","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B27:U27","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B28","row":28,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C28","row":28,"column":3,"column_letter":"C","raw_value":"데이터 수집 모듈: CCTV/센서 → 데이터 저장","cached_value":"데이터 수집 모듈: CCTV/센서 → 데이터 저장","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C28:U28","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B29","row":29,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C29","row":29,"column":3,"column_letter":"C","raw_value":"전처리 모듈: 실시간 전처리 파이프라인","cached_value":"전처리 모듈: 실시간 전처리 파이프라인","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C29:U29","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B30","row":30,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C30","row":30,"column":3,"column_letter":"C","raw_value":"AI 추론 모듈: 학습된 모델로 침입 여부 판단","cached_value":"AI 추론 모듈: 학습된 모델로 침입 여부 판단","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C30:U30","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B31","row":31,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C31","row":31,"column":3,"column_letter":"C","raw_value":"경보 발생 모듈: 침입 탐지 시 알림 (SMS, 앱 푸시)","cached_value":"경보 발생 모듈: 침입 탐지 시 알림 (SMS, 앱 푸시)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C31:U31","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B32","row":32,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C32","row":32,"column":3,"column_letter":"C","raw_value":"모니터링 대시보드: 실시간 상황 시각화","cached_value":"모니터링 대시보드: 실시간 상황 시각화","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C32:U32","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B33","row":33,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B33:C33","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D33","row":33,"column":4,"column_letter":"D","raw_value":"시스템 아키텍처 다이어그램 (블록 다이어그램)","cached_value":"시스템 아키텍처 다이어그램 (블록 다이어그램)","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D33:U33","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B34","row":34,"column":2,"column_letter":"B","raw_value":"Step 4: 모델 평가 전략 수립","cached_value":"Step 4: 모델 평가 전략 수립","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B34:U34","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B35","row":35,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C35","row":35,"column":3,"column_letter":"C","raw_value":"평가 지표 선정:\n\n- Precision (오탐률 최소화 중요)\n- Recall (침입 놓치지 않기 중요)\n- F1-score (균형 지표)\n- AUC-ROC (임계값 조정용)","cached_value":"평가 지표 선정:\n\n- Precision (오탐률 최소화 중요)\n- Recall (침입 놓치지 않기 중요)\n- F1-score (균형 지표)\n- AUC-ROC (임계값 조정용)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C35:U35","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B36","row":36,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C36","row":36,"column":3,"column_letter":"C","raw_value":"검증 전략:\n\n- Train/Validation/Test 분할 비율 (6:2:2)\n- K-Fold Cross Validation (K=5)\n- 시간 기반 분할 (과거 데이터로 학습, 미래 데이터로 테스트)","cached_value":"검증 전략:\n\n- Train/Validation/Test 분할 비율 (6:2:2)\n- K-Fold Cross Validation (K=5)\n- 시간 기반 분할 (과거 데이터로 학습, 미래 데이터로 테스트)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C36:U36","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B37","row":37,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C37","row":37,"column":3,"column_letter":"C","raw_value":"성능 목표 수치화:\n\n- Recall ≥ 90% (침입 탐지율)\n- Precision ≥ 85% (오탐률 15% 이하)\n- 추론 속도 ≤ 100ms (실시간 처리)","cached_value":"성능 목표 수치화:\n\n- Recall ≥ 90% (침입 탐지율)\n- Precision ≥ 85% (오탐률 15% 이하)\n- 추론 속도 ≤ 100ms (실시간 처리)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C37:U37","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B38","row":38,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B38:C38","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D38","row":38,"column":4,"column_letter":"D","raw_value":"평가 전략 문서","cached_value":"평가 전략 문서","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D38:U38","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B39","row":39,"column":2,"column_letter":"B","raw_value":"Step 5: 기술 스택 및 개발 환경 구성","cached_value":"Step 5: 기술 스택 및 개발 환경 구성","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B39:U39","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B40","row":40,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C40","row":40,"column":3,"column_letter":"C","raw_value":"프로그래밍 언어: Python 3.8+","cached_value":"프로그래밍 언어: Python 3.8+","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C40:U40","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B41","row":41,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C41","row":41,"column":3,"column_letter":"C","raw_value":"딥러닝 프레임워크: PyTorch (유연성) 또는 TensorFlow (배포 용이)","cached_value":"딥러닝 프레임워크: PyTorch (유연성) 또는 TensorFlow (배포 용이)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C41:U41","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B42","row":42,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C42","row":42,"column":3,"column_letter":"C","raw_value":"영상 처리: OpenCV","cached_value":"영상 처리: OpenCV","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C42:U42","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B43","row":43,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C43","row":43,"column":3,"column_letter":"C","raw_value":"데이터 관리: pandas, numpy","cached_value":"데이터 관리: pandas, numpy","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C43:U43","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B44","row":44,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C44","row":44,"column":3,"column_letter":"C","raw_value":"버전 관리: Git + GitHub","cached_value":"버전 관리: Git + GitHub","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C44:U44","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B45","row":45,"column":2,"column_letter":"B","raw_value":6,"cached_value":6,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C45","row":45,"column":3,"column_letter":"C","raw_value":"실험 관리: MLflow 또는 Weights & Biases","cached_value":"실험 관리: MLflow 또는 Weights & Biases","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C45:U45","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B46","row":46,"column":2,"column_letter":"B","raw_value":7,"cached_value":7,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C46","row":46,"column":3,"column_letter":"C","raw_value":"협업 도구: Notion, Slack","cached_value":"협업 도구: Notion, Slack","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C46:U46","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A47","row":47,"column":1,"column_letter":"A","raw_value":"제출물","cached_value":"제출물","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A47:A67","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B47","row":47,"column":2,"column_letter":"B","raw_value":"1. 모델 설계 보고서 (5~7 페이지, PDF)","cached_value":"1. 모델 설계 보고서 (5~7 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B47:U47","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B48","row":48,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C48","row":48,"column":3,"column_letter":"C","raw_value":"모델 후보 비교 분석표","cached_value":"모델 후보 비교 분석표","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C48:U48","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B49","row":49,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C49","row":49,"column":3,"column_letter":"C","raw_value":"최종 선정 모델 및 근거","cached_value":"최종 선정 모델 및 근거","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C49:U49","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B50","row":50,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C50","row":50,"column":3,"column_letter":"C","raw_value":"모델 구조도 (Layer 구성도)","cached_value":"모델 구조도 (Layer 구성도)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C50:U50","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B51","row":51,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C51","row":51,"column":3,"column_letter":"C","raw_value":"하이퍼파라미터 초기 설정값","cached_value":"하이퍼파라미터 초기 설정값","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C51:U51","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B52","row":52,"column":2,"column_letter":"B","raw_value":"2. 시스템 아키텍처 문서 (3~5 페이지, PDF)","cached_value":"2. 시스템 아키텍처 문서 (3~5 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B52:U52","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B53","row":53,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C53","row":53,"column":3,"column_letter":"C","raw_value":"전체 시스템 블록 다이어그램","cached_value":"전체 시스템 블록 다이어그램","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C53:U53","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B54","row":54,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C54","row":54,"column":3,"column_letter":"C","raw_value":"각 모듈의 기능 명세","cached_value":"각 모듈의 기능 명세","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C54:U54","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B55","row":55,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C55","row":55,"column":3,"column_letter":"C","raw_value":"데이터 흐름도 (Data Flow Diagram)","cached_value":"데이터 흐름도 (Data Flow Diagram)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C55:U55","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B56","row":56,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C56","row":56,"column":3,"column_letter":"C","raw_value":"모듈 간 인터페이스 정의","cached_value":"모듈 간 인터페이스 정의","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C56:U56","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B57","row":57,"column":2,"column_letter":"B","raw_value":"3. 데이터 전처리 파이프라인 설계서 (2~3 페이지, PDF)","cached_value":"3. 데이터 전처리 파이프라인 설계서 (2~3 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B57:U57","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B58","row":58,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C58","row":58,"column":3,"column_letter":"C","raw_value":"전처리 순서도 (Flowchart)","cached_value":"전처리 순서도 (Flowchart)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C58:U58","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B59","row":59,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C59","row":59,"column":3,"column_letter":"C","raw_value":"각 전처리 기법의 적용 근거","cached_value":"각 전처리 기법의 적용 근거","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C59:U59","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B60","row":60,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C60","row":60,"column":3,"column_letter":"C","raw_value":"샘플 코드 스니펫 (핵심 로직만)","cached_value":"샘플 코드 스니펫 (핵심 로직만)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C60:U60","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B61","row":61,"column":2,"column_letter":"B","raw_value":"4. 평가 전략 문서 (2 페이지, PDF)","cached_value":"4. 평가 전략 문서 (2 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B61:U61","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B62","row":62,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C62","row":62,"column":3,"column_letter":"C","raw_value":"평가 지표 정의 및 선정 이유","cached_value":"평가 지표 정의 및 선정 이유","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C62:U62","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B63","row":63,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C63","row":63,"column":3,"column_letter":"C","raw_value":"검증 전략 (데이터 분할 방법)","cached_value":"검증 전략 (데이터 분할 방법)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C63:U63","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B64","row":64,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C64","row":64,"column":3,"column_letter":"C","raw_value":"성능 목표 수치","cached_value":"성능 목표 수치","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C64:U64","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B65","row":65,"column":2,"column_letter":"B","raw_value":"5. 프로젝트 계획서 (Gantt Chart, 1 페이지)","cached_value":"5. 프로젝트 계획서 (Gantt Chart, 1 페이지)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B65:U65","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B66","row":66,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C66","row":66,"column":3,"column_letter":"C","raw_value":"3~8주차까지의 주차별 작업 계획","cached_value":"3~8주차까지의 주차별 작업 계획","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C66:U66","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B67","row":67,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C67","row":67,"column":3,"column_letter":"C","raw_value":"팀원별 역할 및 책임 (RACI Matrix)","cached_value":"팀원별 역할 및 책임 (RACI Matrix)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C67:U67","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A68","row":68,"column":1,"column_letter":"A","raw_value":"평가 기준","cached_value":"평가 기준","formula":null,"data_type":"s","number_format":"General","style_id":29,"merged_range":"A68:A76","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B68","row":68,"column":2,"column_letter":"B","raw_value":"완성도 평가 (70%)","cached_value":"완성도 평가 (70%)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B68:U68","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B69","row":69,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C69","row":69,"column":3,"column_letter":"C","raw_value":"Q1. 침입 탐지 문제에 적합한 AI 모델을 비교 분석하고 최종 모델을 선정했는가?\nPASS 기준:\n- 후보 모델 2개 이상 비교\n- 장단점 및 선택 기준 제시\n- 최종 선정 근거 설명","cached_value":"Q1. 침입 탐지 문제에 적합한 AI 모델을 비교 분석하고 최종 모델을 선정했는가?\nPASS 기준:\n- 후보 모델 2개 이상 비교\n- 장단점 및 선택 기준 제시\n- 최종 선정 근거 설명","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C69:S69","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T69","row":69,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U69","row":69,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B70","row":70,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C70","row":70,"column":3,"column_letter":"C","raw_value":"Q2. 데이터 특성을 반영한 전처리 파이프라인을 설계했는가?\nPASS 기준:\n- 영상 또는 센서 전처리 포함\n- 데이터 품질 문제 해결 방안 포함\n- 처리 흐름(Flow) 표현","cached_value":"Q2. 데이터 특성을 반영한 전처리 파이프라인을 설계했는가?\nPASS 기준:\n- 영상 또는 센서 전처리 포함\n- 데이터 품질 문제 해결 방안 포함\n- 처리 흐름(Flow) 표현","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C70:S70","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T70","row":70,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U70","row":70,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B71","row":71,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C71","row":71,"column":3,"column_letter":"C","raw_value":"Q3. 실시간 침입 탐지를 위한 전체 시스템 구조를 설계했는가?\nPASS 기준:\n- 데이터 수집 → 전처리 → 추론 → 경보 흐름 포함\n- 주요 모듈 기능 설명\n- 구조도 또는 다이어그램 제출","cached_value":"Q3. 실시간 침입 탐지를 위한 전체 시스템 구조를 설계했는가?\nPASS 기준:\n- 데이터 수집 → 전처리 → 추론 → 경보 흐름 포함\n- 주요 모듈 기능 설명\n- 구조도 또는 다이어그램 제출","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C71:S71","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T71","row":71,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U71","row":71,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B72","row":72,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C72","row":72,"column":3,"column_letter":"C","raw_value":"Q4. 모델 성능을 검증하기 위한 평가 전략을 수립했는가?\nPASS 기준:\n- 평가 지표 2개 이상 정의\n- 검증 방법 포함\n- 목표 성능 수치 제시","cached_value":"Q4. 모델 성능을 검증하기 위한 평가 전략을 수립했는가?\nPASS 기준:\n- 평가 지표 2개 이상 정의\n- 검증 방법 포함\n- 목표 성능 수치 제시","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C72:S72","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T72","row":72,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U72","row":72,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B73","row":73,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C73","row":73,"column":3,"column_letter":"C","raw_value":"Q5. 개발 및 운영을 위한 기술 스택과 프로젝트 실행 계획을 수립했는가?\nPASS 기준:\n- 사용 기술 명시\n- 개발 환경 구성 포함\n- 일정 또는 실행 계획 포함","cached_value":"Q5. 개발 및 운영을 위한 기술 스택과 프로젝트 실행 계획을 수립했는가?\nPASS 기준:\n- 사용 기술 명시\n- 개발 환경 구성 포함\n- 일정 또는 실행 계획 포함","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C73:S73","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T73","row":73,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U73","row":73,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B74","row":74,"column":2,"column_letter":"B","raw_value":"팀워크 평가 (30%)","cached_value":"팀워크 평가 (30%)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B74:U74","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B75","row":75,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":44,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C75","row":75,"column":3,"column_letter":"C","raw_value":"Q. 모델·아키텍처 설계 과정에서 팀원이 함께 의사결정을 수행했는가?\nPASS 기준:\n- 설계 대안 검토 기록 존재\n- 최종 선택 근거 문서화\n- 팀원 의견 반영 사례 포함","cached_value":"Q. 모델·아키텍처 설계 과정에서 팀원이 함께 의사결정을 수행했는가?\nPASS 기준:\n- 설계 대안 검토 기록 존재\n- 최종 선택 근거 문서화\n- 팀원 의견 반영 사례 포함","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C75:S75","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T75","row":75,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U75","row":75,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B76","row":76,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":44,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C76","row":76,"column":3,"column_letter":"C","raw_value":"Q. 팀원별 역할을 수행하고 결과물을 통합하여 제출했는가?\nPASS 기준:\n- 역할 분담 문서 존재\n- 개인 산출물이 최종 결과물에 반영됨\n- 일정 내 통합 완료","cached_value":"Q. 팀원별 역할을 수행하고 결과물을 통합하여 제출했는가?\nPASS 기준:\n- 역할 분담 문서 존재\n- 개인 산출물이 최종 결과물에 반영됨\n- 일정 내 통합 완료","formula":null,"data_type":"s","number_format":"General","style_id":28,"merged_range":"C76:S76","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T76","row":76,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U76","row":76,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A77","row":77,"column":1,"column_letter":"A","raw_value":"AI 지시문 가이드 (학생용)","cached_value":"AI 지시문 가이드 (학생용)","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A77:U77","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A78","row":78,"column":1,"column_letter":"A","raw_value":"생성형 AI 활용 가이드","cached_value":"생성형 AI 활용 가이드","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A78:A103","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B78","row":78,"column":2,"column_letter":"B","raw_value":"허용되는 AI 활용 (권장)","cached_value":"허용되는 AI 활용 (권장)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B78:U78","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B79","row":79,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C79","row":79,"column":3,"column_letter":"C","raw_value":"모델 비교 정보 수집","cached_value":"모델 비교 정보 수집","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C79:U79","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C80","row":80,"column":3,"column_letter":"C","raw_value":"\"침입 탐지 문제에 CNN, LSTM, Autoencoder, YOLO를 적용할 때 \n각각의 장단점을 표로 비교해주세요. \n특히 실시간 처리 속도와 정확도 측면에서 비교해주세요.\"","cached_value":"\"침입 탐지 문제에 CNN, LSTM, Autoencoder, YOLO를 적용할 때 \n각각의 장단점을 표로 비교해주세요. \n특히 실시간 처리 속도와 정확도 측면에서 비교해주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C80:U80","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B81","row":81,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C81","row":81,"column":3,"column_letter":"C","raw_value":"전처리 기법 조사","cached_value":"전처리 기법 조사","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C81:U81","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C82","row":82,"column":3,"column_letter":"C","raw_value":"\"야간 CCTV 영상의 가시성을 개선하기 위한 \n영상 전처리 기법을 3가지 이상 추천해주세요. \n각 기법의 OpenCV 구현 방법도 알려주세요.\"","cached_value":"\"야간 CCTV 영상의 가시성을 개선하기 위한 \n영상 전처리 기법을 3가지 이상 추천해주세요. \n각 기법의 OpenCV 구현 방법도 알려주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C82:U82","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B83","row":83,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C83","row":83,"column":3,"column_letter":"C","raw_value":"아키텍처 다이어그램 작성 지원","cached_value":"아키텍처 다이어그램 작성 지원","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C83:U83","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C84","row":84,"column":3,"column_letter":"C","raw_value":"\"실시간 영상 분석 시스템의 아키텍처를 \n데이터 수집 → 전처리 → AI 추론 → 경보 발생 \n순서로 설명하고, Mermaid 다이어그램 코드를 작성해주세요.\"","cached_value":"\"실시간 영상 분석 시스템의 아키텍처를 \n데이터 수집 → 전처리 → AI 추론 → 경보 발생 \n순서로 설명하고, Mermaid 다이어그램 코드를 작성해주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C84:U84","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B85","row":85,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C85","row":85,"column":3,"column_letter":"C","raw_value":"평가 지표 설명 요청","cached_value":"평가 지표 설명 요청","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C85:U85","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C86","row":86,"column":3,"column_letter":"C","raw_value":"\"보안 시스템에서 Precision과 Recall 중 \n어느 것이 더 중요한가요? \nFalse Positive와 False Negative의 \n비즈니스 영향을 비교해주세요.\"","cached_value":"\"보안 시스템에서 Precision과 Recall 중 \n어느 것이 더 중요한가요? \nFalse Positive와 False Negative의 \n비즈니스 영향을 비교해주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C86:U86","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B87","row":87,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C87","row":87,"column":3,"column_letter":"C","raw_value":"기술 스택 선정 조언","cached_value":"기술 스택 선정 조언","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C87:U87","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C88","row":88,"column":3,"column_letter":"C","raw_value":"\"PyTorch와 TensorFlow 중 \n실시간 영상 분석 프로젝트에 어느 것이 더 적합한가요? \n배포 환경(엣지 디바이스)을 고려하여 비교해주세요.\"","cached_value":"\"PyTorch와 TensorFlow 중 \n실시간 영상 분석 프로젝트에 어느 것이 더 적합한가요? \n배포 환경(엣지 디바이스)을 고려하여 비교해주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C88:U88","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B89","row":89,"column":2,"column_letter":"B","raw_value":"금지되는 AI 활용 (부정행위)","cached_value":"금지되는 AI 활용 (부정행위)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B89:U89","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B90","row":90,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C90","row":90,"column":3,"column_letter":"C","raw_value":"설계 문서 전체 작성","cached_value":"설계 문서 전체 작성","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C90:U90","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C91","row":91,"column":3,"column_letter":"C","raw_value":"\"침입 탐지 시스템의 아키텍처 설계 보고서를 작성해줘\" ❌","cached_value":"\"침입 탐지 시스템의 아키텍처 설계 보고서를 작성해줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C91:U91","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B92","row":92,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C92","row":92,"column":3,"column_letter":"C","raw_value":"평가 기준 조작","cached_value":"평가 기준 조작","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C92:U92","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C93","row":93,"column":3,"column_letter":"C","raw_value":"\"우리 모델이 더 좋아 보이도록 비교표를 만들어줘\" ❌","cached_value":"\"우리 모델이 더 좋아 보이도록 비교표를 만들어줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C93:U93","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B94","row":94,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C94","row":94,"column":3,"column_letter":"C","raw_value":"다이어그램 대신 작성","cached_value":"다이어그램 대신 작성","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C94:U94","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C95","row":95,"column":3,"column_letter":"C","raw_value":"\"시스템 아키텍처 다이어그램을 완성해줘\" ❌","cached_value":"\"시스템 아키텍처 다이어그램을 완성해줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C95:U95","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C96","row":96,"column":3,"column_letter":"C","raw_value":"(힌트나 예시 요청은 가능하나, 최종 산출물은 학생이 작성)","cached_value":"(힌트나 예시 요청은 가능하나, 최종 산출물은 학생이 작성)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C96:U96","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B97","row":97,"column":2,"column_letter":"B","raw_value":"AI 활용 시 반드시 지켜야 할 원칙","cached_value":"AI 활용 시 반드시 지켜야 할 원칙","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B97:U97","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B98","row":98,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C98","row":98,"column":3,"column_letter":"C","raw_value":"참고만 하고 자신의 프로젝트에 맞게 수정","cached_value":"참고만 하고 자신의 프로젝트에 맞게 수정","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C98:U98","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C99","row":99,"column":3,"column_letter":"C","raw_value":"AI가 제공한 일반적인 아키텍처를 우리 데이터셋과 목표에 맞게 변형","cached_value":"AI가 제공한 일반적인 아키텍처를 우리 데이터셋과 목표에 맞게 변형","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C99:U99","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B100","row":100,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C100","row":100,"column":3,"column_letter":"C","raw_value":"출처 명시","cached_value":"출처 명시","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C100:U100","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C101","row":101,"column":3,"column_letter":"C","raw_value":"예: \"시스템 아키텍처 설계 시 Perplexity의 제안을 참고하였으며, \n실시간 처리를 위한 경량화 전략은 팀이 독자적으로 추가하였음.\"","cached_value":"예: \"시스템 아키텍처 설계 시 Perplexity의 제안을 참고하였으며, \n실시간 처리를 위한 경량화 전략은 팀이 독자적으로 추가하였음.\"","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C101:U101","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B102","row":102,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C102","row":102,"column":3,"column_letter":"C","raw_value":"기술적 타당성 검증","cached_value":"기술적 타당성 검증","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C102:U102","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C103","row":103,"column":3,"column_letter":"C","raw_value":"AI가 제안한 모델이나 기법이 실제로 우리 문제에 적용 가능한지 논문이나 벤치마크 자료로 확인","cached_value":"AI가 제안한 모델이나 기법이 실제로 우리 문제에 적용 가능한지 논문이나 벤치마크 자료로 확인","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C103:U103","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
```

### Merged Ranges

| range | anchor | anchor_raw_value |
| --- | --- | --- |
| A1:U1 | A1 | 2단계: 구조 설계 (4~6주차) |
| B2:U2 | B2 | 1단계에서 정의한 문제를 해결하기 위한 AI 시스템의 전체 아키텍처를 설계합니다. <br>데이터 전처리 파이프라인, 모델 선택, 학습 전략, 평가 방법을 구체화하고 기술 스택을 결정합니다. |
| A3:A5 | A3 | 학습목표 |
| B3:U3 | B3 | 침입 탐지 문제에 적합한 AI 모델(CNN, LSTM, Hybrid)을 비교 분석하고 최적 모델을 선정할 수 있다. |
| B4:U4 | B4 | 데이터 전처리, 모델 학습, 추론, 경보 발생까지의 전체 파이프라인을 설계하고 시스템 아키텍처 다이어그램으로 표현할 수 있다. |
| B5:U5 | B5 | 모델 평가 지표(Precision, Recall, F1-score, AUC-ROC)를 이해하고 프로젝트 목표에 맞는 평가 전략을 수립할 수 있다. |
| A6:A9 | A6 | 선행 학습 권장 과목 |
| B6:U6 | B6 | 딥러닝: CNN, RNN/LSTM 구조 이해, 전이학습 개념 |
| B7:U7 | B7 | 소프트웨어설계: 시스템 아키텍처, 모듈 설계, UML 다이어그램 |
| B8:U8 | B8 | 알고리즘: 시간/공간 복잡도 분석, 최적화 기법 |
| B9:U9 | B9 | 컴퓨터비전: 객체 탐지(YOLO, Faster R-CNN), 영상 전처리 |
| A10:A13 | A10 | 활용 기술 스택 |
| B10:U10 | B10 | PyTorch / TensorFlow (딥러닝 프레임워크) |
| B11:U11 | B11 | OpenCV (영상 전처리) |
| B12:U12 | B12 | scikit-learn (전처리, 평가) |
| B13:U13 | B13 | Draw.io / Lucidchart (시스템 다이어그램 작성 |
| A14:U14 | A14 | PBL 문제 (학생 제시용) |
| B15:U15 | B15 | 1단계에서 데이터를 확보하고 분석한 결과, 다음과 같은 과제가 도출되었습니다:<br>- 영상 데이터는 야간에 가시성이 낮음 → 전처리 필요<br>- 센서 데이터에 노이즈가 많음 → 필터링 필요<br>- 정상 데이터 대비 침입 데이터가 1:20으로 불균형 → 증강 또는 가중치 조정 필요 |
| B16:U16 | B16 | 이러한 데이터 특성을 고려하여 실시간 침입 탐지가 가능한 AI 시스템의 구조를 설계하세요. |
| A17:A46 | A17 | 5단계 실행 가이드 |
| B17:U17 | B17 | Step 1: 모델 후보 조사 및 비교 분석 |
| C18:U18 | C18 | 침입 탐지에 적용 가능한 모델 리스트업<br>- CNN (영상 기반 분류)<br>- LSTM (시계열 센서 데이터 분석)<br>- CNN + LSTM 하이브리드 (멀티모달)<br>- Autoencoder (이상탐지)<br>- YOLO / Faster R-CNN (객체 탐지) |
| C19:U19 | C19 | 각 모델의 장단점, 계산 복잡도, 실시간 처리 가능성 비교 |
| C20:U20 | C20 | 프로젝트 목표(탐지율 90%, 오탐률 낮춤)에 가장 적합한 모델 선정 |
| B21:C21 | B21 | 산출물 |
| D21:U21 | D21 | 모델 비교 분석표 (표 형식) |
| B22:U22 | B22 | Step 2: 데이터 전처리 파이프라인 설계 |
| C23:U23 | C23 | 영상 데이터 전처리:<br><br>- 해상도 통일 (예: 640×480)<br>- 프레임 샘플링 (초당 3~5프레임)<br>- 야간 영상 밝기 보정 (히스토그램 평활화)<br>- 데이터 증강 (회전, 플립, 노이즈 추가) |
| C24:U24 | C24 | 센서 데이터 전처리:<br><br>- 노이즈 필터링 (이동평균, Kalman Filter)<br>- 정규화 (Min-Max Scaling)<br>- 시간 윈도우 생성 (예: 10초 단위 시퀀스) |
| C25:U25 | C25 | 데이터 불균형 해결:<br><br>- 오버샘플링 (SMOTE, ADASYN)<br>- 클래스 가중치 조정<br>- Focal Loss 적용 |
| B26:C26 | B26 | 산출물 |
| D26:U26 | D26 | 전처리 파이프라인 플로우차트 |
| B27:U27 | B27 | Step 3: 시스템 아키텍처 설계 <br>전체 시스템을 다음 모듈로 구성 |
| C28:U28 | C28 | 데이터 수집 모듈: CCTV/센서 → 데이터 저장 |
| C29:U29 | C29 | 전처리 모듈: 실시간 전처리 파이프라인 |
| C30:U30 | C30 | AI 추론 모듈: 학습된 모델로 침입 여부 판단 |
| C31:U31 | C31 | 경보 발생 모듈: 침입 탐지 시 알림 (SMS, 앱 푸시) |
| C32:U32 | C32 | 모니터링 대시보드: 실시간 상황 시각화 |
| B33:C33 | B33 | 산출물 |
| D33:U33 | D33 | 시스템 아키텍처 다이어그램 (블록 다이어그램) |
| B34:U34 | B34 | Step 4: 모델 평가 전략 수립 |
| C35:U35 | C35 | 평가 지표 선정:<br><br>- Precision (오탐률 최소화 중요)<br>- Recall (침입 놓치지 않기 중요)<br>- F1-score (균형 지표)<br>- AUC-ROC (임계값 조정용) |
| C36:U36 | C36 | 검증 전략:<br><br>- Train/Validation/Test 분할 비율 (6:2:2)<br>- K-Fold Cross Validation (K=5)<br>- 시간 기반 분할 (과거 데이터로 학습, 미래 데이터로 테스트) |
| C37:U37 | C37 | 성능 목표 수치화:<br><br>- Recall ≥ 90% (침입 탐지율)<br>- Precision ≥ 85% (오탐률 15% 이하)<br>- 추론 속도 ≤ 100ms (실시간 처리) |
| B38:C38 | B38 | 산출물 |
| D38:U38 | D38 | 평가 전략 문서 |
| B39:U39 | B39 | Step 5: 기술 스택 및 개발 환경 구성 |
| C40:U40 | C40 | 프로그래밍 언어: Python 3.8+ |
| C41:U41 | C41 | 딥러닝 프레임워크: PyTorch (유연성) 또는 TensorFlow (배포 용이) |
| C42:U42 | C42 | 영상 처리: OpenCV |
| C43:U43 | C43 | 데이터 관리: pandas, numpy |
| C44:U44 | C44 | 버전 관리: Git + GitHub |
| C45:U45 | C45 | 실험 관리: MLflow 또는 Weights & Biases |
| C46:U46 | C46 | 협업 도구: Notion, Slack |
| A47:A67 | A47 | 제출물 |
| B47:U47 | B47 | 1. 모델 설계 보고서 (5~7 페이지, PDF) |
| C48:U48 | C48 | 모델 후보 비교 분석표 |
| C49:U49 | C49 | 최종 선정 모델 및 근거 |
| C50:U50 | C50 | 모델 구조도 (Layer 구성도) |
| C51:U51 | C51 | 하이퍼파라미터 초기 설정값 |
| B52:U52 | B52 | 2. 시스템 아키텍처 문서 (3~5 페이지, PDF) |
| C53:U53 | C53 | 전체 시스템 블록 다이어그램 |
| C54:U54 | C54 | 각 모듈의 기능 명세 |
| C55:U55 | C55 | 데이터 흐름도 (Data Flow Diagram) |
| C56:U56 | C56 | 모듈 간 인터페이스 정의 |
| B57:U57 | B57 | 3. 데이터 전처리 파이프라인 설계서 (2~3 페이지, PDF) |
| C58:U58 | C58 | 전처리 순서도 (Flowchart) |
| C59:U59 | C59 | 각 전처리 기법의 적용 근거 |
| C60:U60 | C60 | 샘플 코드 스니펫 (핵심 로직만) |
| B61:U61 | B61 | 4. 평가 전략 문서 (2 페이지, PDF) |
| C62:U62 | C62 | 평가 지표 정의 및 선정 이유 |
| C63:U63 | C63 | 검증 전략 (데이터 분할 방법) |
| C64:U64 | C64 | 성능 목표 수치 |
| B65:U65 | B65 | 5. 프로젝트 계획서 (Gantt Chart, 1 페이지) |
| C66:U66 | C66 | 3~8주차까지의 주차별 작업 계획 |
| C67:U67 | C67 | 팀원별 역할 및 책임 (RACI Matrix) |
| A68:A76 | A68 | 평가 기준 |
| B68:U68 | B68 | 완성도 평가 (70%) |
| C69:S69 | C69 | Q1. 침입 탐지 문제에 적합한 AI 모델을 비교 분석하고 최종 모델을 선정했는가?<br>PASS 기준:<br>- 후보 모델 2개 이상 비교<br>- 장단점 및 선택 기준 제시<br>- 최종 선정 근거 설명 |
| C70:S70 | C70 | Q2. 데이터 특성을 반영한 전처리 파이프라인을 설계했는가?<br>PASS 기준:<br>- 영상 또는 센서 전처리 포함<br>- 데이터 품질 문제 해결 방안 포함<br>- 처리 흐름(Flow) 표현 |
| C71:S71 | C71 | Q3. 실시간 침입 탐지를 위한 전체 시스템 구조를 설계했는가?<br>PASS 기준:<br>- 데이터 수집 → 전처리 → 추론 → 경보 흐름 포함<br>- 주요 모듈 기능 설명<br>- 구조도 또는 다이어그램 제출 |
| C72:S72 | C72 | Q4. 모델 성능을 검증하기 위한 평가 전략을 수립했는가?<br>PASS 기준:<br>- 평가 지표 2개 이상 정의<br>- 검증 방법 포함<br>- 목표 성능 수치 제시 |
| C73:S73 | C73 | Q5. 개발 및 운영을 위한 기술 스택과 프로젝트 실행 계획을 수립했는가?<br>PASS 기준:<br>- 사용 기술 명시<br>- 개발 환경 구성 포함<br>- 일정 또는 실행 계획 포함 |
| B74:U74 | B74 | 팀워크 평가 (30%) |
| C75:S75 | C75 | Q. 모델·아키텍처 설계 과정에서 팀원이 함께 의사결정을 수행했는가?<br>PASS 기준:<br>- 설계 대안 검토 기록 존재<br>- 최종 선택 근거 문서화<br>- 팀원 의견 반영 사례 포함 |
| C76:S76 | C76 | Q. 팀원별 역할을 수행하고 결과물을 통합하여 제출했는가?<br>PASS 기준:<br>- 역할 분담 문서 존재<br>- 개인 산출물이 최종 결과물에 반영됨<br>- 일정 내 통합 완료 |
| A77:U77 | A77 | AI 지시문 가이드 (학생용) |
| A78:A103 | A78 | 생성형 AI 활용 가이드 |
| B78:U78 | B78 | 허용되는 AI 활용 (권장) |
| C79:U79 | C79 | 모델 비교 정보 수집 |
| C80:U80 | C80 | "침입 탐지 문제에 CNN, LSTM, Autoencoder, YOLO를 적용할 때 <br>각각의 장단점을 표로 비교해주세요. <br>특히 실시간 처리 속도와 정확도 측면에서 비교해주세요." |
| C81:U81 | C81 | 전처리 기법 조사 |
| C82:U82 | C82 | "야간 CCTV 영상의 가시성을 개선하기 위한 <br>영상 전처리 기법을 3가지 이상 추천해주세요. <br>각 기법의 OpenCV 구현 방법도 알려주세요." |
| C83:U83 | C83 | 아키텍처 다이어그램 작성 지원 |
| C84:U84 | C84 | "실시간 영상 분석 시스템의 아키텍처를 <br>데이터 수집 → 전처리 → AI 추론 → 경보 발생 <br>순서로 설명하고, Mermaid 다이어그램 코드를 작성해주세요." |
| C85:U85 | C85 | 평가 지표 설명 요청 |
| C86:U86 | C86 | "보안 시스템에서 Precision과 Recall 중 <br>어느 것이 더 중요한가요? <br>False Positive와 False Negative의 <br>비즈니스 영향을 비교해주세요." |
| C87:U87 | C87 | 기술 스택 선정 조언 |
| C88:U88 | C88 | "PyTorch와 TensorFlow 중 <br>실시간 영상 분석 프로젝트에 어느 것이 더 적합한가요? <br>배포 환경(엣지 디바이스)을 고려하여 비교해주세요." |
| B89:U89 | B89 | 금지되는 AI 활용 (부정행위) |
| C90:U90 | C90 | 설계 문서 전체 작성 |
| C91:U91 | C91 | "침입 탐지 시스템의 아키텍처 설계 보고서를 작성해줘" ❌ |
| C92:U92 | C92 | 평가 기준 조작 |
| C93:U93 | C93 | "우리 모델이 더 좋아 보이도록 비교표를 만들어줘" ❌ |
| C94:U94 | C94 | 다이어그램 대신 작성 |
| C95:U95 | C95 | "시스템 아키텍처 다이어그램을 완성해줘" ❌ |
| C96:U96 | C96 | (힌트나 예시 요청은 가능하나, 최종 산출물은 학생이 작성) |
| B97:U97 | B97 | AI 활용 시 반드시 지켜야 할 원칙 |
| C98:U98 | C98 | 참고만 하고 자신의 프로젝트에 맞게 수정 |
| C99:U99 | C99 | AI가 제공한 일반적인 아키텍처를 우리 데이터셋과 목표에 맞게 변형 |
| C100:U100 | C100 | 출처 명시 |
| C101:U101 | C101 | 예: "시스템 아키텍처 설계 시 Perplexity의 제안을 참고하였으며, <br>실시간 처리를 위한 경량화 전략은 팀이 독자적으로 추가하였음." |
| C102:U102 | C102 | 기술적 타당성 검증 |
| C103:U103 | C103 | AI가 제안한 모델이나 기법이 실제로 우리 문제에 적용 가능한지 논문이나 벤치마크 자료로 확인 |

### Layout Metadata

```json
{
  "freeze_panes": null,
  "sheet_view_show_grid_lines": null,
  "column_dimensions": [],
  "row_dimensions": [
    {
      "row": 1,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 2,
      "height": 40.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 3,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 4,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 5,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 6,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 7,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 8,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 9,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 10,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 11,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 12,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 13,
      "height": 24.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 14,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 15,
      "height": 64.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 16,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 17,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 18,
      "height": 90.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 19,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 20,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 21,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 22,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 23,
      "height": 91.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 24,
      "height": 91.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 25,
      "height": 91.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 26,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 27,
      "height": 36.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 28,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 29,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 30,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 31,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 32,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 33,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 34,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 35,
      "height": 90.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 36,
      "height": 90.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 37,
      "height": 90.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 38,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 39,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 40,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 41,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 42,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 43,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 44,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 45,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 46,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 47,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 48,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 49,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 50,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 51,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 52,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 53,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 54,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 55,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 56,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 57,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 58,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 59,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 60,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 61,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 62,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 63,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 64,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 65,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 66,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 67,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 68,
      "height": 66.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 69,
      "height": 85.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 70,
      "height": 85.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 71,
      "height": 87.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 72,
      "height": 88.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 73,
      "height": 90.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 74,
      "height": 66.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 75,
      "height": 94.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 76,
      "height": 94.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 77,
      "height": 32.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 78,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 79,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 80,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 81,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 82,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 83,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 84,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 85,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 86,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 87,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 88,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 89,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 90,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 91,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 92,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 93,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 94,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 95,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 96,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 97,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 98,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 99,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 100,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 101,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 102,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 103,
      "height": 59.4,
      "hidden": false,
      "outline_level": 0
    }
  ]
}
```

### Data Validations

```json
[]
```

### Tables

```json
[]
```

### Worksheet Relationships

```json
[]
```

### OOXML Assets

_None_

## Sheet: 미션지_3

```json
{
  "title": "미션지_3",
  "state": "visible",
  "used_range": "A1:U107",
  "min_row": 1,
  "min_column": 1,
  "max_row": 107,
  "max_column": 21,
  "nonempty_record_count": 187,
  "merged_range_count": 125,
  "data_validation_count": 0,
  "table_count": 0,
  "relationship_count": 0,
  "asset_count": 0
}
```

### Grid View

| row | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 3단계: 제작 및 연동 (7~9주차) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | 차시 개요 | 2단계에서 설계한 시스템을 실제로 구현합니다. 데이터 전처리 코드 작성, AI 모델 학습, 각 모듈 개발, 통합 테스트를 수행하여 <br>동작하는 프로토타입을 완성합니다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | 학습목표 | 설계서를 바탕으로 데이터 전처리 파이프라인과 AI 모델을 Python으로 구현하고 학습시킬 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | 여러 모듈(전처리, 모델, 경보)을 통합하여 End-to-End 시스템으로 연동할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | 개발 과정에서 발생하는 오류를 디버깅하고, 버전 관리 도구(Git)를 활용하여 협업할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | 선행 학습 권장 과목 | 딥러닝: 모델 구현, 학습 루프 작성, 하이퍼파라미터 튜닝 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | Python 프로그래밍: 객체지향 프로그래밍, 예외 처리, 파일 I/O |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | 소프트웨어공학: 모듈화, 테스트 작성, 디버깅 기법 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | 데이터베이스 (선택): 로그 데이터 저장용 (SQLite, MongoDB) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | 활용 기술 스택 | Python 3.8+ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | PyTorch / TensorFlow |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | OpenCV |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | Flask / FastAPI (API 서버 구축용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | Git / GitHub (버전 관리) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 |  | Docker (선택, 배포 환경 구성용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | PBL 문제 (학생 제시용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | 문제 상황 | 설계 단계에서 CNN + LSTM 하이브리드 모델을 선정하고, 전처리 파이프라인과 시스템 아키텍처를 완성했습니다. <br>이제 실제로 코드를 작성하여 동작하는 시스템을 만들어야 합니다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 | 미션 | 학습된 AI 모델이 새로운 영상/센서 데이터를 입력받아 침입 여부를 판단하고, 침입 탐지 시 경보를 발생시키는 전체 시스템을 구현하세요. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 | 5단계 실행 가이드 | Step 1: 개발 환경 구축 및 Git 저장소 설정 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | 1 | 로컬 환경 구성:<br>- Python 가상환경 생성 (venv 또는 conda)<br>- 필요한 라이브러리 설치 (requirements.txt 작성)<br>- GPU 환경 설정 확인 (CUDA, cuDNN) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | 2 | Git 저장소 설정:<br>- GitHub에 프로젝트 저장소 생성<br>- 폴더 구조 구성<br>- .gitignore 설정 (데이터 파일, 가중치 파일 제외) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | 산출물 |  | GitHub 저장소 URL, 초기 커밋 이력 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | Step 2: 데이터 전처리 모듈 구현 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | 1 | 영상 전처리 함수 작성 (preprocessing.py):<br>- 해상도 조정, 프레임 샘플링<br>- 야간 영상 밝기 보정 (히스토그램 평활화, CLAHE)<br>- 데이터 증강 (회전, 플립, 노이즈 추가) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | 2 | 센서 데이터 전처리:<br>- 노이즈 필터링 (이동평균, Kalman Filter)<br>- 정규화 (Min-Max Scaling)<br>- 시간 윈도우 생성 (예: 10초 단위 시퀀스) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | 3 | 데이터 불균형 처리:<br>- SMOTE 또는 가중치 샘플링 적용 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | 산출물 |  | 전처리 모듈 코드, 테스트 결과 (전후 비교 이미지) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | Step 3: AI 모델 구현 및 학습 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | 1 | 모델 정의 (model.py):<br>- CNN 부분: 영상 특징 추출 (ResNet18 전이학습 또는 Custom CNN)<br>- LSTM 부분: 시계열 패턴 분석<br>- 최종 분류 레이어 (Sigmoid 또는 Softmax) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | 2 | 학습 코드 작성 (train.py):<br>- DataLoader 구성 (배치 크기: 16~32)<br>- 손실 함수: Focal Loss 또는 Weighted Cross Entropy<br>- 옵티마이저: Adam (lr=0.001)<br>- 학습 루프: Epoch 30~50회<br>- 검증 루프: Validation Loss 기록<br>- 체크포인트 저장 (최고 성능 모델) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | 3 | 학습 과정 모니터링:<br>- TensorBoard 또는 Weights & Biases 로그 기록<br>- Loss, Accuracy 그래프 시각화 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | 산출물 |  | 학습된 모델 가중치 파일, 학습 로그, 성능 그래프 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | Step 4: 추론 및 경보 모듈 구현 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | 1 | 추론 모듈 (inference.py):<br>- 학습된 모델 로드<br>- 새로운 데이터 입력 받아 전처리<br>- 모델 추론 (침입 확률 출력)<br>- 임계값 기반 침입 판단 (예: 확률 > 0.7) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | 2 | 경보 발생 모듈:<br>- 침입 탐지 시 로그 저장 (시간, 위치, 신뢰도)<br>- 알림 발송 (콘솔 출력 또는 간단한 이메일/SMS)<br>- 침입 영상 클립 저장 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 36 |  | 산출물 |  | 추론 모듈 코드, 테스트 영상 결과 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 37 |  | Step 5: 모듈 통합 및 End-to-End 테스트 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 38 |  | 1 | 메인 파이프라인 구성 (main.py): |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  | 2 | 통합 테스트:<br>- 테스트 케이스 5개 이상 준비 (정상 3개, 침입 2개)<br>- 각 테스트 케이스별 결과 기록<br>- 오류 발생 시 디버깅 및 수정 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 40 |  | 3 | 성능 측정:<br>- 추론 속도 측정 (ms 단위)<br>- 정확도, Precision, Recall, F1-score 계산 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 41 |  | 산출물 |  | 통합 테스트 보고서, 성능 측정 결과 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 42 | 제출물 | 1. GitHub 저장소 (필수) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  | 1 | 전체 소스 코드 (주석 포함) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 44 |  | 2 | README.md (프로젝트 설명, 설치 방법, 실행 방법) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 45 |  | 3 | requirements.txt |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 46 |  | 4 | 커밋 이력 (최소 20개 이상, 의미 있는 커밋 메시지) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 47 |  | 2. 학습 보고서 (3~5 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 48 |  | 1 | 모델 구조 상세 설명 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 49 |  | 2 | 하이퍼파라미터 설정 및 튜닝 과정 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 50 |  | 3 | 학습 Loss/Accuracy 그래프 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 51 |  | 4 | 최종 모델 성능 (Precision, Recall, F1-score) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 52 |  | 3. 모듈 통합 테스트 보고서 (2~3 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 53 |  | 1 | 테스트 케이스 목록 및 결과 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 54 |  | 2 | 발견된 버그 및 해결 방법 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 55 |  | 3 | 추론 속도 측정 결과 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 56 |  | 4. 시연 영상 (5분 내외, MP4) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 57 |  | 1 | 시스템 실행 과정 녹화 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 58 |  | 2 | 정상 케이스와 침입 케이스 시연 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 59 |  | 3 | 경보 발생 과정 보여주기 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 60 |  | 5. 개인 기여도 보고서 (각자 1 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 61 |  | 1 | 자신이 담당한 코드 파일 및 함수 목록 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 62 |  | 2 | 작업 시간 및 어려웠던 점 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 63 |  | 3 | 팀 프로젝트에서 배운 점 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 64 | 평가 기준 | 완성도 평가 (70%) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 65 |  | 1 | Q1. 설계한 데이터 전처리 파이프라인을 실제 코드로 구현했는가?<br>PASS 기준:<br>- 입력 데이터 처리 코드 작성<br>- 전처리 결과 확인 가능<br>- 예외 상황 처리 포함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 66 |  | 2 | Q2. 선정한 AI 모델을 구현하고 학습을 완료했는가?<br>PASS 기준:<br>- 모델 학습 코드 작성<br>- 학습 결과(로그·지표·출력) 제시<br>- 재현 가능한 실행 절차 포함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 67 |  | 3 | Q3. 전처리·AI 추론·경보 기능을 연결하여 동작하도록 구현했는가?<br>PASS 기준:<br>- 최소 2개 이상의 기능 모듈 연동<br>- 데이터 흐름 확인 가능<br>- 통합 실행 성공 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 68 |  | 4 | Q4. 구현 과정의 오류를 분석하고 수정하여 안정성을 확보했는가?<br>PASS 기준:<br>- 테스트 수행 기록 존재<br>- 오류 사례 및 해결 과정 정리<br>- 정상 동작 결과 확인 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 69 |  | 5 | Q5. 사용 가능한 수준의 End-to-End 프로토타입을 완성했는가?<br>PASS 기준:<br>- 전체 흐름 실행 가능<br>- 입력 → 탐지 → 결과 출력 가능<br>- 시연 또는 결과 증빙 포함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 70 |  | 팀워크 평가 (30%) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 71 |  | 1 | Q. 팀원이 버전 관리 도구를 활용하여 협업 개발을 수행했는가?<br>PASS 기준:<br>- 공동 저장소 사용<br>- 작업 이력 확인 가능<br>- 코드 병합 또는 변경 기록 존재 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 72 |  | 2 | Q. 모듈 통합 과정에서 발생한 문제를 팀 단위로 해결했는가?<br>PASS 기준:<br>- 통합 이슈 기록 존재<br>- 역할 분담 및 해결 과정 확인 가능<br>- 최종 통합 결과 제출 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 73 | AI 지시문 가이드 (학생용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 74 | 생성형 AI 활용 가이드 | 허용되는 AI 활용 (권장) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 75 |  | 1 | 코드 오류 디버깅 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 76 |  |  | "다음 PyTorch 코드에서 'RuntimeError: Expected 4D tensor' <br>오류가 발생합니다. 원인과 해결 방법을 알려주세요.<br><br>[오류 발생 코드 붙여넣기]<br>" |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 77 |  | 2 | 코드 리팩토링 조언 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 78 |  |  | "다음 전처리 함수가 너무 느립니다. <br>성능을 개선할 수 있는 방법을 제안해주세요.<br><br>[현재 코드]<br>def slow_preprocess(images):<br>result = []<br>for img in images:<br># 픽셀 단위 반복문<br>return result<br>" |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 79 |  | 3 | 라이브러리 사용법 질문 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 80 |  |  | "OpenCV에서 히스토그램 평활화(Histogram Equalization)를 <br>적용하는 코드를 작성해주세요. <br>컬러 이미지에 대해서도 적용 가능해야 합니다." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 81 |  | 4 | 모델 구조 검증 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 82 |  |  | "다음 CNN + LSTM 하이브리드 모델 구조에 <br>논리적 오류가 있는지 확인해주세요.<br><br>[모델 코드]<br>" |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 83 |  | 5 | 학습 하이퍼파라미터 조언 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 84 |  |  | "이미지 분류 모델에서 Learning Rate를 0.001로 시작했는데 <br>Loss가 진동합니다. 어떻게 조정해야 할까요?" |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 85 |  | 금지되는 AI 활용 (부정행위) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 86 |  | 1 | 코드 템플릿 요청 (기본 구조만) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 87 |  |  | ✅ 허용: "PyTorch DataLoader를 사용한 <br>학습 루프의 기본 구조를 알려주세요."<br><br>❌ 금지: "침입 탐지 프로젝트의 전체 학습 코드를 작성해줘"<br><br>=> AI가 제공한 템플릿을 자신의 데이터셋과 모델에 맞게 반드시 수정 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 88 |  | 2 | 함수 작성 지원 (스니펫 수준) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 89 |  |  | ✅ 허용: "영상에서 5프레임마다 샘플링하는 <br>OpenCV 코드를 작성해주세요."<br><br>→ 받은 코드를 자신의 전처리 파이프라인에 통합하고, <br>주석 및 변수명을 자신의 스타일로 변경 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 90 |  | 3 | 전체 모듈 코드 요청 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 91 |  |  | "침입 탐지 시스템의 model.py 전체를 작성해줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 92 |  | 4 | 학습 결과 조작 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 93 |  |  | "학습 Loss가 잘 감소하는 것처럼 보이는 그래프 데이터를 만들어줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 94 |  | 5 | GitHub Commit 대신 작성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 95 |  |  | "커밋 메시지를 그럴듯하게 20개 만들어줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 96 |  | 6 | 팀원 코드 이해 없이 병합 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 97 |  |  | 다른 팀원이 AI로 생성한 코드를 이해하지 못한 채 Pull Request 승인 ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 98 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 99 |  | AI 활용 시 반드시 지켜야 할 원칙 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 100 |  | 1 | AI 사용 흔적 남기기 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 101 |  |  | 코드 주석에 AI 참고 표시: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 102 |  | 2 | 코드 이해 후 사용 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 103 |  |  | - AI가 제공한 코드를 실행하기 전에 각 줄의 의미 파악<br>- 팀원에게 설명할 수 있어야 함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 104 |  | 3 | 오류는 스스로 해결 시도 후 AI 활용 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 105 |  |  | - 최소 30분 이상 자체 디버깅 시도<br>- 에러 메시지 검색 및 공식 문서 확인<br>- 그래도 안 되면 구체적인 오류 상황을 AI에게 질문 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 106 |  | 4 | 학습 결과는 절대 조작 금지 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 107 |  |  | - 실제 학습 로그, Loss 그래프만 제출<br>- 성능이 목표에 미달해도 정직하게 보고 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

### Non-Empty Cell Records

```jsonl
{"address":"A1","row":1,"column":1,"column_letter":"A","raw_value":"3단계: 제작 및 연동 (7~9주차)","cached_value":"3단계: 제작 및 연동 (7~9주차)","formula":null,"data_type":"s","number_format":"General","style_id":112,"merged_range":"A1:U1","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFCCCCCC"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A2","row":2,"column":1,"column_letter":"A","raw_value":"차시 개요","cached_value":"차시 개요","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B2","row":2,"column":2,"column_letter":"B","raw_value":"2단계에서 설계한 시스템을 실제로 구현합니다. 데이터 전처리 코드 작성, AI 모델 학습, 각 모듈 개발, 통합 테스트를 수행하여 \n동작하는 프로토타입을 완성합니다.","cached_value":"2단계에서 설계한 시스템을 실제로 구현합니다. 데이터 전처리 코드 작성, AI 모델 학습, 각 모듈 개발, 통합 테스트를 수행하여 \n동작하는 프로토타입을 완성합니다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B2:U2","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A3","row":3,"column":1,"column_letter":"A","raw_value":"학습목표","cached_value":"학습목표","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A3:A5","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B3","row":3,"column":2,"column_letter":"B","raw_value":"설계서를 바탕으로 데이터 전처리 파이프라인과 AI 모델을 Python으로 구현하고 학습시킬 수 있다.","cached_value":"설계서를 바탕으로 데이터 전처리 파이프라인과 AI 모델을 Python으로 구현하고 학습시킬 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B3:U3","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B4","row":4,"column":2,"column_letter":"B","raw_value":"여러 모듈(전처리, 모델, 경보)을 통합하여 End-to-End 시스템으로 연동할 수 있다.","cached_value":"여러 모듈(전처리, 모델, 경보)을 통합하여 End-to-End 시스템으로 연동할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B4:U4","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B5","row":5,"column":2,"column_letter":"B","raw_value":"개발 과정에서 발생하는 오류를 디버깅하고, 버전 관리 도구(Git)를 활용하여 협업할 수 있다.","cached_value":"개발 과정에서 발생하는 오류를 디버깅하고, 버전 관리 도구(Git)를 활용하여 협업할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B5:U5","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A6","row":6,"column":1,"column_letter":"A","raw_value":"선행 학습 권장 과목","cached_value":"선행 학습 권장 과목","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A6:A9","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B6","row":6,"column":2,"column_letter":"B","raw_value":"딥러닝: 모델 구현, 학습 루프 작성, 하이퍼파라미터 튜닝","cached_value":"딥러닝: 모델 구현, 학습 루프 작성, 하이퍼파라미터 튜닝","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B6:U6","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B7","row":7,"column":2,"column_letter":"B","raw_value":"Python 프로그래밍: 객체지향 프로그래밍, 예외 처리, 파일 I/O","cached_value":"Python 프로그래밍: 객체지향 프로그래밍, 예외 처리, 파일 I/O","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B7:U7","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B8","row":8,"column":2,"column_letter":"B","raw_value":"소프트웨어공학: 모듈화, 테스트 작성, 디버깅 기법","cached_value":"소프트웨어공학: 모듈화, 테스트 작성, 디버깅 기법","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B8:U8","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B9","row":9,"column":2,"column_letter":"B","raw_value":"데이터베이스 (선택): 로그 데이터 저장용 (SQLite, MongoDB)","cached_value":"데이터베이스 (선택): 로그 데이터 저장용 (SQLite, MongoDB)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B9:U9","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A10","row":10,"column":1,"column_letter":"A","raw_value":"활용 기술 스택","cached_value":"활용 기술 스택","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A10:A15","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B10","row":10,"column":2,"column_letter":"B","raw_value":"Python 3.8+","cached_value":"Python 3.8+","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B10:U10","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B11","row":11,"column":2,"column_letter":"B","raw_value":"PyTorch / TensorFlow","cached_value":"PyTorch / TensorFlow","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B11:U11","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B12","row":12,"column":2,"column_letter":"B","raw_value":"OpenCV","cached_value":"OpenCV","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B12:U12","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B13","row":13,"column":2,"column_letter":"B","raw_value":"Flask / FastAPI (API 서버 구축용)","cached_value":"Flask / FastAPI (API 서버 구축용)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B13:U13","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B14","row":14,"column":2,"column_letter":"B","raw_value":"Git / GitHub (버전 관리)","cached_value":"Git / GitHub (버전 관리)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B14:U14","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B15","row":15,"column":2,"column_letter":"B","raw_value":"Docker (선택, 배포 환경 구성용)","cached_value":"Docker (선택, 배포 환경 구성용)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B15:U15","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A16","row":16,"column":1,"column_letter":"A","raw_value":"PBL 문제 (학생 제시용)","cached_value":"PBL 문제 (학생 제시용)","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A16:U16","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A17","row":17,"column":1,"column_letter":"A","raw_value":"문제 상황","cached_value":"문제 상황","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B17","row":17,"column":2,"column_letter":"B","raw_value":"설계 단계에서 CNN + LSTM 하이브리드 모델을 선정하고, 전처리 파이프라인과 시스템 아키텍처를 완성했습니다. \n이제 실제로 코드를 작성하여 동작하는 시스템을 만들어야 합니다.","cached_value":"설계 단계에서 CNN + LSTM 하이브리드 모델을 선정하고, 전처리 파이프라인과 시스템 아키텍처를 완성했습니다. \n이제 실제로 코드를 작성하여 동작하는 시스템을 만들어야 합니다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B17:U17","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A18","row":18,"column":1,"column_letter":"A","raw_value":"미션","cached_value":"미션","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B18","row":18,"column":2,"column_letter":"B","raw_value":"학습된 AI 모델이 새로운 영상/센서 데이터를 입력받아 침입 여부를 판단하고, 침입 탐지 시 경보를 발생시키는 전체 시스템을 구현하세요.","cached_value":"학습된 AI 모델이 새로운 영상/센서 데이터를 입력받아 침입 여부를 판단하고, 침입 탐지 시 경보를 발생시키는 전체 시스템을 구현하세요.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B18:U18","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A19","row":19,"column":1,"column_letter":"A","raw_value":"5단계 실행 가이드","cached_value":"5단계 실행 가이드","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A19:A41","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B19","row":19,"column":2,"column_letter":"B","raw_value":"Step 1: 개발 환경 구축 및 Git 저장소 설정","cached_value":"Step 1: 개발 환경 구축 및 Git 저장소 설정","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B19:U19","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B20","row":20,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C20","row":20,"column":3,"column_letter":"C","raw_value":"로컬 환경 구성:\n- Python 가상환경 생성 (venv 또는 conda)\n- 필요한 라이브러리 설치 (requirements.txt 작성)\n- GPU 환경 설정 확인 (CUDA, cuDNN)","cached_value":"로컬 환경 구성:\n- Python 가상환경 생성 (venv 또는 conda)\n- 필요한 라이브러리 설치 (requirements.txt 작성)\n- GPU 환경 설정 확인 (CUDA, cuDNN)","formula":null,"data_type":"s","number_format":"General","style_id":118,"merged_range":"C20:U20","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B21","row":21,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C21","row":21,"column":3,"column_letter":"C","raw_value":"Git 저장소 설정:\n- GitHub에 프로젝트 저장소 생성\n- 폴더 구조 구성\n- .gitignore 설정 (데이터 파일, 가중치 파일 제외)","cached_value":"Git 저장소 설정:\n- GitHub에 프로젝트 저장소 생성\n- 폴더 구조 구성\n- .gitignore 설정 (데이터 파일, 가중치 파일 제외)","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C21:L21","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B22","row":22,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B22:C22","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D22","row":22,"column":4,"column_letter":"D","raw_value":"GitHub 저장소 URL, 초기 커밋 이력","cached_value":"GitHub 저장소 URL, 초기 커밋 이력","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D22:U22","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B23","row":23,"column":2,"column_letter":"B","raw_value":"Step 2: 데이터 전처리 모듈 구현","cached_value":"Step 2: 데이터 전처리 모듈 구현","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B23:U23","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B24","row":24,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C24","row":24,"column":3,"column_letter":"C","raw_value":"영상 전처리 함수 작성 (preprocessing.py):\n- 해상도 조정, 프레임 샘플링\n- 야간 영상 밝기 보정 (히스토그램 평활화, CLAHE)\n- 데이터 증강 (회전, 플립, 노이즈 추가)","cached_value":"영상 전처리 함수 작성 (preprocessing.py):\n- 해상도 조정, 프레임 샘플링\n- 야간 영상 밝기 보정 (히스토그램 평활화, CLAHE)\n- 데이터 증강 (회전, 플립, 노이즈 추가)","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C24:L24","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B25","row":25,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C25","row":25,"column":3,"column_letter":"C","raw_value":"센서 데이터 전처리:\n- 노이즈 필터링 (이동평균, Kalman Filter)\n- 정규화 (Min-Max Scaling)\n- 시간 윈도우 생성 (예: 10초 단위 시퀀스)","cached_value":"센서 데이터 전처리:\n- 노이즈 필터링 (이동평균, Kalman Filter)\n- 정규화 (Min-Max Scaling)\n- 시간 윈도우 생성 (예: 10초 단위 시퀀스)","formula":null,"data_type":"s","number_format":"General","style_id":120,"merged_range":"C25:L25","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B26","row":26,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C26","row":26,"column":3,"column_letter":"C","raw_value":"데이터 불균형 처리:\n- SMOTE 또는 가중치 샘플링 적용","cached_value":"데이터 불균형 처리:\n- SMOTE 또는 가중치 샘플링 적용","formula":null,"data_type":"s","number_format":"General","style_id":120,"merged_range":"C26:L26","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B27","row":27,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B27:C27","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D27","row":27,"column":4,"column_letter":"D","raw_value":"전처리 모듈 코드, 테스트 결과 (전후 비교 이미지)","cached_value":"전처리 모듈 코드, 테스트 결과 (전후 비교 이미지)","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D27:U27","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B28","row":28,"column":2,"column_letter":"B","raw_value":"Step 3: AI 모델 구현 및 학습","cached_value":"Step 3: AI 모델 구현 및 학습","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B28:U28","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B29","row":29,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C29","row":29,"column":3,"column_letter":"C","raw_value":"모델 정의 (model.py):\n- CNN 부분: 영상 특징 추출 (ResNet18 전이학습 또는 Custom CNN)\n- LSTM 부분: 시계열 패턴 분석\n- 최종 분류 레이어 (Sigmoid 또는 Softmax)","cached_value":"모델 정의 (model.py):\n- CNN 부분: 영상 특징 추출 (ResNet18 전이학습 또는 Custom CNN)\n- LSTM 부분: 시계열 패턴 분석\n- 최종 분류 레이어 (Sigmoid 또는 Softmax)","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C29:L29","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B30","row":30,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C30","row":30,"column":3,"column_letter":"C","raw_value":"학습 코드 작성 (train.py):\n- DataLoader 구성 (배치 크기: 16~32)\n- 손실 함수: Focal Loss 또는 Weighted Cross Entropy\n- 옵티마이저: Adam (lr=0.001)\n- 학습 루프: Epoch 30~50회\n- 검증 루프: Validation Loss 기록\n- 체크포인트 저장 (최고 성능 모델)","cached_value":"학습 코드 작성 (train.py):\n- DataLoader 구성 (배치 크기: 16~32)\n- 손실 함수: Focal Loss 또는 Weighted Cross Entropy\n- 옵티마이저: Adam (lr=0.001)\n- 학습 루프: Epoch 30~50회\n- 검증 루프: Validation Loss 기록\n- 체크포인트 저장 (최고 성능 모델)","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C30:L30","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B31","row":31,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C31","row":31,"column":3,"column_letter":"C","raw_value":"학습 과정 모니터링:\n- TensorBoard 또는 Weights & Biases 로그 기록\n- Loss, Accuracy 그래프 시각화","cached_value":"학습 과정 모니터링:\n- TensorBoard 또는 Weights & Biases 로그 기록\n- Loss, Accuracy 그래프 시각화","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C31:U31","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B32","row":32,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B32:C32","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D32","row":32,"column":4,"column_letter":"D","raw_value":"학습된 모델 가중치 파일, 학습 로그, 성능 그래프","cached_value":"학습된 모델 가중치 파일, 학습 로그, 성능 그래프","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D32:U32","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B33","row":33,"column":2,"column_letter":"B","raw_value":"Step 4: 추론 및 경보 모듈 구현","cached_value":"Step 4: 추론 및 경보 모듈 구현","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B33:U33","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B34","row":34,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C34","row":34,"column":3,"column_letter":"C","raw_value":"추론 모듈 (inference.py):\n- 학습된 모델 로드\n- 새로운 데이터 입력 받아 전처리\n- 모델 추론 (침입 확률 출력)\n- 임계값 기반 침입 판단 (예: 확률 > 0.7)","cached_value":"추론 모듈 (inference.py):\n- 학습된 모델 로드\n- 새로운 데이터 입력 받아 전처리\n- 모델 추론 (침입 확률 출력)\n- 임계값 기반 침입 판단 (예: 확률 > 0.7)","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C34:I34","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B35","row":35,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C35","row":35,"column":3,"column_letter":"C","raw_value":"경보 발생 모듈:\n- 침입 탐지 시 로그 저장 (시간, 위치, 신뢰도)\n- 알림 발송 (콘솔 출력 또는 간단한 이메일/SMS)\n- 침입 영상 클립 저장","cached_value":"경보 발생 모듈:\n- 침입 탐지 시 로그 저장 (시간, 위치, 신뢰도)\n- 알림 발송 (콘솔 출력 또는 간단한 이메일/SMS)\n- 침입 영상 클립 저장","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C35:U35","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B36","row":36,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B36:C36","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D36","row":36,"column":4,"column_letter":"D","raw_value":"추론 모듈 코드, 테스트 영상 결과","cached_value":"추론 모듈 코드, 테스트 영상 결과","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D36:U36","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B37","row":37,"column":2,"column_letter":"B","raw_value":"Step 5: 모듈 통합 및 End-to-End 테스트","cached_value":"Step 5: 모듈 통합 및 End-to-End 테스트","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B37:U37","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B38","row":38,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C38","row":38,"column":3,"column_letter":"C","raw_value":"메인 파이프라인 구성 (main.py):","cached_value":"메인 파이프라인 구성 (main.py):","formula":null,"data_type":"s","number_format":"General","style_id":121,"merged_range":"C38:J38","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":true}}
{"address":"B39","row":39,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C39","row":39,"column":3,"column_letter":"C","raw_value":"통합 테스트:\n- 테스트 케이스 5개 이상 준비 (정상 3개, 침입 2개)\n- 각 테스트 케이스별 결과 기록\n- 오류 발생 시 디버깅 및 수정","cached_value":"통합 테스트:\n- 테스트 케이스 5개 이상 준비 (정상 3개, 침입 2개)\n- 각 테스트 케이스별 결과 기록\n- 오류 발생 시 디버깅 및 수정","formula":null,"data_type":"s","number_format":"General","style_id":121,"merged_range":"C39:J39","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":true}}
{"address":"B40","row":40,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C40","row":40,"column":3,"column_letter":"C","raw_value":"성능 측정:\n- 추론 속도 측정 (ms 단위)\n- 정확도, Precision, Recall, F1-score 계산","cached_value":"성능 측정:\n- 추론 속도 측정 (ms 단위)\n- 정확도, Precision, Recall, F1-score 계산","formula":null,"data_type":"s","number_format":"General","style_id":121,"merged_range":"C40:J40","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":true}}
{"address":"B41","row":41,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B41:C41","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D41","row":41,"column":4,"column_letter":"D","raw_value":"통합 테스트 보고서, 성능 측정 결과","cached_value":"통합 테스트 보고서, 성능 측정 결과","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D41:U41","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A42","row":42,"column":1,"column_letter":"A","raw_value":"제출물","cached_value":"제출물","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A42:A63","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B42","row":42,"column":2,"column_letter":"B","raw_value":"1. GitHub 저장소 (필수)","cached_value":"1. GitHub 저장소 (필수)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B42:U42","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B43","row":43,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C43","row":43,"column":3,"column_letter":"C","raw_value":"전체 소스 코드 (주석 포함)","cached_value":"전체 소스 코드 (주석 포함)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C43:U43","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B44","row":44,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C44","row":44,"column":3,"column_letter":"C","raw_value":"README.md (프로젝트 설명, 설치 방법, 실행 방법)","cached_value":"README.md (프로젝트 설명, 설치 방법, 실행 방법)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C44:U44","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B45","row":45,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C45","row":45,"column":3,"column_letter":"C","raw_value":"requirements.txt","cached_value":"requirements.txt","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C45:U45","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B46","row":46,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C46","row":46,"column":3,"column_letter":"C","raw_value":"커밋 이력 (최소 20개 이상, 의미 있는 커밋 메시지)","cached_value":"커밋 이력 (최소 20개 이상, 의미 있는 커밋 메시지)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C46:U46","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B47","row":47,"column":2,"column_letter":"B","raw_value":"2. 학습 보고서 (3~5 페이지, PDF)","cached_value":"2. 학습 보고서 (3~5 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B47:U47","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B48","row":48,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C48","row":48,"column":3,"column_letter":"C","raw_value":"모델 구조 상세 설명","cached_value":"모델 구조 상세 설명","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C48:U48","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B49","row":49,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C49","row":49,"column":3,"column_letter":"C","raw_value":"하이퍼파라미터 설정 및 튜닝 과정","cached_value":"하이퍼파라미터 설정 및 튜닝 과정","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C49:U49","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B50","row":50,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C50","row":50,"column":3,"column_letter":"C","raw_value":"학습 Loss/Accuracy 그래프","cached_value":"학습 Loss/Accuracy 그래프","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C50:U50","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B51","row":51,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C51","row":51,"column":3,"column_letter":"C","raw_value":"최종 모델 성능 (Precision, Recall, F1-score)","cached_value":"최종 모델 성능 (Precision, Recall, F1-score)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C51:U51","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B52","row":52,"column":2,"column_letter":"B","raw_value":"3. 모듈 통합 테스트 보고서 (2~3 페이지, PDF)","cached_value":"3. 모듈 통합 테스트 보고서 (2~3 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B52:U52","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B53","row":53,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C53","row":53,"column":3,"column_letter":"C","raw_value":"테스트 케이스 목록 및 결과","cached_value":"테스트 케이스 목록 및 결과","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C53:U53","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B54","row":54,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C54","row":54,"column":3,"column_letter":"C","raw_value":"발견된 버그 및 해결 방법","cached_value":"발견된 버그 및 해결 방법","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C54:U54","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B55","row":55,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C55","row":55,"column":3,"column_letter":"C","raw_value":"추론 속도 측정 결과","cached_value":"추론 속도 측정 결과","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C55:U55","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B56","row":56,"column":2,"column_letter":"B","raw_value":"4. 시연 영상 (5분 내외, MP4)","cached_value":"4. 시연 영상 (5분 내외, MP4)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B56:U56","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B57","row":57,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C57","row":57,"column":3,"column_letter":"C","raw_value":"시스템 실행 과정 녹화","cached_value":"시스템 실행 과정 녹화","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C57:U57","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B58","row":58,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C58","row":58,"column":3,"column_letter":"C","raw_value":"정상 케이스와 침입 케이스 시연","cached_value":"정상 케이스와 침입 케이스 시연","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C58:U58","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B59","row":59,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C59","row":59,"column":3,"column_letter":"C","raw_value":"경보 발생 과정 보여주기","cached_value":"경보 발생 과정 보여주기","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C59:U59","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B60","row":60,"column":2,"column_letter":"B","raw_value":"5. 개인 기여도 보고서 (각자 1 페이지, PDF)","cached_value":"5. 개인 기여도 보고서 (각자 1 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B60:U60","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B61","row":61,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C61","row":61,"column":3,"column_letter":"C","raw_value":"자신이 담당한 코드 파일 및 함수 목록","cached_value":"자신이 담당한 코드 파일 및 함수 목록","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C61:U61","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B62","row":62,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C62","row":62,"column":3,"column_letter":"C","raw_value":"작업 시간 및 어려웠던 점","cached_value":"작업 시간 및 어려웠던 점","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C62:U62","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B63","row":63,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C63","row":63,"column":3,"column_letter":"C","raw_value":"팀 프로젝트에서 배운 점","cached_value":"팀 프로젝트에서 배운 점","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C63:U63","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A64","row":64,"column":1,"column_letter":"A","raw_value":"평가 기준","cached_value":"평가 기준","formula":null,"data_type":"s","number_format":"General","style_id":29,"merged_range":"A64:A72","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B64","row":64,"column":2,"column_letter":"B","raw_value":"완성도 평가 (70%)","cached_value":"완성도 평가 (70%)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B64:U64","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B65","row":65,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C65","row":65,"column":3,"column_letter":"C","raw_value":"Q1. 설계한 데이터 전처리 파이프라인을 실제 코드로 구현했는가?\nPASS 기준:\n- 입력 데이터 처리 코드 작성\n- 전처리 결과 확인 가능\n- 예외 상황 처리 포함","cached_value":"Q1. 설계한 데이터 전처리 파이프라인을 실제 코드로 구현했는가?\nPASS 기준:\n- 입력 데이터 처리 코드 작성\n- 전처리 결과 확인 가능\n- 예외 상황 처리 포함","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C65:S65","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T65","row":65,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U65","row":65,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B66","row":66,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C66","row":66,"column":3,"column_letter":"C","raw_value":"Q2. 선정한 AI 모델을 구현하고 학습을 완료했는가?\nPASS 기준:\n- 모델 학습 코드 작성\n- 학습 결과(로그·지표·출력) 제시\n- 재현 가능한 실행 절차 포함","cached_value":"Q2. 선정한 AI 모델을 구현하고 학습을 완료했는가?\nPASS 기준:\n- 모델 학습 코드 작성\n- 학습 결과(로그·지표·출력) 제시\n- 재현 가능한 실행 절차 포함","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C66:S66","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T66","row":66,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U66","row":66,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B67","row":67,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C67","row":67,"column":3,"column_letter":"C","raw_value":"Q3. 전처리·AI 추론·경보 기능을 연결하여 동작하도록 구현했는가?\nPASS 기준:\n- 최소 2개 이상의 기능 모듈 연동\n- 데이터 흐름 확인 가능\n- 통합 실행 성공","cached_value":"Q3. 전처리·AI 추론·경보 기능을 연결하여 동작하도록 구현했는가?\nPASS 기준:\n- 최소 2개 이상의 기능 모듈 연동\n- 데이터 흐름 확인 가능\n- 통합 실행 성공","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C67:S67","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T67","row":67,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U67","row":67,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B68","row":68,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C68","row":68,"column":3,"column_letter":"C","raw_value":"Q4. 구현 과정의 오류를 분석하고 수정하여 안정성을 확보했는가?\nPASS 기준:\n- 테스트 수행 기록 존재\n- 오류 사례 및 해결 과정 정리\n- 정상 동작 결과 확인","cached_value":"Q4. 구현 과정의 오류를 분석하고 수정하여 안정성을 확보했는가?\nPASS 기준:\n- 테스트 수행 기록 존재\n- 오류 사례 및 해결 과정 정리\n- 정상 동작 결과 확인","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C68:S68","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T68","row":68,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U68","row":68,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B69","row":69,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C69","row":69,"column":3,"column_letter":"C","raw_value":"Q5. 사용 가능한 수준의 End-to-End 프로토타입을 완성했는가?\nPASS 기준:\n- 전체 흐름 실행 가능\n- 입력 → 탐지 → 결과 출력 가능\n- 시연 또는 결과 증빙 포함","cached_value":"Q5. 사용 가능한 수준의 End-to-End 프로토타입을 완성했는가?\nPASS 기준:\n- 전체 흐름 실행 가능\n- 입력 → 탐지 → 결과 출력 가능\n- 시연 또는 결과 증빙 포함","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C69:S69","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T69","row":69,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U69","row":69,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B70","row":70,"column":2,"column_letter":"B","raw_value":"팀워크 평가 (30%)","cached_value":"팀워크 평가 (30%)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B70:U70","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B71","row":71,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":44,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C71","row":71,"column":3,"column_letter":"C","raw_value":"Q. 팀원이 버전 관리 도구를 활용하여 협업 개발을 수행했는가?\nPASS 기준:\n- 공동 저장소 사용\n- 작업 이력 확인 가능\n- 코드 병합 또는 변경 기록 존재","cached_value":"Q. 팀원이 버전 관리 도구를 활용하여 협업 개발을 수행했는가?\nPASS 기준:\n- 공동 저장소 사용\n- 작업 이력 확인 가능\n- 코드 병합 또는 변경 기록 존재","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C71:S71","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T71","row":71,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U71","row":71,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B72","row":72,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":44,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C72","row":72,"column":3,"column_letter":"C","raw_value":"Q. 모듈 통합 과정에서 발생한 문제를 팀 단위로 해결했는가?\nPASS 기준:\n- 통합 이슈 기록 존재\n- 역할 분담 및 해결 과정 확인 가능\n- 최종 통합 결과 제출","cached_value":"Q. 모듈 통합 과정에서 발생한 문제를 팀 단위로 해결했는가?\nPASS 기준:\n- 통합 이슈 기록 존재\n- 역할 분담 및 해결 과정 확인 가능\n- 최종 통합 결과 제출","formula":null,"data_type":"s","number_format":"General","style_id":28,"merged_range":"C72:S72","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T72","row":72,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U72","row":72,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A73","row":73,"column":1,"column_letter":"A","raw_value":"AI 지시문 가이드 (학생용)","cached_value":"AI 지시문 가이드 (학생용)","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A73:U73","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A74","row":74,"column":1,"column_letter":"A","raw_value":"생성형 AI 활용 가이드","cached_value":"생성형 AI 활용 가이드","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A74:A107","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B74","row":74,"column":2,"column_letter":"B","raw_value":"허용되는 AI 활용 (권장)","cached_value":"허용되는 AI 활용 (권장)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B74:U74","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B75","row":75,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C75","row":75,"column":3,"column_letter":"C","raw_value":"코드 오류 디버깅","cached_value":"코드 오류 디버깅","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C75:U75","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C76","row":76,"column":3,"column_letter":"C","raw_value":"\"다음 PyTorch 코드에서 'RuntimeError: Expected 4D tensor' \n오류가 발생합니다. 원인과 해결 방법을 알려주세요.\n\n[오류 발생 코드 붙여넣기]\n\"","cached_value":"\"다음 PyTorch 코드에서 'RuntimeError: Expected 4D tensor' \n오류가 발생합니다. 원인과 해결 방법을 알려주세요.\n\n[오류 발생 코드 붙여넣기]\n\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C76:U76","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B77","row":77,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C77","row":77,"column":3,"column_letter":"C","raw_value":"코드 리팩토링 조언","cached_value":"코드 리팩토링 조언","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C77:U77","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C78","row":78,"column":3,"column_letter":"C","raw_value":"\"다음 전처리 함수가 너무 느립니다. \n성능을 개선할 수 있는 방법을 제안해주세요.\n\n[현재 코드]\ndef slow_preprocess(images):\nresult = []\nfor img in images:\n# 픽셀 단위 반복문\nreturn result\n\"","cached_value":"\"다음 전처리 함수가 너무 느립니다. \n성능을 개선할 수 있는 방법을 제안해주세요.\n\n[현재 코드]\ndef slow_preprocess(images):\nresult = []\nfor img in images:\n# 픽셀 단위 반복문\nreturn result\n\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C78:U78","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B79","row":79,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C79","row":79,"column":3,"column_letter":"C","raw_value":"라이브러리 사용법 질문","cached_value":"라이브러리 사용법 질문","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C79:U79","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C80","row":80,"column":3,"column_letter":"C","raw_value":"\"OpenCV에서 히스토그램 평활화(Histogram Equalization)를 \n적용하는 코드를 작성해주세요. \n컬러 이미지에 대해서도 적용 가능해야 합니다.\"","cached_value":"\"OpenCV에서 히스토그램 평활화(Histogram Equalization)를 \n적용하는 코드를 작성해주세요. \n컬러 이미지에 대해서도 적용 가능해야 합니다.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C80:U80","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B81","row":81,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C81","row":81,"column":3,"column_letter":"C","raw_value":"모델 구조 검증","cached_value":"모델 구조 검증","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C81:U81","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C82","row":82,"column":3,"column_letter":"C","raw_value":"\"다음 CNN + LSTM 하이브리드 모델 구조에 \n논리적 오류가 있는지 확인해주세요.\n\n[모델 코드]\n\"","cached_value":"\"다음 CNN + LSTM 하이브리드 모델 구조에 \n논리적 오류가 있는지 확인해주세요.\n\n[모델 코드]\n\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C82:U82","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B83","row":83,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C83","row":83,"column":3,"column_letter":"C","raw_value":"학습 하이퍼파라미터 조언","cached_value":"학습 하이퍼파라미터 조언","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C83:U83","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C84","row":84,"column":3,"column_letter":"C","raw_value":"\"이미지 분류 모델에서 Learning Rate를 0.001로 시작했는데 \nLoss가 진동합니다. 어떻게 조정해야 할까요?\"","cached_value":"\"이미지 분류 모델에서 Learning Rate를 0.001로 시작했는데 \nLoss가 진동합니다. 어떻게 조정해야 할까요?\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C84:U84","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B85","row":85,"column":2,"column_letter":"B","raw_value":"금지되는 AI 활용 (부정행위)","cached_value":"금지되는 AI 활용 (부정행위)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B85:U85","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B86","row":86,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C86","row":86,"column":3,"column_letter":"C","raw_value":"코드 템플릿 요청 (기본 구조만)","cached_value":"코드 템플릿 요청 (기본 구조만)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C86:U86","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C87","row":87,"column":3,"column_letter":"C","raw_value":"✅ 허용: \"PyTorch DataLoader를 사용한 \n학습 루프의 기본 구조를 알려주세요.\"\n\n❌ 금지: \"침입 탐지 프로젝트의 전체 학습 코드를 작성해줘\"\n\n=> AI가 제공한 템플릿을 자신의 데이터셋과 모델에 맞게 반드시 수정","cached_value":"✅ 허용: \"PyTorch DataLoader를 사용한 \n학습 루프의 기본 구조를 알려주세요.\"\n\n❌ 금지: \"침입 탐지 프로젝트의 전체 학습 코드를 작성해줘\"\n\n=> AI가 제공한 템플릿을 자신의 데이터셋과 모델에 맞게 반드시 수정","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C87:U87","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B88","row":88,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C88","row":88,"column":3,"column_letter":"C","raw_value":"함수 작성 지원 (스니펫 수준)","cached_value":"함수 작성 지원 (스니펫 수준)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C88:U88","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C89","row":89,"column":3,"column_letter":"C","raw_value":"✅ 허용: \"영상에서 5프레임마다 샘플링하는 \nOpenCV 코드를 작성해주세요.\"\n\n→ 받은 코드를 자신의 전처리 파이프라인에 통합하고, \n주석 및 변수명을 자신의 스타일로 변경","cached_value":"✅ 허용: \"영상에서 5프레임마다 샘플링하는 \nOpenCV 코드를 작성해주세요.\"\n\n→ 받은 코드를 자신의 전처리 파이프라인에 통합하고, \n주석 및 변수명을 자신의 스타일로 변경","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C89:U89","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B90","row":90,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C90","row":90,"column":3,"column_letter":"C","raw_value":"전체 모듈 코드 요청","cached_value":"전체 모듈 코드 요청","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C90:U90","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C91","row":91,"column":3,"column_letter":"C","raw_value":"\"침입 탐지 시스템의 model.py 전체를 작성해줘\" ❌","cached_value":"\"침입 탐지 시스템의 model.py 전체를 작성해줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C91:U91","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B92","row":92,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C92","row":92,"column":3,"column_letter":"C","raw_value":"학습 결과 조작","cached_value":"학습 결과 조작","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C92:U92","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C93","row":93,"column":3,"column_letter":"C","raw_value":"\"학습 Loss가 잘 감소하는 것처럼 보이는 그래프 데이터를 만들어줘\" ❌","cached_value":"\"학습 Loss가 잘 감소하는 것처럼 보이는 그래프 데이터를 만들어줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C93:U93","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B94","row":94,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C94","row":94,"column":3,"column_letter":"C","raw_value":"GitHub Commit 대신 작성","cached_value":"GitHub Commit 대신 작성","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C94:U94","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C95","row":95,"column":3,"column_letter":"C","raw_value":"\"커밋 메시지를 그럴듯하게 20개 만들어줘\" ❌","cached_value":"\"커밋 메시지를 그럴듯하게 20개 만들어줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C95:U95","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B96","row":96,"column":2,"column_letter":"B","raw_value":6,"cached_value":6,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C96","row":96,"column":3,"column_letter":"C","raw_value":"팀원 코드 이해 없이 병합","cached_value":"팀원 코드 이해 없이 병합","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C96:U96","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C97","row":97,"column":3,"column_letter":"C","raw_value":"다른 팀원이 AI로 생성한 코드를 이해하지 못한 채 Pull Request 승인 ❌","cached_value":"다른 팀원이 AI로 생성한 코드를 이해하지 못한 채 Pull Request 승인 ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C97:U97","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B99","row":99,"column":2,"column_letter":"B","raw_value":"AI 활용 시 반드시 지켜야 할 원칙","cached_value":"AI 활용 시 반드시 지켜야 할 원칙","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B99:U99","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B100","row":100,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C100","row":100,"column":3,"column_letter":"C","raw_value":"AI 사용 흔적 남기기","cached_value":"AI 사용 흔적 남기기","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C100:U100","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C101","row":101,"column":3,"column_letter":"C","raw_value":"코드 주석에 AI 참고 표시:","cached_value":"코드 주석에 AI 참고 표시:","formula":null,"data_type":"s","number_format":"General","style_id":122,"merged_range":"C101:U101","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":true}}
{"address":"B102","row":102,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C102","row":102,"column":3,"column_letter":"C","raw_value":"코드 이해 후 사용","cached_value":"코드 이해 후 사용","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C102:U102","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C103","row":103,"column":3,"column_letter":"C","raw_value":"- AI가 제공한 코드를 실행하기 전에 각 줄의 의미 파악\n- 팀원에게 설명할 수 있어야 함","cached_value":"- AI가 제공한 코드를 실행하기 전에 각 줄의 의미 파악\n- 팀원에게 설명할 수 있어야 함","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C103:U103","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B104","row":104,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C104","row":104,"column":3,"column_letter":"C","raw_value":"오류는 스스로 해결 시도 후 AI 활용","cached_value":"오류는 스스로 해결 시도 후 AI 활용","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C104:U104","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C105","row":105,"column":3,"column_letter":"C","raw_value":"- 최소 30분 이상 자체 디버깅 시도\n- 에러 메시지 검색 및 공식 문서 확인\n- 그래도 안 되면 구체적인 오류 상황을 AI에게 질문","cached_value":"- 최소 30분 이상 자체 디버깅 시도\n- 에러 메시지 검색 및 공식 문서 확인\n- 그래도 안 되면 구체적인 오류 상황을 AI에게 질문","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C105:U105","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B106","row":106,"column":2,"column_letter":"B","raw_value":"4","cached_value":"4","formula":null,"data_type":"s","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C106","row":106,"column":3,"column_letter":"C","raw_value":"학습 결과는 절대 조작 금지","cached_value":"학습 결과는 절대 조작 금지","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C106:U106","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C107","row":107,"column":3,"column_letter":"C","raw_value":"- 실제 학습 로그, Loss 그래프만 제출\n- 성능이 목표에 미달해도 정직하게 보고","cached_value":"- 실제 학습 로그, Loss 그래프만 제출\n- 성능이 목표에 미달해도 정직하게 보고","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C107:U107","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
```

### Merged Ranges

| range | anchor | anchor_raw_value |
| --- | --- | --- |
| A1:U1 | A1 | 3단계: 제작 및 연동 (7~9주차) |
| B2:U2 | B2 | 2단계에서 설계한 시스템을 실제로 구현합니다. 데이터 전처리 코드 작성, AI 모델 학습, 각 모듈 개발, 통합 테스트를 수행하여 <br>동작하는 프로토타입을 완성합니다. |
| A3:A5 | A3 | 학습목표 |
| B3:U3 | B3 | 설계서를 바탕으로 데이터 전처리 파이프라인과 AI 모델을 Python으로 구현하고 학습시킬 수 있다. |
| B4:U4 | B4 | 여러 모듈(전처리, 모델, 경보)을 통합하여 End-to-End 시스템으로 연동할 수 있다. |
| B5:U5 | B5 | 개발 과정에서 발생하는 오류를 디버깅하고, 버전 관리 도구(Git)를 활용하여 협업할 수 있다. |
| A6:A9 | A6 | 선행 학습 권장 과목 |
| B6:U6 | B6 | 딥러닝: 모델 구현, 학습 루프 작성, 하이퍼파라미터 튜닝 |
| B7:U7 | B7 | Python 프로그래밍: 객체지향 프로그래밍, 예외 처리, 파일 I/O |
| B8:U8 | B8 | 소프트웨어공학: 모듈화, 테스트 작성, 디버깅 기법 |
| B9:U9 | B9 | 데이터베이스 (선택): 로그 데이터 저장용 (SQLite, MongoDB) |
| A10:A15 | A10 | 활용 기술 스택 |
| B10:U10 | B10 | Python 3.8+ |
| B11:U11 | B11 | PyTorch / TensorFlow |
| B12:U12 | B12 | OpenCV |
| B13:U13 | B13 | Flask / FastAPI (API 서버 구축용) |
| B14:U14 | B14 | Git / GitHub (버전 관리) |
| B15:U15 | B15 | Docker (선택, 배포 환경 구성용) |
| A16:U16 | A16 | PBL 문제 (학생 제시용) |
| B17:U17 | B17 | 설계 단계에서 CNN + LSTM 하이브리드 모델을 선정하고, 전처리 파이프라인과 시스템 아키텍처를 완성했습니다. <br>이제 실제로 코드를 작성하여 동작하는 시스템을 만들어야 합니다. |
| B18:U18 | B18 | 학습된 AI 모델이 새로운 영상/센서 데이터를 입력받아 침입 여부를 판단하고, 침입 탐지 시 경보를 발생시키는 전체 시스템을 구현하세요. |
| A19:A41 | A19 | 5단계 실행 가이드 |
| B19:U19 | B19 | Step 1: 개발 환경 구축 및 Git 저장소 설정 |
| C20:U20 | C20 | 로컬 환경 구성:<br>- Python 가상환경 생성 (venv 또는 conda)<br>- 필요한 라이브러리 설치 (requirements.txt 작성)<br>- GPU 환경 설정 확인 (CUDA, cuDNN) |
| C21:L21 | C21 | Git 저장소 설정:<br>- GitHub에 프로젝트 저장소 생성<br>- 폴더 구조 구성<br>- .gitignore 설정 (데이터 파일, 가중치 파일 제외) |
| M21:U21 | M21 |  |
| B22:C22 | B22 | 산출물 |
| D22:U22 | D22 | GitHub 저장소 URL, 초기 커밋 이력 |
| B23:U23 | B23 | Step 2: 데이터 전처리 모듈 구현 |
| C24:L24 | C24 | 영상 전처리 함수 작성 (preprocessing.py):<br>- 해상도 조정, 프레임 샘플링<br>- 야간 영상 밝기 보정 (히스토그램 평활화, CLAHE)<br>- 데이터 증강 (회전, 플립, 노이즈 추가) |
| M24:U26 | M24 |  |
| C25:L25 | C25 | 센서 데이터 전처리:<br>- 노이즈 필터링 (이동평균, Kalman Filter)<br>- 정규화 (Min-Max Scaling)<br>- 시간 윈도우 생성 (예: 10초 단위 시퀀스) |
| C26:L26 | C26 | 데이터 불균형 처리:<br>- SMOTE 또는 가중치 샘플링 적용 |
| B27:C27 | B27 | 산출물 |
| D27:U27 | D27 | 전처리 모듈 코드, 테스트 결과 (전후 비교 이미지) |
| B28:U28 | B28 | Step 3: AI 모델 구현 및 학습 |
| C29:L29 | C29 | 모델 정의 (model.py):<br>- CNN 부분: 영상 특징 추출 (ResNet18 전이학습 또는 Custom CNN)<br>- LSTM 부분: 시계열 패턴 분석<br>- 최종 분류 레이어 (Sigmoid 또는 Softmax) |
| M29:U29 | M29 |  |
| C30:L30 | C30 | 학습 코드 작성 (train.py):<br>- DataLoader 구성 (배치 크기: 16~32)<br>- 손실 함수: Focal Loss 또는 Weighted Cross Entropy<br>- 옵티마이저: Adam (lr=0.001)<br>- 학습 루프: Epoch 30~50회<br>- 검증 루프: Validation Loss 기록<br>- 체크포인트 저장 (최고 성능 모델) |
| M30:U30 | M30 |  |
| C31:U31 | C31 | 학습 과정 모니터링:<br>- TensorBoard 또는 Weights & Biases 로그 기록<br>- Loss, Accuracy 그래프 시각화 |
| B32:C32 | B32 | 산출물 |
| D32:U32 | D32 | 학습된 모델 가중치 파일, 학습 로그, 성능 그래프 |
| B33:U33 | B33 | Step 4: 추론 및 경보 모듈 구현 |
| C34:I34 | C34 | 추론 모듈 (inference.py):<br>- 학습된 모델 로드<br>- 새로운 데이터 입력 받아 전처리<br>- 모델 추론 (침입 확률 출력)<br>- 임계값 기반 침입 판단 (예: 확률 > 0.7) |
| J34:U34 | J34 |  |
| C35:U35 | C35 | 경보 발생 모듈:<br>- 침입 탐지 시 로그 저장 (시간, 위치, 신뢰도)<br>- 알림 발송 (콘솔 출력 또는 간단한 이메일/SMS)<br>- 침입 영상 클립 저장 |
| B36:C36 | B36 | 산출물 |
| D36:U36 | D36 | 추론 모듈 코드, 테스트 영상 결과 |
| B37:U37 | B37 | Step 5: 모듈 통합 및 End-to-End 테스트 |
| C38:J38 | C38 | 메인 파이프라인 구성 (main.py): |
| K38:U40 | K38 |  |
| C39:J39 | C39 | 통합 테스트:<br>- 테스트 케이스 5개 이상 준비 (정상 3개, 침입 2개)<br>- 각 테스트 케이스별 결과 기록<br>- 오류 발생 시 디버깅 및 수정 |
| C40:J40 | C40 | 성능 측정:<br>- 추론 속도 측정 (ms 단위)<br>- 정확도, Precision, Recall, F1-score 계산 |
| B41:C41 | B41 | 산출물 |
| D41:U41 | D41 | 통합 테스트 보고서, 성능 측정 결과 |
| A42:A63 | A42 | 제출물 |
| B42:U42 | B42 | 1. GitHub 저장소 (필수) |
| C43:U43 | C43 | 전체 소스 코드 (주석 포함) |
| C44:U44 | C44 | README.md (프로젝트 설명, 설치 방법, 실행 방법) |
| C45:U45 | C45 | requirements.txt |
| C46:U46 | C46 | 커밋 이력 (최소 20개 이상, 의미 있는 커밋 메시지) |
| B47:U47 | B47 | 2. 학습 보고서 (3~5 페이지, PDF) |
| C48:U48 | C48 | 모델 구조 상세 설명 |
| C49:U49 | C49 | 하이퍼파라미터 설정 및 튜닝 과정 |
| C50:U50 | C50 | 학습 Loss/Accuracy 그래프 |
| C51:U51 | C51 | 최종 모델 성능 (Precision, Recall, F1-score) |
| B52:U52 | B52 | 3. 모듈 통합 테스트 보고서 (2~3 페이지, PDF) |
| C53:U53 | C53 | 테스트 케이스 목록 및 결과 |
| C54:U54 | C54 | 발견된 버그 및 해결 방법 |
| C55:U55 | C55 | 추론 속도 측정 결과 |
| B56:U56 | B56 | 4. 시연 영상 (5분 내외, MP4) |
| C57:U57 | C57 | 시스템 실행 과정 녹화 |
| C58:U58 | C58 | 정상 케이스와 침입 케이스 시연 |
| C59:U59 | C59 | 경보 발생 과정 보여주기 |
| B60:U60 | B60 | 5. 개인 기여도 보고서 (각자 1 페이지, PDF) |
| C61:U61 | C61 | 자신이 담당한 코드 파일 및 함수 목록 |
| C62:U62 | C62 | 작업 시간 및 어려웠던 점 |
| C63:U63 | C63 | 팀 프로젝트에서 배운 점 |
| A64:A72 | A64 | 평가 기준 |
| B64:U64 | B64 | 완성도 평가 (70%) |
| C65:S65 | C65 | Q1. 설계한 데이터 전처리 파이프라인을 실제 코드로 구현했는가?<br>PASS 기준:<br>- 입력 데이터 처리 코드 작성<br>- 전처리 결과 확인 가능<br>- 예외 상황 처리 포함 |
| C66:S66 | C66 | Q2. 선정한 AI 모델을 구현하고 학습을 완료했는가?<br>PASS 기준:<br>- 모델 학습 코드 작성<br>- 학습 결과(로그·지표·출력) 제시<br>- 재현 가능한 실행 절차 포함 |
| C67:S67 | C67 | Q3. 전처리·AI 추론·경보 기능을 연결하여 동작하도록 구현했는가?<br>PASS 기준:<br>- 최소 2개 이상의 기능 모듈 연동<br>- 데이터 흐름 확인 가능<br>- 통합 실행 성공 |
| C68:S68 | C68 | Q4. 구현 과정의 오류를 분석하고 수정하여 안정성을 확보했는가?<br>PASS 기준:<br>- 테스트 수행 기록 존재<br>- 오류 사례 및 해결 과정 정리<br>- 정상 동작 결과 확인 |
| C69:S69 | C69 | Q5. 사용 가능한 수준의 End-to-End 프로토타입을 완성했는가?<br>PASS 기준:<br>- 전체 흐름 실행 가능<br>- 입력 → 탐지 → 결과 출력 가능<br>- 시연 또는 결과 증빙 포함 |
| B70:U70 | B70 | 팀워크 평가 (30%) |
| C71:S71 | C71 | Q. 팀원이 버전 관리 도구를 활용하여 협업 개발을 수행했는가?<br>PASS 기준:<br>- 공동 저장소 사용<br>- 작업 이력 확인 가능<br>- 코드 병합 또는 변경 기록 존재 |
| C72:S72 | C72 | Q. 모듈 통합 과정에서 발생한 문제를 팀 단위로 해결했는가?<br>PASS 기준:<br>- 통합 이슈 기록 존재<br>- 역할 분담 및 해결 과정 확인 가능<br>- 최종 통합 결과 제출 |
| A73:U73 | A73 | AI 지시문 가이드 (학생용) |
| A74:A107 | A74 | 생성형 AI 활용 가이드 |
| B74:U74 | B74 | 허용되는 AI 활용 (권장) |
| C75:U75 | C75 | 코드 오류 디버깅 |
| C76:U76 | C76 | "다음 PyTorch 코드에서 'RuntimeError: Expected 4D tensor' <br>오류가 발생합니다. 원인과 해결 방법을 알려주세요.<br><br>[오류 발생 코드 붙여넣기]<br>" |
| C77:U77 | C77 | 코드 리팩토링 조언 |
| C78:U78 | C78 | "다음 전처리 함수가 너무 느립니다. <br>성능을 개선할 수 있는 방법을 제안해주세요.<br><br>[현재 코드]<br>def slow_preprocess(images):<br>result = []<br>for img in images:<br># 픽셀 단위 반복문<br>return result<br>" |
| C79:U79 | C79 | 라이브러리 사용법 질문 |
| C80:U80 | C80 | "OpenCV에서 히스토그램 평활화(Histogram Equalization)를 <br>적용하는 코드를 작성해주세요. <br>컬러 이미지에 대해서도 적용 가능해야 합니다." |
| C81:U81 | C81 | 모델 구조 검증 |
| C82:U82 | C82 | "다음 CNN + LSTM 하이브리드 모델 구조에 <br>논리적 오류가 있는지 확인해주세요.<br><br>[모델 코드]<br>" |
| C83:U83 | C83 | 학습 하이퍼파라미터 조언 |
| C84:U84 | C84 | "이미지 분류 모델에서 Learning Rate를 0.001로 시작했는데 <br>Loss가 진동합니다. 어떻게 조정해야 할까요?" |
| B85:U85 | B85 | 금지되는 AI 활용 (부정행위) |
| C86:U86 | C86 | 코드 템플릿 요청 (기본 구조만) |
| C87:U87 | C87 | ✅ 허용: "PyTorch DataLoader를 사용한 <br>학습 루프의 기본 구조를 알려주세요."<br><br>❌ 금지: "침입 탐지 프로젝트의 전체 학습 코드를 작성해줘"<br><br>=> AI가 제공한 템플릿을 자신의 데이터셋과 모델에 맞게 반드시 수정 |
| C88:U88 | C88 | 함수 작성 지원 (스니펫 수준) |
| C89:U89 | C89 | ✅ 허용: "영상에서 5프레임마다 샘플링하는 <br>OpenCV 코드를 작성해주세요."<br><br>→ 받은 코드를 자신의 전처리 파이프라인에 통합하고, <br>주석 및 변수명을 자신의 스타일로 변경 |
| C90:U90 | C90 | 전체 모듈 코드 요청 |
| C91:U91 | C91 | "침입 탐지 시스템의 model.py 전체를 작성해줘" ❌ |
| C92:U92 | C92 | 학습 결과 조작 |
| C93:U93 | C93 | "학습 Loss가 잘 감소하는 것처럼 보이는 그래프 데이터를 만들어줘" ❌ |
| C94:U94 | C94 | GitHub Commit 대신 작성 |
| C95:U95 | C95 | "커밋 메시지를 그럴듯하게 20개 만들어줘" ❌ |
| C96:U96 | C96 | 팀원 코드 이해 없이 병합 |
| C97:U97 | C97 | 다른 팀원이 AI로 생성한 코드를 이해하지 못한 채 Pull Request 승인 ❌ |
| C98:U98 | C98 |  |
| B99:U99 | B99 | AI 활용 시 반드시 지켜야 할 원칙 |
| C100:U100 | C100 | AI 사용 흔적 남기기 |
| C101:U101 | C101 | 코드 주석에 AI 참고 표시: |
| C102:U102 | C102 | 코드 이해 후 사용 |
| C103:U103 | C103 | - AI가 제공한 코드를 실행하기 전에 각 줄의 의미 파악<br>- 팀원에게 설명할 수 있어야 함 |
| C104:U104 | C104 | 오류는 스스로 해결 시도 후 AI 활용 |
| C105:U105 | C105 | - 최소 30분 이상 자체 디버깅 시도<br>- 에러 메시지 검색 및 공식 문서 확인<br>- 그래도 안 되면 구체적인 오류 상황을 AI에게 질문 |
| C106:U106 | C106 | 학습 결과는 절대 조작 금지 |
| C107:U107 | C107 | - 실제 학습 로그, Loss 그래프만 제출<br>- 성능이 목표에 미달해도 정직하게 보고 |

### Layout Metadata

```json
{
  "freeze_panes": null,
  "sheet_view_show_grid_lines": null,
  "column_dimensions": [],
  "row_dimensions": [
    {
      "row": 1,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 2,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 3,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 4,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 5,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 6,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 7,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 8,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 9,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 10,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 11,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 12,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 13,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 14,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 15,
      "height": 28.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 16,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 17,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 18,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 19,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 20,
      "height": 78.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 21,
      "height": 97.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 22,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 23,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 24,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 25,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 26,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 27,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 28,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 29,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 30,
      "height": 108.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 31,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 32,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 33,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 34,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 35,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 36,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 37,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 38,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 39,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 40,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 41,
      "height": 69.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 42,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 43,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 44,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 45,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 46,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 47,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 48,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 49,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 50,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 51,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 52,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 53,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 54,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 55,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 56,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 57,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 58,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 59,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 60,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 61,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 62,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 63,
      "height": 30.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 64,
      "height": 66.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 65,
      "height": 85.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 66,
      "height": 85.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 67,
      "height": 87.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 68,
      "height": 88.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 69,
      "height": 90.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 70,
      "height": 66.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 71,
      "height": 94.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 72,
      "height": 94.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 73,
      "height": 31.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 74,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 75,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 76,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 77,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 78,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 79,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 80,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 81,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 82,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 83,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 84,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 85,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 86,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 87,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 88,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 89,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 90,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 91,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 92,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 93,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 94,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 95,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 96,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 97,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 98,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 99,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 100,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 101,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 102,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 103,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 104,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 105,
      "height": 49.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 106,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 107,
      "height": 39.0,
      "hidden": false,
      "outline_level": 0
    }
  ]
}
```

### Data Validations

```json
[]
```

### Tables

```json
[]
```

### Worksheet Relationships

```json
[]
```

### OOXML Assets

_None_

## Sheet: 미션지_4

```json
{
  "title": "미션지_4",
  "state": "visible",
  "used_range": "A1:U106",
  "min_row": 1,
  "min_column": 1,
  "max_row": 106,
  "max_column": 21,
  "nonempty_record_count": 189,
  "merged_range_count": 119,
  "data_validation_count": 0,
  "table_count": 0,
  "relationship_count": 0,
  "asset_count": 0
}
```

### Grid View

| row | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 4단계: 완성(배포) 및 분석 (10~12주차) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 2 | 차시 개요 | 구현한 시스템을 실전 환경에 가깝게 배포하고, 다양한 테스트 시나리오로 성능을 평가합니다. <br>프로젝트 전체를 회고하며 개선점을 도출하고, 최종 결과를 발표합니다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | 학습목표 | 개발한 AI 시스템을 Flask/FastAPI 등을 활용하여 REST API 형태로 배포하고, 외부에서 호출 가능하도록 구성할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 |  | 다양한 테스트 시나리오(정상, 침입, 엣지 케이스)를 설계하여 시스템의 강건성을 검증하고, 성능 지표를 정량적으로 분석할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 5 |  | 프로젝트 전체를 체계적으로 문서화하고, 결과를 효과적으로 발표하여 청중(교수, 동료)에게 설득력 있게 전달할 수 있다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 6 | 선행 학습 권장 과목 | 웹 프로그래밍 / 네트워크: REST API, HTTP 프로토콜 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 7 |  | 데이터베이스: 로그 데이터 영구 저장 (SQLite, PostgreSQL) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 8 |  | 소프트웨어공학: 단위 테스트, 통합 테스트, 문서화 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 9 |  | 클라우드 컴퓨팅 (선택): AWS, Google Cloud, Azure 배포 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 10 | 활용 기술 스택 | Flask / FastAPI (API 서버) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 11 |  | Docker (컨테이너화) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 12 |  | Streamlit (대시보드, 선택) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 13 |  | Postman (API 테스트) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 |  | pytest (단위 테스트) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | PBL 문제 (학생 제시용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 | 문제 상황 | 3단계에서 학습된 모델과 통합 시스템을 완성했습니다. 이제 실제 현장에서 사용할 수 있도록 배포하고, <br>다양한 상황에서 시스템이 안정적으로 작동하는지 검증해야 합니다. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 | 미션 | 1. 침입 탐지 시스템을 REST API로 배포하여 외부에서 영상을 업로드하면 침입 여부를 반환하도록 구성하세요.<br>2. 최소 10개 이상의 테스트 케이스로 시스템을 검증하고, 성능 분석 보고서를 작성하세요.<br>3. 프로젝트 전체를 발표할 수 있도록 최종 보고서와 발표 자료를 준비하세요. |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 | 5단계 실행 가이드 | Step 1: REST API 서버 구축 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | 1 | Flask 또는 FastAPI로 API 엔드포인트 작성:<br><br> |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  | 2 | API 명세서 작성:<br>- 엔드포인트 목록 (URL, Method, 파라미터)<br>- 요청/응답 예시<br>- 에러 코드 정의 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 21 |  | 산출물 |  | API 서버 코드, API 명세서 (Swagger 또는 문서) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | Step 2: Docker 컨테이너화 (선택, 가산점) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | 1 | Dockerfile 작성: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 24 |  | 2 | Docker Compose 구성 (API 서버 + DB):<br>- 침입 로그를 DB에 저장 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | 산출물 |  | Dockerfile, docker-compose.yml, 실행 가이드 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | Step 3: 종합 테스트 시나리오 설계 및 실행<br>다양한 상황에서 시스템 검증 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | 1 | 정상 케이스 (5개):<br><br>- 주간 빈 경계 지역 영상<br>- 야간 정상 순찰 영상<br>- 날씨 변화 (비, 안개) 영상 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 28 |  | 2 | 침입 케이스 (5개):<br><br>- 주간 사람 침입<br>- 야간 침입<br>- 차량 침입<br>- 여러 명 동시 침입 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 29 |  | 3 | 엣지 케이스 (5개):<br><br>- 동물 출현 (오탐 방지)<br>- 나뭇가지 흔들림 (바람)<br>- 카메라 흔들림<br>- 매우 어두운 영상<br>- 낮은 해상도 영상 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 30 |  | 테스트 수행:<br><br>- 각 케이스별 결과 기록 (TP, TN, FP, FN)<br>- Confusion Matrix 작성<br>- Precision, Recall, F1-score 계산<br>- 추론 속도 측정 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 31 |  | 산출물 |  | 테스트 케이스 목록 및 결과표, Confusion Matrix |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 32 |  | Step 4: 성능 분석 및 개선 제안 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 33 |  | 1 | 정량적 분석:<br><br>- 목표 대비 실제 성능 비교<br>a. 탐지율 목표: 90% → 실제: ?%<br>b. 오탐률 목표: 15% 이하 → 실제: ?%<br>- 실패 케이스 분석: 왜 실패했는가? |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 34 |  | 2 | 정성적 분석:<br><br>- 시스템의 강점과 약점<br>- 실제 현장 적용 시 예상되는 문제점<br> |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 35 |  | 3 | 개선 제안:<br><br>- 모델 개선 방향 (더 많은 데이터, 다른 아키텍처)<br>- 시스템 개선 (처리 속도 향상, UI 개선)<br>- 추가 기능 제안 (침입자 추적, 알림 시스템 고도화) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 36 |  | 산출물 |  | 성능 분석 보고서 (3~5 페이지) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 37 |  | Step 5: 최종 문서화 및 발표 준비 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 38 |  | 1 | 최종 보고서 작성 (10~15 페이지):<br><br>- 1장: 프로젝트 개요 및 목표<br>- 2장: 문제 정의 및 데이터 분석<br>- 3장: 시스템 설계<br>- 4장: 구현 상세<br>- 5장: 테스트 및 성능 평가<br>- 6장: 결론 및 향후 과제<br>- 부록: 코드 스니펫, 참고 문헌 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 39 |  | 2 | 발표 자료 작성 (PPT, 15~20 슬라이드):<br><br>- 프로젝트 소개 (2분)<br>- 기술적 접근 (3분)<br>- 시연 (2분)<br>- 결과 분석 (2분)<br>- Q&A (3분) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 40 |  | 3 | 시연 준비:<br><br>- 실시간 시연 또는 녹화 영상<br>- 백업 계획 (네트워크 오류 대비) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 41 |  | 산출물 |  | 최종 보고서, 발표 PPT, 시연 계획서 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 42 | 제출물 | 1. 배포된 API 서버 (필수) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 43 |  | 1 | API 서버 접속 URL (로컬 또는 클라우드) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 44 |  | 2 | API 명세서 (Swagger 또는 PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 45 |  | 3 | API 테스트 결과 (Postman 스크린샷) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 46 |  | 2. 종합 테스트 보고서 (5~7 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 47 |  | 1 | 테스트 케이스 상세 설명 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 48 |  | 2 | Confusion Matrix |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 49 |  | 3 | 성능 지표 (Precision, Recall, F1-score, 추론 속도) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 50 |  | 4 | 실패 케이스 분석 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 51 |  | 3. 최종 프로젝트 보고서 (10~15 페이지, PDF) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 52 |  | 1 | 프로젝트 전체 과정 종합 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 53 |  | 2 | 기술 문서 (아키텍처, 모델, API) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 54 |  | 3 | 성능 평가 및 분석 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 55 |  | 4 | 결론 및 향후 과제 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 56 |  | 5 | 참고 문헌 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 57 |  | 4. 발표 자료 (PPT, 15~20 슬라이드) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 58 |  | 1 | 프로젝트 요약 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 59 |  | 2 | 핵심 기술 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 60 |  | 3 | 시연 영상 포함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 61 |  | 4 | 결과 및 인사이트 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 62 |  | 5. GitHub 저장소 최종본 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 63 |  | 1 | README.md (프로젝트 전체 설명) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 64 |  | 2 | 설치 및 실행 가이드 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 65 |  | 3 | API 사용 예시 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 66 |  | 4 | 라이선스 정보 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 67 |  | 6. 프로젝트 회고록 (팀 1페이지 + 개인 각 1페이지) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 68 |  | 1 | 팀 회고:<br><br>- 프로젝트 진행 과정 요약<br>- 잘한 점 / 아쉬운 점<br>- 팀워크 평가 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 69 |  | 2 | 개인 회고:<br><br>- 자신의 역할 및 기여<br>- 기술적으로 배운 점<br>- 다음 프로젝트에서 개선할 점 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 70 | 평가 기준 | 완성도 평가 (70%) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 71 |  | 1 | Q1. 구현한 침입 탐지 시스템을 외부에서 호출 가능한 형태로 배포했는가?<br>PASS 기준:<br>- REST API 형태로 제공<br>- 요청/응답 동작 확인<br>- API 명세서 작성 완료 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 72 |  | 2 | Q2. 다양한 상황을 고려한 테스트 시나리오를 설계하고 실행했는가?<br>PASS 기준:<br>- 최소 10개 이상의 테스트 수행<br>- 정상·침입·엣지 케이스 포함<br>- 결과 기록 완료 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 73 |  | 3 | Q3. 시스템 성능을 정량적으로 측정하고 결과를 분석했는가?<br>PASS 기준:<br>- Precision, Recall, F1-score 등 지표 활용<br>- 실패 사례 분석 포함<br>- 목표 대비 결과 비교 수행 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 74 |  | 4 | Q4. 테스트 결과를 기반으로 시스템 개선 방향을 제안했는가?<br>PASS 기준:<br>- 성능 개선 아이디어 제시<br>- 운영 관점의 개선 포함<br>- 적용 우선순위 제안 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 75 |  | 5 | Q5. 프로젝트 결과를 문서·발표·시연 형태로 효과적으로 전달했는가?<br>PASS 기준:<br>- 최종 보고서 제출<br>- 발표 자료 작성<br>- 시연 또는 시연 영상 준비 완료 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 76 |  | 팀워크 평가 (30%) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 77 |  | 1 | Q. 배포·테스트·분석 과정에서 팀원이 역할을 분담하여 공동으로 수행했는가?<br>PASS 기준:<br>- 역할 분담 기록 존재<br>- 테스트 및 분석 결과 공동 작성<br>- 일정 내 산출물 통합 완료 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 78 |  | 2 | Q. 프로젝트 회고를 통해 팀의 성과와 개선점을 공유했는가?<br>PASS 기준:<br>- 팀 회고 문서 작성<br>- 개인 기여 및 학습 내용 정리<br>- 다음 프로젝트 개선안 도출 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 79 | AI 지시문 가이드 (학생용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 80 | 생성형 AI 활용 가이드 | 허용되는 AI 활용 (권장) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 81 |  | 1 | API 서버 구축 지원 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 82 |  |  | "Flask로 파일 업로드를 받는 REST API 엔드포인트를 작성해주세요. <br>업로드된 파일을 임시 폴더에 저장하고, <br>처리 후 JSON 응답을 반환해야 합니다." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 83 |  | 2 | 테스트 코드 작성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 84 |  |  | "pytest를 사용하여 침입 탐지 함수를 테스트하는 <br>단위 테스트 코드를 작성해주세요.<br><br>def test_detect_intrusion_normal():<br># TODO<br>" |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 85 |  | 3 | 문서 작성 지원 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 86 |  |  | "API 명세서를 Markdown 형식으로 작성하려고 합니다. <br>REST API 문서의 표준 구조를 알려주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 87 |  | 4 | 발표 자료 구성 조언 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 88 |  |  | "15분 기술 프로젝트 발표의 효과적인 슬라이드 구성을 제안해주세요. <br>청중은 교수님과 동료 학생들입니다." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 89 |  | 5 | 성능 개선 아이디어 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 90 |  |  | "침입 탐지 모델의 False Positive가 20%입니다. <br>이를 줄이기 위한 방법을 3가지 제안해주세요." |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 91 |  | 금지되는 AI 활용 (부정행위) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 92 |  | 1 | 보고서 전체 작성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 93 |  |  | "침입 탐지 프로젝트 최종 보고서를 15페이지로 작성해줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 94 |  | 2 | 발표 대본 전체 생성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 95 |  |  | "10분 발표 대본을 처음부터 끝까지 작성해줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 96 |  | 3 | 테스트 결과 조작 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 97 |  |  | "Confusion Matrix 데이터를 좋아 보이게 만들어줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 98 |  | 4 | 회고록 대신 작성 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 99 |  |  | "팀원 4명의 개인 회고록을 각각 작성해줘" ❌ |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 100 |  | AI 활용 최종 원칙 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 101 |  | 1 | AI는 도구일 뿐, 학습은 본인이 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 102 |  |  | - AI 답변을 100% 신뢰하지 말고 검증<br>- 공식 문서(PyTorch, Flask 등)와 교차 확인 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 103 |  | 2 | 인용 표시 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 104 |  |  | - 최종 보고서에 "AI 활용 내역" 섹션 추가<br><br>예: "API 서버 구축 시 ChatGPT의 Flask 예시 코드를 참고하였으며, <br>프로젝트에 맞게 수정하였음. 전처리 파이프라인은 팀원이 독자적으로 작성함."<br> |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 105 |  | 3 | 발표는 본인이 직접 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 106 |  |  | - AI가 생성한 대본을 읽지 말고, 자신의 언어로 발표<br>- 프로젝트를 직접 수행했다면 자연스럽게 설명 가능 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

### Non-Empty Cell Records

```jsonl
{"address":"A1","row":1,"column":1,"column_letter":"A","raw_value":"4단계: 완성(배포) 및 분석 (10~12주차)","cached_value":"4단계: 완성(배포) 및 분석 (10~12주차)","formula":null,"data_type":"s","number_format":"General","style_id":112,"merged_range":"A1:U1","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFCCCCCC"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A2","row":2,"column":1,"column_letter":"A","raw_value":"차시 개요","cached_value":"차시 개요","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B2","row":2,"column":2,"column_letter":"B","raw_value":"구현한 시스템을 실전 환경에 가깝게 배포하고, 다양한 테스트 시나리오로 성능을 평가합니다. \n프로젝트 전체를 회고하며 개선점을 도출하고, 최종 결과를 발표합니다.","cached_value":"구현한 시스템을 실전 환경에 가깝게 배포하고, 다양한 테스트 시나리오로 성능을 평가합니다. \n프로젝트 전체를 회고하며 개선점을 도출하고, 최종 결과를 발표합니다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B2:U2","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A3","row":3,"column":1,"column_letter":"A","raw_value":"학습목표","cached_value":"학습목표","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A3:A5","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B3","row":3,"column":2,"column_letter":"B","raw_value":"개발한 AI 시스템을 Flask/FastAPI 등을 활용하여 REST API 형태로 배포하고, 외부에서 호출 가능하도록 구성할 수 있다.","cached_value":"개발한 AI 시스템을 Flask/FastAPI 등을 활용하여 REST API 형태로 배포하고, 외부에서 호출 가능하도록 구성할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B3:U3","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B4","row":4,"column":2,"column_letter":"B","raw_value":"다양한 테스트 시나리오(정상, 침입, 엣지 케이스)를 설계하여 시스템의 강건성을 검증하고, 성능 지표를 정량적으로 분석할 수 있다.","cached_value":"다양한 테스트 시나리오(정상, 침입, 엣지 케이스)를 설계하여 시스템의 강건성을 검증하고, 성능 지표를 정량적으로 분석할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B4:U4","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B5","row":5,"column":2,"column_letter":"B","raw_value":"프로젝트 전체를 체계적으로 문서화하고, 결과를 효과적으로 발표하여 청중(교수, 동료)에게 설득력 있게 전달할 수 있다.","cached_value":"프로젝트 전체를 체계적으로 문서화하고, 결과를 효과적으로 발표하여 청중(교수, 동료)에게 설득력 있게 전달할 수 있다.","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B5:U5","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A6","row":6,"column":1,"column_letter":"A","raw_value":"선행 학습 권장 과목","cached_value":"선행 학습 권장 과목","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A6:A9","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B6","row":6,"column":2,"column_letter":"B","raw_value":"웹 프로그래밍 / 네트워크: REST API, HTTP 프로토콜","cached_value":"웹 프로그래밍 / 네트워크: REST API, HTTP 프로토콜","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B6:U6","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B7","row":7,"column":2,"column_letter":"B","raw_value":"데이터베이스: 로그 데이터 영구 저장 (SQLite, PostgreSQL)","cached_value":"데이터베이스: 로그 데이터 영구 저장 (SQLite, PostgreSQL)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B7:U7","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B8","row":8,"column":2,"column_letter":"B","raw_value":"소프트웨어공학: 단위 테스트, 통합 테스트, 문서화","cached_value":"소프트웨어공학: 단위 테스트, 통합 테스트, 문서화","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B8:U8","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B9","row":9,"column":2,"column_letter":"B","raw_value":"클라우드 컴퓨팅 (선택): AWS, Google Cloud, Azure 배포","cached_value":"클라우드 컴퓨팅 (선택): AWS, Google Cloud, Azure 배포","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B9:U9","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A10","row":10,"column":1,"column_letter":"A","raw_value":"활용 기술 스택","cached_value":"활용 기술 스택","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A10:A14","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B10","row":10,"column":2,"column_letter":"B","raw_value":"Flask / FastAPI (API 서버)","cached_value":"Flask / FastAPI (API 서버)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B10:U10","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B11","row":11,"column":2,"column_letter":"B","raw_value":"Docker (컨테이너화)","cached_value":"Docker (컨테이너화)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B11:U11","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B12","row":12,"column":2,"column_letter":"B","raw_value":"Streamlit (대시보드, 선택)","cached_value":"Streamlit (대시보드, 선택)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B12:U12","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B13","row":13,"column":2,"column_letter":"B","raw_value":"Postman (API 테스트)","cached_value":"Postman (API 테스트)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B13:U13","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B14","row":14,"column":2,"column_letter":"B","raw_value":"pytest (단위 테스트)","cached_value":"pytest (단위 테스트)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"B14:U14","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"A15","row":15,"column":1,"column_letter":"A","raw_value":"PBL 문제 (학생 제시용)","cached_value":"PBL 문제 (학생 제시용)","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A15:U15","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A16","row":16,"column":1,"column_letter":"A","raw_value":"문제 상황","cached_value":"문제 상황","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B16","row":16,"column":2,"column_letter":"B","raw_value":"3단계에서 학습된 모델과 통합 시스템을 완성했습니다. 이제 실제 현장에서 사용할 수 있도록 배포하고, \n다양한 상황에서 시스템이 안정적으로 작동하는지 검증해야 합니다.","cached_value":"3단계에서 학습된 모델과 통합 시스템을 완성했습니다. 이제 실제 현장에서 사용할 수 있도록 배포하고, \n다양한 상황에서 시스템이 안정적으로 작동하는지 검증해야 합니다.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B16:U16","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A17","row":17,"column":1,"column_letter":"A","raw_value":"미션","cached_value":"미션","formula":null,"data_type":"s","number_format":"General","style_id":3,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B17","row":17,"column":2,"column_letter":"B","raw_value":"1. 침입 탐지 시스템을 REST API로 배포하여 외부에서 영상을 업로드하면 침입 여부를 반환하도록 구성하세요.\n2. 최소 10개 이상의 테스트 케이스로 시스템을 검증하고, 성능 분석 보고서를 작성하세요.\n3. 프로젝트 전체를 발표할 수 있도록 최종 보고서와 발표 자료를 준비하세요.","cached_value":"1. 침입 탐지 시스템을 REST API로 배포하여 외부에서 영상을 업로드하면 침입 여부를 반환하도록 구성하세요.\n2. 최소 10개 이상의 테스트 케이스로 시스템을 검증하고, 성능 분석 보고서를 작성하세요.\n3. 프로젝트 전체를 발표할 수 있도록 최종 보고서와 발표 자료를 준비하세요.","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B17:U17","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A18","row":18,"column":1,"column_letter":"A","raw_value":"5단계 실행 가이드","cached_value":"5단계 실행 가이드","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A18:A41","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B18","row":18,"column":2,"column_letter":"B","raw_value":"Step 1: REST API 서버 구축","cached_value":"Step 1: REST API 서버 구축","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B18:U18","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B19","row":19,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C19","row":19,"column":3,"column_letter":"C","raw_value":"Flask 또는 FastAPI로 API 엔드포인트 작성:\n\n","cached_value":"Flask 또는 FastAPI로 API 엔드포인트 작성:\n\n","formula":null,"data_type":"s","number_format":"General","style_id":123,"merged_range":"C19:U19","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":true}}
{"address":"B20","row":20,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C20","row":20,"column":3,"column_letter":"C","raw_value":"API 명세서 작성:\n- 엔드포인트 목록 (URL, Method, 파라미터)\n- 요청/응답 예시\n- 에러 코드 정의","cached_value":"API 명세서 작성:\n- 엔드포인트 목록 (URL, Method, 파라미터)\n- 요청/응답 예시\n- 에러 코드 정의","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C20:U20","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B21","row":21,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B21:C21","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D21","row":21,"column":4,"column_letter":"D","raw_value":"API 서버 코드, API 명세서 (Swagger 또는 문서)","cached_value":"API 서버 코드, API 명세서 (Swagger 또는 문서)","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D21:U21","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B22","row":22,"column":2,"column_letter":"B","raw_value":"Step 2: Docker 컨테이너화 (선택, 가산점)","cached_value":"Step 2: Docker 컨테이너화 (선택, 가산점)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B22:U22","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B23","row":23,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C23","row":23,"column":3,"column_letter":"C","raw_value":"Dockerfile 작성:","cached_value":"Dockerfile 작성:","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C23:L23","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B24","row":24,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C24","row":24,"column":3,"column_letter":"C","raw_value":"Docker Compose 구성 (API 서버 + DB):\n- 침입 로그를 DB에 저장","cached_value":"Docker Compose 구성 (API 서버 + DB):\n- 침입 로그를 DB에 저장","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C24:L24","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B25","row":25,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B25:C25","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D25","row":25,"column":4,"column_letter":"D","raw_value":"Dockerfile, docker-compose.yml, 실행 가이드","cached_value":"Dockerfile, docker-compose.yml, 실행 가이드","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D25:U25","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B26","row":26,"column":2,"column_letter":"B","raw_value":"Step 3: 종합 테스트 시나리오 설계 및 실행\n다양한 상황에서 시스템 검증","cached_value":"Step 3: 종합 테스트 시나리오 설계 및 실행\n다양한 상황에서 시스템 검증","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B26:U26","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B27","row":27,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C27","row":27,"column":3,"column_letter":"C","raw_value":"정상 케이스 (5개):\n\n- 주간 빈 경계 지역 영상\n- 야간 정상 순찰 영상\n- 날씨 변화 (비, 안개) 영상","cached_value":"정상 케이스 (5개):\n\n- 주간 빈 경계 지역 영상\n- 야간 정상 순찰 영상\n- 날씨 변화 (비, 안개) 영상","formula":null,"data_type":"s","number_format":"General","style_id":119,"merged_range":"C27:U27","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B28","row":28,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C28","row":28,"column":3,"column_letter":"C","raw_value":"침입 케이스 (5개):\n\n- 주간 사람 침입\n- 야간 침입\n- 차량 침입\n- 여러 명 동시 침입","cached_value":"침입 케이스 (5개):\n\n- 주간 사람 침입\n- 야간 침입\n- 차량 침입\n- 여러 명 동시 침입","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C28:U28","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B29","row":29,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C29","row":29,"column":3,"column_letter":"C","raw_value":"엣지 케이스 (5개):\n\n- 동물 출현 (오탐 방지)\n- 나뭇가지 흔들림 (바람)\n- 카메라 흔들림\n- 매우 어두운 영상\n- 낮은 해상도 영상","cached_value":"엣지 케이스 (5개):\n\n- 동물 출현 (오탐 방지)\n- 나뭇가지 흔들림 (바람)\n- 카메라 흔들림\n- 매우 어두운 영상\n- 낮은 해상도 영상","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C29:U29","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B30","row":30,"column":2,"column_letter":"B","raw_value":"테스트 수행:\n\n- 각 케이스별 결과 기록 (TP, TN, FP, FN)\n- Confusion Matrix 작성\n- Precision, Recall, F1-score 계산\n- 추론 속도 측정","cached_value":"테스트 수행:\n\n- 각 케이스별 결과 기록 (TP, TN, FP, FN)\n- Confusion Matrix 작성\n- Precision, Recall, F1-score 계산\n- 추론 속도 측정","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"B30:U30","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B31","row":31,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B31:C31","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D31","row":31,"column":4,"column_letter":"D","raw_value":"테스트 케이스 목록 및 결과표, Confusion Matrix","cached_value":"테스트 케이스 목록 및 결과표, Confusion Matrix","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D31:U31","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B32","row":32,"column":2,"column_letter":"B","raw_value":"Step 4: 성능 분석 및 개선 제안","cached_value":"Step 4: 성능 분석 및 개선 제안","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B32:U32","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B33","row":33,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C33","row":33,"column":3,"column_letter":"C","raw_value":"정량적 분석:\n\n- 목표 대비 실제 성능 비교\na. 탐지율 목표: 90% → 실제: ?%\nb. 오탐률 목표: 15% 이하 → 실제: ?%\n- 실패 케이스 분석: 왜 실패했는가?","cached_value":"정량적 분석:\n\n- 목표 대비 실제 성능 비교\na. 탐지율 목표: 90% → 실제: ?%\nb. 오탐률 목표: 15% 이하 → 실제: ?%\n- 실패 케이스 분석: 왜 실패했는가?","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C33:U33","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B34","row":34,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C34","row":34,"column":3,"column_letter":"C","raw_value":"정성적 분석:\n\n- 시스템의 강점과 약점\n- 실제 현장 적용 시 예상되는 문제점\n","cached_value":"정성적 분석:\n\n- 시스템의 강점과 약점\n- 실제 현장 적용 시 예상되는 문제점\n","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C34:U34","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B35","row":35,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C35","row":35,"column":3,"column_letter":"C","raw_value":"개선 제안:\n\n- 모델 개선 방향 (더 많은 데이터, 다른 아키텍처)\n- 시스템 개선 (처리 속도 향상, UI 개선)\n- 추가 기능 제안 (침입자 추적, 알림 시스템 고도화)","cached_value":"개선 제안:\n\n- 모델 개선 방향 (더 많은 데이터, 다른 아키텍처)\n- 시스템 개선 (처리 속도 향상, UI 개선)\n- 추가 기능 제안 (침입자 추적, 알림 시스템 고도화)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C35:U35","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B36","row":36,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B36:C36","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D36","row":36,"column":4,"column_letter":"D","raw_value":"성능 분석 보고서 (3~5 페이지)","cached_value":"성능 분석 보고서 (3~5 페이지)","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D36:U36","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B37","row":37,"column":2,"column_letter":"B","raw_value":"Step 5: 최종 문서화 및 발표 준비","cached_value":"Step 5: 최종 문서화 및 발표 준비","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B37:U37","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B38","row":38,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C38","row":38,"column":3,"column_letter":"C","raw_value":"최종 보고서 작성 (10~15 페이지):\n\n- 1장: 프로젝트 개요 및 목표\n- 2장: 문제 정의 및 데이터 분석\n- 3장: 시스템 설계\n- 4장: 구현 상세\n- 5장: 테스트 및 성능 평가\n- 6장: 결론 및 향후 과제\n- 부록: 코드 스니펫, 참고 문헌","cached_value":"최종 보고서 작성 (10~15 페이지):\n\n- 1장: 프로젝트 개요 및 목표\n- 2장: 문제 정의 및 데이터 분석\n- 3장: 시스템 설계\n- 4장: 구현 상세\n- 5장: 테스트 및 성능 평가\n- 6장: 결론 및 향후 과제\n- 부록: 코드 스니펫, 참고 문헌","formula":null,"data_type":"s","number_format":"General","style_id":123,"merged_range":"C38:U38","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":true}}
{"address":"B39","row":39,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C39","row":39,"column":3,"column_letter":"C","raw_value":"발표 자료 작성 (PPT, 15~20 슬라이드):\n\n- 프로젝트 소개 (2분)\n- 기술적 접근 (3분)\n- 시연 (2분)\n- 결과 분석 (2분)\n- Q&A (3분)","cached_value":"발표 자료 작성 (PPT, 15~20 슬라이드):\n\n- 프로젝트 소개 (2분)\n- 기술적 접근 (3분)\n- 시연 (2분)\n- 결과 분석 (2분)\n- Q&A (3분)","formula":null,"data_type":"s","number_format":"General","style_id":123,"merged_range":"C39:U39","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":true}}
{"address":"B40","row":40,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C40","row":40,"column":3,"column_letter":"C","raw_value":"시연 준비:\n\n- 실시간 시연 또는 녹화 영상\n- 백업 계획 (네트워크 오류 대비)","cached_value":"시연 준비:\n\n- 실시간 시연 또는 녹화 영상\n- 백업 계획 (네트워크 오류 대비)","formula":null,"data_type":"s","number_format":"General","style_id":123,"merged_range":"C40:U40","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":true}}
{"address":"B41","row":41,"column":2,"column_letter":"B","raw_value":"산출물","cached_value":"산출물","formula":null,"data_type":"s","number_format":"General","style_id":17,"merged_range":"B41:C41","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"D41","row":41,"column":4,"column_letter":"D","raw_value":"최종 보고서, 발표 PPT, 시연 계획서","cached_value":"최종 보고서, 발표 PPT, 시연 계획서","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"D41:U41","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A42","row":42,"column":1,"column_letter":"A","raw_value":"제출물","cached_value":"제출물","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A42:A69","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B42","row":42,"column":2,"column_letter":"B","raw_value":"1. 배포된 API 서버 (필수)","cached_value":"1. 배포된 API 서버 (필수)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B42:U42","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B43","row":43,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C43","row":43,"column":3,"column_letter":"C","raw_value":"API 서버 접속 URL (로컬 또는 클라우드)","cached_value":"API 서버 접속 URL (로컬 또는 클라우드)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C43:U43","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B44","row":44,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C44","row":44,"column":3,"column_letter":"C","raw_value":"API 명세서 (Swagger 또는 PDF)","cached_value":"API 명세서 (Swagger 또는 PDF)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C44:U44","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B45","row":45,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C45","row":45,"column":3,"column_letter":"C","raw_value":"API 테스트 결과 (Postman 스크린샷)","cached_value":"API 테스트 결과 (Postman 스크린샷)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C45:U45","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B46","row":46,"column":2,"column_letter":"B","raw_value":"2. 종합 테스트 보고서 (5~7 페이지, PDF)","cached_value":"2. 종합 테스트 보고서 (5~7 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B46:U46","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B47","row":47,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C47","row":47,"column":3,"column_letter":"C","raw_value":"테스트 케이스 상세 설명","cached_value":"테스트 케이스 상세 설명","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C47:U47","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B48","row":48,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C48","row":48,"column":3,"column_letter":"C","raw_value":"Confusion Matrix","cached_value":"Confusion Matrix","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C48:U48","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B49","row":49,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C49","row":49,"column":3,"column_letter":"C","raw_value":"성능 지표 (Precision, Recall, F1-score, 추론 속도)","cached_value":"성능 지표 (Precision, Recall, F1-score, 추론 속도)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C49:U49","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B50","row":50,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C50","row":50,"column":3,"column_letter":"C","raw_value":"실패 케이스 분석","cached_value":"실패 케이스 분석","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C50:U50","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B51","row":51,"column":2,"column_letter":"B","raw_value":"3. 최종 프로젝트 보고서 (10~15 페이지, PDF)","cached_value":"3. 최종 프로젝트 보고서 (10~15 페이지, PDF)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B51:U51","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B52","row":52,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C52","row":52,"column":3,"column_letter":"C","raw_value":"프로젝트 전체 과정 종합","cached_value":"프로젝트 전체 과정 종합","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C52:U52","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B53","row":53,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C53","row":53,"column":3,"column_letter":"C","raw_value":"기술 문서 (아키텍처, 모델, API)","cached_value":"기술 문서 (아키텍처, 모델, API)","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C53:U53","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B54","row":54,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C54","row":54,"column":3,"column_letter":"C","raw_value":"성능 평가 및 분석","cached_value":"성능 평가 및 분석","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C54:U54","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B55","row":55,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C55","row":55,"column":3,"column_letter":"C","raw_value":"결론 및 향후 과제","cached_value":"결론 및 향후 과제","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C55:U55","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B56","row":56,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C56","row":56,"column":3,"column_letter":"C","raw_value":"참고 문헌","cached_value":"참고 문헌","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C56:U56","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B57","row":57,"column":2,"column_letter":"B","raw_value":"4. 발표 자료 (PPT, 15~20 슬라이드)","cached_value":"4. 발표 자료 (PPT, 15~20 슬라이드)","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B57:U57","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B58","row":58,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C58","row":58,"column":3,"column_letter":"C","raw_value":"프로젝트 요약","cached_value":"프로젝트 요약","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C58:U58","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B59","row":59,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C59","row":59,"column":3,"column_letter":"C","raw_value":"핵심 기술","cached_value":"핵심 기술","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C59:U59","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B60","row":60,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C60","row":60,"column":3,"column_letter":"C","raw_value":"시연 영상 포함","cached_value":"시연 영상 포함","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C60:U60","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B61","row":61,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C61","row":61,"column":3,"column_letter":"C","raw_value":"결과 및 인사이트","cached_value":"결과 및 인사이트","formula":null,"data_type":"s","number_format":"General","style_id":117,"merged_range":"C61:U61","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":true}}
{"address":"B62","row":62,"column":2,"column_letter":"B","raw_value":"5. GitHub 저장소 최종본","cached_value":"5. GitHub 저장소 최종본","formula":null,"data_type":"s","number_format":"General","style_id":116,"merged_range":"B62:U62","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B63","row":63,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C63","row":63,"column":3,"column_letter":"C","raw_value":"README.md (프로젝트 전체 설명)","cached_value":"README.md (프로젝트 전체 설명)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C63:U63","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B64","row":64,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C64","row":64,"column":3,"column_letter":"C","raw_value":"설치 및 실행 가이드","cached_value":"설치 및 실행 가이드","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C64:U64","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B65","row":65,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C65","row":65,"column":3,"column_letter":"C","raw_value":"API 사용 예시","cached_value":"API 사용 예시","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C65:U65","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B66","row":66,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C66","row":66,"column":3,"column_letter":"C","raw_value":"라이선스 정보","cached_value":"라이선스 정보","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C66:U66","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B67","row":67,"column":2,"column_letter":"B","raw_value":"6. 프로젝트 회고록 (팀 1페이지 + 개인 각 1페이지)","cached_value":"6. 프로젝트 회고록 (팀 1페이지 + 개인 각 1페이지)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B67:U67","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B68","row":68,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C68","row":68,"column":3,"column_letter":"C","raw_value":"팀 회고:\n\n- 프로젝트 진행 과정 요약\n- 잘한 점 / 아쉬운 점\n- 팀워크 평가","cached_value":"팀 회고:\n\n- 프로젝트 진행 과정 요약\n- 잘한 점 / 아쉬운 점\n- 팀워크 평가","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C68:U68","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B69","row":69,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":4,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C69","row":69,"column":3,"column_letter":"C","raw_value":"개인 회고:\n\n- 자신의 역할 및 기여\n- 기술적으로 배운 점\n- 다음 프로젝트에서 개선할 점","cached_value":"개인 회고:\n\n- 자신의 역할 및 기여\n- 기술적으로 배운 점\n- 다음 프로젝트에서 개선할 점","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C69:U69","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A70","row":70,"column":1,"column_letter":"A","raw_value":"평가 기준","cached_value":"평가 기준","formula":null,"data_type":"s","number_format":"General","style_id":29,"merged_range":"A70:A78","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B70","row":70,"column":2,"column_letter":"B","raw_value":"완성도 평가 (70%)","cached_value":"완성도 평가 (70%)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B70:U70","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B71","row":71,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C71","row":71,"column":3,"column_letter":"C","raw_value":"Q1. 구현한 침입 탐지 시스템을 외부에서 호출 가능한 형태로 배포했는가?\nPASS 기준:\n- REST API 형태로 제공\n- 요청/응답 동작 확인\n- API 명세서 작성 완료","cached_value":"Q1. 구현한 침입 탐지 시스템을 외부에서 호출 가능한 형태로 배포했는가?\nPASS 기준:\n- REST API 형태로 제공\n- 요청/응답 동작 확인\n- API 명세서 작성 완료","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C71:S71","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T71","row":71,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U71","row":71,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B72","row":72,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C72","row":72,"column":3,"column_letter":"C","raw_value":"Q2. 다양한 상황을 고려한 테스트 시나리오를 설계하고 실행했는가?\nPASS 기준:\n- 최소 10개 이상의 테스트 수행\n- 정상·침입·엣지 케이스 포함\n- 결과 기록 완료","cached_value":"Q2. 다양한 상황을 고려한 테스트 시나리오를 설계하고 실행했는가?\nPASS 기준:\n- 최소 10개 이상의 테스트 수행\n- 정상·침입·엣지 케이스 포함\n- 결과 기록 완료","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C72:S72","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T72","row":72,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U72","row":72,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B73","row":73,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C73","row":73,"column":3,"column_letter":"C","raw_value":"Q3. 시스템 성능을 정량적으로 측정하고 결과를 분석했는가?\nPASS 기준:\n- Precision, Recall, F1-score 등 지표 활용\n- 실패 사례 분석 포함\n- 목표 대비 결과 비교 수행","cached_value":"Q3. 시스템 성능을 정량적으로 측정하고 결과를 분석했는가?\nPASS 기준:\n- Precision, Recall, F1-score 등 지표 활용\n- 실패 사례 분석 포함\n- 목표 대비 결과 비교 수행","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C73:S73","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T73","row":73,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U73","row":73,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B74","row":74,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C74","row":74,"column":3,"column_letter":"C","raw_value":"Q4. 테스트 결과를 기반으로 시스템 개선 방향을 제안했는가?\nPASS 기준:\n- 성능 개선 아이디어 제시\n- 운영 관점의 개선 포함\n- 적용 우선순위 제안","cached_value":"Q4. 테스트 결과를 기반으로 시스템 개선 방향을 제안했는가?\nPASS 기준:\n- 성능 개선 아이디어 제시\n- 운영 관점의 개선 포함\n- 적용 우선순위 제안","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C74:S74","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T74","row":74,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U74","row":74,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B75","row":75,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":17,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"right","vertical":"center","wrap_text":true}}
{"address":"C75","row":75,"column":3,"column_letter":"C","raw_value":"Q5. 프로젝트 결과를 문서·발표·시연 형태로 효과적으로 전달했는가?\nPASS 기준:\n- 최종 보고서 제출\n- 발표 자료 작성\n- 시연 또는 시연 영상 준비 완료","cached_value":"Q5. 프로젝트 결과를 문서·발표·시연 형태로 효과적으로 전달했는가?\nPASS 기준:\n- 최종 보고서 제출\n- 발표 자료 작성\n- 시연 또는 시연 영상 준비 완료","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C75:S75","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T75","row":75,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U75","row":75,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B76","row":76,"column":2,"column_letter":"B","raw_value":"팀워크 평가 (30%)","cached_value":"팀워크 평가 (30%)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B76:U76","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B77","row":77,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":44,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C77","row":77,"column":3,"column_letter":"C","raw_value":"Q. 배포·테스트·분석 과정에서 팀원이 역할을 분담하여 공동으로 수행했는가?\nPASS 기준:\n- 역할 분담 기록 존재\n- 테스트 및 분석 결과 공동 작성\n- 일정 내 산출물 통합 완료","cached_value":"Q. 배포·테스트·분석 과정에서 팀원이 역할을 분담하여 공동으로 수행했는가?\nPASS 기준:\n- 역할 분담 기록 존재\n- 테스트 및 분석 결과 공동 작성\n- 일정 내 산출물 통합 완료","formula":null,"data_type":"s","number_format":"General","style_id":27,"merged_range":"C77:S77","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T77","row":77,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U77","row":77,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B78","row":78,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":44,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C78","row":78,"column":3,"column_letter":"C","raw_value":"Q. 프로젝트 회고를 통해 팀의 성과와 개선점을 공유했는가?\nPASS 기준:\n- 팀 회고 문서 작성\n- 개인 기여 및 학습 내용 정리\n- 다음 프로젝트 개선안 도출","cached_value":"Q. 프로젝트 회고를 통해 팀의 성과와 개선점을 공유했는가?\nPASS 기준:\n- 팀 회고 문서 작성\n- 개인 기여 및 학습 내용 정리\n- 다음 프로젝트 개선안 도출","formula":null,"data_type":"s","number_format":"General","style_id":28,"merged_range":"C78:S78","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T78","row":78,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U78","row":78,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":18,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A79","row":79,"column":1,"column_letter":"A","raw_value":"AI 지시문 가이드 (학생용)","cached_value":"AI 지시문 가이드 (학생용)","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A79:U79","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A80","row":80,"column":1,"column_letter":"A","raw_value":"생성형 AI 활용 가이드","cached_value":"생성형 AI 활용 가이드","formula":null,"data_type":"s","number_format":"General","style_id":114,"merged_range":"A80:A106","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B80","row":80,"column":2,"column_letter":"B","raw_value":"허용되는 AI 활용 (권장)","cached_value":"허용되는 AI 활용 (권장)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B80:U80","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B81","row":81,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C81","row":81,"column":3,"column_letter":"C","raw_value":"API 서버 구축 지원","cached_value":"API 서버 구축 지원","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C81:U81","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C82","row":82,"column":3,"column_letter":"C","raw_value":"\"Flask로 파일 업로드를 받는 REST API 엔드포인트를 작성해주세요. \n업로드된 파일을 임시 폴더에 저장하고, \n처리 후 JSON 응답을 반환해야 합니다.\"","cached_value":"\"Flask로 파일 업로드를 받는 REST API 엔드포인트를 작성해주세요. \n업로드된 파일을 임시 폴더에 저장하고, \n처리 후 JSON 응답을 반환해야 합니다.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C82:U82","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B83","row":83,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C83","row":83,"column":3,"column_letter":"C","raw_value":"테스트 코드 작성","cached_value":"테스트 코드 작성","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C83:U83","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C84","row":84,"column":3,"column_letter":"C","raw_value":"\"pytest를 사용하여 침입 탐지 함수를 테스트하는 \n단위 테스트 코드를 작성해주세요.\n\ndef test_detect_intrusion_normal():\n# TODO\n\"","cached_value":"\"pytest를 사용하여 침입 탐지 함수를 테스트하는 \n단위 테스트 코드를 작성해주세요.\n\ndef test_detect_intrusion_normal():\n# TODO\n\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C84:U84","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B85","row":85,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C85","row":85,"column":3,"column_letter":"C","raw_value":"문서 작성 지원","cached_value":"문서 작성 지원","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C85:U85","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C86","row":86,"column":3,"column_letter":"C","raw_value":"\"API 명세서를 Markdown 형식으로 작성하려고 합니다. \nREST API 문서의 표준 구조를 알려주세요.\"","cached_value":"\"API 명세서를 Markdown 형식으로 작성하려고 합니다. \nREST API 문서의 표준 구조를 알려주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C86:U86","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B87","row":87,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C87","row":87,"column":3,"column_letter":"C","raw_value":"발표 자료 구성 조언","cached_value":"발표 자료 구성 조언","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C87:U87","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C88","row":88,"column":3,"column_letter":"C","raw_value":"\"15분 기술 프로젝트 발표의 효과적인 슬라이드 구성을 제안해주세요. \n청중은 교수님과 동료 학생들입니다.\"","cached_value":"\"15분 기술 프로젝트 발표의 효과적인 슬라이드 구성을 제안해주세요. \n청중은 교수님과 동료 학생들입니다.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C88:U88","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B89","row":89,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C89","row":89,"column":3,"column_letter":"C","raw_value":"성능 개선 아이디어","cached_value":"성능 개선 아이디어","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C89:U89","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C90","row":90,"column":3,"column_letter":"C","raw_value":"\"침입 탐지 모델의 False Positive가 20%입니다. \n이를 줄이기 위한 방법을 3가지 제안해주세요.\"","cached_value":"\"침입 탐지 모델의 False Positive가 20%입니다. \n이를 줄이기 위한 방법을 3가지 제안해주세요.\"","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C90:U90","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B91","row":91,"column":2,"column_letter":"B","raw_value":"금지되는 AI 활용 (부정행위)","cached_value":"금지되는 AI 활용 (부정행위)","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B91:U91","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B92","row":92,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C92","row":92,"column":3,"column_letter":"C","raw_value":"보고서 전체 작성","cached_value":"보고서 전체 작성","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C92:U92","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C93","row":93,"column":3,"column_letter":"C","raw_value":"\"침입 탐지 프로젝트 최종 보고서를 15페이지로 작성해줘\" ❌","cached_value":"\"침입 탐지 프로젝트 최종 보고서를 15페이지로 작성해줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C93:U93","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B94","row":94,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C94","row":94,"column":3,"column_letter":"C","raw_value":"발표 대본 전체 생성","cached_value":"발표 대본 전체 생성","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C94:U94","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C95","row":95,"column":3,"column_letter":"C","raw_value":"\"10분 발표 대본을 처음부터 끝까지 작성해줘\" ❌","cached_value":"\"10분 발표 대본을 처음부터 끝까지 작성해줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C95:U95","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B96","row":96,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C96","row":96,"column":3,"column_letter":"C","raw_value":"테스트 결과 조작","cached_value":"테스트 결과 조작","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C96:U96","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C97","row":97,"column":3,"column_letter":"C","raw_value":"\"Confusion Matrix 데이터를 좋아 보이게 만들어줘\" ❌","cached_value":"\"Confusion Matrix 데이터를 좋아 보이게 만들어줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C97:U97","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B98","row":98,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C98","row":98,"column":3,"column_letter":"C","raw_value":"회고록 대신 작성","cached_value":"회고록 대신 작성","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C98:U98","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C99","row":99,"column":3,"column_letter":"C","raw_value":"\"팀원 4명의 개인 회고록을 각각 작성해줘\" ❌","cached_value":"\"팀원 4명의 개인 회고록을 각각 작성해줘\" ❌","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C99:U99","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B100","row":100,"column":2,"column_letter":"B","raw_value":"AI 활용 최종 원칙","cached_value":"AI 활용 최종 원칙","formula":null,"data_type":"s","number_format":"General","style_id":44,"merged_range":"B100:U100","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B101","row":101,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C101","row":101,"column":3,"column_letter":"C","raw_value":"AI는 도구일 뿐, 학습은 본인이","cached_value":"AI는 도구일 뿐, 학습은 본인이","formula":null,"data_type":"s","number_format":"General","style_id":113,"merged_range":"C101:U101","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C102","row":102,"column":3,"column_letter":"C","raw_value":"- AI 답변을 100% 신뢰하지 말고 검증\n- 공식 문서(PyTorch, Flask 등)와 교차 확인","cached_value":"- AI 답변을 100% 신뢰하지 말고 검증\n- 공식 문서(PyTorch, Flask 등)와 교차 확인","formula":null,"data_type":"s","number_format":"General","style_id":122,"merged_range":"C102:U102","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":true}}
{"address":"B103","row":103,"column":2,"column_letter":"B","raw_value":"2","cached_value":"2","formula":null,"data_type":"s","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C103","row":103,"column":3,"column_letter":"C","raw_value":"인용 표시","cached_value":"인용 표시","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C103:U103","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C104","row":104,"column":3,"column_letter":"C","raw_value":"- 최종 보고서에 \"AI 활용 내역\" 섹션 추가\n\n예: \"API 서버 구축 시 ChatGPT의 Flask 예시 코드를 참고하였으며, \n프로젝트에 맞게 수정하였음. 전처리 파이프라인은 팀원이 독자적으로 작성함.\"\n","cached_value":"- 최종 보고서에 \"AI 활용 내역\" 섹션 추가\n\n예: \"API 서버 구축 시 ChatGPT의 Flask 예시 코드를 참고하였으며, \n프로젝트에 맞게 수정하였음. 전처리 파이프라인은 팀원이 독자적으로 작성함.\"\n","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C104:U104","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B105","row":105,"column":2,"column_letter":"B","raw_value":"3","cached_value":"3","formula":null,"data_type":"s","number_format":"General","style_id":6,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"C105","row":105,"column":3,"column_letter":"C","raw_value":"발표는 본인이 직접","cached_value":"발표는 본인이 직접","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C105:U105","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C106","row":106,"column":3,"column_letter":"C","raw_value":"- AI가 생성한 대본을 읽지 말고, 자신의 언어로 발표\n- 프로젝트를 직접 수행했다면 자연스럽게 설명 가능","cached_value":"- AI가 생성한 대본을 읽지 말고, 자신의 언어로 발표\n- 프로젝트를 직접 수행했다면 자연스럽게 설명 가능","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C106:U106","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
```

### Merged Ranges

| range | anchor | anchor_raw_value |
| --- | --- | --- |
| A1:U1 | A1 | 4단계: 완성(배포) 및 분석 (10~12주차) |
| B2:U2 | B2 | 구현한 시스템을 실전 환경에 가깝게 배포하고, 다양한 테스트 시나리오로 성능을 평가합니다. <br>프로젝트 전체를 회고하며 개선점을 도출하고, 최종 결과를 발표합니다. |
| A3:A5 | A3 | 학습목표 |
| B3:U3 | B3 | 개발한 AI 시스템을 Flask/FastAPI 등을 활용하여 REST API 형태로 배포하고, 외부에서 호출 가능하도록 구성할 수 있다. |
| B4:U4 | B4 | 다양한 테스트 시나리오(정상, 침입, 엣지 케이스)를 설계하여 시스템의 강건성을 검증하고, 성능 지표를 정량적으로 분석할 수 있다. |
| B5:U5 | B5 | 프로젝트 전체를 체계적으로 문서화하고, 결과를 효과적으로 발표하여 청중(교수, 동료)에게 설득력 있게 전달할 수 있다. |
| A6:A9 | A6 | 선행 학습 권장 과목 |
| B6:U6 | B6 | 웹 프로그래밍 / 네트워크: REST API, HTTP 프로토콜 |
| B7:U7 | B7 | 데이터베이스: 로그 데이터 영구 저장 (SQLite, PostgreSQL) |
| B8:U8 | B8 | 소프트웨어공학: 단위 테스트, 통합 테스트, 문서화 |
| B9:U9 | B9 | 클라우드 컴퓨팅 (선택): AWS, Google Cloud, Azure 배포 |
| A10:A14 | A10 | 활용 기술 스택 |
| B10:U10 | B10 | Flask / FastAPI (API 서버) |
| B11:U11 | B11 | Docker (컨테이너화) |
| B12:U12 | B12 | Streamlit (대시보드, 선택) |
| B13:U13 | B13 | Postman (API 테스트) |
| B14:U14 | B14 | pytest (단위 테스트) |
| A15:U15 | A15 | PBL 문제 (학생 제시용) |
| B16:U16 | B16 | 3단계에서 학습된 모델과 통합 시스템을 완성했습니다. 이제 실제 현장에서 사용할 수 있도록 배포하고, <br>다양한 상황에서 시스템이 안정적으로 작동하는지 검증해야 합니다. |
| B17:U17 | B17 | 1. 침입 탐지 시스템을 REST API로 배포하여 외부에서 영상을 업로드하면 침입 여부를 반환하도록 구성하세요.<br>2. 최소 10개 이상의 테스트 케이스로 시스템을 검증하고, 성능 분석 보고서를 작성하세요.<br>3. 프로젝트 전체를 발표할 수 있도록 최종 보고서와 발표 자료를 준비하세요. |
| A18:A41 | A18 | 5단계 실행 가이드 |
| B18:U18 | B18 | Step 1: REST API 서버 구축 |
| C19:U19 | C19 | Flask 또는 FastAPI로 API 엔드포인트 작성:<br><br> |
| C20:U20 | C20 | API 명세서 작성:<br>- 엔드포인트 목록 (URL, Method, 파라미터)<br>- 요청/응답 예시<br>- 에러 코드 정의 |
| B21:C21 | B21 | 산출물 |
| D21:U21 | D21 | API 서버 코드, API 명세서 (Swagger 또는 문서) |
| B22:U22 | B22 | Step 2: Docker 컨테이너화 (선택, 가산점) |
| C23:L23 | C23 | Dockerfile 작성: |
| M23:U24 | M23 |  |
| C24:L24 | C24 | Docker Compose 구성 (API 서버 + DB):<br>- 침입 로그를 DB에 저장 |
| B25:C25 | B25 | 산출물 |
| D25:U25 | D25 | Dockerfile, docker-compose.yml, 실행 가이드 |
| B26:U26 | B26 | Step 3: 종합 테스트 시나리오 설계 및 실행<br>다양한 상황에서 시스템 검증 |
| C27:U27 | C27 | 정상 케이스 (5개):<br><br>- 주간 빈 경계 지역 영상<br>- 야간 정상 순찰 영상<br>- 날씨 변화 (비, 안개) 영상 |
| C28:U28 | C28 | 침입 케이스 (5개):<br><br>- 주간 사람 침입<br>- 야간 침입<br>- 차량 침입<br>- 여러 명 동시 침입 |
| C29:U29 | C29 | 엣지 케이스 (5개):<br><br>- 동물 출현 (오탐 방지)<br>- 나뭇가지 흔들림 (바람)<br>- 카메라 흔들림<br>- 매우 어두운 영상<br>- 낮은 해상도 영상 |
| B30:U30 | B30 | 테스트 수행:<br><br>- 각 케이스별 결과 기록 (TP, TN, FP, FN)<br>- Confusion Matrix 작성<br>- Precision, Recall, F1-score 계산<br>- 추론 속도 측정 |
| B31:C31 | B31 | 산출물 |
| D31:U31 | D31 | 테스트 케이스 목록 및 결과표, Confusion Matrix |
| B32:U32 | B32 | Step 4: 성능 분석 및 개선 제안 |
| C33:U33 | C33 | 정량적 분석:<br><br>- 목표 대비 실제 성능 비교<br>a. 탐지율 목표: 90% → 실제: ?%<br>b. 오탐률 목표: 15% 이하 → 실제: ?%<br>- 실패 케이스 분석: 왜 실패했는가? |
| C34:U34 | C34 | 정성적 분석:<br><br>- 시스템의 강점과 약점<br>- 실제 현장 적용 시 예상되는 문제점<br> |
| C35:U35 | C35 | 개선 제안:<br><br>- 모델 개선 방향 (더 많은 데이터, 다른 아키텍처)<br>- 시스템 개선 (처리 속도 향상, UI 개선)<br>- 추가 기능 제안 (침입자 추적, 알림 시스템 고도화) |
| B36:C36 | B36 | 산출물 |
| D36:U36 | D36 | 성능 분석 보고서 (3~5 페이지) |
| B37:U37 | B37 | Step 5: 최종 문서화 및 발표 준비 |
| C38:U38 | C38 | 최종 보고서 작성 (10~15 페이지):<br><br>- 1장: 프로젝트 개요 및 목표<br>- 2장: 문제 정의 및 데이터 분석<br>- 3장: 시스템 설계<br>- 4장: 구현 상세<br>- 5장: 테스트 및 성능 평가<br>- 6장: 결론 및 향후 과제<br>- 부록: 코드 스니펫, 참고 문헌 |
| C39:U39 | C39 | 발표 자료 작성 (PPT, 15~20 슬라이드):<br><br>- 프로젝트 소개 (2분)<br>- 기술적 접근 (3분)<br>- 시연 (2분)<br>- 결과 분석 (2분)<br>- Q&A (3분) |
| C40:U40 | C40 | 시연 준비:<br><br>- 실시간 시연 또는 녹화 영상<br>- 백업 계획 (네트워크 오류 대비) |
| B41:C41 | B41 | 산출물 |
| D41:U41 | D41 | 최종 보고서, 발표 PPT, 시연 계획서 |
| A42:A69 | A42 | 제출물 |
| B42:U42 | B42 | 1. 배포된 API 서버 (필수) |
| C43:U43 | C43 | API 서버 접속 URL (로컬 또는 클라우드) |
| C44:U44 | C44 | API 명세서 (Swagger 또는 PDF) |
| C45:U45 | C45 | API 테스트 결과 (Postman 스크린샷) |
| B46:U46 | B46 | 2. 종합 테스트 보고서 (5~7 페이지, PDF) |
| C47:U47 | C47 | 테스트 케이스 상세 설명 |
| C48:U48 | C48 | Confusion Matrix |
| C49:U49 | C49 | 성능 지표 (Precision, Recall, F1-score, 추론 속도) |
| C50:U50 | C50 | 실패 케이스 분석 |
| B51:U51 | B51 | 3. 최종 프로젝트 보고서 (10~15 페이지, PDF) |
| C52:U52 | C52 | 프로젝트 전체 과정 종합 |
| C53:U53 | C53 | 기술 문서 (아키텍처, 모델, API) |
| C54:U54 | C54 | 성능 평가 및 분석 |
| C55:U55 | C55 | 결론 및 향후 과제 |
| C56:U56 | C56 | 참고 문헌 |
| B57:U57 | B57 | 4. 발표 자료 (PPT, 15~20 슬라이드) |
| C58:U58 | C58 | 프로젝트 요약 |
| C59:U59 | C59 | 핵심 기술 |
| C60:U60 | C60 | 시연 영상 포함 |
| C61:U61 | C61 | 결과 및 인사이트 |
| B62:U62 | B62 | 5. GitHub 저장소 최종본 |
| C63:U63 | C63 | README.md (프로젝트 전체 설명) |
| C64:U64 | C64 | 설치 및 실행 가이드 |
| C65:U65 | C65 | API 사용 예시 |
| C66:U66 | C66 | 라이선스 정보 |
| B67:U67 | B67 | 6. 프로젝트 회고록 (팀 1페이지 + 개인 각 1페이지) |
| C68:U68 | C68 | 팀 회고:<br><br>- 프로젝트 진행 과정 요약<br>- 잘한 점 / 아쉬운 점<br>- 팀워크 평가 |
| C69:U69 | C69 | 개인 회고:<br><br>- 자신의 역할 및 기여<br>- 기술적으로 배운 점<br>- 다음 프로젝트에서 개선할 점 |
| A70:A78 | A70 | 평가 기준 |
| B70:U70 | B70 | 완성도 평가 (70%) |
| C71:S71 | C71 | Q1. 구현한 침입 탐지 시스템을 외부에서 호출 가능한 형태로 배포했는가?<br>PASS 기준:<br>- REST API 형태로 제공<br>- 요청/응답 동작 확인<br>- API 명세서 작성 완료 |
| C72:S72 | C72 | Q2. 다양한 상황을 고려한 테스트 시나리오를 설계하고 실행했는가?<br>PASS 기준:<br>- 최소 10개 이상의 테스트 수행<br>- 정상·침입·엣지 케이스 포함<br>- 결과 기록 완료 |
| C73:S73 | C73 | Q3. 시스템 성능을 정량적으로 측정하고 결과를 분석했는가?<br>PASS 기준:<br>- Precision, Recall, F1-score 등 지표 활용<br>- 실패 사례 분석 포함<br>- 목표 대비 결과 비교 수행 |
| C74:S74 | C74 | Q4. 테스트 결과를 기반으로 시스템 개선 방향을 제안했는가?<br>PASS 기준:<br>- 성능 개선 아이디어 제시<br>- 운영 관점의 개선 포함<br>- 적용 우선순위 제안 |
| C75:S75 | C75 | Q5. 프로젝트 결과를 문서·발표·시연 형태로 효과적으로 전달했는가?<br>PASS 기준:<br>- 최종 보고서 제출<br>- 발표 자료 작성<br>- 시연 또는 시연 영상 준비 완료 |
| B76:U76 | B76 | 팀워크 평가 (30%) |
| C77:S77 | C77 | Q. 배포·테스트·분석 과정에서 팀원이 역할을 분담하여 공동으로 수행했는가?<br>PASS 기준:<br>- 역할 분담 기록 존재<br>- 테스트 및 분석 결과 공동 작성<br>- 일정 내 산출물 통합 완료 |
| C78:S78 | C78 | Q. 프로젝트 회고를 통해 팀의 성과와 개선점을 공유했는가?<br>PASS 기준:<br>- 팀 회고 문서 작성<br>- 개인 기여 및 학습 내용 정리<br>- 다음 프로젝트 개선안 도출 |
| A79:U79 | A79 | AI 지시문 가이드 (학생용) |
| A80:A106 | A80 | 생성형 AI 활용 가이드 |
| B80:U80 | B80 | 허용되는 AI 활용 (권장) |
| C81:U81 | C81 | API 서버 구축 지원 |
| C82:U82 | C82 | "Flask로 파일 업로드를 받는 REST API 엔드포인트를 작성해주세요. <br>업로드된 파일을 임시 폴더에 저장하고, <br>처리 후 JSON 응답을 반환해야 합니다." |
| C83:U83 | C83 | 테스트 코드 작성 |
| C84:U84 | C84 | "pytest를 사용하여 침입 탐지 함수를 테스트하는 <br>단위 테스트 코드를 작성해주세요.<br><br>def test_detect_intrusion_normal():<br># TODO<br>" |
| C85:U85 | C85 | 문서 작성 지원 |
| C86:U86 | C86 | "API 명세서를 Markdown 형식으로 작성하려고 합니다. <br>REST API 문서의 표준 구조를 알려주세요." |
| C87:U87 | C87 | 발표 자료 구성 조언 |
| C88:U88 | C88 | "15분 기술 프로젝트 발표의 효과적인 슬라이드 구성을 제안해주세요. <br>청중은 교수님과 동료 학생들입니다." |
| C89:U89 | C89 | 성능 개선 아이디어 |
| C90:U90 | C90 | "침입 탐지 모델의 False Positive가 20%입니다. <br>이를 줄이기 위한 방법을 3가지 제안해주세요." |
| B91:U91 | B91 | 금지되는 AI 활용 (부정행위) |
| C92:U92 | C92 | 보고서 전체 작성 |
| C93:U93 | C93 | "침입 탐지 프로젝트 최종 보고서를 15페이지로 작성해줘" ❌ |
| C94:U94 | C94 | 발표 대본 전체 생성 |
| C95:U95 | C95 | "10분 발표 대본을 처음부터 끝까지 작성해줘" ❌ |
| C96:U96 | C96 | 테스트 결과 조작 |
| C97:U97 | C97 | "Confusion Matrix 데이터를 좋아 보이게 만들어줘" ❌ |
| C98:U98 | C98 | 회고록 대신 작성 |
| C99:U99 | C99 | "팀원 4명의 개인 회고록을 각각 작성해줘" ❌ |
| B100:U100 | B100 | AI 활용 최종 원칙 |
| C101:U101 | C101 | AI는 도구일 뿐, 학습은 본인이 |
| C102:U102 | C102 | - AI 답변을 100% 신뢰하지 말고 검증<br>- 공식 문서(PyTorch, Flask 등)와 교차 확인 |
| C103:U103 | C103 | 인용 표시 |
| C104:U104 | C104 | - 최종 보고서에 "AI 활용 내역" 섹션 추가<br><br>예: "API 서버 구축 시 ChatGPT의 Flask 예시 코드를 참고하였으며, <br>프로젝트에 맞게 수정하였음. 전처리 파이프라인은 팀원이 독자적으로 작성함."<br> |
| C105:U105 | C105 | 발표는 본인이 직접 |
| C106:U106 | C106 | - AI가 생성한 대본을 읽지 말고, 자신의 언어로 발표<br>- 프로젝트를 직접 수행했다면 자연스럽게 설명 가능 |

### Layout Metadata

```json
{
  "freeze_panes": null,
  "sheet_view_show_grid_lines": null,
  "column_dimensions": [],
  "row_dimensions": [
    {
      "row": 1,
      "height": 31.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 2,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 3,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 4,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 5,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 6,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 7,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 8,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 9,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 10,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 11,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 12,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 13,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 14,
      "height": 31.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 15,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 16,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 17,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 18,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 19,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 20,
      "height": 62.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 21,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 22,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 23,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 24,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 25,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 26,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 27,
      "height": 85.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 28,
      "height": 100.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 29,
      "height": 110.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 30,
      "height": 99.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 31,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 32,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 33,
      "height": 97.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 34,
      "height": 97.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 35,
      "height": 97.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 36,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 37,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 38,
      "height": 128.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 39,
      "height": 98.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 40,
      "height": 98.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 41,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 42,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 43,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 44,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 45,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 46,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 47,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 48,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 49,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 50,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 51,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 52,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 53,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 54,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 55,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 56,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 57,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 58,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 59,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 60,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 61,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 62,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 63,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 64,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 65,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 66,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 67,
      "height": 46.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 68,
      "height": 84.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 69,
      "height": 84.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 70,
      "height": 51.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 71,
      "height": 94.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 72,
      "height": 94.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 73,
      "height": 94.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 74,
      "height": 94.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 75,
      "height": 94.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 76,
      "height": 51.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 77,
      "height": 100.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 78,
      "height": 100.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 79,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 80,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 81,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 82,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 83,
      "height": 44.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 84,
      "height": 87.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 85,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 86,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 87,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 88,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 89,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 90,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 91,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 92,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 93,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 94,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 95,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 96,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 97,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 98,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 99,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 100,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 101,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 102,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 103,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 104,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 105,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 106,
      "height": 58.8,
      "hidden": false,
      "outline_level": 0
    }
  ]
}
```

### Data Validations

```json
[]
```

### Tables

```json
[]
```

### Worksheet Relationships

```json
[]
```

### OOXML Assets

_None_

## Sheet: 프로젝트평가

```json
{
  "title": "프로젝트평가",
  "state": "visible",
  "used_range": "A2:U27",
  "min_row": 2,
  "min_column": 1,
  "max_row": 27,
  "max_column": 21,
  "nonempty_record_count": 62,
  "merged_range_count": 45,
  "data_validation_count": 0,
  "table_count": 0,
  "relationship_count": 0,
  "asset_count": 0
}
```

### Grid View

| row | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2 | 전체 프로젝트 평가 종합 (최종) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 3 | 이 과제의 목적은 단순 구현이 아니라 “제약조건을 만족하는 실전형 AI 시스템 완성”에 있음 (12주 / 팀 3명 / 고난도 / 멀티모달 탐지 / 실시간 경보 / 설명가능성 포함)<br>그래서 종합평가는 미션 점수 합산이 아니라, 프로젝트 목표 달성 여부를 검증하는 관문(Gate) 평가를 추가로 수행함 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 4 | 최종 성적 산출 방식 | 평가항목 |  |  |  |  | 평가의도 |  |  |  | 질문 |  |  |  |  |  |  |  |  |  |  |
| 5 |  | 문제 해결의 적합성 |  |  |  |  | 만든 것이 실제 문제를 해결하는가? |  |  |  | Q1. 개발한 시스템이 군사시설 침입 탐지 문제를 실제로 해결하는 형태인가?<br>PASS 기준:<br>- 침입 탐지 시나리오 구현 완료<br>- 실제 입력(CCTV 또는 센서) 기반 동작<br>- 결과 출력 확인 가능 |  |  |  |  |  |  |  |  | PASS | FAIL |
| 6 |  | 시스템 통합 완성도 |  |  |  |  | 부분 기능이 아니라 완성된 시스템인가? |  |  |  | Q2. 데이터 → 추론 → 경보까지 End-to-End 동작하는가?<br>PASS 기준:<br>- 전체 흐름 중 수동 개입 없음<br>- 시스템 연속 실행 가능<br>- 오류 없이 결과 생성 |  |  |  |  |  |  |  |  | PASS | FAIL |
| 7 |  | 성능 및 제약조건 충족 |  |  |  |  | 현장 투입 가능한 수준인가? |  |  |  | Q3. 프로젝트 제약조건을 충족하는가?<br>PASS 기준:<br>- 추론 시간 1초 이내<br>- 이벤트 발생 후 3초 이내 경보<br>- 클라우드 API 미사용<br>- AI 판단 근거 제공 |  |  |  |  |  |  |  |  | PASS | FAIL |
| 8 |  | 기술적 타당성 및 설명 가능성 |  |  |  |  | 왜 그렇게 만들었는지 이해했는가? |  |  |  | Q4. 팀이 선택한 AI 방식과 결과를 설명할 수 있는가?<br>PASS 기준:<br>- 모델 선정 이유 설명 가능<br>- 결과 해석 가능<br>- 실패 원인 분석 포함 |  |  |  |  |  |  |  |  | PASS | FAIL |
| 9 |  | 검증 및 개선 역량 |  |  |  |  | AI 개발 프로세스를 학습했는가? |  |  |  | Q5. 테스트 결과를 바탕으로 개선 방향을 도출했는가?<br>PASS 기준:<br>- 테스트 수행<br>- 성능 분석<br>- 개선안 제안 |  |  |  |  |  |  |  |  | PASS | FAIL |
| 10 |  | 팀 협업 수행 |  |  |  |  | 실제 개발 조직처럼 일했는가? |  |  |  | Q6. 팀 단위로 프로젝트를 운영하고 협업 증빙을 제출했는가?<br>PASS 기준:<br>- 역할 분담 존재<br>- 협업 기록 존재<br>- 산출물 통합 완료 |  |  |  |  |  |  |  |  | PASS | FAIL |
| 11 |  | 최종전달력 |  |  |  |  | 만드는 것뿐 아니라 전달까지 했는가? |  |  |  | Q7. 결과물을 타인에게 이해 가능하게 전달했는가?<br>PASS 기준:<br>- 발표 수행<br>- 시연 성공<br>- 최종 문서 제출 |  |  |  |  |  |  |  |  | PASS | FAIL |
| 12 | 최종결과 | PASS: 7개 항목 모두 PASS<br>조건부 PASS: 6개 PASS + Q3 포함<br>FAIL: 핵심 항목(Q1~Q3) 중 1개라도 FAIL |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  | PASS | FAIL |
| 13 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 14 | 참고 자료 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 15 | 추천 논문 및 자료 | Video Anomaly Detection: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 16 |  |  | "Real-world Anomaly Detection in Surveillance Videos" (CVPR 2018) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 17 |  | Intrusion Detection: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 18 |  |  | "Deep Learning for Network Intrusion Detection" (IEEE Access) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 19 |  | Object Detection: |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 20 |  |  | YOLO, Faster R-CNN 논문 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 21 | 온라인 튜토리얼 | PyTorch 공식 튜토리얼 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 22 |  | Flask REST API 튜토리얼 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 23 |  | OpenCV 영상 처리 가이드 |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 24 | 도구 및 플랫폼 | GitHub (버전 관리) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 25 |  | Google Colab (GPU 무료 사용) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 26 |  | Weights & Biases (실험 관리) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |
| 27 |  | Postman (API 테스트) |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |  |

### Non-Empty Cell Records

```jsonl
{"address":"A2","row":2,"column":1,"column_letter":"A","raw_value":"전체 프로젝트 평가 종합 (최종)","cached_value":"전체 프로젝트 평가 종합 (최종)","formula":null,"data_type":"s","number_format":"General","style_id":124,"merged_range":"A2:U2","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A3","row":3,"column":1,"column_letter":"A","raw_value":"이 과제의 목적은 단순 구현이 아니라 “제약조건을 만족하는 실전형 AI 시스템 완성”에 있음 (12주 / 팀 3명 / 고난도 / 멀티모달 탐지 / 실시간 경보 / 설명가능성 포함)\n그래서 종합평가는 미션 점수 합산이 아니라, 프로젝트 목표 달성 여부를 검증하는 관문(Gate) 평가를 추가로 수행함","cached_value":"이 과제의 목적은 단순 구현이 아니라 “제약조건을 만족하는 실전형 AI 시스템 완성”에 있음 (12주 / 팀 3명 / 고난도 / 멀티모달 탐지 / 실시간 경보 / 설명가능성 포함)\n그래서 종합평가는 미션 점수 합산이 아니라, 프로젝트 목표 달성 여부를 검증하는 관문(Gate) 평가를 추가로 수행함","formula":null,"data_type":"s","number_format":"General","style_id":125,"merged_range":"A3:U3","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"A4","row":4,"column":1,"column_letter":"A","raw_value":"최종 성적 산출 방식","cached_value":"최종 성적 산출 방식","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"A4:A11","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B4","row":4,"column":2,"column_letter":"B","raw_value":"평가항목","cached_value":"평가항목","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"B4:F4","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"G4","row":4,"column":7,"column_letter":"G","raw_value":"평가의도","cached_value":"평가의도","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"G4:J4","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"K4","row":4,"column":11,"column_letter":"K","raw_value":"질문","cached_value":"질문","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"K4:U4","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B5","row":5,"column":2,"column_letter":"B","raw_value":"문제 해결의 적합성","cached_value":"문제 해결의 적합성","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"B5:F5","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"G5","row":5,"column":7,"column_letter":"G","raw_value":"만든 것이 실제 문제를 해결하는가?","cached_value":"만든 것이 실제 문제를 해결하는가?","formula":null,"data_type":"s","number_format":"0%","style_id":101,"merged_range":"G5:J5","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"K5","row":5,"column":11,"column_letter":"K","raw_value":"Q1. 개발한 시스템이 군사시설 침입 탐지 문제를 실제로 해결하는 형태인가?\nPASS 기준:\n- 침입 탐지 시나리오 구현 완료\n- 실제 입력(CCTV 또는 센서) 기반 동작\n- 결과 출력 확인 가능","cached_value":"Q1. 개발한 시스템이 군사시설 침입 탐지 문제를 실제로 해결하는 형태인가?\nPASS 기준:\n- 침입 탐지 시나리오 구현 완료\n- 실제 입력(CCTV 또는 센서) 기반 동작\n- 결과 출력 확인 가능","formula":null,"data_type":"s","number_format":"General","style_id":102,"merged_range":"K5:S5","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T5","row":5,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U5","row":5,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B6","row":6,"column":2,"column_letter":"B","raw_value":"시스템 통합 완성도","cached_value":"시스템 통합 완성도","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"B6:F6","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"G6","row":6,"column":7,"column_letter":"G","raw_value":"부분 기능이 아니라 완성된 시스템인가?","cached_value":"부분 기능이 아니라 완성된 시스템인가?","formula":null,"data_type":"s","number_format":"0%","style_id":101,"merged_range":"G6:J6","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"K6","row":6,"column":11,"column_letter":"K","raw_value":"Q2. 데이터 → 추론 → 경보까지 End-to-End 동작하는가?\nPASS 기준:\n- 전체 흐름 중 수동 개입 없음\n- 시스템 연속 실행 가능\n- 오류 없이 결과 생성","cached_value":"Q2. 데이터 → 추론 → 경보까지 End-to-End 동작하는가?\nPASS 기준:\n- 전체 흐름 중 수동 개입 없음\n- 시스템 연속 실행 가능\n- 오류 없이 결과 생성","formula":null,"data_type":"s","number_format":"General","style_id":102,"merged_range":"K6:S6","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T6","row":6,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U6","row":6,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B7","row":7,"column":2,"column_letter":"B","raw_value":"성능 및 제약조건 충족","cached_value":"성능 및 제약조건 충족","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"B7:F7","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"G7","row":7,"column":7,"column_letter":"G","raw_value":"현장 투입 가능한 수준인가?","cached_value":"현장 투입 가능한 수준인가?","formula":null,"data_type":"s","number_format":"0%","style_id":101,"merged_range":"G7:J7","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"K7","row":7,"column":11,"column_letter":"K","raw_value":"Q3. 프로젝트 제약조건을 충족하는가?\nPASS 기준:\n- 추론 시간 1초 이내\n- 이벤트 발생 후 3초 이내 경보\n- 클라우드 API 미사용\n- AI 판단 근거 제공","cached_value":"Q3. 프로젝트 제약조건을 충족하는가?\nPASS 기준:\n- 추론 시간 1초 이내\n- 이벤트 발생 후 3초 이내 경보\n- 클라우드 API 미사용\n- AI 판단 근거 제공","formula":null,"data_type":"s","number_format":"General","style_id":102,"merged_range":"K7:S7","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T7","row":7,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U7","row":7,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B8","row":8,"column":2,"column_letter":"B","raw_value":"기술적 타당성 및 설명 가능성","cached_value":"기술적 타당성 및 설명 가능성","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"B8:F8","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"G8","row":8,"column":7,"column_letter":"G","raw_value":"왜 그렇게 만들었는지 이해했는가?","cached_value":"왜 그렇게 만들었는지 이해했는가?","formula":null,"data_type":"s","number_format":"0%","style_id":101,"merged_range":"G8:J8","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"K8","row":8,"column":11,"column_letter":"K","raw_value":"Q4. 팀이 선택한 AI 방식과 결과를 설명할 수 있는가?\nPASS 기준:\n- 모델 선정 이유 설명 가능\n- 결과 해석 가능\n- 실패 원인 분석 포함","cached_value":"Q4. 팀이 선택한 AI 방식과 결과를 설명할 수 있는가?\nPASS 기준:\n- 모델 선정 이유 설명 가능\n- 결과 해석 가능\n- 실패 원인 분석 포함","formula":null,"data_type":"s","number_format":"General","style_id":102,"merged_range":"K8:S8","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T8","row":8,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U8","row":8,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B9","row":9,"column":2,"column_letter":"B","raw_value":"검증 및 개선 역량","cached_value":"검증 및 개선 역량","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"B9:F9","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"G9","row":9,"column":7,"column_letter":"G","raw_value":"AI 개발 프로세스를 학습했는가?","cached_value":"AI 개발 프로세스를 학습했는가?","formula":null,"data_type":"s","number_format":"0%","style_id":101,"merged_range":"G9:J9","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"K9","row":9,"column":11,"column_letter":"K","raw_value":"Q5. 테스트 결과를 바탕으로 개선 방향을 도출했는가?\nPASS 기준:\n- 테스트 수행\n- 성능 분석\n- 개선안 제안","cached_value":"Q5. 테스트 결과를 바탕으로 개선 방향을 도출했는가?\nPASS 기준:\n- 테스트 수행\n- 성능 분석\n- 개선안 제안","formula":null,"data_type":"s","number_format":"General","style_id":102,"merged_range":"K9:S9","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T9","row":9,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U9","row":9,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B10","row":10,"column":2,"column_letter":"B","raw_value":"팀 협업 수행","cached_value":"팀 협업 수행","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"B10:F10","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"G10","row":10,"column":7,"column_letter":"G","raw_value":"실제 개발 조직처럼 일했는가?","cached_value":"실제 개발 조직처럼 일했는가?","formula":null,"data_type":"s","number_format":"0%","style_id":101,"merged_range":"G10:J10","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"K10","row":10,"column":11,"column_letter":"K","raw_value":"Q6. 팀 단위로 프로젝트를 운영하고 협업 증빙을 제출했는가?\nPASS 기준:\n- 역할 분담 존재\n- 협업 기록 존재\n- 산출물 통합 완료","cached_value":"Q6. 팀 단위로 프로젝트를 운영하고 협업 증빙을 제출했는가?\nPASS 기준:\n- 역할 분담 존재\n- 협업 기록 존재\n- 산출물 통합 완료","formula":null,"data_type":"s","number_format":"General","style_id":102,"merged_range":"K10:S10","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T10","row":10,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U10","row":10,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B11","row":11,"column":2,"column_letter":"B","raw_value":"최종전달력","cached_value":"최종전달력","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":"B11:F11","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"G11","row":11,"column":7,"column_letter":"G","raw_value":"만드는 것뿐 아니라 전달까지 했는가?","cached_value":"만드는 것뿐 아니라 전달까지 했는가?","formula":null,"data_type":"s","number_format":"0%","style_id":101,"merged_range":"G11:J11","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"K11","row":11,"column":11,"column_letter":"K","raw_value":"Q7. 결과물을 타인에게 이해 가능하게 전달했는가?\nPASS 기준:\n- 발표 수행\n- 시연 성공\n- 최종 문서 제출","cached_value":"Q7. 결과물을 타인에게 이해 가능하게 전달했는가?\nPASS 기준:\n- 발표 수행\n- 시연 성공\n- 최종 문서 제출","formula":null,"data_type":"s","number_format":"General","style_id":102,"merged_range":"K11:S11","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T11","row":11,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U11","row":11,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A12","row":12,"column":1,"column_letter":"A","raw_value":"최종결과","cached_value":"최종결과","formula":null,"data_type":"s","number_format":"General","style_id":21,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":false}}
{"address":"B12","row":12,"column":2,"column_letter":"B","raw_value":"PASS: 7개 항목 모두 PASS\n조건부 PASS: 6개 PASS + Q3 포함\nFAIL: 핵심 항목(Q1~Q3) 중 1개라도 FAIL","cached_value":"PASS: 7개 항목 모두 PASS\n조건부 PASS: 6개 PASS + Q3 포함\nFAIL: 핵심 항목(Q1~Q3) 중 1개라도 FAIL","formula":null,"data_type":"s","number_format":"General","style_id":103,"merged_range":"B12:S12","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"left","vertical":"center","wrap_text":true}}
{"address":"T12","row":12,"column":20,"column_letter":"T","raw_value":"PASS","cached_value":"PASS","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"U12","row":12,"column":21,"column_letter":"U","raw_value":"FAIL","cached_value":"FAIL","formula":null,"data_type":"s","number_format":"General","style_id":100,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A14","row":14,"column":1,"column_letter":"A","raw_value":"참고 자료","cached_value":"참고 자료","formula":null,"data_type":"s","number_format":"General","style_id":126,"merged_range":"A14:U14","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"A15","row":15,"column":1,"column_letter":"A","raw_value":"추천 논문 및 자료","cached_value":"추천 논문 및 자료","formula":null,"data_type":"s","number_format":"General","style_id":127,"merged_range":"A15:A20","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B15","row":15,"column":2,"column_letter":"B","raw_value":"Video Anomaly Detection:","cached_value":"Video Anomaly Detection:","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B15:U15","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C16","row":16,"column":3,"column_letter":"C","raw_value":"\"Real-world Anomaly Detection in Surveillance Videos\" (CVPR 2018)","cached_value":"\"Real-world Anomaly Detection in Surveillance Videos\" (CVPR 2018)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C16:U16","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B17","row":17,"column":2,"column_letter":"B","raw_value":"Intrusion Detection:","cached_value":"Intrusion Detection:","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B17:U17","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C18","row":18,"column":3,"column_letter":"C","raw_value":"\"Deep Learning for Network Intrusion Detection\" (IEEE Access)","cached_value":"\"Deep Learning for Network Intrusion Detection\" (IEEE Access)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C18:U18","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B19","row":19,"column":2,"column_letter":"B","raw_value":"Object Detection:","cached_value":"Object Detection:","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B19:U19","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"C20","row":20,"column":3,"column_letter":"C","raw_value":"YOLO, Faster R-CNN 논문","cached_value":"YOLO, Faster R-CNN 논문","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"C20:U20","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A21","row":21,"column":1,"column_letter":"A","raw_value":"온라인 튜토리얼","cached_value":"온라인 튜토리얼","formula":null,"data_type":"s","number_format":"General","style_id":127,"merged_range":"A21:A23","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B21","row":21,"column":2,"column_letter":"B","raw_value":"PyTorch 공식 튜토리얼","cached_value":"PyTorch 공식 튜토리얼","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B21:U21","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B22","row":22,"column":2,"column_letter":"B","raw_value":"Flask REST API 튜토리얼","cached_value":"Flask REST API 튜토리얼","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B22:U22","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B23","row":23,"column":2,"column_letter":"B","raw_value":"OpenCV 영상 처리 가이드","cached_value":"OpenCV 영상 처리 가이드","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B23:U23","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"A24","row":24,"column":1,"column_letter":"A","raw_value":"도구 및 플랫폼","cached_value":"도구 및 플랫폼","formula":null,"data_type":"s","number_format":"General","style_id":127,"merged_range":"A24:A27","hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":"center","vertical":"center","wrap_text":true}}
{"address":"B24","row":24,"column":2,"column_letter":"B","raw_value":"GitHub (버전 관리)","cached_value":"GitHub (버전 관리)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B24:U24","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B25","row":25,"column":2,"column_letter":"B","raw_value":"Google Colab (GPU 무료 사용)","cached_value":"Google Colab (GPU 무료 사용)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B25:U25","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B26","row":26,"column":2,"column_letter":"B","raw_value":"Weights & Biases (실험 관리)","cached_value":"Weights & Biases (실험 관리)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B26:U26","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
{"address":"B27","row":27,"column":2,"column_letter":"B","raw_value":"Postman (API 테스트)","cached_value":"Postman (API 테스트)","formula":null,"data_type":"s","number_format":"General","style_id":115,"merged_range":"B27:U27","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":"solid","fgColor":"FFFFFFFF"},"alignment":{"horizontal":null,"vertical":"center","wrap_text":true}}
```

### Merged Ranges

| range | anchor | anchor_raw_value |
| --- | --- | --- |
| A2:U2 | A2 | 전체 프로젝트 평가 종합 (최종) |
| A3:U3 | A3 | 이 과제의 목적은 단순 구현이 아니라 “제약조건을 만족하는 실전형 AI 시스템 완성”에 있음 (12주 / 팀 3명 / 고난도 / 멀티모달 탐지 / 실시간 경보 / 설명가능성 포함)<br>그래서 종합평가는 미션 점수 합산이 아니라, 프로젝트 목표 달성 여부를 검증하는 관문(Gate) 평가를 추가로 수행함 |
| A4:A11 | A4 | 최종 성적 산출 방식 |
| B4:F4 | B4 | 평가항목 |
| G4:J4 | G4 | 평가의도 |
| K4:U4 | K4 | 질문 |
| B5:F5 | B5 | 문제 해결의 적합성 |
| G5:J5 | G5 | 만든 것이 실제 문제를 해결하는가? |
| K5:S5 | K5 | Q1. 개발한 시스템이 군사시설 침입 탐지 문제를 실제로 해결하는 형태인가?<br>PASS 기준:<br>- 침입 탐지 시나리오 구현 완료<br>- 실제 입력(CCTV 또는 센서) 기반 동작<br>- 결과 출력 확인 가능 |
| B6:F6 | B6 | 시스템 통합 완성도 |
| G6:J6 | G6 | 부분 기능이 아니라 완성된 시스템인가? |
| K6:S6 | K6 | Q2. 데이터 → 추론 → 경보까지 End-to-End 동작하는가?<br>PASS 기준:<br>- 전체 흐름 중 수동 개입 없음<br>- 시스템 연속 실행 가능<br>- 오류 없이 결과 생성 |
| B7:F7 | B7 | 성능 및 제약조건 충족 |
| G7:J7 | G7 | 현장 투입 가능한 수준인가? |
| K7:S7 | K7 | Q3. 프로젝트 제약조건을 충족하는가?<br>PASS 기준:<br>- 추론 시간 1초 이내<br>- 이벤트 발생 후 3초 이내 경보<br>- 클라우드 API 미사용<br>- AI 판단 근거 제공 |
| B8:F8 | B8 | 기술적 타당성 및 설명 가능성 |
| G8:J8 | G8 | 왜 그렇게 만들었는지 이해했는가? |
| K8:S8 | K8 | Q4. 팀이 선택한 AI 방식과 결과를 설명할 수 있는가?<br>PASS 기준:<br>- 모델 선정 이유 설명 가능<br>- 결과 해석 가능<br>- 실패 원인 분석 포함 |
| B9:F9 | B9 | 검증 및 개선 역량 |
| G9:J9 | G9 | AI 개발 프로세스를 학습했는가? |
| K9:S9 | K9 | Q5. 테스트 결과를 바탕으로 개선 방향을 도출했는가?<br>PASS 기준:<br>- 테스트 수행<br>- 성능 분석<br>- 개선안 제안 |
| B10:F10 | B10 | 팀 협업 수행 |
| G10:J10 | G10 | 실제 개발 조직처럼 일했는가? |
| K10:S10 | K10 | Q6. 팀 단위로 프로젝트를 운영하고 협업 증빙을 제출했는가?<br>PASS 기준:<br>- 역할 분담 존재<br>- 협업 기록 존재<br>- 산출물 통합 완료 |
| B11:F11 | B11 | 최종전달력 |
| G11:J11 | G11 | 만드는 것뿐 아니라 전달까지 했는가? |
| K11:S11 | K11 | Q7. 결과물을 타인에게 이해 가능하게 전달했는가?<br>PASS 기준:<br>- 발표 수행<br>- 시연 성공<br>- 최종 문서 제출 |
| B12:S12 | B12 | PASS: 7개 항목 모두 PASS<br>조건부 PASS: 6개 PASS + Q3 포함<br>FAIL: 핵심 항목(Q1~Q3) 중 1개라도 FAIL |
| A14:U14 | A14 | 참고 자료 |
| A15:A20 | A15 | 추천 논문 및 자료 |
| B15:U15 | B15 | Video Anomaly Detection: |
| C16:U16 | C16 | "Real-world Anomaly Detection in Surveillance Videos" (CVPR 2018) |
| B17:U17 | B17 | Intrusion Detection: |
| C18:U18 | C18 | "Deep Learning for Network Intrusion Detection" (IEEE Access) |
| B19:U19 | B19 | Object Detection: |
| C20:U20 | C20 | YOLO, Faster R-CNN 논문 |
| A21:A23 | A21 | 온라인 튜토리얼 |
| B21:U21 | B21 | PyTorch 공식 튜토리얼 |
| B22:U22 | B22 | Flask REST API 튜토리얼 |
| B23:U23 | B23 | OpenCV 영상 처리 가이드 |
| A24:A27 | A24 | 도구 및 플랫폼 |
| B24:U24 | B24 | GitHub (버전 관리) |
| B25:U25 | B25 | Google Colab (GPU 무료 사용) |
| B26:U26 | B26 | Weights & Biases (실험 관리) |
| B27:U27 | B27 | Postman (API 테스트) |

### Layout Metadata

```json
{
  "freeze_panes": null,
  "sheet_view_show_grid_lines": null,
  "column_dimensions": [
    {
      "column": "F",
      "width": 9.296875,
      "hidden": false,
      "outline_level": 0
    },
    {
      "column": "J",
      "width": 20.296875,
      "hidden": false,
      "outline_level": 0
    }
  ],
  "row_dimensions": [
    {
      "row": 1,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 2,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 3,
      "height": 74.4,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 4,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 5,
      "height": 106.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 6,
      "height": 106.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 7,
      "height": 106.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 8,
      "height": 106.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 9,
      "height": 106.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 10,
      "height": 106.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 11,
      "height": 106.8,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 12,
      "height": 100.2,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 13,
      "height": 18.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 14,
      "height": 27.6,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 15,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 16,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 17,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 18,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 19,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 20,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 21,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 22,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 23,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 24,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 25,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 26,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    },
    {
      "row": 27,
      "height": 51.0,
      "hidden": false,
      "outline_level": 0
    }
  ]
}
```

### Data Validations

```json
[]
```

### Tables

```json
[]
```

### Worksheet Relationships

```json
[]
```

### OOXML Assets

_None_

## Sheet: 과제난이도

```json
{
  "title": "과제난이도",
  "state": "visible",
  "used_range": "A1:E12",
  "min_row": 1,
  "min_column": 1,
  "max_row": 12,
  "max_column": 5,
  "nonempty_record_count": 39,
  "merged_range_count": 3,
  "data_validation_count": 0,
  "table_count": 0,
  "relationship_count": 0,
  "asset_count": 0
}
```

### Grid View

| row | A | B | C | D | E |
| --- | --- | --- | --- | --- | --- |
| 1 | 참고사항. 과제 난이도 |  |  |  |  |
| 2 |  | 레벨 | 구분 | 설명 | 평가기준 |
| 3 |  | 1 | 초급 | 기본 코딩 실습 | 불가 |
| 4 |  | 2 |  | 단일 알고리즘 구현 | 불가 |
| 5 |  | 3 |  | 데이터 분석 | 불가 |
| 6 |  | 4 | 중급 | 단일 AI 모델 학습 | 일부 포함 |
| 7 |  | 5 |  | 웹/앱 + AI 연결 | 일부 포함 |
| 8 |  | 6 |  | 단일 데이터 기반 AI 서비스 | CCTV만 분석 |
| 9 |  | 7 | 고급 | 실시간 AI 시스템 | 실시간 영상 탐지 |
| 10 |  | 8 |  | 멀티모달 AI + 운영 시스템 | 현재 프로젝트 최소 목표 |
| 11 |  | 9 |  | 현장 적용 가능한 AI 서비스 | 권장 최종 목표 |
| 12 |  | 10 | 마스터 | 대규모 상용·군 운용 체계 | 범위 초과 |

### Non-Empty Cell Records

```jsonl
{"address":"A1","row":1,"column":1,"column_letter":"A","raw_value":"참고사항. 과제 난이도","cached_value":"참고사항. 과제 난이도","formula":null,"data_type":"s","number_format":"General","style_id":22,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B2","row":2,"column":2,"column_letter":"B","raw_value":"레벨","cached_value":"레벨","formula":null,"data_type":"s","number_format":"General","style_id":10,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:0;tint:0.0"},"fill":{"type":"solid","fgColor":"theme:4;tint:0.0"},"alignment":{"horizontal":"center","vertical":"top","wrap_text":false}}
{"address":"C2","row":2,"column":3,"column_letter":"C","raw_value":"구분","cached_value":"구분","formula":null,"data_type":"s","number_format":"General","style_id":10,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:0;tint:0.0"},"fill":{"type":"solid","fgColor":"theme:4;tint:0.0"},"alignment":{"horizontal":"center","vertical":"top","wrap_text":false}}
{"address":"D2","row":2,"column":4,"column_letter":"D","raw_value":"설명","cached_value":"설명","formula":null,"data_type":"s","number_format":"General","style_id":10,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:0;tint:0.0"},"fill":{"type":"solid","fgColor":"theme:4;tint:0.0"},"alignment":{"horizontal":"center","vertical":"top","wrap_text":false}}
{"address":"E2","row":2,"column":5,"column_letter":"E","raw_value":"평가기준","cached_value":"평가기준","formula":null,"data_type":"s","number_format":"General","style_id":10,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":true,"italic":false,"underline":null,"color":"theme:0;tint:0.0"},"fill":{"type":"solid","fgColor":"theme:4;tint:0.0"},"alignment":{"horizontal":"center","vertical":"top","wrap_text":false}}
{"address":"B3","row":3,"column":2,"column_letter":"B","raw_value":1,"cached_value":1,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"C3","row":3,"column":3,"column_letter":"C","raw_value":"초급","cached_value":"초급","formula":null,"data_type":"s","number_format":"General","style_id":111,"merged_range":"C3:C5","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"top","wrap_text":false}}
{"address":"D3","row":3,"column":4,"column_letter":"D","raw_value":"기본 코딩 실습","cached_value":"기본 코딩 실습","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E3","row":3,"column":5,"column_letter":"E","raw_value":"불가","cached_value":"불가","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B4","row":4,"column":2,"column_letter":"B","raw_value":2,"cached_value":2,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"D4","row":4,"column":4,"column_letter":"D","raw_value":"단일 알고리즘 구현","cached_value":"단일 알고리즘 구현","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E4","row":4,"column":5,"column_letter":"E","raw_value":"불가","cached_value":"불가","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B5","row":5,"column":2,"column_letter":"B","raw_value":3,"cached_value":3,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"D5","row":5,"column":4,"column_letter":"D","raw_value":"데이터 분석","cached_value":"데이터 분석","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E5","row":5,"column":5,"column_letter":"E","raw_value":"불가","cached_value":"불가","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B6","row":6,"column":2,"column_letter":"B","raw_value":4,"cached_value":4,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"C6","row":6,"column":3,"column_letter":"C","raw_value":"중급","cached_value":"중급","formula":null,"data_type":"s","number_format":"General","style_id":111,"merged_range":"C6:C8","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"top","wrap_text":false}}
{"address":"D6","row":6,"column":4,"column_letter":"D","raw_value":"단일 AI 모델 학습","cached_value":"단일 AI 모델 학습","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E6","row":6,"column":5,"column_letter":"E","raw_value":"일부 포함","cached_value":"일부 포함","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B7","row":7,"column":2,"column_letter":"B","raw_value":5,"cached_value":5,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"D7","row":7,"column":4,"column_letter":"D","raw_value":"웹/앱 + AI 연결","cached_value":"웹/앱 + AI 연결","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E7","row":7,"column":5,"column_letter":"E","raw_value":"일부 포함","cached_value":"일부 포함","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B8","row":8,"column":2,"column_letter":"B","raw_value":6,"cached_value":6,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"D8","row":8,"column":4,"column_letter":"D","raw_value":"단일 데이터 기반 AI 서비스","cached_value":"단일 데이터 기반 AI 서비스","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E8","row":8,"column":5,"column_letter":"E","raw_value":"CCTV만 분석","cached_value":"CCTV만 분석","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B9","row":9,"column":2,"column_letter":"B","raw_value":7,"cached_value":7,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"C9","row":9,"column":3,"column_letter":"C","raw_value":"고급","cached_value":"고급","formula":null,"data_type":"s","number_format":"General","style_id":111,"merged_range":"C9:C11","hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"top","wrap_text":false}}
{"address":"D9","row":9,"column":4,"column_letter":"D","raw_value":"실시간 AI 시스템","cached_value":"실시간 AI 시스템","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E9","row":9,"column":5,"column_letter":"E","raw_value":"실시간 영상 탐지","cached_value":"실시간 영상 탐지","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B10","row":10,"column":2,"column_letter":"B","raw_value":8,"cached_value":8,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"D10","row":10,"column":4,"column_letter":"D","raw_value":"멀티모달 AI + 운영 시스템","cached_value":"멀티모달 AI + 운영 시스템","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E10","row":10,"column":5,"column_letter":"E","raw_value":"현재 프로젝트 최소 목표","cached_value":"현재 프로젝트 최소 목표","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B11","row":11,"column":2,"column_letter":"B","raw_value":9,"cached_value":9,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"D11","row":11,"column":4,"column_letter":"D","raw_value":"현장 적용 가능한 AI 서비스","cached_value":"현장 적용 가능한 AI 서비스","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E11","row":11,"column":5,"column_letter":"E","raw_value":"권장 최종 목표","cached_value":"권장 최종 목표","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"B12","row":12,"column":2,"column_letter":"B","raw_value":10,"cached_value":10,"formula":null,"data_type":"n","number_format":"General","style_id":7,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":"top","wrap_text":false}}
{"address":"C12","row":12,"column":3,"column_letter":"C","raw_value":"마스터","cached_value":"마스터","formula":null,"data_type":"s","number_format":"General","style_id":111,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":"center","vertical":"top","wrap_text":false}}
{"address":"D12","row":12,"column":4,"column_letter":"D","raw_value":"대규모 상용·군 운용 체계","cached_value":"대규모 상용·군 운용 체계","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
{"address":"E12","row":12,"column":5,"column_letter":"E","raw_value":"범위 초과","cached_value":"범위 초과","formula":null,"data_type":"s","number_format":"General","style_id":9,"merged_range":null,"hyperlink":null,"comment":null,"font":{"bold":false,"italic":false,"underline":null,"color":"theme:1;tint:0.0"},"fill":{"type":null,"fgColor":"00000000"},"alignment":{"horizontal":null,"vertical":null,"wrap_text":false}}
```

### Merged Ranges

| range | anchor | anchor_raw_value |
| --- | --- | --- |
| C3:C5 | C3 | 초급 |
| C6:C8 | C6 | 중급 |
| C9:C11 | C9 | 고급 |

### Layout Metadata

```json
{
  "freeze_panes": null,
  "sheet_view_show_grid_lines": null,
  "column_dimensions": [
    {
      "column": "D",
      "width": 24.69921875,
      "hidden": false,
      "outline_level": 0
    },
    {
      "column": "E",
      "width": 22.19921875,
      "hidden": false,
      "outline_level": 0
    }
  ],
  "row_dimensions": []
}
```

### Data Validations

```json
[]
```

### Tables

```json
[]
```

### Worksheet Relationships

```json
[]
```

### OOXML Assets

_None_
