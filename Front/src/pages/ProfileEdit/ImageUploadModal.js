// ImageUploadModal.js
import React, { useState } from 'react';
import './ImageUploadModal.css'; // 새로운 모달의 스타일 파일

const ImageUploadModal = ({ isOpen, onClose, handleImageSave }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // 이미지 미리보기 설정
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    handleImageSave(selectedImage); // 이미지 저장
    onClose(); // 모달 닫기
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>프로필 이미지 업로드</h2>
        {selectedImage && <img src={selectedImage} alt="Selected" className="preview-image" />}
        <input type="file" onChange={handleImageChange} />
        <div className="modal-buttons">
          <button onClick={handleSave}>저장</button>
          <button onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
