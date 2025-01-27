import React from 'react'
import "./style.css";
export default function SearchBox({method}) {
  return (
    <div>
      <input className='Searchbox' type='text' placeholder='search here....' onChange={(e) =>
      {
        method(e.target.value)
      }}></input>
    </div>
  
  )
}
