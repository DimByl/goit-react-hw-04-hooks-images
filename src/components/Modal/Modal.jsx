import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ largeImageUrl, largeImageAlt, onClose }) => {
  useEffect(() => {
    const onEscHandler = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onEscHandler);

    return () => {
      window.removeEventListener('keydown', onEscHandler);
    };
  }, [onClose]);

  const handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={handleOverlayClick}>
      <div className={styles.Modal}>
        <img
          className={styles.ModalImg}
          src={largeImageUrl}
          alt={largeImageAlt}
        />
      </div>
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  largeImageUrl: PropTypes.string,
  largeImageAlt: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
