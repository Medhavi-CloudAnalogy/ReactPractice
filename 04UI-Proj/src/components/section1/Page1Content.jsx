import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

function Page1Content() {
  return (
    <div className='py-10 px-10 gap-5 flex justify-between h-[90vh] bg-amber-800'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content