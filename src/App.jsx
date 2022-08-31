import './global.css'
import { StrictMode } from 'react'
import { Screens } from './screens'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Screens />
      </BrowserRouter>
    </StrictMode>
  )
}
