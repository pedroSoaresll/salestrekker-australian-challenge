import PropTypes from 'prop-types'
import { forwardRef } from 'react'

export const Input = forwardRef((props, ref) => (
  <input
    style={{ height: '45px' }}
    ref={ref}
    {...props}
    className={`p-2 rounded-md border-violet-100 bg-violet-50 text-base border ${props.className}`}
  />
))

Input.displayName = 'Input'
Input.propTypes = {
  className: PropTypes.string,
}
