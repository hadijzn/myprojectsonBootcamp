import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RouteTwo() {
  return (
    <div>
      <h2>صفحه RouteTwo</h2>
      <img src='/images/3.jpg' />
      <Outlet />
    </div>
  );
}
