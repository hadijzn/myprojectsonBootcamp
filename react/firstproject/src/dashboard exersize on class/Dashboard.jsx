import React from 'react'
import { useState } from 'react'
import ShowInput from './ShowInput'
export default function Dashboard() {

    const [MyData,setMyData] = useState('')
    const [MyData2,setMyData2] = useState('')
    const [MyData3,setMyData3] = useState('')
    const [MyData4,setMyData4] = useState('')
    const [MyData5,setMyData5] = useState('')
    const [MyData6,setMyData6] = useState('')

    const [SendData,setSendData] = useState(null)

    const handleClick = (e) =>{
        e.preventDefault();  

        setSendData({  
            MyData,
            MyData2,
            MyData3,
            MyData4,
            MyData5,
            MyData6
          });
          console.log()  
     }
  return (
    <>
    <form onSubmit={handleClick}>

    <p>نوع پیام </p><input type='text' value={MyData} onChange={(e) => setMyData(e.target.value)} ></input>

    <br/>

    <p>قیمت</p>
    
    <input type='text' value={MyData2} onChange={(e) => setMyData2(e.target.value)} ></input>

    <br/>

    <p>محصول</p> 
    <input type='text' value={MyData3} onChange={(e) => setMyData3(e.target.value)} ></input>

    <p>نوع پیام </p>
    <input type='text' value={MyData4} onChange={(e) => setMyData4(e.target.value)} ></input>

    <br/>

    <p> دسته بندی  </p><input type='text' value={MyData5} onChange={(e) => setMyData5(e.target.value)} ></input>

    <p>نوع پیام </p><input type='text' value={MyData6} onChange={(e) => setMyData6(e.target.value)} ></input>

    <br/>
    <br/>

    <button>ارسال </button>
    
    </form>
    
    <br/>

    {SendData && <ShowInput data={SendData} />}  

</>


  )
}
