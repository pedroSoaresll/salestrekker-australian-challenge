import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Select } from '../../components'
import { formatNumber } from '../../utils/numbers'
import { FREQUENCIES } from '../../constants/tax'
import { useState } from 'react'

const netIncome = formatNumber(33500)
const listFrequencies = Object.values(FREQUENCIES)

export const IncomeResult = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { state } = location

  const [frequency] = useState(state.frequency)

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [navigate, state])

  return (
    <div className="p-6 flex flex-col justify-between">
      <div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-3 justify-between">
            <span>
              Your net{' '}
              <span className="font-bold text-base text-violet-600 capitalize">
                {frequency}
              </span>{' '}
              income:
            </span>
            <span className="text-4xl font-bold text-violet-600">
              {netIncome}
            </span>
          </div>

          <label className="flex flex-col gap-y-3 justify-between">
            <span>Change frequency:</span>
            <Select className="capitalize" defaultValue={state.frequency}>
              {listFrequencies.map((frequency) => (
                <option key={frequency} value={frequency}>
                  {frequency}
                </option>
              ))}
            </Select>
          </label>
        </div>

        <div className="mt-11">
          <table className="table-auto w-full bg-gray-50 rounded-md">
            <thead>
              <tr className="text-left text-gray-600 text-sm">
                <th className="p-4 font-normal">Frequency</th>
                <th className="p-4 font-normal">Gross income</th>
                <th className="p-4 font-normal">Tax</th>
                <th className="p-4 font-normal">Net income</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Monthly</td>
                <td className="px-4 py-2">$1,000</td>
                <td className="px-4 py-2">$1,000</td>
                <td className="px-4 py-2">$1,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2 text-violet-600">Monthly</td>
                <td className="px-4 py-2 text-violet-600">$1,000</td>
                <td className="px-4 py-2 text-violet-600">$1,000</td>
                <td className="px-4 py-2 text-violet-600">$1,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Monthly</td>
                <td className="px-4 py-2">$1,000</td>
                <td className="px-4 py-2">$1,000</td>
                <td className="px-4 py-2">$1,000</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Monthly</td>
                <td className="px-4 py-2">$1,000</td>
                <td className="px-4 py-2">$1,000</td>
                <td className="px-4 py-2">$1,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Button className="w-3/4 self-center lg:mt-0 sm:mt-20" variant="primary">
        Done
      </Button>
    </div>
  )
}
