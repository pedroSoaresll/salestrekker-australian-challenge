import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { formatNumber } from '../../../utils/numbers'

export const TableRow = ({ item }) => {
  const location = useLocation()
  const { state } = location

  let classHighlightRow = ''

  if (state.frequency === item.frequency) classHighlightRow = 'text-emerald-600'

  return (
    <tr key={item.frequency}>
      <td className={`capitalize px-4 py-2 ${classHighlightRow}`}>
        {item.frequency}
      </td>
      <td className={`capitalize px-4 py-2 ${classHighlightRow}`}>
        {formatNumber(item.grossIncome)}
      </td>
      <td className={`capitalize px-4 py-2 ${classHighlightRow}`}>
        {formatNumber(item.tax)}
      </td>
      <td className={`capitalize px-4 py-2 ${classHighlightRow}`}>
        {formatNumber(item.netIncome)}
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  item: PropTypes.object,
}
