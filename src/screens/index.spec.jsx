import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Screens } from '.'

describe('screens - <Home />', () => {
  test('should render and integrate its components in the calculate income page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Screens />
      </MemoryRouter>
    )

    expect(screen.getByText('Income tax calculator')).toBeInTheDocument()
  })

  test('should render and integrate its components in the income result page', () => {
    render(
      <MemoryRouter
        initialEntries={[{ pathname: '/income-results', state: {} }]}
      >
        <Screens />
      </MemoryRouter>
    )

    expect(screen.getByText('Done')).toBeInTheDocument()
  })
})
