import PropTypes from 'prop-types'
import { forwardRef } from 'react'

export const Select = forwardRef(({ children, className, ...props }, ref) => (
  <select
    ref={ref}
    {...props}
    className={`p-2 rounded-md border-emerald-100 bg-emerald-50 text-base border ${className}`}
    style={{ height: '45px' }}
  >
    {children}
  </select>
))

Select.displayName = 'Select'
Select.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}
