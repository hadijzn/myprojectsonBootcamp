// import  {FirstComponet}  from "./FirstComponet"

// export function App() {
//     return(
//         <div>
//         <p>hellllo</p>
//         <FirstComponet />
//         </div>
//     )
// 
import React, { Component } from 'react'

export class App extends Component {
  render() {
    const text = document.getElementById('input-name')
    this.setState = this.myText
    return (
      <div>
        <input id='input-name' type='text'>${myText}</input>
      </div>
    )
  }
}
