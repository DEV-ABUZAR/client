import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Details from './components/Details'
import Update from './components/Update'
import { BrowserRouter as Router, Link, Route,  Routes  } from 'react-router-dom';
import Data from './components/Data'
import Approv from './components/Approv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/details' element={<Details />}></Route>
      {/* <Route path='/update' element={<Update />}></Route> */}
      <Route path='/approve/:id' element={<Approv />}></Route>

      {/* <Route path='/data' element={<Data />}></Route> */}



    </Routes>
      {/* <Login /> */}
      {/* <Details /> */}
      {/* <Update /> */}
    </>
  )
}

export default App
