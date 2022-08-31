import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { onlyNumbers } from '../utils/numbers'
import { calcIncomeTaxByFrequency, TAX_PERCENTAGE } from '../utils/tax'

export const useIncomeTax = () => {
  const location = useLocation()
  const [calculation, setCalculation] = useState([])

  useEffect(() => {
    if (!location.state) return

    const { frequency, income, incomeType } = location.state

    if (!calculation.length) {
      setCalculation(
        calcIncomeTaxByFrequency({
          income: onlyNumbers(income),
          incomeType,
          frequency,
        })
      )
    }
  }, [location, calculation])

  return {
    taxPercentage: TAX_PERCENTAGE,
    calculation,
  }
}
