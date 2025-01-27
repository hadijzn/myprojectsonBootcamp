import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css";

export default function Route1() {
  return (
    <div>
       <p>
          here its route1
         </p>
         <br/>
        {/* <a href='route-2'>ssss</a> */}
        <Link className="Button"  to={'/route-2'}> بزن بره رو 2</Link>
        <Link className="Button"  to={'/route-1/sub-route-1'}> بزن بره به ساب1  </Link>

    </div>
  )
}
