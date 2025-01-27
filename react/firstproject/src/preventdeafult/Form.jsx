import React, { useState } from 'react'

export default function Form() {
  const [Output,setOutput] = useState('')
  const handleChange = (e) =>{
    e.preventDefault();
    console.log(`entered value : ${Output}`);
    
  }
  return (
    <form onSubmit={handleChange}>
      <input type='text' value={Output} 
      onChange= {(e) => setOutput(e.target.value)}></input>
      <br/>
      <button type='submit'>submit</button>
    </form>
  )
}
