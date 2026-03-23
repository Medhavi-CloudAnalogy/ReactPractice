import React from 'react'

function App() {
  return (
    <div className='h-screen w-full bg-black text-white'> 
      <form className='flex flex-col justify-between'>
        <input 
        className='bg-gray-400 text-black p-2 m-2 rounded-md'
        type="text"
        placeholder='Enter Task Heading'
        />

        <input 
        className='bg-gray-400 text-black p-2 m-2 rounded-md'
        type="text"
        placeholder='Write Details'
        />

        <button
        className='p-2 bg-white text-black rounded-md m-2'
        >Add Notes</button>
        
      </form>
    </div>
  )
}

export default App