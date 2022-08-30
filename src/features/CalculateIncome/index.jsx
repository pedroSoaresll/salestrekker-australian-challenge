import { Button, Input, Select } from '../../components'

export const CalculateIncome = () => {
  return (
    <div className="p-7 flex flex-col justify-center">
      <span className="text-center text-3xl">Income tax calculator</span>

      <div className="mt-9 flex flex-col gap-6">
        <div
          className="grid gap-x-4"
          style={{ gridTemplateColumns: '2fr 1fr' }}
        >
          <label>
            <span className="text-base">What is your total income?</span>
            <Input id="income" className="mt-2 w-full" />
          </label>

          <Select className="self-end">
            <option value="monthly">Monthly</option>
          </Select>
        </div>

        <div className="block">
          <span className="text-base">Choose the income type</span>

          <div className="flex flex-row gap-x-2 mt-2">
            <Button variant="primary">Gross income</Button>
            <Button>Net income</Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button className="mt-16 w-2/3" variant="primary">
          Calculate
        </Button>
      </div>
    </div>
  )
}
