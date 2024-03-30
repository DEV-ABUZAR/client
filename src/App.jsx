import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Details from './components/Details'
import Update from './components/Update'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Login /> */}
      {/* <Details /> */}
      <Update />
    </>
  )
}

export default App
