import { getValue } from '@testing-library/user-event/dist/utils';
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
// export default function Input({setter}) {
const Input = forwardRef(function({placeholder},ref) {
    // console.log('input render');
    const internalRef = useRef('')
    useImperativeHandle(
      ref,
      () => {
        return {
          getValue(){
            return internalRef.current.value;
          }
          ,focus(){
            internalRef.current.focus()
          }
        }
      },
    )
  return (
    <div>
    <input ref={internalRef} placeholder={placeholder} type='text'></input>
    <button onClick={()=> console.log(ref.current.value)}>show value</button>
    </div>
  )
});
export default Input;
