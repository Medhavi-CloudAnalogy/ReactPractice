import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home'
import About from './pages/About'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <div className='bg-black text-white h-screen w-full '>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App