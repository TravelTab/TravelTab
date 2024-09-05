import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [registerInfo, setRegisterInfo] = useState({
    email: '',
    password: '',
    pswdcheck: '',
    username: ''
  });

  const handleChange = (e) => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (registerInfo.password !== registerInfo.pswdcheck) {
      alert('비밀번호가 같지 않습니다.');
      return;
    }

    const data = JSON.stringify(registerInfo);

    fetch('http://127.0.0.1:5500/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    })
    .then(response => response.text()).then(res => {
        if(res === '0'){
          alert('회원가입에 성공하였습니다.');
          handleClose();
        }
        else {alert('중복된 이메일입니다. 다른 이메일로 시도하여주시기 바랍니다.');}
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleClose = () => {
    setRegisterInfo({
      email: '',
      password: '',
      pswdcheck: '',
      username: '',
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" style={{ backdropFilter: 'blur(3px)' }}>
  <div className="relative bg-white w-[300px] h-[450px] rounded-lg p-4 shadow-lg">
    <button
      className="absolute top-2 right-2 text-xl font-bold"
      onClick={handleClose}
    >×
    </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">사용자명</label>
            <input
              type="text"
              placeholder="사용자명을 입력하세요"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="username"
              value={registerInfo.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">이메일</label>
            <input
              type="email"
              placeholder="이메일을 입력하세요"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="email"
              value={registerInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="password"
              value={registerInfo.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 확인하세요"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="pswdcheck"
              value={registerInfo.pswdcheck}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="gradient-button"
              id="register"
            >
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
