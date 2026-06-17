export type GenerationModelId = 'gemini-2.5-flash' | 'groq-llama-3.3-70b-versatile'

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
    id: 'groq-llama-3.3-70b-versatile',
    label: 'Groq Llama 3.3 70B Versatile',
    provider: 'Groq',
    modelName: 'llama-3.3-70b-versatile',
  },
]
