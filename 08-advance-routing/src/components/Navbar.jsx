import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-cyan-900 p-3'>
        <h2>Navbar</h2>
        <div className='flex align-ceter gap-6'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
        </div>
    </div>
  )
}

export default Navbar