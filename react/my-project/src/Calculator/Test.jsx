import React, { useState } from 'react'

export default function Test() {

    const [input,setInput] = useState('')
    const [result,setResult] = useState(null)

    const handleNumberClick = (number) => {
        setInput(input + number);
    }
  return (
    <div className=''>Test</div>
  )
}
