import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  // ref hook
  const passRef = useRef("");

  function copyPasswordToClipboard(){
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }

const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+="0123456789";
    if(charAllowed) str += "!@#$%^&*()_+";

    for(let i=1 ; i<=length ; i++){
      pass += str.charAt(Math.floor(Math.random()*(str.length+1)));
    }
    setPassword(pass);
  },[length,numberAllowed, charAllowed, setPassword]);

  useEffect(()=>{
    passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 
      py-1 my-8 space-y-2 text-orange-400 bg-gray-500'>
        
        <h1 className='text-white text-center'>Password Generator</h1>

        <div 
        className='flex rounded-lg overflow-hidden mb-4 bg-white'
        >
          <input 
          type='text'
          value={password}
          className='bg-white w-full px-3 py-1 outline-none'
          placeholder='password'
          readOnly
          ref={passRef}
          />

          <button
          className='text-white bg-blue-500 hover:bg-blue-600 px-2 py-1  font-bold rounded'
          onClick={copyPasswordToClipboard}
          >Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length ({length})</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
           onChange={()=>{
            setNumberAllowed((prev) => !prev)
           }}
          />
          <label>Numbers</label>


          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
           onChange={()=>{
            setCharAllowed((prev) => !prev)
           }}
          />
          <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
