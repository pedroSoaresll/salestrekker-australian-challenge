import { render, screen } from '@testing-library/react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Home } from './Home'

jest.mock('react-router-dom')

describe('screens - <Home />', () => {
  test('should render and integrate its components in the calculate income page', () => {
    useLocation.mockImplementation(() => ({
      pathname: '/',
    }))
    render(<Home />)

    expect(screen.getByText('Income tax calculator')).toBeInTheDocument()
  })

  test('should render and integrate its components in the income result page', () => {
    useLocation.mockImplementation(() => ({
      pathname: '/income-results',
    }))
    useNavigate.mockImplementation(() => jest.fn())
    render(<Home />)

    expect(screen.getByText('Done')).toBeInTheDocument()
  })
})
