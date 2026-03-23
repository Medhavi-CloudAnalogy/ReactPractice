import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center py-6 px-16'>
        <button
        className='bg-black text-xs text-white px-6 py-2 rounded-3xl'
        >
        TARGET AUDIENCE</button>

        <button
        className='bg-gray-300 text-xs text-gray-600 px-6 py-2 rounded-3xl'
        >DIGITAL BANKING PLATFORM</button>
    </div>
  )
}

export default Navbar