import React from 'react'
import { Link } from 'react-router-dom'
export default function Route2() {
  return (
    <div>Route-2
            <br/>
          <Link className="Button"  to={'/Route-1'}> بزن بره رو 1</Link>

    </div>
  )
}
