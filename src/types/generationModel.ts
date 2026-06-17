export type GenerationModelId = 'gemini-2.5-flash' | 'groq-gpt-oss-120b'

export type GenerationModelOption = {
  id: GenerationModelId
  label: string
  provider: 'Gemini' | 'Groq'
  modelName: string
}

export const DEFAULT_GENERATION_MODEL_ID: GenerationModelId = 'gemini-2.5-flash'

export const GENERATION_MODEL_OPTIONS: GenerationModelOption[] = [
  {
    id: 'gemini-2.5-flash',
    label: 'Gemini 2.5 Flash',
    provider: 'Gemini',
    modelName: 'gemini-2.5-flash',
  },
  {
    id: 'groq-gpt-oss-120b',
    label: 'Groq GPT-OSS 120B',
    provider: 'Groq',
    modelName: 'openai/gpt-oss-120b',
  },
]
