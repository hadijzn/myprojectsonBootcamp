import React from 'react'

export default function SearchBox({method}) {
  return (
    <div className='searchBox flex justify-center pt-12  '>
        <input className='rounded-md' type='text' placeholder='Search Users...' onChange={(e)=>{
          method(e.target.value)
        }}></input>
    </div>
  )
}
