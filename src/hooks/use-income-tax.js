import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useIncomeTax = () => {
  const { state } = useLocation()
  const [calculation, setCalculation] = useState([])

  useEffect(() => {
    if (!state) return

    const { frequency, income } = state
  }, [state])

  return {
    taxPercentage: TAX_PERCENTAGE,
    calculation: [],
  }
}
