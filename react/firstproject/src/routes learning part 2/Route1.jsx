import React from 'react'
import { Link } from 'react-router-dom'

export default function Route1() {
  return (
    <div>Route-1
      <br/>
    <Link className="Button"  to={'/Route-2'}> بزن بره رو 2</Link>

    </div>
  )
}
