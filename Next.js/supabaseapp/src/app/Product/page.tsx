'use client';
import React, { useState } from 'react';
import Modal from 'react-modal';
import useCounter from './useCounter';
import MyModal from '../componets/MyModal';

export default function Products() {
  const products = [  
    { name: 'Rounded neck -T-shirt 100% Cotton', id: 1, price: 85, image: './images/tshirt (1).png' },  
    { name: 'Rounded neck -T-shirt 100% Cotton', id: 2, price: 48, image: './images/tshirt (2).png' },  
    { name: 'Rounded neck -T-shirt 100% Cotton', id: 3, price: 78, image: './images/tshirt (3).png' },  
    { name: 'Rounded neck -T-shirt 100% Cotton', id: 4, price: 69, image: './images/tshirt (4).png' },  
    { name: 'Rounded neck -T-shirt 100% Cotton', id: 5, price: 25, image: './images/tshirt (5).png' },  
    { name: 'Rounded neck -T-shirt 100% Cotton', id: 6, price: 58, image: './images/tshirt (6).png' },  
    { name: 'Rounded neck -T-shirt 100% Cotton', id: 7, price: 69, image: './images/tshirt (7).png' },  
    { name: 'Rounded neck -T-shirt 100% Cotton', id: 8, price: 88, image: './images/tshirt (4).png' }  
  ];  

  const { count, Increase, Decrease, reset } = useCounter(0);  
  const [showModal, setShowModal] = useState(false);  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openModal = (product) => {  
    setShowModal(true);  
    setSelectedProduct(product);  
    setQuantity(1);
    setTotalPrice(product.price);
  };  

  const closeModal = () => {  
    setShowModal(false);  
    setSelectedProduct(null);  
    setQuantity(0);
    setTotalPrice(0);
  };

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    setTotalPrice(prevTotalPrice => prevTotalPrice + selectedProduct.price);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
    setTotalPrice(prevTotalPrice => Math.max(prevTotalPrice - selectedProduct.price, 0));
  };
  
  const resetQuantity = () => {
    setQuantity(0);
    setTotalPrice(0);
  };

  const addToCart = () => {
    const productToAdd = { ...selectedProduct, quantity, totalPrice };
    setCart([...cart, productToAdd]);
    closeModal();
    setIsCartModalOpen(true);          
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <section className='ml-40 mr-40 mt-10'>
      <div className="product-list grid justify-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} width={300} height={200} className="product-image" />  
            <div className='flex mt-2'>
              <p>{product.name}</p>
              <h2 className='float-right top-0 ml-24'>{product.price} $</h2>
            </div>
            <button onClick={() => openModal(product)} className="bg-red-500 text-white px-4 py-2 rounded mt-1 hover:bg-slate-700">Add Item</button>
            <div className="flex justify-start items-center space-x-1 rtl"> 
              <span className="star cursor-pointer text-2xl hover:text-yellow-500">★</span> 
              <span className="star cursor-pointer text-2xl hover:text-yellow-500">★</span> 
              <span className="star cursor-pointer text-2xl hover:text-yellow-500">★</span> 
              <span className="star cursor-pointer text-2xl hover:text-yellow-500">★</span> 
              <span className="star cursor-pointer text-2xl hover:text-yellow-500">★</span>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="fixed inset-0 float-right flex justify-end mt-4 mb-4 mr-4"
        overlayClassName="overlay"
        ariaHideApp={false}
      >
        {selectedProduct && (
          <div className="modal-content bg-slate-50 text-black h-4/4 w-96 rounded-xl border-solid border border-orange-600">
            <div className='flex items-center justify-center mt-3 mr-2 border-2 w-8 h-8 rounded-2xl bg-slate-300 absolute right-0'>
              <img onClick={closeModal} className='close-button w-6 h-6 hover:text-orange-500 rounded-3xl' src='/images/xmark.svg'></img>
            </div>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="mt-4 ml-4 w-3/4" />
            <div className="flex justify-start">
              <p className="m-4 text-justify">{selectedProduct.name}</p>
              <p className="m-4 font-bold">{selectedProduct.price }</p>
            </div>
            <div className='flex justify-start items-center'>
              <div></div>
              <div>
                <img onClick={decreaseQuantity} className='m-4 w-4 h-4' src='/images/minus.svg'/>
              </div>
              <div>{quantity}</div>
              <img onClick={increaseQuantity} className='m-4 w-4 h-4' src='/images/plus.svg'/>
            </div>
            <div className='m-4'>
              <button className='mr-2 w-8 h-7 text-orange-500 border-2 border-orange-500 rounded hover:bg-orange-400 hover:text-white hover:border-white'>S</button>
              <button className='mr-2 w-8 h-7 text-orange-500 border-2 border-orange-500 rounded hover:bg-orange-400 hover:text-white hover:border-white'>XL</button>                           
              <button className='mr-2 w-9 h-7 text-orange-500 border-2 border-orange-500 rounded hover:bg-orange-400 hover:text-white hover:border-white'>XXL</button>
              <button className='mr-2 w-9 h-7 text-orange-500 border-2 border-orange-500 rounded hover:bg-orange-400 hover:text-white hover:border-white'>XXL</button>
            </div>
            <div className='flex justify-start absolute bottom-0 items-center mb-4'>
              <button className='ml-4 mr-4 w-32 h-10 border-2 text-orange-500 border-orange-500 rounded-2xl hover:bg-orange-400 hover:text-white hover:border-white' onClick={addToCart}>Add to cart</button>
              <button onClick={resetQuantity} className='h-10 hover:text-orange-500'>Cancel</button>
            </div>
            <div className='absolute right-12 bottom-2 flex items-center'>
              <img className='w-4 h-4 mb-4' src='/images/basket2.svg'></img>
              <p className='mb-4 ml-2'>{totalPrice} $</p>
              <p className='mb-4 ml-4'> {quantity}</p>
            </div>
          </div>
        )}
      </Modal>
      

      {/* <button onClick={() => setIsCartModalOpen(true)} className="mt-10 bg-blue-500 text-white px-4 py-2 rounded">View Cart</button> */}
      
      <MyModal isOpen={isCartModalOpen} onRequestClose={closeCartModal} cart={cart} />      
    </section>
  );
}
