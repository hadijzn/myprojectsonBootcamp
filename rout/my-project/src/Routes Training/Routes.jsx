// import { useRoutes } from 'react-router-dom';
// import RouteTwo from './RouteTwo';
// import SubRouteOne from './SubRouteOne';
// import SubRouteTwo from './SubRouteTwo';
// import SubRouteThree from './SubRouteThree';

// export default function Routes() {
//     const routes = useRoutes([
//         {
//             path:'route2',
//             element:<RouteTwo/>,
//             children:[
//                 {
//                     path:'/subRoute1'
//                     ,element:<SubRouteOne/>
//                 },
//                                 {
//                     path:'subRoute2'
//                     ,element:<SubRouteTwo/>
//                 },
//                                 {
//                     path:'subRoute3'
//                     ,element:<SubRouteThree/>
//                 }
//             ]
//         }
//     ])
//   return routes;
// }

import React from 'react';
import { useRoutes } from 'react-router-dom';
import RouteTwo from './RouteTwo';
import SubRouteOne from './SubRouteOne';
import SubRouteTwo from './SubRouteTwo';
import SubRouteThree from './SubRouteThree';

export default function AppRoutes() {
  const routes = useRoutes([
    {
      path: 'route2',
      element: <RouteTwo />,
      children: [
        { path: 'subRoute1', element: <SubRouteOne /> },
        { path: 'subRoute2', element: <SubRouteTwo /> },
        { path: 'subRoute3', element: <SubRouteThree /> },
      ],
    },
  ]);

  return routes;
}
