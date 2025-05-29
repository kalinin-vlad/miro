import { Outlet } from '@tanstack/react-router'

import './main.css'
import { Button } from '@/shared/ui/kit/button'

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Layout</h1>
      <Button>click me!</Button>
      <Outlet />
    </div>
  )
}

export default App
