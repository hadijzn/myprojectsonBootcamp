
import React from 'react';
import "./style.css";

export default function Menu() {
  return (
    <div className='background-image h-screen grid grid-cols-1 sm:grid-cols-2 relative'>
      <div className='flex flex-col mr-4 sm:mr-0'>
        <div className='flex'>
          <h1 className='text-2xl text-white mr-4 mt-12 sm:mr-40'>عمو هادی </h1>
          <h1 className='text-2xl text-orange-600 mt-12'> کافی</h1>
        </div>
        <h1 className='text-6xl text-white mr-4 mt-10 sm:mr-72 sm:mt-40'>بلک کافی</h1>
        <div className='bg-gray-700 h-40 w-60 opacity-35 mt-10 sm:mt-20 mr-4 sm:mr-40' />
      </div>

      <div className='flex flex-col'>
        <div className='mr-4 mt-12 sm:mr-60'>
          <button className='text-xl text-orange-600 hover:text-white'>فروشگاه</button>
          <button className='text-xl text-white mr-4 sm:mr-12 hover:text-orange-600'>درباره ما</button>
        </div>

        <div className='mt-10 sm:mt-80 mr-4 sm:mr-48'>
          <p className='text-white text-xl mb-4'>عاشقان لایف استایل مشکی</p>
          <p className='opacity-35 text-slate-300'>
            بوی قهوه به قدری زیباست که انگار متعلق به این دنیا نیست... اونم در کنار یار...
          </p>
        </div>
      </div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <div className='relative w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
          <img src='./assets/black.png' className='absolute inset-0 w-full h-full object-cover rounded-full border-8 border-orange-500' />
        </div>
      </div>
    </div>
  );
}
