
import React from 'react'
import { useRoutes } from 'react-router-dom'
import Route1 from './Route1'
import Route2 from './Route2'

export default function Routes() {
    const routes = useRoutes([
        {
            path:"/route-1",
            element : <Route1/>
        },
        {
            path:"/route-2",
            element : <Route2/>
        }
    ])
  return routes
}
