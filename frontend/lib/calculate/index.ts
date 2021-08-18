import {
  addDays,
  addMonths,
  isSameMonth,
  startOfMonth,
} from 'date-fns'

const defaults = {
  hlutfallPersAfsl: 1.0,
  personuafslattur: 50792,
  tekjurAManudi: 589459,
  elliOrorkuTSR: 25000,
  elliOrorkuAlm: 0,
  // Tekjuskattur þrep 1 0-349.018 kr.
  tekjuskatturStep1: 0.3145,
  tekjuskatturStep1Threshold: 349018,
  tekjuskatturStep2: 0.3795,
  vidbodarlifeyrissparnadur: 0.04,
  stettarfelagHlutfall: 0.01,
  starfshlutfall: 1.0,
  lifeyrissjodurHlutfall: 0.04,
  // Grunnatvinnuleysisbætur 100% starfshlutfall
  grunnbaetur: 307430,
  fjoldiBarna: 1,
}

export const unemploymentCalculator = (opts = {}) => {
  const {
    hlutfallPersAfsl,
    personuafslattur,
    tekjurAManudi,
    elliOrorkuTSR,
    elliOrorkuAlm,
    // Tekjuskattur þrep 1 0-349.018 kr.
    tekjuskatturStep1,
    tekjuskatturStep1Threshold,
    tekjuskatturStep2,
    vidbodarlifeyrissparnadur,
    stettarfelagHlutfall,
    starfshlutfall,
    lifeyrissjodurHlutfall,
    // Grunnatvinnuleysisbætur 100% starfshlutfall
    grunnbaetur,
    fjoldiBarna,
  } = { ...defaults, ...opts }

  const hamarksTekjutenging = grunnbaetur + 165405
  // Viðbot fyrir börn laun á/undir grunnbótum
  const bornVidbotUndir = grunnbaetur * 0.06
  // Viðbót fyrir börn laun yfir grunnbótum
  const bornVidbotYfir = grunnbaetur * 0.04

  const launOgBaetur = () => {
    // Bætur með tekjutengingu
    const medallaun12 = tekjurAManudi
    const margfaldadMStarfshlufalli = medallaun12 * starfshlutfall
    const utkoma1 = margfaldadMStarfshlufalli * 0.7

    return {
      utkoma1,
      margfaldadMStarfshlufalli,
    }
  }

  const baeturMedTekjutengingu = () => {
    return utkomur(tekjutengdUtkoma)
  }

  const baeturAnTekjutengingu = () => {
    return utkomur(otekjutengdUtkoma)
  }

  const tekjutengdUtkoma = () => {
    const { utkoma1, margfaldadMStarfshlufalli } = launOgBaetur()

    return margfaldadMStarfshlufalli < grunnbaetur
      ? margfaldadMStarfshlufalli
      : utkoma1 < grunnbaetur
      ? grunnbaetur
      : margfaldadMStarfshlufalli > grunnbaetur && utkoma1 < hamarksTekjutenging
      ? utkoma1
      : hamarksTekjutenging
  }

  const otekjutengdUtkoma = () => {
    const { margfaldadMStarfshlufalli } = launOgBaetur()

    return margfaldadMStarfshlufalli < grunnbaetur
      ? margfaldadMStarfshlufalli
      : grunnbaetur
  }

  const utkomur = (utkoma2Fall: () => number) => {
    const heildarutkoma2 = utkoma2Fall()
    // Heildarútkoma 2 + Bæta við tekjum á börn (ef heildarútkoma 2 er minni/jafntog grunn þá heildarútkoma 2*(viðbót1*börn), annars heildarútkoma 2*(viðbót2*börn)
    const heildarutkoma3 =
      heildarutkoma2 <= grunnbaetur
        ? heildarutkoma2 + fjoldiBarna * bornVidbotUndir
        : heildarutkoma2 + fjoldiBarna * bornVidbotYfir
    // Heildarútkoma 3 mínus lífeyrissjóðagjöld og séreignasparnað
    const heildarutkoma4 =
      heildarutkoma3 -
      heildarutkoma3 * vidbodarlifeyrissparnadur -
      heildarutkoma3 * lifeyrissjodurHlutfall
    // Heildarútkoma 4 mínus tekjuskattur
    const heildarutkoma5 =
      (heildarutkoma4 - (heildarutkoma4 - tekjuskatturStep1Threshold)) *
        (1 - tekjuskatturStep1) +
      (heildarutkoma4 - tekjuskatturStep1Threshold) * (1 - tekjuskatturStep2)
    // Heildarútkoma 5 + persónuafsláttur
    const heildarutkoma6 = heildarutkoma5 + hlutfallPersAfsl * personuafslattur
    // Heildarútkoma 6 - elli og örorkulífeyrir og stéttarfélagsgjöld
    const utborgudLaun =
      heildarutkoma6 - elliOrorkuTSR - stettarfelagHlutfall * heildarutkoma2

    return {
      heildarutkoma2,
      heildarutkoma3,
      heildarutkoma4,
      heildarutkoma5,
      heildarutkoma6,
      utborgudLaun,
    }
  }

  const getTable = (startDate: Date) => {
    console.log({ startDate })
    const tekjutengingDate = addDays(startDate, 14)
    const monthStart = startOfMonth(startDate)

    const rows = Array.from({ length: 6 })
      .map((x, i) => ({ monthStart: addMonths(monthStart, i) }))
      .map((row) => {
        const isTheMonth = isSameMonth(row.monthStart, tekjutengingDate)

        const heildarlaun =
          tekjutengdUtkoma() * (isTheMonth ? 0.5 : 1) +
          otekjutengdUtkoma() * (isTheMonth ? 0.5 : 0)

        return {
          ...row,
          botarettur: starfshlutfall,
          heildarlaun,
        }
      })
    console.table(rows)
    return rows
  }

  return {
    getTable,
  }
}

