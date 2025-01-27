
import React from 'react';
import Modal from 'react-modal';

const MyModal = ({ isOpen, onRequestClose, cart = [] }) => (  
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="fixed inset-0 flex justify-center items-center "
    overlayClassName="overlay-none"
    ariaHideApp={false}
  >
    <div className="relative bg-white p-8 shadow-orange-400 shadow-md w-3/5 h-2/3 border-orange-300 border-solid rounded-xl overflow-y-auto ">
      <img onClick={onRequestClose} className='close-button w-7 h-7 absolute top-3 right-1 hover:text-orange-500 rounded-1xl' src='/images/xmark.svg' alt="Close"></img>
      <h2 className="text-2xl mb-4">Cart Details</h2>
      {cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} className="mt-4">
           <img src={item.image} alt={item.name} className="w-24 h-24"></img>
            <p>Product: {item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total Price: {item.totalPrice} $</p>
            

            
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}
    </div>
  </Modal>
);

export default MyModal;
