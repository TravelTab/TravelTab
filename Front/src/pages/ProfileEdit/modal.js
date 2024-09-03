import React from 'react';
import './modal.css'; // 모달 스타일

const modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null; // 모달이 열리지 않았으면 아무것도 렌더링하지 않음

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>X</button>
        {content}
      </div>
    </div>
  );
};

export default modal;