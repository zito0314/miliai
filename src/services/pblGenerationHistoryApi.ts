import type { PblGenerationHistoryRecord } from '../types/pblHistory'

type RemoteHistoryResponse = {
  storage?: string
  records?: PblGenerationHistoryRecord[]
  error?: string
}

export async function fetchRemotePblGenerationHistory(): Promise<PblGenerationHistoryRecord[] | null> {
  return requestRemoteHistory('/api/pbl-history')
}

export async function upsertRemotePblGenerationHistoryRecord(
  record: PblGenerationHistoryRecord,
): Promise<PblGenerationHistoryRecord[] | null> {
  return requestRemoteHistory('/api/pbl-history', { action: 'upsert', record })
}

export async function deleteRemotePblGenerationHistoryRecord(
  recordId: string,
): Promise<PblGenerationHistoryRecord[] | null> {
  return requestRemoteHistory('/api/pbl-history', { action: 'delete', recordId })
}

export async function clearRemotePblGenerationHistory(): Promise<PblGenerationHistoryRecord[] | null> {
  return requestRemoteHistory('/api/pbl-history', { action: 'clear' })
}

async function requestRemoteHistory(
  url: string,
  body?: Record<string, unknown>,
): Promise<PblGenerationHistoryRecord[] | null> {
  const response = await fetch(url, body
    ? {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      }
    : undefined)

  const data = await response.json().catch(() => null) as RemoteHistoryResponse | null
  if (response.status === 501 || data?.storage === 'local') return null
  if (!response.ok) {
    throw new Error(data?.error || 'PBL 생성 이력 원격 저장소와 통신하지 못했습니다.')
  }

  return Array.isArray(data?.records) ? data.records : []
}
