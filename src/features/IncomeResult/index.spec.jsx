import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useLocation, useNavigate } from 'react-router-dom'
import { IncomeResult } from '.'
import { FREQUENCIES, INCOME_TYPE } from '../../constants/tax'

jest.mock('react-router-dom')
describe('features - <IncomeResult />', () => {
  test('should back to home when click on "Done" button', async () => {
    useLocation.mockImplementation(() => ({
      state: {},
    }))

    const navigate = jest.fn()
    useNavigate.mockImplementation(() => navigate)

    render(<IncomeResult />)

    await userEvent.click(screen.getByText('Done'))

    expect(navigate).toHaveBeenCalled()
  })

  test('should emit back event if state is null', async () => {
    useLocation.mockImplementation(() => ({
      state: null,
    }))

    const navigate = jest.fn()
    useNavigate.mockImplementation(() => navigate)

    render(<IncomeResult />)

    await userEvent.click(screen.getByText('Done'))

    expect(navigate).toHaveBeenCalled()
  })

  test('should change the frequency and get the net income updated', async () => {
    useLocation.mockImplementation(() => ({
      state: {
        income: 3000,
        incomeType: INCOME_TYPE.grossIncome,
        frequency: FREQUENCIES.monthly,
      },
    }))

    render(<IncomeResult />)

    await userEvent.selectOptions(
      screen.getByRole('combobox'),
      FREQUENCIES.annually
    )

    expect(screen.getByText('$36,000')).toBeInTheDocument()
  })
})
