import React from 'react'
import useInput from './UseInput'
import './style.css'

export default function App() {
    const name = useInput('')
      return (
    <div>
        <input type='text' {...name}></input>
        <p>input is :  {name.value}</p>
    </div>
  )
}

