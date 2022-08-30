import PropTypes from 'prop-types'

export const Select = ({ children, className, ...props }) => {
  return (
    <select
      {...props}
      className={`p-2 rounded-md border-violet-200 bg-violet-100 text-base border ${className}`}
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
