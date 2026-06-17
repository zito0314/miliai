import { PBL_REFERENCE_URLS as runtimePblReferenceUrls } from './pblReferenceUrls.js'

export type PblReferenceUrls = {
  templateUrl: string
  guidelineUrl: string
  outputRuleUrl: string
}

export const PBL_REFERENCE_URLS = runtimePblReferenceUrls as PblReferenceUrls
