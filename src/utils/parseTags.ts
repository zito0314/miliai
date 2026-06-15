export const parseTags = (value: string) =>
  value
    .split(/\s+/)
    .map((tag) => tag.trim())
    .filter(Boolean)
    .map((tag) => (tag.startsWith('#') ? tag : `#${tag}`))

export const parseUnitExamples = (value: string) =>
  value
    .split(/\r?\n|\s*\|\s*|\s*;\s*/)
    .map((unit) => unit.trim())
    .filter(Boolean)
