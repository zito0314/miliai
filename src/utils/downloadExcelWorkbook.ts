import type { ExcelWorkbook, PblPlan } from '../types/pbl'

type ZipSource = {
  path: string
  content: string
}

const XLSX_MIME_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
const XML_DECLARATION = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'

export function downloadExcelWorkbook(plan: PblPlan) {
  const fileName = buildExcelFileName(plan.project.title)
  const workbookBytes = createXlsxWorkbook(plan.excelWorkbook, plan.project.title)
  const blob = new Blob([workbookBytes], { type: XLSX_MIME_TYPE })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  try {
    link.href = url
    link.download = fileName
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()
  } finally {
    link.remove()
    URL.revokeObjectURL(url)
  }

  return fileName
}

function createXlsxWorkbook(workbook: ExcelWorkbook, title: string) {
  const safeSheetNames = createSafeWorksheetNames(workbook.sheets.map(({ sheetName }) => sheetName))
  const sheets = workbook.sheets.map((sheet, index) => ({
    ...sheet,
    safeName: safeSheetNames[index],
  }))
  const worksheetOverrides = sheets
    .map((_, index) => `<Override PartName="/xl/worksheets/sheet${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`)
    .join('')
  const worksheetRelationships = sheets
    .map((_, index) => `<Relationship Id="rId${index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${index + 1}.xml"/>`)
    .join('')
  const workbookSheets = sheets
    .map((sheet, index) => `<sheet name="${escapeXmlAttribute(sheet.safeName)}" sheetId="${index + 1}" r:id="rId${index + 1}"/>`)
    .join('')
  const now = new Date().toISOString()

  return createZip([
    {
      path: '[Content_Types].xml',
      content: `${XML_DECLARATION}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>${worksheetOverrides}<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/></Types>`,
    },
    {
      path: '_rels/.rels',
      content: `${XML_DECLARATION}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/></Relationships>`,
    },
    {
      path: 'xl/workbook.xml',
      content: `${XML_DECLARATION}<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><workbookPr date1904="false"/><sheets>${workbookSheets}</sheets></workbook>`,
    },
    {
      path: 'xl/_rels/workbook.xml.rels',
      content: `${XML_DECLARATION}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${worksheetRelationships}</Relationships>`,
    },
    {
      path: 'docProps/core.xml',
      content: `${XML_DECLARATION}<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:title>${escapeXmlText(title || 'Mili AI PBL 콘텐츠')}</dc:title><dc:creator>Mili AI</dc:creator><cp:lastModifiedBy>Mili AI</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${now}</dcterms:modified></cp:coreProperties>`,
    },
    {
      path: 'docProps/app.xml',
      content: `${XML_DECLARATION}<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"><Application>Mili AI</Application><Company>Mili AI</Company></Properties>`,
    },
    ...sheets.map((sheet, index) => ({
      path: `xl/worksheets/sheet${index + 1}.xml`,
      content: buildWorksheetXml(sheet.rows),
    })),
  ])
}

function buildWorksheetXml(rows: string[][]) {
  const normalizedRows = rows.length ? rows : [[]]
  const maxColumnCount = Math.max(1, ...normalizedRows.map((row) => row.length))
  const dimension = `A1:${toColumnName(maxColumnCount)}${Math.max(1, normalizedRows.length)}`
  const columnWidths = Array.from({ length: maxColumnCount }, (_, columnIndex) => {
    const width = normalizedRows.reduce((maxWidth, row) => {
      const cellText = row[columnIndex] || ''
      return Math.max(maxWidth, Math.min(42, Math.max(10, cellText.length + 2)))
    }, 10)
    return `<col min="${columnIndex + 1}" max="${columnIndex + 1}" width="${width}" customWidth="1"/>`
  }).join('')
  const sheetRows = normalizedRows.map((row, rowIndex) => {
    const rowNumber = rowIndex + 1
    const cells = Array.from({ length: maxColumnCount }, (_, columnIndex) => {
      const cellValue = row[columnIndex] || ''
      if (!cellValue) return ''
      const cellRef = `${toColumnName(columnIndex + 1)}${rowNumber}`
      return `<c r="${cellRef}" t="inlineStr"><is><t xml:space="preserve">${escapeXmlText(cellValue)}</t></is></c>`
    }).join('')
    return `<row r="${rowNumber}">${cells}</row>`
  }).join('')

  return `${XML_DECLARATION}<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><dimension ref="${dimension}"/><sheetViews><sheetView workbookViewId="0"/></sheetViews><sheetFormatPr defaultRowHeight="15"/><cols>${columnWidths}</cols><sheetData>${sheetRows}</sheetData></worksheet>`
}

function buildExcelFileName(projectTitle: string) {
  const safeTitle = sanitizeFileName(projectTitle) || 'untitled'
  return `mili-ai-pbl-${safeTitle}-${formatDate(new Date())}.xlsx`
}

