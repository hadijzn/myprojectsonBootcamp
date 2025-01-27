import React from 'react'
import { Link } from 'react-router-dom'
export default function SubRouteOne() {
  return (
    <div>
      <p>
          here its sub-route-1
         </p>
         <br/>
        <Link className="Button"  to={'/route-2'}> بزن بره رو 2</Link>
        <br />
        <Link className="Button"  to={'/route-1'}> بزن بره رو 1</Link>
    </div>
  )
}
