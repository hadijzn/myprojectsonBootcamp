"use client"

import React, { useState } from 'react'
import './style.css'
import { useEffect } from 'react'

export default function page() {

  let [count,SetCount] = useState(0)
  let [data,setData] = useState(null)

  const fetchData = async ()  =>{
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await res.json();
    setData(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
    <header>
    <p >count is : {count}</p>  
    <button onClick={()=>{
      SetCount(count++)
    }}>add more</button>
          <br/>
    <button onClick={()=>{
      SetCount(0)
    }}> reset
    </button>
    </header>
    <section>
    <div className='Sidebar'>Sidebar</div>
    <div className='maindata'>
    {data ? <p>{data.title} </p> : <p>loading...</p>}
    </div>
    </section>

    </>
  )
}
