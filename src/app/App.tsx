import { Outlet } from '@tanstack/react-router'

import './main.css'

const App = () => {
  return (
    <div className="min-h-screen fle flex-col">
      <Outlet />
    </div>
  )
}

export default App
