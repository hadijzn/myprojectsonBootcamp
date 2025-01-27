import React from 'react'
// import BgImage from 'src/assets/bg-slate.png'
import "./style.css";

export default function Menu() {
  return (
             <div className='background-image  h-screen grid  grid-cols-2'>
              <div className='flex flex-col mr-11'>
                <div className='flex'>
                <h1 className='text-2xl text-white mr-40 mt-12'>عمو هادی </h1>
                <h1 className= ' text-2xl text-orange-600  mt-12'> کافی</h1>
                </div>
                <h1 className='text-6xl text-white mr-72 mt-40'>بلک کافی</h1>
                   <div className='bg-gray-700 h-40 w-60 opacity-35 mt-20 mr-40 '>

                 </div> 
              </div>

              <div className='flex flex-col flex-wrap  '>

                <div className='mr-60 mt-12'>
                <button className=' text-xl text-orange-600 hover:text-white '>فروشگاه</button>
                <button className='text-xl text-white mr-12 hover:text-orange-600'>درباره ما</button>
                </div>

               <div className=' mt-80 mr-48 '>
                      

    <p className='text-white text-xl mb-4 flex justify-between items-center'>عاشقان لایف استایل مشکی</p>
               <p className='opacity-35 text-slate-300 '>
           بوی قهوه به قدری زیباست که انگار متعلق به این دنیا نیست...  اونم در کنار یار...
        </p>
       </div>

              </div>
              <div className='rounded-full border-8 border-orange-500  w-40 h-40  absolute top-28 left-96 ml-52 '>

</div>
              <img src='./assets/black.png' className='h-3/4 mt-2 absolute  top-20 left-96 ml-60'></img> 

             </div>
    
  )
}
