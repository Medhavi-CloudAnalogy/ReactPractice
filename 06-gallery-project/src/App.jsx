import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Card from './components/Card';

function App() {

  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)
  const getData =async ()=>{
    let response =await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    
    setUserData(response.data)
    
  }

  let printUserData = <h3 className='text-white text-xs font-semibold absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2'>
    Loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map((elem,idx)=>{
      return (
        <div key={idx}>
          <Card elem={elem}/>
        </div>
      );
    })
  }

  useEffect(()=>{
    getData()
  },[index])
  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>

      {/* <h1 className='text-6xl fixed bg-red-700'>{index}</h1> */}
      {/* <button 
      onClick={getData}
      className='bg-green-600 active:scale-95 mb-2 text-white px-2 py-1 rounded-full'
      >Get Data</button> */}

    <div className='flex flex-wrap gap-4 mb-4'>
        {printUserData}
    </div>
    <div className='flex justify-center items-center gap-4'>
      <button 
      style={{opacity: index == 1?0.5:1}}
      onClick={()=>{
        // console.log("prev btn clicked");
        if(index <= 1) return;
        setIndex(index=> index-1);
        setUserData([]);
      }}
      className=' bg-amber-400 cursor-pointer active:scale-95 text-sm px-2 py-1 rounded'>
      Prev</button>
      <h4 className='bg-white text-black px-1'>{index}</h4>
      <button 
      onClick={()=>{
        // console.log("next btn clicked");
         setUserData([]);
        setIndex(index=> index+1);
      }}
      className=' bg-amber-400 cursor-pointer active:scale-95 text-sm px-2 py-1 rounded'>
      Next</button>
    </div>

    </div>
  )
}

export default App