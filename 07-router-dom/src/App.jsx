import { useState } from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'


function App() {

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
      <h2>NavBar</h2>
      <div className='flex items-center gap-15'>
        <Link to='/'><u>Home</u></Link>
        <Link to='/about'><u>About</u></Link>
        <Link to='/contact'><u>Contact</u></Link>
      </div>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default App
