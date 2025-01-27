import React, { useState } from 'react'

 function useCounter(initialvalue=0) {
    const [count , SetCount] = useState(initialvalue)
    const Increase = () => SetCount(count +1)
    const Decrease = () => SetCount(count -1)
    const reset = () => SetCount(initialvalue)
  return {
    count,
    Increase,
    Decrease,
    reset
  }
}
export default useCounter;