import PropTypes from 'prop-types'

export const Card = ({ children, className, ...props }) => {
  return (
    <div
      {...props}
      className={`rounded-md border-violet-100 shadow-md w-3/4 ${className}`}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
}
