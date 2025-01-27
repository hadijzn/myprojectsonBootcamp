import React, { useState } from 'react'

export default function Form() {
    const[myText,setmyText] = useState('')
    const[myText2,setmyText2] = useState('')

    const handleClick = (e) =>{
        e.preventDefault()
        setmyText2 (myText)
        setmyText('')
    }

  return (
    <div>
        <form onSubmit={handleClick} >
            <input type='text' value={myText} onChange={(e) => setmyText(e.target.value)} placeholder='please enter something....'></input>
            <br></br>
            <input type='text' value={myText2} onChange={(e) => setmyText2(e.target.value)} placeholder='please enter something....'></input>
            <button type='submit'>submit</button>
        </form>
        {myText2 && (
            <p>{myText2}</p>
                  )}
        
    </div>
  )
}
