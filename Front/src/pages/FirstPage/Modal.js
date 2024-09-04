import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" style={{ backdropFilter: 'blur(3px)' }}>
      <div className="bg-white w-[300px] h-[450px] rounded-lg p-4 shadow-lg">
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>
        <form>
        <div className="mb-4">
            <label className="block mb-1">사용자명</label>
            <input
              type="email"
              placeholder="사용자명을 입력하세요"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">이메일</label>
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 확인하세요"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          </form>
          <div className="flex justify-center">
          <button
            type="submit"
            className="gradient-button"
          >
            가입하기
          </button>
      </div>
      </div>
    </div>
  );
};

export default Modal;