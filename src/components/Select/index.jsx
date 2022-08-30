import PropTypes from 'prop-types'

export const Select = ({ children, className, ...props }) => {
  return (
    <select
      {...props}
      className={`p-2 rounded-md border-violet-100 bg-violet-50 text-base border ${className}`}
      style={{ height: '45px' }}
    >
      {children}
    </select>
  )
}

Select.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}
