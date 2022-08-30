import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Select } from '../../components'
import { frequencies } from '../../constants/frequencies'
import { formatNumber } from '../../utils/numbers'

const listFrequencies = Object.values(frequencies)

export const CalculateIncome = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      income: 0,
      frequency: frequencies.weekly,
      incomeType: '',
    },
  })

  const incomeTypeWatch = watch('incomeType')
  const incomeWatch = watch('income')

  useEffect(() => {
    const incomeFormatted = formatNumber(incomeWatch)
    setValue('income', incomeFormatted)
  }, [incomeWatch, setValue])

  function submit({ income, frequency, incomeType }) {
    navigate('/income-results', {
      state: {
        income,
        frequency,
        incomeType,
      },
    })
  }

  return (
    <form
      className="p-7 flex flex-col justify-center"
      onSubmit={handleSubmit(submit)}
    >
      <span className="text-center text-3xl">Income tax calculator</span>

      <div className="mt-9 flex flex-col gap-6">
        <div
          className="grid gap-x-4"
          style={{ gridTemplateColumns: '2fr 1fr' }}
        >
          <label>
            <span className="text-base">What is your total income?</span>
            <Input
              className="mt-2 w-full"
              {...register('income')}
              inputMode="numeric"
            />
          </label>

          <Select className="self-end capitalize" {...register('frequency')}>
            {listFrequencies.map((frequency) => (
              <option key={frequency} value={frequency}>
                {frequency}
              </option>
            ))}
          </Select>
        </div>

        <div className="block">
          <span className="text-base">Choose the income type</span>

          <div className="flex flex-row gap-x-2 mt-2">
            <input
              className="hidden"
              type="text"
              name="default"
              {...register('incomeType', { required: true })}
            />
            <Button
              type="button"
              variant={incomeTypeWatch === 'gross_income' ? 'primary' : null}
              onClick={() => setValue('incomeType', 'gross_income')}
            >
              Gross income
            </Button>

            <Button
              type="button"
              variant={incomeTypeWatch === 'net_income' ? 'primary' : null}
              onClick={() => setValue('incomeType', 'net_income')}
            >
              Net income
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button className="mt-16 w-2/3" variant="primary" type="submit">
          Calculate
        </Button>
      </div>
    </form>
  )
}
