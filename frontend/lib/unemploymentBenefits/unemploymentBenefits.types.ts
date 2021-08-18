export interface UnemploymentBenefitsOptions {
  hlutfallPersAfsl: number
  tekjurAManudi: number
  personuafslattur?: number
  elliOrorkuTSR?: number
  elliOrorkuAlm?: number
  // Tekjuskattur þrep 1 0-349.018 kr.
  tekjuskatturStep1?: number
  tekjuskatturStep1Threshold?: number
  tekjuskatturStep2?: number
  vidbodarlifeyrissparnadur?: number
  stettarfelagHlutfall?: number
  starfshlutfall?: number
  lifeyrissjodurHlutfall?: number
  // Grunnatvinnuleysisbætur 100% starfshlutfall
  grunnbaetur?: number
  fjoldiBarna?: number
}
