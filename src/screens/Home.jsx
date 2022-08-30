import { useLocation } from 'react-router-dom'
import { Card } from '../components'
import { CalculateIncome, IncomeResult } from '../features'
import CalculateIncomeImg from '../images/calculate-income.svg'
import IncomeResultImg from '../images/income-result.svg'

export const Home = () => {
  const location = useLocation()

  const isHome = location.pathname === '/'
  const isIncomeResult = location.pathname === '/income-results'

  return (
    <div className="flex flex-row justify-center items-center min-h-screen bg-violet-50">
      <Card
        className="grid lg:grid-cols-2 md:grid-cols-none overflow-hidden bg-white m-8"
        style={{ minHeight: '500px' }}
      >
        {isHome && <CalculateIncome />}

        <Card className=" bg-violet-200 flex items-center justify-center min-w-full">
          {isHome && <CalculateIncomeImg />}
          {isIncomeResult && <IncomeResultImg />}
        </Card>

        {isIncomeResult && <IncomeResult />}
      </Card>
    </div>
  )
}
