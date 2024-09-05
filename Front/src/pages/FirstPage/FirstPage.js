import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import './FirstPage.css';
import verifytoken from '../../shared/components/verifytoken';

const FirstPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await verifytoken();
        if (token !== 'null') {
          console.log('토큰이 유효합니다.');
          window.location.href = "/main";
        } else {
          console.log('Token Invalid');
          localStorage.removeItem('id');
        }
      } catch (error) {
        console.error('토큰 검증 중 오류 발생:', error);
      }
    };
    checkToken();
  }, []);

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
    }).then(response => response.text()).then(res => {
      if(res === '0'){alert('이메일 또는 비밀번호가 틀렸습니다.');}
      else{
        localStorage.setItem('id', res);
        console.log(res);
        alert('로그인에 성공하였습니다.');
        window.location.href = "/main";
      }
      })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="main-container">
      <div className="background"></div>

      {/* 타이틀 */}
      <div className="title">
        <span className="highlight">
          여행지에서
          <br />
        </span>
        <span className="main">나의 ATM 찾기</span>
      </div>

      {/* Travel Tap 로고 및 이미지 */}
      <div className="logo-container">
        <img src="img/FirstPage/traveltaplogo.svg" alt="Travel Tap Logo" width="130" height="130" />
        <div className="logo-text">
          Travel Tap
        </div>
      </div>

      {/* 로그인 입력 필드 */}
      <form onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            id="email"
            value={loginInfo.email}
            onChange={handleChange}
          />
          <img
            src="./img/FirstPage/Vector18_43.png"
            alt="이메일 아이콘"
          />
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            id="password"
            value={loginInfo.password}
            onChange={handleChange}
          />
          <img
            src="./img/FirstPage/Vector23_53.png"
            alt="비밀번호 아이콘"
          />
        </div>
      </div>
      {/* 로그인 버튼 */}
      <div className="login-button-container">
        <button className="relative" id="login">
          <img
            width="182"
            height="40"
            src="./img/FirstPage/Group 1618_45.png"
            alt="로그인"
          />
          <div className="text">
            로그인
          </div>
        </button>
      </div>
      </form>
      {/* 회원가입 버튼 */}
      <button className="signup" onClick={openModal}>
        회원가입
      </button>

      {/* 모달 창 */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FirstPage;