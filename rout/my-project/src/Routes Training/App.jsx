// import React from 'react'
// import { BrowserRouter,Routes,Route,Link,Outlet}from 'react-router-dom';
// import RouteTwo from './RouteTwo';
// import routes from './AppRoutes'
// import AppRoutes from './AppRoutes';
// export default function App() {
//   return (
//   <BrowserRouter>
//     <div>
//       <nav>
//         <Link to="/route2">go to route 2</Link>
//       </nav>
//     </div>
//   </BrowserRouter>

//   )
// }
import React from 'react';
import { BrowserRouter, Link, Outlet } from 'react-router-dom';
import AppRoutes from './Routes';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <AppRoutes />
        <nav>
          <Link to="/route2">to route 2</Link>
        </nav>
      </div>
      <Outlet/>
    </BrowserRouter>
  );
}
