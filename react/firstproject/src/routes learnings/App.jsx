import React from 'react'
import { BrowserRouter, Routes,Route} from "react-router-dom";
import Route1 from './Route1';
import Route2 from './Route2';
import "./style.css";
import SubRouteOne from './SubRouteOne';
export default function App() {
  return (
    <>
    <BrowserRouter>      
    
      {/* <link to='route-1'> go to Route1 </link >
      <link to='route-2'> go to Route2 </link> */}
    <Routes>

      <Route path="/route-1"  element={<Route1/>}></Route>
      <Route path="/route-1/sub-route-1"  element={<SubRouteOne/>}></Route>

      <Route path="/route-2"  element={<Route2/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
