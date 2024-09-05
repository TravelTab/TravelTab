// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, notice }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-xl font-bold">{notice.title}</h2>
                <p className="text-gray-600 mt-2">{notice.date}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
                    닫기
                </button>
            </div>
        </div>
    );
};

export default Modal;
