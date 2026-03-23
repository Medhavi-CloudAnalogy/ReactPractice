import React,{useEffect, useState} from 'react'

function App() {


  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [task, settask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    let obj = {
      title: title,
      desc: desc
    }

    settask([...task, obj]);
    setTitle("");
    setDesc("");
  }


useEffect(() => {
  console.log(task);
}, [task]);

  return (
    <div className='h-screen w-full bg-black text-white p-5'> 
      <form className='flex justify-between' onSubmit={(e)=>{
        submithandler(e);
      }}>
        <div className='flex flex-col w-1/2'>
          <input 
        className='w-full bg-gray-400 text-black p-2 m-2 rounded-md'
        type="text"
        placeholder='Enter Task Heading'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />

        <textarea 
        className='h-20 w-full bg-gray-400 text-black p-2 m-2 rounded-md'
        type="text"
        placeholder='Write Details'
        value={desc}
        onChange={(e)=>{
          setDesc(e.target.value);
        }}
        />

        <button
        className='w-full p-2 bg-white text-black rounded-md m-2'
        >Add Notes</button>
        </div>
      </form>
    </div>
  )
}

export default App