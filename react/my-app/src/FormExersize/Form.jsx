import React, { useEffect,useState } from 'react'

export default function Form() {
    const[myText,setmyText] = useState('')
    const[myText2,setmyText2] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        setmyText2 (myText)
        setmyText('')
    }
return (
    <div>
         <form onSubmit={handleSubmit}>
            <input type='text' value={myText}
            onChange={(e) => setmyText(e.target.value)}
            placeholder='enter something'>
            </input>
            <br></br>
            <input type='text' value={myText}
            onChange={(e) => setmyText(e.target.value)}
            placeholder='enter something'>
            </input>
            <br></br>
            <button type="submit">  submit</button>  
         </form>
         {myText2 && (
            <p>{myText2}</p>
                  )}
    </div>
        )
    }