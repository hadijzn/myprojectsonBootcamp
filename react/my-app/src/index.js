import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {FirstComponet} from './FirstComponet';
import reportWebVitals from './reportWebVitals';
import Test from './Test'
import HooksOnReact from './HooksOnReact';
import Button from './Button';
import App from './Button';
import Users from './monster users/Users';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    {/* <Button >clickME</Button>   */}
    <Users></Users>

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
