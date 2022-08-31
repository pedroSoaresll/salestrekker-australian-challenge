import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useNavigate } from 'react-router-dom'
import { CalculateIncome } from '.'

jest.mock('react-router-dom')

describe('features - <CalculateIncome />', () => {
  test('should not emit submit event', async () => {
    const navigate = jest.fn()
    useNavigate.mockImplementation(() => navigate)
    render(<CalculateIncome />)

    await userEvent.click(screen.getByText('Calculate'))

    expect(navigate).not.toHaveBeenCalled()
  })

  test('should emit submit event', async () => {
    const navigate = jest.fn()
    useNavigate.mockImplementation(() => navigate)
    render(<CalculateIncome />)

    const incomeInput = screen.getByLabelText('What is your total income?')
    await userEvent.type(incomeInput, '5000')

    await userEvent.selectOptions(screen.getByRole('combobox'), 'annually')

    await userEvent.click(screen.getByText('Gross income'))
    await userEvent.click(screen.getByText('Net income'))
    await userEvent.click(screen.getByText('Calculate'))

    expect(navigate).toHaveBeenCalledWith('/income-results', {
      state: {
        frequency: 'annually',
        income: '$5,000',
        incomeType: 'net_income',
      },
    })
  })

  test('should show the error messages when submit form without fill the data', async () => {
    render(<CalculateIncome />)

    await userEvent.click(screen.getByText('Calculate'))
    const errorMessage = await screen.findByText(
      'The income value needs to be more than 0.'
    )

    expect(errorMessage).toBeInTheDocument()
  })
})
