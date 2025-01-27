import React from 'react'
import "./style.css"
import { useRef ,useEffect} from 'react'
export default function App() {
    const TextInput = useRef(null)



    const rendercount = useRef(0)
 
    useEffect(() => {
             rendercount.current =5
 })

    const FocusTextInput = () =>{
        TextInput.current.focus()
    }

  return (
    <>
    <input type='text' ref={TextInput}></input>
    <br></br>
    <h2>rendercount {rendercount.current}</h2>
    <button onClick={FocusTextInput} >focus</button>
    </>
    
    )
}
