import React, { useRef, useState,ref} from 'react'
import Input from './Input';
import "./style.css";

export default function Home() {
    const firstNameRef = useRef('')
    const [show,setshow] = useState(false)
    const handleSubmit = () => {
        console.log(firstNameRef.current.getValue());
    }
  return (
    <div>
        <Input ref={firstNameRef} placeholder={'enter something'} />
        <button onClick={handleSubmit}>submit</button>
        {show && 
        (<div>
            <p></p>
            </div>
        )}
    </div>
  )
}

