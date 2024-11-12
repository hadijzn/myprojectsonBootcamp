import { supabaseServerClient } from '@/api/config';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Products from './Product/page';
import Modal from './modal/Modal';

export default function Home () {
  return (
    <div className='font-serif'>
      <header className=' bg-orange-500 f '>        
        <div className='h-9 flex justify-between items-center p-3'>
        <div className='text-cyan-50 flex items-center'> 
          <img className="  mr-1" src="/icons/phone-solid.svg" height={12} width={15}></img>
          <p>+91(720)0901896</p>
        </div>
        <div className='text-cyan-50 absolute ml-44 left-1/3'>Get 50% Off on Selected Items | Shop Now</div>
        </div>
      </header>   
      <div className='flex  items-center justify-start ml-44 mt-6 '>
          <Image src="/images/minimal shopping.png" alt='ssss' width={250} height={200}></Image>
          <ul className='flex items-center justify-center ml-3'>
            <li className='m-4'>Categories</li>
            <li className='m-4'>Deals</li>
            <li className='m-4'>What's new</li>
            <li className='m-4'>Delivery</li>
          </ul>
          <ul className="flex justify-end absolute right-44 items-center">
            <li className='m-4'>
            <img className="inline mr-1 mb-1" src="/icons/user-solid.svg" height={12} width={15}></img>
              <button>Account</button>
            </li>
            <li className='ml-1'>
            <Modal/>
            </li>
          </ul>
      </div>
      <div className='flex justify-center items-center mt-8'>
      <Image src="/images/img.png" alt='ad-board-image' width={1200} height={500}  />
      </div>
      <section>
        <Products/>
      </section>
    </div>  
    );    
      


}
