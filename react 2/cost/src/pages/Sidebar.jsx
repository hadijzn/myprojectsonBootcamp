import React from 'react'

export default function Sidebar() {
  return (
    <div className='flex  flex-col'>
      <div className='border-white  rounded-2xl w-60 h-14 flex shadow-sm shadow-slate-100 mt-4'>
        <img src='/friend-1.jpg' className='rounded-full ml-4 my-1 w-10 h-10'></img>
        <div>
        <p className='ml-4'>Expanse Summary</p>
        <p className='ml-4'>hadijzn@gweb.app</p>
        </div>
      </div>
      <div className=' mt-20 ml-2'>
          <div className='flex'>
          <img src='/bars-solid.svg' width={30}></img>
          <p className='ml-4'>Overview</p>
          </div>
          <div className='flex mt-4'>
          <img src='/coins-solid.svg' width={30}></img>
          <p className='ml-4'>All Costs</p>
          </div>
          <div className='flex mt-4'>
          <img src='/chart-simple-solid.svg' width={30}></img>
          <p className='ml-4'>Statistics</p>
          </div>
          <div className='flex mt-4'>
          <img src='/layer-group-solid.svg' width={30}></img>
          <p className='ml-4'>Categories</p>
          </div>
          <div className='flex mt-4'>
          <img src='/circle-info-solid.svg' width={30}></img>
          <p className='ml-4'>Details</p>
          </div>
        </div>
    </div>
  )
}