function sanitizeFileName(value: string) {
  return value
    .normalize('NFC')
    .replace(/[\\/:*?"<>|]+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 90)
}

function createSafeWorksheetNames(sheetNames: string[]) {
  const usedNames = new Set<string>()

  return sheetNames.map((sheetName, sheetIndex) => {
    const baseName = sanitizeWorksheetBaseName(sheetName, sheetIndex)
    let safeName = baseName
    let duplicateIndex = 2

    while (usedNames.has(safeName)) {
      const suffix = `-${duplicateIndex}`
      safeName = `${baseName.slice(0, 31 - suffix.length)}${suffix}`
      duplicateIndex += 1
    }

    usedNames.add(safeName)
    return safeName
  })
}

function sanitizeWorksheetBaseName(sheetName: string, sheetIndex: number) {
  return (sheetName || `Sheet ${sheetIndex + 1}`)
    .replace(/[\\/?*:[\]]/g, '-')
    .slice(0, 31)
    || `Sheet ${sheetIndex + 1}`
}

function formatDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}${month}${day}`
}

function createZip(files: ZipSource[]) {
  const encoder = new TextEncoder()
  const localParts: Uint8Array[] = []
  const centralParts: Uint8Array[] = []
  let offset = 0
  const now = new Date()
  const dosTime = toDosTime(now)
  const dosDate = toDosDate(now)

  files.forEach((file) => {
    const pathBytes = encoder.encode(file.path)
    const contentBytes = encoder.encode(file.content)
    const crc = crc32(contentBytes)
    const localHeader = createZipLocalHeader(pathBytes, contentBytes.length, crc, dosTime, dosDate)
    const centralHeader = createZipCentralHeader(pathBytes, contentBytes.length, crc, offset, dosTime, dosDate)

    localParts.push(localHeader, contentBytes)
    centralParts.push(centralHeader)
    offset += localHeader.length + contentBytes.length
  })

  const centralDirectoryOffset = offset
  const centralDirectorySize = centralParts.reduce((total, part) => total + part.length, 0)
  const endRecord = createZipEndRecord(files.length, centralDirectorySize, centralDirectoryOffset)

  return concatUint8Arrays([...localParts, ...centralParts, endRecord])
}

function createZipLocalHeader(pathBytes: Uint8Array, size: number, crc: number, dosTime: number, dosDate: number) {
  const header = new Uint8Array(30 + pathBytes.length)
  const view = new DataView(header.buffer)
  view.setUint32(0, 0x04034b50, true)
  view.setUint16(4, 20, true)
  view.setUint16(6, 0, true)
  view.setUint16(8, 0, true)
  view.setUint16(10, dosTime, true)
  view.setUint16(12, dosDate, true)
  view.setUint32(14, crc, true)
  view.setUint32(18, size, true)
  view.setUint32(22, size, true)
  view.setUint16(26, pathBytes.length, true)
  view.setUint16(28, 0, true)
  header.set(pathBytes, 30)
  return header
}

function createZipCentralHeader(pathBytes: Uint8Array, size: number, crc: number, offset: number, dosTime: number, dosDate: number) {
  const header = new Uint8Array(46 + pathBytes.length)
  const view = new DataView(header.buffer)
  view.setUint32(0, 0x02014b50, true)
  view.setUint16(4, 20, true)
  view.setUint16(6, 20, true)
  view.setUint16(8, 0, true)
  view.setUint16(10, 0, true)
  view.setUint16(12, dosTime, true)
  view.setUint16(14, dosDate, true)
  view.setUint32(16, crc, true)
  view.setUint32(20, size, true)
  view.setUint32(24, size, true)
  view.setUint16(28, pathBytes.length, true)
  view.setUint16(30, 0, true)
  view.setUint16(32, 0, true)
  view.setUint16(34, 0, true)
  view.setUint16(36, 0, true)
  view.setUint32(38, 0, true)
  view.setUint32(42, offset, true)
  header.set(pathBytes, 46)
  return header
}

function createZipEndRecord(entryCount: number, centralDirectorySize: number, centralDirectoryOffset: number) {
  const record = new Uint8Array(22)
  const view = new DataView(record.buffer)
  view.setUint32(0, 0x06054b50, true)
  view.setUint16(4, 0, true)
  view.setUint16(6, 0, true)
  view.setUint16(8, entryCount, true)
  view.setUint16(10, entryCount, true)
  view.setUint32(12, centralDirectorySize, true)
  view.setUint32(16, centralDirectoryOffset, true)
  view.setUint16(20, 0, true)
  return record
}

function toColumnName(columnNumber: number) {
  let current = columnNumber
  let name = ''
  while (current > 0) {
    current -= 1
    name = String.fromCharCode(65 + (current % 26)) + name
    current = Math.floor(current / 26)
  }
  return name
}

function toDosTime(date: Date) {
  return (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2)
}

function toDosDate(date: Date) {
  return ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate()
}

function escapeXmlText(value: string) {
  return sanitizeXmlText(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function escapeXmlAttribute(value: string) {
  return escapeXmlText(value).replace(/"/g, '&quot;')
}

function sanitizeXmlText(value: string) {
  return Array.from(value)
    .filter((character) => {
      const code = character.charCodeAt(0)
      return code === 0x09 || code === 0x0a || code === 0x0d || code >= 0x20
    })
    .join('')
}

const crcTable = new Uint32Array(256).map((_, index) => {
  let crc = index
  for (let bit = 0; bit < 8; bit += 1) {
    crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1
  }
  return crc >>> 0
})

function crc32(data: Uint8Array) {
  let crc = 0xffffffff
  for (let index = 0; index < data.length; index += 1) {
    crc = crcTable[(crc ^ data[index]) & 0xff] ^ (crc >>> 8)
  }
  return (crc ^ 0xffffffff) >>> 0
}

function concatUint8Arrays(parts: Uint8Array[]) {
  const totalLength = parts.reduce((total, part) => total + part.length, 0)
  const output = new Uint8Array(totalLength)
  let offset = 0

  parts.forEach((part) => {
    output.set(part, offset)
    offset += part.length
  })

  return output
}
