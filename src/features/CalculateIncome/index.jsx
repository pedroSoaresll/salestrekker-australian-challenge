import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Button, Input, Select } from '../../components'
import { FREQUENCIES, INCOME_TYPE } from '../../constants/tax'
import { formatNumber, onlyNumbers } from '../../utils/numbers'

const listFrequencies = Object.values(FREQUENCIES)

export const CalculateIncome = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, setValue, formState } = useForm({
    defaultValues: {
      income: 0,
      frequency: FREQUENCIES.weekly,
      incomeType: '',
    },
  })
  const incomeTypeWatch = watch('incomeType', '')
  const incomeWatch = watch('income', 0)

  const isIncomeTypeGross = incomeTypeWatch === INCOME_TYPE.grossIncome
  const isIncomeTypeNet = incomeTypeWatch === INCOME_TYPE.netIncome

  useEffect(() => {
    const incomeFormatted = formatNumber(onlyNumbers(incomeWatch))
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
          <div className="relative">
            <label>
              <span className="text-base">What is your total income?</span>
              <Input
                className="mt-2 w-full"
                {...register('income', {
                  required: true,
                  validate: (value) => onlyNumbers(value) > 0,
                })}
                inputMode="numeric"
              />
            </label>
            {formState.errors.income?.type === 'validate' && (
              <p className="text-sm text-red-400 absolute -bottom-5">
                The income value needs to be more than 0.
              </p>
            )}
          </div>

          <Select className="self-end capitalize" {...register('frequency')}>
            {listFrequencies.map((frequency) => (
              <option key={frequency} value={frequency}>
                {frequency}
              </option>
            ))}
          </Select>
        </div>

        <div className="block relative">
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
              variant={isIncomeTypeGross ? 'primary' : null}
              onClick={() => setValue('incomeType', INCOME_TYPE.grossIncome)}
            >
              Gross income
            </Button>

            <Button
              type="button"
              variant={isIncomeTypeNet ? 'primary' : null}
              onClick={() => setValue('incomeType', INCOME_TYPE.netIncome)}
            >
              Net income
            </Button>
          </div>
          {formState.errors.incomeType?.type === 'required' && (
            <p className="text-sm text-red-400 absolute -bottom-5">
              Incoming type is a required field.
            </p>
          )}
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
