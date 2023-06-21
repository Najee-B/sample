import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from '/src/pages/Home'
import Register from '/src/pages/Register'
import {Routes,Route} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path="/" exact element={<Home/>}></Route>
      <Route path="/Register" exact element={<Register/>}></Route>

     </Routes>
    </>
  )
}

export default App
