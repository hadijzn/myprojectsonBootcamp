import React from 'react'
import { useState  } from 'react'
export default function Greetings() {
  const [Username,setUsername] = useState("")
  const [Login,setLogin] = useState(false)

  const handleLogin = () =>{
    const Username =  prompt('enter your name')
    if(Username) {
      setUsername(Username)
      setLogin(true)
    }

  }
  const Logout = () => {
    setLogin(false)
    setUsername("")
  }
  return (
    <>
    {Login ?  (
      <h2> welcome {Username}</h2>
    ):(
    <h2>please enter</h2>
    )}

    <button onClick={ Login ? Logout : handleLogin }>
      {Login ? "exit":"enter"}

    </button>
    </>
  )
}














































