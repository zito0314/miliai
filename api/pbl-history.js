const googleSheetsStoreName = 'google_sheets'

export default async function handler(request, response) {
  if (request.method !== 'GET' && request.method !== 'POST') {
    response.setHeader('Allow', 'GET, POST')
    return response.status(405).json({ error: 'GET 또는 POST 요청만 사용할 수 있습니다.' })
  }

  const config = getGoogleSheetsHistoryConfig()
  if (!config) {
    return response.status(501).json({
      storage: 'local',
      error: 'PBL 생성 이력 원격 저장소가 설정되지 않았습니다.',
    })
  }

  try {
    const body = request.method === 'POST'
      ? typeof request.body === 'string'
        ? safeJsonParse(request.body)
        : request.body
      : null
    const action = request.method === 'GET' ? 'list' : normalizeAction(body?.action)

    if (!action) {
      return response.status(400).json({ error: '이력 작업 종류가 올바르지 않습니다.' })
    }

    const result = await callGoogleSheetsHistoryScript(config, {
      action,
      record: body?.record,
      recordId: body?.recordId,
    })

    return response.status(200).json({
      storage: googleSheetsStoreName,
      records: Array.isArray(result.records) ? result.records : [],
    })
  } catch (error) {
    console.error('PBL history request failed', error)
    return response.status(502).json({
      storage: googleSheetsStoreName,
      error: 'PBL 생성 이력 저장소와 통신하지 못했습니다.',
    })
  }
}

function getGoogleSheetsHistoryConfig() {
  const scriptUrl = process.env.PBL_HISTORY_SCRIPT_URL?.trim()
  const scriptSecret = process.env.PBL_HISTORY_SCRIPT_SECRET?.trim()
  if (!scriptUrl || !scriptSecret) return null

  return { scriptUrl, scriptSecret }
}

function normalizeAction(value) {
  return ['list', 'upsert', 'delete', 'clear'].includes(value) ? value : null
}

async function callGoogleSheetsHistoryScript(config, payload) {
  const scriptResponse = await fetch(config.scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({
      ...payload,
      secret: config.scriptSecret,
    }),
  })

  const text = await scriptResponse.text()
  const data = safeJsonParse(text)
  if (!scriptResponse.ok || !data?.ok) {
    const message = typeof data?.error === 'string' ? data.error : `HTTP ${scriptResponse.status}`
    throw new Error(message)
  }

  return data
}

function safeJsonParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}
