import React from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css'

const ImageModal = ({modalIsOpen, closeModal, imageUrl}) => {
	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				className={s.modal}
				overlayClassName={s.overlay}
				contentLabel="Image Modal">
				<img src={imageUrl} alt="Full-size view"/>
			</Modal>
		</div>
	);
};

export default ImageModal;