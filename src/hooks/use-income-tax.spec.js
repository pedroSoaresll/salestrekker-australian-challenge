import { renderHook, waitFor } from '@testing-library/react'
import { useLocation } from 'react-router-dom'
import { FREQUENCIES, INCOME_TYPE } from '../constants/tax'
import { useIncomeTax } from './use-income-tax'

jest.mock('react-router-dom')

describe('hooks - useIncomeTax', () => {
  test('should return correctly tax for monthly gross income', async () => {
    useLocation.mockImplementation(() => ({
      state: {
        income: '$5,000',
        frequency: FREQUENCIES.monthly,
        incomeType: INCOME_TYPE.grossIncome,
      },
    }))

    const { result } = renderHook(() => useIncomeTax())
    console.log(result.current)

    const SIX_PERCENT = 0.06

    await waitFor(() => {
      expect(result.current.taxPercentage).toStrictEqual(SIX_PERCENT)
      expect(result.current.calculation).toHaveLength(4)
    })
  })
})

// const structure = {
//   tax_percentage: '',
//   calculation: [
//     {
//       frequency: '',
//       grossIncome: '',
//       netIncome: '',
//       tax: '',
//     },
//   ],
// }
