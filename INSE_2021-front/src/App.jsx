import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChartsPie } from './components/charts-pie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChartsPie/>
    </>
  )
}

export default App
