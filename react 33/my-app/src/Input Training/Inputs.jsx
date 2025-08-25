import React from 'react'

export default function Inputs({placeholder='',type='text',handlechange}) {
  return (
    <div>
        <input placeholder={placeholder} type={type} onChange={(e)=>handlechange(e.target.value)}></input>
        <input placeholder={placeholder} type={type}></input>
    </div>  )
}
