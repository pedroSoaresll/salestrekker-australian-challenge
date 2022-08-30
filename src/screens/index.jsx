import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'

export const Screens = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
