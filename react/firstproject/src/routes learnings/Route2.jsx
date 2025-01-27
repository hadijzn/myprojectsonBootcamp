import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

export default function Route2() {
  return (
    <div>
         <p>
          here its route2
         </p>
         <br/>
        <Link className="Button" to={'/route-1'}> بزن بره رو 1</Link>
      
    </div>
  )
}
