import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Select } from '../../components'
import { FREQUENCIES } from '../../constants/tax'
import { useState } from 'react'
import { useIncomeTax } from '../../hooks/use-income-tax'
import { TableRow } from './Table'
import { useCallback } from 'react'
import { formatNumber } from '../../utils/numbers'

const listFrequencies = Object.values(FREQUENCIES)

export const IncomeResult = () => {
  const location = useLocation()
  const { state } = location

  const [frequency] = useState(state.frequency)

  const navigate = useNavigate()

  const { calculation: taxCalculation } = useIncomeTax()
  const incomeTaxFrequencyCalculation = taxCalculation.find(
    (item) => item.frequency === state.frequency
  )

  function handleFrequencyChange(event) {
    const frequency = event.currentTarget.value
    navigate('/income-results', {
      state: {
        ...state,
        frequency,
      },
    })
  }

  const backNavigation = useCallback(() => {
    navigate('/')
  }, [navigate])

  useEffect(() => {
    if (!state) {
      backNavigation()
    }
  }, [state, backNavigation])

  return (
    <div className="p-6 flex flex-col justify-between overflow-x-auto">
      <div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col gap-y-3 justify-between">
            <span>
              Your net{' '}
              <span className="font-bold text-base text-emerald-600 capitalize">
                {frequency}
              </span>{' '}
              income:
            </span>
            <span className="text-4xl font-bold text-emerald-600">
              {formatNumber(incomeTaxFrequencyCalculation?.netIncome)}
            </span>
          </div>

          <label className="flex flex-col gap-y-3 justify-between">
            <span>Change frequency:</span>
            <Select
              className="capitalize"
              defaultValue={state.frequency}
              onChange={handleFrequencyChange}
            >
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
              {taxCalculation.map((item) => (
                <TableRow key={item.frequency} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Button
        className="w-3/4 self-center mt-10 lg:mt-0"
        variant="primary"
        onClick={backNavigation}
      >
        Done
      </Button>
    </div>
  )
}
