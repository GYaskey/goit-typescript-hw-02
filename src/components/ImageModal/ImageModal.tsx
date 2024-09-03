import Modal from 'react-modal';
import { useEffect } from 'react';
import s from './ImageModal.module.css';

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onRequestClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onRequestClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'none',
          border: 'none',
          padding: 0,
        },
      }}
    >
      <img src={imageUrl} alt="Large picture" className={s.modalImage} />
    </Modal>
  );
};

export default ImageModal;
