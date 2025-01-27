
import React from 'react'

export default function Home() {
  return (
    <div className='flex justify-center items-center mb-40 '>
            <section className='flex justify-end flex-wrap  border-2 border-white rounded-lg h-36 w-2/4  bg-blend-saturation bg-opacity-25 mt-36 ml-56 fixed'>
    <textarea className=' ml-4 mt-4 w-5/6 h-16 border-2 border-white bg-black text-white rounded-xl' ></textarea>
    <div className=' ml-3 image div '>
    <img className='rounded-full border-2 border-white mr-7 mt-3 ' src='./users/pp.jpg' width={65} height={65}></img>
    </div>

    <div className='flex'>
    <button className='  bg-blue-400 rounded-2xl w-20 h-9 mr-60'>
        اشتراک
    </button>
 

    <div className=' flex mr-7'>
        <button className='flex  ml-36'>
        <p className='mr-2'>کاربر</p>

        <svg className='ml-4'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                 </svg>
        </button>
        <button className='flex ml-4'>
            <p className='mr-2'>مکان</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
        </button>
        <button className='flex ml-4'>
            <p className='mr-2'>وضعیت</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>
        </button>
    </div>
    </div>
    
    </section>
    
 </div>
  )
}







