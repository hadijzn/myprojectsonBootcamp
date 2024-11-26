import { useEffect } from 'react';
import Modal from 'react-modal';
import Products from Products
function ModalFixer({ Component, pageProps }) {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return <Products {...pageProps} />;
}

export default ModalFixer;
