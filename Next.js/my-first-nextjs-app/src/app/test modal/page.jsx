
'use client';

import React, { useState } from 'react'; // استفاده از useState به جای useRef
import useCounter from './useCounter';
import Modal from 'react-modal';

export default function MyTest() {
  const { count, Increase, Decrease, reset } = useCounter(0);

  const products = [
    { name: "Rounded neck- T-shirt", price: "56$", id: 1, image: '/image (1).png' },
    { name: "product2", price: '495$', id: 2, image: '/image (2).png' }
  ];

  const [showModal, setShowModal] = useState(false); // استفاده از useState
  const [selectedProduct, setSelectedProduct] = useState(null); // استفاده از useState

  const openModal = (product) => {
    setShowModal(true);
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div>
      <h1>فروشگاه ما</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <img src={product.image} alt={product.name} className="product-image" />
            <button onClick={() => openModal(product)} className="buy bg-red-400 m-4">خرید</button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        className="fixed inset-0 float-right flex justify-end mt-4 mb-4 mr-4 border-solid"
        overlayClassName="overlay"
      >
        {selectedProduct && (
          <div className="modal-content bg-slate-50 text-black h-4/4 w-96 rounded-xl">
            <div className='flex items-center justify-center mt-3 mr-2 border-2 w-8 h-8 rounded-2xl bg-slate-300 absolute right-0'>
            <img onClick={closeModal} className='close-button w-6 h-6 ' src='./xmark.svg'></img>
            </div>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="mt-4 ml-4 w-3/4" />
            <div className="flex justify-start">
              <p className="m-4 font-bold">{selectedProduct.name}</p>
              <p className="m-4 ml-20 font-bold">{selectedProduct.price}</p>
            </div>
            <div className='flex justify-start items-center'>
              <div></div>
            <img  onClick={Decrease} className='m-4 w-4 h-4 ' src='/minus.svg'/>
            <div>{count}</div>
            <img onClick={Increase} className='m-4 w-4 h-4' src='/plus.svg'/>
            </div>
            <div className='m-4'>
            <button className='mr-2 w-8 h-7 text-orange-500  border-2 border-orange-500 rounded' >S</button>
            <button className='mr-2 w-8 h-7 text-orange-500 border-2 border-orange-500 rounded' >M</button>
            <button className='mr-2 w-8 h-7 text-orange-500 border-2 border-orange-500 rounded' >L</button>
            <button className='mr-2 w-8 h-7 text-orange-500 border-2 border-orange-500 rounded' >XL</button>
            <button className='mr-2 w-9 h-7 text-orange-500 border-2 border-orange-500 rounded' >XXL</button>
            </div>
            <div className='flex justify-start absolute bottom-0 items-center mb-4'>
            <button className='ml-4 mr-4 w-32 h-10 border-2 text-orange-500 border-orange-500 rounded-2xl'>Add to cart</button>
            <button className='h-10'>Cancel</button>
            </div>
            <img className='w-4 h-4 absolute right-12 bottom-8' src='./basket2.svg'></img>
            {/* <p>BOX</p> */}
          </div>
        )}
      </Modal>
    </div>
  );
}
