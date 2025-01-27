import React, { useEffect, useState } from 'react'
import "./style.css";
import SearchBox from './SearchBox';
export default function Order() {
  const products = [
    {name:'spreso',id:1,text:'اسپرسو سینگل ',price:'27 تومن',image:'./assets/order/spreso single.jpg'},
    {name:'spreso',id:2,text:'اسپرسو دوبل',price:'37 تومن', image:'./assets/order/spreso dobl.jpg'},
    {name:'spreso',id:4,text:'آفوگاتو',price:'65 تومن', image:'./assets/order/afogato.jpg'},
    {name:'spreso',id:6,text:'آمریکانو',price:'67 تومن', image:'./assets/order/americano.jpg'},
    {name:'spreso',id:7,text:'ترک',price:'55 تومن', image:'./assets/order/tork.jpg'},
    {name:'spreso',id:8,text:'کارامل ماکیاتو',price:'75 تومن', image:'./assets/order/caram makiato.jpg'},
    {name:'spreso',id:9,text:'آیس موکا',price:'65 تومن', image:'./assets/order/ice moka.jpg'},
    {name:'spreso',id:10,text:'فرانسه ',price:'75 تومن', image:'./assets/order/france.jpg'},
    {name:'spreso',id:11,text:'کاپوچینو',price:'65 تومن', image:'./assets/order/capucino.jpg'},
    {name:'spreso',id:12,text:'هات چاکلت',price:'45 تومن', image:'./assets/order/hot choc.jpg'},
    {name:'spreso',id:13,text:'لته',price:'45 تومن', image:'./assets/order/late.jpg'},
    {name:'spreso',id:14,text:'آیس لته',price:'55 تومن', image:'./assets/order/ice late.jpg'},
    {name:'spreso',id:16,text:'آیس کارامل ماکیاتو',price:'85 تومن', image:'./assets/order/ice karamel makiato.jpg'},
    {name:'spreso',id:17,text:'اسپرسو اسپشیال',price:'65 تومن', image:'./assets/order/spreso spec.jpg'},
    {name:'spreso',id:18,text:'دوپیو',price:'65 تومن', image:'./assets/order/dopio.jpg',}
    ,{name:'spreso',id:20,text:'وایت چاکلت',price:'35 تومن', image:'./assets/order/white chock.jpg'},
    {name:'spreso',id:21,text:'هات نوتلا',price:'77 تومن', image:'./assets/order/hot notela.jpg'},
    {name:'spreso',id:22,text:'هات لوتوس',price:'69 تومن', image:'./assets/order/hot lotos.jpg'},
    {name:'spreso',id:24,text:'شیک شکلات ',price:'115 تومن', image:'./assets/order/chock shake.jpg'},
    {name:'spreso',id:25,text:'شیک توت فرنگی',price:'127 تومن', image:'./assets/order/chake toot.jpg'},
    {name:'spreso',id:26,text:'شیک لوتوس',price:'195 تومن', image:'./assets/order/chake lotos.jpg'},
    {name:'spreso',id:27,text:'شیک اسپرسو',price:'122 تومن', image:'./assets/order/spreso shake.jpg'},
    {name:'spreso',id:28,text:'شیک تمشک',price:'144 تومن', image:'./assets/order/chake tameshk.jpg'},
    {name:'spreso',id:24,text:'شیک شکلات ',price:'115 تومن', image:'./assets/order/chock shake.jpg'},

  ]



  const [productList, setProductList] = useState([]);
  const [newProductList, setNewProductList] = useState([]);

  const handleSearch = (param) => {
    const newProduct = productList.filter((product) => {
      return product.name.toLowerCase().includes(param.toLowerCase());
    });
    setNewProductList(newProduct);
  };



  return (
    <div className=' bg-black'>
      
<form class="max-w-screen-md mx-auto pt-4 ">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative ">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
            <SearchBox method={handleSearch} />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">جستجو</button>
    </div>
</form>



      <div className='flex justify-center items-center flex-wrap  mx-4 '>
        {products.map(product =>(
          <div key={product.id} className='product mx-7 mt-4 bg-gray-700 w-1/5 grid justify-center items-center  rounded-md border-gray-700 border hover:border-gray-200 '>
            <img src={product.image} alt={product.name} 
            width={275} height={75} className='product-image rounded-md mt-3 mx-2' />
            <h1 className='text-white text-xl mt-3 cursor-default mx-2'>{product.text}</h1>
            <h1 className=' text-xl bg-gray-700 mt-3 cursor-default mx-2'> </h1>
            <h1 className=' text-xl  mt-3 cursor-default mx-2 mb-3'>{product.price}</h1>
            <button className='flex mt-2 mb-3 justify-center items-center bg-orange-600 text-white h-10 w-72 rounded-xl hover:bg-white hover:text-black '>سفارش</button>
          </div>
        ))}
      </div>
    </div>
  )
}
