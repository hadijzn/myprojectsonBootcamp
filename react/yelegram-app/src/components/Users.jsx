import React from 'react'


export default function Users() {

  return (
    <div className=''>
             <div className=' top-0 absolute rounded-md border-2 border-white h-2/3 w-1/4 ml-4 mt-4'>
         <ul className='mt-9'>
             <li className='flex justify-between'>
                 <div className='flex '>
                    <img className='ml-4 rounded-full border-white border-2 mr-5'width={45} height={45} src='./users/friend-1.jpg'></img>
                     <span className='mb-2 '>alie</span>
                 </div>
                 <button className=' mr-3 w-10 h-10 bg-blue-500 rounded-xl'>پیام</button>
             </li>
             <li className='mt-12 flex justify-between'>
             <div className='flex items-end '>
                    <img className='ml-4 rounded-full border-white border-2 mr-5'width={45} height={45} src='./users/friend-2.jpg'></img>
                     <span className=' mb-2'>sara</span>
                 </div>
                 <button className='mr-3 w-10 h-10 bg-blue-500 rounded-xl'>پیام</button>

             </li>
             <li className='mt-12 flex justify-between'>
             <div className='flex items-end '>
                    <img className='ml-4 rounded-full border-white border-2 mr-5'width={45} height={45} src='./users/friend-3.jpg'></img>
                     <span className=' mb-2'>aria</span>
                 </div>
                 <button className='mr-3 w-10 h-10 bg-blue-500 rounded-xl'>پیام</button>

             </li>
             <li className='mt-12 flex justify-between' >
             <div className='flex items-end '>
                    <img className='ml-4 rounded-full border-white border-2 mr-5'width={45} height={45} src='./users/friend-4.jpg'></img>
                     <span className=' mb-2'>bhar</span>
                 </div>
                 <button className='mr-3 w-10 h-10 bg-blue-500 rounded-xl'>پیام</button>

             </li>
             <li className='mt-12 flex justify-between'>
             <div className='flex items-end '>
                    <img className='ml-4 rounded-full border-white border-2 mr-5'width={45} height={45} src='./users/friend-5.jpg'></img>
                     <span className=' mb-2'>zhra</span>
                 </div>
                 <button className='mr-3 w-10 h-10 bg-blue-500 rounded-xl'>پیام</button>

             </li>
            
         </ul>
    </div>
    </div>
  )
}
