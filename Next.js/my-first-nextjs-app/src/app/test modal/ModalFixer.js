import { useEffect } from 'react';
import Modal from 'react-modal';

function ModalFixer({ Component, pageProps }) {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  return <Component {...pageProps} />;
}

export default ModalFixer;
