import { useState } from 'react'

import './App.css'

const App = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      Count
      {count}
      <button
        type="button"
        onClick={increment}
      >
        increment
      </button>
    </div>
  )
}

export default App
