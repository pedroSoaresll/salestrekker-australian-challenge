import PropTypes from 'prop-types'

const baseClasses = 'px-5 py-2 rounded-md transition-colors'
const primaryButton =
  'bg-violet-500 hover:bg-violet-600 focus:bg-violet-600 active:bg-violet-700 border-violet-500 text-white'
const defaultButton =
  'bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 border-gray-500 text-black'

const variantMap = {
  primary: primaryButton,
}

export const Button = ({ children, variant, className, ...props }) => {
  const variantClasses = variantMap[variant] || defaultButton

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.string,
  className: PropTypes.string,
}
