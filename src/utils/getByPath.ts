export function getByPath(source: unknown, path: string): unknown {
  return parsePath(path).reduce<unknown>((current, segment) => {
    if (current == null) return undefined
    if (typeof segment === 'number') return Array.isArray(current) ? current[segment] : undefined
    return typeof current === 'object' ? (current as Record<string, unknown>)[segment] : undefined
  }, source)
}

export function parsePath(path: string): Array<string | number> {
  const segments: Array<string | number> = []
  path.replace(/([^[.\]]+)|\[(\d+)\]/g, (_, property: string | undefined, index: string | undefined) => {
    if (index !== undefined) segments.push(Number(index))
    else if (property) segments.push(property)
    return ''
  })
  return segments
}
