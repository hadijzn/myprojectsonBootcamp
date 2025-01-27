import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes'
import { Link } from 'react-router-dom';
import "./style.css";
export default function App() {
 return (
    <BrowserRouter>
    <Routes/>
    
    <Link className="Button"  to={'/Route-1'}> بزن بره رو 1</Link>
    <Link className="Button"  to={'/Route-2'}> بزن بره رو 2</Link>

    </BrowserRouter>
 )
}
