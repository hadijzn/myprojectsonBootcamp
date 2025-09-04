import React, {useRef, useState}  from 'react'
import Input from './Input';

export default function  Home () {
    const firstNameRef = useRef('')
    const [show,setShow] = useState(false)
    const handleSubmit = () => {
        console.log(firstNameRef.current.getValue());
        
        setShow(!show)
    }

  return (
    <div className='bg-black w-screen h-screen text-blue-700'>
        {/* <form> */}
            <Input ref={firstNameRef} placeholder={'do something'}/>
            <button onClick={handleSubmit}> one submit</button>
            {show &&(
                <div>
                    {/* <p>{firstNameRef.value}</p> */}
                </div>
            )
                
            }
        {/* </form> */}
    </div>
  )
}