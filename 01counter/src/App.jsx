import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div 
    className='flex flex-col justify-center items-center h-screen'
    >
       <h1 
    className='text-4xl font-bold text-gray-800 mb-4'
    >Counter Value: {count}</h1>
    <div className='flex items-center gap-4 p-4'>
      <button 
      className='bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition'
      onClick={()=>{
      if(count === 20) return;
      setCount(count+1);
    }}>Add Value</button>

    <br />

    <button 
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
    onClick={()=>{
      if(count === 0) return;
      setCount(count-1);
    }}>Remove Value</button>
    </div>
    </div>
    </>
  )
}

export default App;
