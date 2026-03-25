import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {


  return (
    <div className='nav flex justify-between bg-cyan-900 text-white'>
        <h2>Navbar</h2>
        <Nav2/>
    </div>
  )
}

export default Navbar