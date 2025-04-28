import React from 'react';
import tailwindConfig from './tailwind.config';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {FirstComponet} from './FirstComponet';
import reportWebVitals from './reportWebVitals';
// import Test from './Test'
// import HooksOnReact from './HooksOnReact';
// import Button from './Button';
// import App from './Button';
// import Users from './monster users/Users';
// import Form from './FormExersize/Form';
import Calculator from './practice/Calculator';
// import StepPbar from './step progress bar/StepPbar';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App/> */}
    {/* <Button >clickME</Button>   */}
    {/* <Users></Users> */}
    {/* <Form></Form> */}
    {<StepPbar></StepPbar>}
    <Calculator></Calculator>
    

  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
