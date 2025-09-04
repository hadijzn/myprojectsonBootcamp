import React from 'react';
import { Outlet , Link } from 'react-router-dom';

export default function RouteTwo() {
  return (
    <div>
      <h2>صفحه RouteTwo</h2>
       <nav>
          <Link to="/route2">برو به Route 2</Link>
          <br />
          <Link to="/route2/subRoute1">SubRoute 1</Link>
          <br />
          <Link to="/route2/subRoute2">SubRoute 2</Link>
          <br />
          <Link to="/route2/subRoute3">SubRoute 3</Link>
        </nav>
      <Outlet />
    </div>
  );
}
