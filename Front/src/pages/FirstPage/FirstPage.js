import React, { useState } from 'react';
import Modal from './Modal';
import './FirstPage.css';

const FirstPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = JSON.stringify(loginInfo);

    fetch('http://127.0.0.1:5500/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data
    })
      .then(response => response.text())
      .then(res => alert(res))
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      {/* 배경 이미지 */}
      <div className="back"></div>
  
      {/* 타이틀 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[32px] w-[336px] h-[104px] text-[43px] font-['Gmarket_Sans_TTF'] font-bold text-center">
        <span className="text-[#678c73]">여행지에서<br /></span>
        <span className="text-[#3c5255]">나의 ATM 찾기</span>
      </div>
  
      {/* Travel Tap 로고 및 이미지 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[152px] w-[173px] h-[287px] flex flex-col items-center ">
        <img src="img/FirstPage/traveltaplogo.svg" alt="Travel Tap Logo" width="130" height="130" className="rounded-lg drop-shadow-lg" />
        <div className="mt-6 text-[30px] leading-[120%] tracking-[-0.02em] font-['Gmarket_Sans_TTF'] font-bold text-[#000]"
          style={{ textShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)' }}>
          Travel Tap
        </div>
      </div>
  
      {/* 로그인 버튼 */}
      <form onSubmit={handleSubmit}>
        <div className="login-button-container">
          <button className="relative" id="login">
            <img width="182" height="40" src="./img/FirstPage/Group 1618_45.png" alt="로그인" className="login-button-image" />
            <div className="login-button-text">로그인</div>
          </button>
        </div>
  
        <div className="form-container">
          {/* 이메일 입력 필드 */}
          <div className="input-container">
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                className="input-field"
                id="email"
                value={loginInfo.email}
                onChange={handleChange}
              />
              <img className="input-icon" src="./img/FirstPage/Vector18_43.png" alt="이메일 아이콘" />
            </div>
          </div>
  
          {/* 비밀번호 입력 필드 */}
          <div className="input-container">
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                className="input-field"
                id="password"
                value={loginInfo.password}
                onChange={handleChange}
              />
              <img className="input-icon" src="./img/FirstPage/Vector23_53.png" alt="비밀번호 아이콘" />
            </div>
          </div>
        </div>
      </form>
  
      {/* 회원가입 버튼 */}
      <div className="signup-button-container">
        <button className="signup-button" onClick={openModal}>
          <div className="signup-button-text">회원가입</div>
        </button>
      </div>
  
      {/* 모달 창 */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default FirstPage;
