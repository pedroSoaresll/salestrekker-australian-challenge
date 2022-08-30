export const formatNumber = (value) => {
  const valueTreated = onlyNumbers(value)

  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(valueTreated)
}

export const onlyNumbers = (value) => String(value).replace(/\D+/g, '')
