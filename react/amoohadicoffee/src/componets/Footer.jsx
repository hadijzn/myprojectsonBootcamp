import React from 'react'

export default function Footer() {
  return (
    <div className='bg-orange-600  mt-8 text-white grid grid-cols-3 justify-center'>
      <div className='mr-20'>
        <h1 className='mt-4 text-3xl '>عمو هادی کافه</h1>
        <p className='mt-4'>قهوه ات را بنوش و باور کن من به فنجان تو نمی گنجم
          دیده ام در جهان نما چشمی که به تکرار می کشد فالم
          <br/> محمد علی بهمنی 
        </p>
        <div className='flex'>
        <img className='mt-2'  src='./assets/icons/phone-solid (2).svg' width={20} height={20}></img>
        <p  className='pt-4 mr-2'>09136948043</p>
        </div>
        <div className='flex'>
        <img  className='mt-2'src='./assets/icons/map-location-dot-solid.svg' width={20} height={20}></img>
        <p className='pt-2 mr-2'>جنت آباد مرکزی شاهین شمالی خ بهار</p>
        </div>
      </div>
      <div className='mr-36 mt-4'>
      <h1 className='text-2xl'>لینک های سریع</h1>
      
      <p className='mt-4'>خانه</p>
      <p className='mt-4'>درباره ما</p>
      <p className='mt-4'>تماس با ما</p>
      <p className='mt-4'> حریم شخصی</p>

        </div>
        <div className='mr-36 mt-4 '>
        <h1 className='text-2xl '>دنبال کنید</h1>
        <div className='flex mt-3'>
        <img className='m-2' src='./assets/icons/google-brands-solid.svg' width={30} height={30}></img>
        <img className='m-2' src='./assets/icons/instagram-brands-solid.svg' width={30} height={30}></img>
        <img  className='m-2' src='./assets/icons/facebook-brands-solid.svg' width={30} height={30}></img>
        <img src='./assets/icons/telegram-brands-solid.svg' width={30} height={30}></img>
        </div>
        </div>
        {/* <hr class="h-2 border-t-2 w-2/3 border-white bg-white  my-4   mr-96"></hr> */}
        <p className='mt-5 ml-5 mb-2 mr-96'>copyRight @ 2024 HadiJzn All Rights Reserved</p >
    </div>
  )
}
