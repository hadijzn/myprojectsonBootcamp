import { useEffect } from 'react';
import Modal from 'react-modal';
import '../styles/globals.css';

function ModalFixer({ Component, pageProps }) {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return <Component {...pageProps} />;
}

export default ModalFixer;
