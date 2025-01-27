import React from 'react'

export default function ShowInput({data}) {
  
  return (
    <div className='Show-input'>

        <p>نوع پیام: {data.MyData}</p>  
        <p>قیمت: {data.MyData2}</p>  
        <p>محصول: {data.MyData3}</p>  
        <p>نوع پیام : {data.MyData4}</p>  
        <p>دسته بندی: {data.MyData5}</p> 
        <p>دسته بندی: {data.MyData6}</p>
         

      </div>      

  )
}

