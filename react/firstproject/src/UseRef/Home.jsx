import React, { useRef, useState } from 'react'

export default function Home() {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const [error,setError] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();

       const  name = nameRef.current.value;
       const  email = emailRef.current.value;

        if(!name || !email) {
            setError('All field requireds to passed')
        }
        else{
            setError(`name is ${name},email is  ${email}`)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input ref={nameRef} type='name' placeholder='enter your name'></input>
        <br/>
        <input ref={emailRef} type='email' placeholder='enter your email'></input>
        <br/>
        <button type='submit'>Submit</button>
        <br/>
        {error && <p>{error}</p>}
    </form>
  )
}
