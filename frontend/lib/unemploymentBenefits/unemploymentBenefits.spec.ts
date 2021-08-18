import { unemploymentCalculator } from './unemploymentBenefits'

describe('unemployment calculator', () => {
  describe('for income 589459 with 100% personal discount', () => {
    const tekjurAManudi = 589459
    const hlutfallPersAfsl = 1
    it('should run without errors', () => {
      unemploymentCalculator({
        tekjurAManudi,
        hlutfallPersAfsl,
      }).getTable(new Date())
    })

    it('table should have 6 rows', () => {
      const table = unemploymentCalculator({
        tekjurAManudi,
        hlutfallPersAfsl,
      }).getTable(new Date())

      expect(table.length).toEqual(6)
    })
  })
})
