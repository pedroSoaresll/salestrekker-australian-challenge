import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'

export const Screens = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  )
}
