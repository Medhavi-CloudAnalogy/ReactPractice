import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {

let navigate = useNavigate();
  
  return (
    <div>
      <div id='oopss'>
    <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
        <span>404 PAGE</span>
        <p className="p-a">
           . The page you were looking for could not be found</p>
        <button 
        onClick={()=>{
          navigate('/')
        }}
        className='border-2 p-2 text-xs cursor-pointer'>... Back to previous page</button>
    </div>
</div>
    </div>
  )
}

export default PageNotFound

//class="back">... Back to previous page