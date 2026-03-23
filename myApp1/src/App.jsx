import React,{useState} from 'react'

function App() {

  const [title, setTitle] = useState('');

function submitHandler(e){
  e.preventDefault();

  console.log("form submitted by:",title);
  
  setTitle('');
}

  return (
    <div className='h-screen w-full bg-black text-white p-3'>
      <form onSubmit={(e)=>{
          submitHandler(e);
      }}>
        <input 
      type='text'
      placeholder='Enter your name'
      className='bg bg-gray-500 rounded-full px-2'
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value);
      }}
      />
      <button 
      className='bg bg-blue-500 hover:bg-blue-600 rounded-full px-2 text-black'
      >Submit</button>
      </form>
    </div>
  )
}

export default App