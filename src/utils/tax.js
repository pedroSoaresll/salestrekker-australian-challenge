import { FREQUENCIES, INCOME_TYPE } from '../constants/tax'

export const TAX_PERCENTAGE = 0.06

const frequencyToDay = {
  [FREQUENCIES.weekly]: 7,
  [FREQUENCIES.fortnightly]: 15,
  [FREQUENCIES.monthly]: 30,
  [FREQUENCIES.annually]: 30 * 12,
}

export function calcIncomeTax(value, incomeType) {
  const tax = value * TAX_PERCENTAGE
  const grossIncome =
    incomeType !== INCOME_TYPE.grossIncome ? value + tax : value
  const netIncome = incomeType !== INCOME_TYPE.netIncome ? value - tax : value

  return {
    grossIncome: parseFloat(grossIncome.toFixed(2)),
    netIncome: parseFloat(netIncome.toFixed(2)),
    tax: parseFloat(tax.toFixed(2)),
  }
}

export function calcIncomeTaxByFrequency({ income, incomeType, frequency }) {
  const incomeByDay = income / frequencyToDay[frequency]

  const weeklyResult = calcIncomeTax(incomeByDay * 7, incomeType)
  const fortnightlyResult = calcIncomeTax(incomeByDay * 15, incomeType)
  const monthlyResult = calcIncomeTax(incomeByDay * 30, incomeType)
  const annuallyResult = calcIncomeTax(incomeByDay * 30 * 12, incomeType)

  return [weeklyResult, fortnightlyResult, monthlyResult, annuallyResult].map(
    (result, index) => ({
      ...result,
      frequency: Object.values(FREQUENCIES)[index],
    })
  )
}
