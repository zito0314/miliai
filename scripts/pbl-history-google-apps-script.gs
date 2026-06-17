const SPREADSHEET_ID = '1tkMOIhMh3Y762vsXra4l9HwYwKeXM10hv1rWdBtGVdM'
const HISTORY_SHEET_NAME = 'pbl_generation_history'
const CHUNK_SHEET_NAME = 'pbl_generation_history_chunks'
const HISTORY_HEADERS = [
  'id',
  'subjectName',
  'title',
  'generationModel',
  'generationModelName',
  'createdAt',
  'updatedAt',
  'missionSheetCount',
]
const CHUNK_HEADERS = ['id', 'chunkIndex', 'chunk']
const PAYLOAD_CHUNK_SIZE = 45000
const MAX_HISTORY_RECORDS = 200

function doPost(event) {
  return handleRequest_(parseBody_(event))
}

function doGet(event) {
  return handleRequest_({
    action: event.parameter.action || 'list',
    secret: event.parameter.secret,
  })
}

function handleRequest_(body) {
  try {
    if (!isAuthorized_(body.secret)) {
      return json_({ ok: false, error: 'Unauthorized' })
    }

    const action = body.action || 'list'
    if (action === 'list') {
      return json_({ ok: true, records: listRecords_() })
    }
    if (action === 'upsert') {
      upsertRecord_(body.record)
      return json_({ ok: true, records: listRecords_() })
    }
    if (action === 'delete') {
      deleteRecord_(body.recordId)
      return json_({ ok: true, records: listRecords_() })
    }
    if (action === 'clear') {
      clearRecords_()
      return json_({ ok: true, records: [] })
    }

    return json_({ ok: false, error: 'Unknown action' })
  } catch (error) {
    return json_({ ok: false, error: String(error && error.message ? error.message : error) })
  }
}

function listRecords_() {
  const sheets = getSheets_()
  const historyValues = getDataRows_(sheets.historySheet)
  const chunkValues = getDataRows_(sheets.chunkSheet)
  const chunksById = chunkValues.reduce((result, row) => {
    const id = String(row[0] || '')
    const chunkIndex = Number(row[1])
    const chunk = String(row[2] || '')
    if (!id || !Number.isFinite(chunkIndex)) return result
    if (!result[id]) result[id] = []
    result[id][chunkIndex] = chunk
    return result
  }, {})

  return historyValues
    .map((row) => {
      const id = String(row[0] || '')
      if (!id) return null

      const payloadJson = (chunksById[id] || []).join('')
      const plan = payloadJson ? JSON.parse(payloadJson) : null
      if (!plan) return null

      return {
        id,
        subjectName: String(row[1] || plan.subjectName || ''),
        title: String(row[2] || plan.projectOverview?.projectTitle || plan.subjectName || ''),
        generationModel: String(row[3] || ''),
        generationModelName: String(row[4] || ''),
        createdAt: String(row[5] || ''),
        updatedAt: String(row[6] || ''),
        plan,
      }
    })
    .filter(Boolean)
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
}

function upsertRecord_(record) {
  if (!record || !record.id || !record.plan) {
    throw new Error('Invalid record')
  }

  const sheets = getSheets_()
  deleteRecordRows_(sheets, record.id)

  sheets.historySheet.appendRow([
    record.id,
    record.subjectName || record.plan.subjectName || '',
    record.title || record.plan.projectOverview?.projectTitle || record.plan.subjectName || '',
    record.generationModel || '',
    record.generationModelName || '',
    record.createdAt || new Date().toISOString(),
    record.updatedAt || new Date().toISOString(),
    record.plan.missionSheetCount || '',
  ])

  const payloadJson = JSON.stringify(record.plan)
  chunkString_(payloadJson).forEach((chunk, index) => {
    sheets.chunkSheet.appendRow([record.id, index, chunk])
  })

  trimRecords_(sheets)
}

function deleteRecord_(recordId) {
  if (!recordId) throw new Error('recordId is required')
  deleteRecordRows_(getSheets_(), recordId)
}

function clearRecords_() {
  const sheets = getSheets_()
  resetSheet_(sheets.historySheet, HISTORY_HEADERS)
  resetSheet_(sheets.chunkSheet, CHUNK_HEADERS)
}

function trimRecords_(sheets) {
  const records = listRecords_()
  const keepIds = new Set(records.slice(0, MAX_HISTORY_RECORDS).map((record) => record.id))
  records.slice(MAX_HISTORY_RECORDS).forEach((record) => deleteRecordRows_(sheets, record.id))

  if (keepIds.size > 0) {
    sortHistorySheet_(sheets.historySheet)
  }
}

function deleteRecordRows_(sheets, recordId) {
  deleteRowsByFirstCell_(sheets.historySheet, recordId)
  deleteRowsByFirstCell_(sheets.chunkSheet, recordId)
}

function deleteRowsByFirstCell_(sheet, value) {
  const lastRow = sheet.getLastRow()
  if (lastRow < 2) return

  const values = sheet.getRange(2, 1, lastRow - 1, 1).getValues()
  for (let index = values.length - 1; index >= 0; index -= 1) {
    if (String(values[index][0]) === String(value)) {
      sheet.deleteRow(index + 2)
    }
  }
}

function sortHistorySheet_(sheet) {
  const lastRow = sheet.getLastRow()
  if (lastRow > 2) {
    sheet.getRange(2, 1, lastRow - 1, HISTORY_HEADERS.length).sort({ column: 7, ascending: false })
  }
}

function getSheets_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID)
  const historySheet = getOrCreateSheet_(spreadsheet, HISTORY_SHEET_NAME, HISTORY_HEADERS)
  const chunkSheet = getOrCreateSheet_(spreadsheet, CHUNK_SHEET_NAME, CHUNK_HEADERS)
  return { historySheet, chunkSheet }
}

function getOrCreateSheet_(spreadsheet, sheetName, headers) {
  const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.insertSheet(sheetName)
  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0]
  const hasHeaders = headers.every((header, index) => firstRow[index] === header)
  if (!hasHeaders) resetSheet_(sheet, headers)
  return sheet
}

function resetSheet_(sheet, headers) {
  sheet.clear()
  sheet.getRange(1, 1, 1, headers.length).setValues([headers])
  sheet.setFrozenRows(1)
}

function getDataRows_(sheet) {
  const lastRow = sheet.getLastRow()
  const lastColumn = sheet.getLastColumn()
  if (lastRow < 2 || lastColumn < 1) return []
  return sheet.getRange(2, 1, lastRow - 1, lastColumn).getValues()
}

function chunkString_(value) {
  const chunks = []
  for (let index = 0; index < value.length; index += PAYLOAD_CHUNK_SIZE) {
    chunks.push(value.slice(index, index + PAYLOAD_CHUNK_SIZE))
  }
  return chunks
}

function parseBody_(event) {
  try {
    return JSON.parse(event.postData.contents || '{}')
  } catch (error) {
    return {}
  }
}

function isAuthorized_(secret) {
  const expectedSecret = PropertiesService.getScriptProperties().getProperty('PBL_HISTORY_SCRIPT_SECRET')
  return Boolean(expectedSecret) && secret === expectedSecret
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON)
}
