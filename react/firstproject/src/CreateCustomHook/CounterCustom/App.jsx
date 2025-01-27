import React from 'react'
import useCounter from './useCounter'

export default function App() {
  const {count,increment,decrement,reset} = useCounter(0)
  return (
    <div>
      <p>count is {count}</p>
      <br/>
      <button onClick={increment} >increment</button>
      <br/>
      <button onClick={decrement} >decrement</button>
      <br/>
      <button onClick={reset} >reset</button>

    </div>
  )
}
