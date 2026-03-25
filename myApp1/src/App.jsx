import React from 'react'
import axios from 'axios';
import { useState } from 'react';

function App() {
    const [data, setdata] = useState([])
  async  function getData(){
        // const response =await fetch('https://jsonplaceholder.typicode.com/todos')
        // const data = await response.json();
        // console.log(data);


        // const response=await axios.get('https://jsonplaceholder.typicode.com/todos')
        // console.log(response.data)
        // setdata(response.data);

        // setdata(await axios.get('https://jsonplaceholder.typicode.com/todos')
        // .then((res)=>res.data))
        
    }
    // console.log(data)
  return (
    <div>
        <button onClick={getData}>Get Data</button>
        <div>
            {data.map((elem,idx)=>{
                <h3>{elem.id}</h3>
            })}
        </div>
    </div>
  )
}

export default App