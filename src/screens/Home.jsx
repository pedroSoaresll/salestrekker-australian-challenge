import { IncomeResult, CalculateIncome } from '../features'

export const Home = () => {
  return (
    <div>
      <CalculateIncome />
      <IncomeResult />
    </div>
  )
}
