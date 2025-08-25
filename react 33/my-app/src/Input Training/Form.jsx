import React, { useState } from 'react'
import Inputs from './Inputs'

export default function Form() {
    const [Username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showresult, setShowResult] = useState(false)
    const handlesetUsername = (result)=>{
      setUsername(result)
    }
    const handlesetPassword = (result)=>{
      setPassword(result)
    }
    const handleForm = (e)=>{
        e.preventDefault()
        setShowResult(!showresult)
    }
  return (
    <div >
      <form className='flex' >
<Inputs placeholder='enter your name'  type='text' handlechange={handlesetUsername} />
<Inputs placeholder='enter your password'  type='password' handlechange={handlesetPassword} />
<button onClick={handleForm}>submit</button>
      </form>
      {showresult === true && (
        <ul>
          <li> username:{Username}</li>
          <li>password : {password}</li>

        </ul>
      )}
    </div>
  )
}
