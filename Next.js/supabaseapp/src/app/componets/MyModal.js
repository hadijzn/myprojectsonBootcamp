import { useEffect } from 'react';
import Modal from 'react-modal';

const MyModal = ({ isOpen, onRequestClose }) => 
(
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="fixed inset-0 flex justify-center items-center"
    overlayClassName="overlay-none"
    ariaHideApp={false}
  >
    <div className="relative bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl mb-4">مودال من</h2>
      <p>این یک مودال است</p>
      <button onClick={onRequestClose} className="bg-red-500 text-white px-4 py-2 rounded mt-4">بستن</button>
    </div>
  </Modal>
);

export default MyModal;
