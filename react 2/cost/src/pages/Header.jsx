import React from 'react'

export default function Header() {
  return (
    <div className='bg-[rgba(43,43,43,255)]  text-white text-center py-4 '>
      <div className='ml-1 w-64  bg-[rgba(43,43,43,255)] border-[rgba(43,43,43,255)] border-r-2'></div>
      <div className='ml-80 flex justify-between '>
        <div className='flex '>
          <img className='mt-2' width={40} height={40} src='/table-list-solid.svg'></img>
        <h1 className=' ml-3 text-3xl mr-32 mt-2 '>Cost Track</h1>
        </div>
      
        <div className='flex mr-9'>
        <img width={20} className='mx-1' src='question-solid.svg'></img>
        <img width={24} classNameclassName='mx-2'src='/bell-solid.svg'></img>
          <img width={24} className='mx-2' src='/gear-solid.svg'></img>
          <img src='/friend-1.jpg' className='rounded-full mx-1 my-1 w-10 h-10'></img>
        </div>
      </div>
    </div>
  )
}
