import React from 'react';
import './modal.css'; // 모달 스타일

const Modal = ({ isOpen, onClose, content, inputValue, setInputValue, handleSave }) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value); // 텍스트박스 값 변경
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{content}</h2>
        <input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          placeholder="수정할 내용을 입력하세요"
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>저장</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;