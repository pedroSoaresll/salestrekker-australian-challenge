import { Card } from '../components/Card'
import { CalculateIncome } from '../features'
import CalculateIncomeImg from '../images/calculate-income.svg'

export const Home = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen min-h-min bg-violet-50">
      <Card className="grid grid-cols-2" style={{ minHeight: '500px' }}>
        <CalculateIncome />

        <Card className=" bg-violet-200 flex items-center justify-center min-w-full">
          <CalculateIncomeImg />
        </Card>
      </Card>
    </div>
  )
}
