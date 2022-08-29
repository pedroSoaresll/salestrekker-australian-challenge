import { StrictMode } from 'react'
import { Test } from './features/Test'
import './global.css'

export const App = () => {
  return (
    <StrictMode>
      <Test />
    </StrictMode>
  )
}
