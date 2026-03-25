import React from 'react'

function Card({elem}) {
  return (
    <div>
        <a href={elem.url} 
                target='_blank'>
                  <div>
                  <div
                className='h-50 w-90 bg-white rounded-xl overflow-hidden'
                >
                  <img  
                  className='h-full w-full object-cover'
                  src={elem.download_url} alt="" />
                </div>
                <h2>{elem.author}</h2>
                </div>
                </a>
    </div>
  )
}

export default Card