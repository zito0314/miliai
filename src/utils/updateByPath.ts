import { parsePath } from './getByPath'

export function updateByPath<T>(source: T, path: string, value: unknown): T {
  const segments = parsePath(path)
  if (segments.length === 0) return value as T
  return updateAtSegment(source, segments, value) as T
}

function updateAtSegment(current: unknown, segments: Array<string | number>, value: unknown): unknown {
  const [segment, ...rest] = segments
  if (segment === undefined) return value

  if (typeof segment === 'number') {
    const nextArray = Array.isArray(current) ? [...current] : []
    nextArray[segment] = rest.length === 0 ? value : updateAtSegment(nextArray[segment], rest, value)
    return nextArray
  }

  const nextObject = current && typeof current === 'object' && !Array.isArray(current)
    ? { ...(current as Record<string, unknown>) }
    : {}
  nextObject[segment] = rest.length === 0 ? value : updateAtSegment(nextObject[segment], rest, value)
  return nextObject
}
