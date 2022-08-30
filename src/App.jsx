import './global.css'
import { StrictMode } from 'react'
import { Home } from './screens/Home'

export const App = () => {
  return (
    <StrictMode>
      <Home />
    </StrictMode>
  )
}
