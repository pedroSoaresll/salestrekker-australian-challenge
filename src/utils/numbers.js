export const formatNumber = (value) => {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export const onlyNumbers = (value) => String(value).replace(/\D+/g, '')
