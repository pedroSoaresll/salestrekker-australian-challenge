import { FREQUENCIES, INCOME_TYPE } from '../constants/tax'
import { calcIncomeTax, calcIncomeTaxByFrequency } from './tax'

describe('utils - tax', () => {
  test('should calculate the correct tax from a value when gross income', () => {
    const result = calcIncomeTax(5000, INCOME_TYPE.grossIncome)

    expect(result.tax).toStrictEqual(300)
    expect(result.grossIncome).toStrictEqual(5000)
    expect(result.netIncome).toStrictEqual(5000 - 300)
  })

  test('should calculate the correct tax from a value when net income', () => {
    const result = calcIncomeTax(5000, INCOME_TYPE.netIncome)

    expect(result.tax).toStrictEqual(300)
    expect(result.grossIncome).toStrictEqual(5000 + 300)
    expect(result.netIncome).toStrictEqual(5000)
  })

  describe('gross income tax calculation', () => {
    const incomeType = INCOME_TYPE.grossIncome
    const weekly = calcIncomeTaxByFrequency({
      income: 1166.6667,
      frequency: FREQUENCIES.weekly,
      incomeType,
    })
    const fortnightly = calcIncomeTaxByFrequency({
      income: 2500,
      frequency: FREQUENCIES.fortnightly,
      incomeType,
    })
    const monthly = calcIncomeTaxByFrequency({
      income: 5000,
      frequency: FREQUENCIES.monthly,
      incomeType,
    })
    const annually = calcIncomeTaxByFrequency({
      income: 60000,
      frequency: FREQUENCIES.annually,
      incomeType,
    })

    ;[weekly, fortnightly, monthly, annually].forEach(
      (
        [weeklyResult, fortnightlyResult, monthlyResult, annuallyResult],
        index
      ) => {
        test(`should validate gross income by ${
          Object.values(FREQUENCIES)[index]
        }`, () => {
          expect(weeklyResult).toMatchObject({
            grossIncome: 1166.67,
            netIncome: 1096.67,
            tax: 70,
            frequency: FREQUENCIES.weekly,
          })

          expect(fortnightlyResult).toMatchObject({
            grossIncome: 2500,
            netIncome: 2350,
            tax: 150,
            frequency: FREQUENCIES.fortnightly,
          })

          expect(monthlyResult).toMatchObject({
            grossIncome: 5000,
            netIncome: 4700,
            tax: 300,
            frequency: FREQUENCIES.monthly,
          })

          expect(annuallyResult).toMatchObject({
            grossIncome: 60000,
            netIncome: 56400,
            tax: 3600,
            frequency: FREQUENCIES.annually,
          })
        })
      }
    )
  })

  describe('net income tax calculation', () => {
    const weekly = calcIncomeTaxByFrequency({
      income: 1166.6667,
      incomeType: INCOME_TYPE.netIncome,
      frequency: FREQUENCIES.weekly,
    })
    const fortnightly = calcIncomeTaxByFrequency({
      income: 2500,
      incomeType: INCOME_TYPE.netIncome,
      frequency: FREQUENCIES.fortnightly,
    })
    const monthly = calcIncomeTaxByFrequency({
      income: 5000,
      incomeType: INCOME_TYPE.netIncome,
      frequency: FREQUENCIES.monthly,
    })
    const annually = calcIncomeTaxByFrequency({
      income: 60000,
      incomeType: INCOME_TYPE.netIncome,
      frequency: FREQUENCIES.annually,
    })

    ;[weekly, fortnightly, monthly, annually].forEach(
      (
        [weeklyResult, fortnightlyResult, monthlyResult, annuallyResult],
        index
      ) => {
        test(`should validate net income by ${
          Object.values(FREQUENCIES)[index]
        }`, () => {
          expect(weeklyResult).toMatchObject({
            grossIncome: 1236.67,
            netIncome: 1166.67,
            tax: 70,
            frequency: FREQUENCIES.weekly,
          })

          expect(fortnightlyResult).toMatchObject({
            grossIncome: 2650,
            netIncome: 2500,
            tax: 150,
            frequency: FREQUENCIES.fortnightly,
          })

          expect(monthlyResult).toMatchObject({
            grossIncome: 5300,
            netIncome: 5000,
            tax: 300,
            frequency: FREQUENCIES.monthly,
          })

          expect(annuallyResult).toMatchObject({
            grossIncome: 63600,
            netIncome: 60000,
            tax: 3600,
            frequency: FREQUENCIES.annually,
          })
        })
      }
    )
  })
})
