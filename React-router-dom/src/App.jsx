import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'




function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <header>
      <Navbar/>
    </header>
    <main>
      <h1>Welcome to react router dom</h1>

     <Outlet/>
    </main>
   </div>
    
  )
}

export default App
