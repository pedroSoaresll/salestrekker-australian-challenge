import PropTypes from 'prop-types'

export const Input = (props) => {
  return (
    <input
      {...props}
      className={`p-2 rounded-md border-violet-200 bg-violet-100 text-base border ${props.className}`}
      style={{ height: '45px' }}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
}
