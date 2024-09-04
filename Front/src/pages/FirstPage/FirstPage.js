import React, { useState } from 'react';
import Modal from './Modal';

const FirstPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative w-[360px] h-[640px] bg-[#fff] overflow-hidden">
      {/* 배경 그라디언트 */}
      <div className="absolute left-0 top-0 w-[360px] h-[640px] bg-[linear-gradient(180deg,#f2fffa_0%,#fff_100%)]"></div>

      {/* 그라디언트 박스 */}
      <div className="absolute left-[-51px] top-[262px] w-[530px] h-[424px] bg-[linear-gradient(180deg,#f0ffd6_0%,#c5ffd5_100%)]"></div>

      {/* 타이틀 */}
      <div className="absolute left-[12px] top-[32px] w-[336px] h-[104px] text-[43px] font-['Gmarket_Sans_TTF'] font-bold text-center">
        <span className="text-[#678c73]">
          여행지에서
          <br />
        </span>
        <span className="text-[#3c5255]">나의 ATM 찾기</span>
      </div>

      {/* Travel Tap 로고 및 이미지 */}
      <div className="absolute left-[93px] top-[142px] w-[173px] h-[287px] flex">
        <img
          className="absolute left-[1px] top-[62px]"
          width="170"
          height="170"
          src="./img/FirstPage/traveltrip 116_48.png"
          alt="Travel Tap Logo"
        />
        <div className="absolute -translate-x-1/2 left-1/2 top-[251px] text-[30px] leading-[120%] tracking-[-0.02em] font-['Gmarket_Sans_TTF'] font-bold text-[#000] whitespace-nowrap">
          Travel Tap
        </div>
      </div>

      {/* 로그인 버튼 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[530px]">
        <button className="relative">
          <img
            width="182"
            height="40"
            src="./img/FirstPage/Group 1618_45.png"
            alt="로그인"
          />
          <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 text-[16px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] font-medium text-[#6b6b6b] whitespace-nowrap z-10">
            로그인
          </div>
        </button>
      </div>

      {/* 이메일 입력 필드 */}
      <div className="absolute left-[85px] top-[445px] w-[190px] h-[40px] flex">
        <div className="relative w-full">
          <input
            type="email"
            placeholder="이메일을 입력하세요"
            className="w-full h-[40px] px-[40px] border border-[#8e8e8e] rounded-md text-[#8e8e8e] placeholder-[#8e8e8e] focus:outline-none focus:border-[#3c5255] focus:ring-1 focus:ring-[#3c5255]"
          />
          <img
            className="absolute left-[11px] top-[50%] transform -translate-y-1/2"
            width="16"
            height="16"
            src="./img/FirstPage/Vector18_43.png"
            alt="이메일 아이콘"
          />
        </div>
      </div>

      {/* 비밀번호 입력 필드 */}
      <div className="absolute left-[85px] top-[485px] w-[190px] h-[40px] flex">
        <div className="relative w-full">
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="w-full h-[40px] px-[40px] border border-[#8e8e8e] rounded-md text-[#8e8e8e] placeholder-[#8e8e8e] focus:outline-none focus:border-[#3c5255] focus:ring-1 focus:ring-[#3c5255]"
          />
          <img
            className="absolute left-[11px] top-[50%] transform -translate-y-1/2"
            width="16"
            height="16"
            src="./img/FirstPage/Vector23_53.png"
            alt="비밀번호 아이콘"
          />
        </div>
      </div>

      {/* 회원가입 버튼 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[590px]">
        <button
          className="relative"
          onClick={openModal}
        >
          <div className="text-[13px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] font-medium text-[#6b6b6b] whitespace-nowrap">
            회원가입
          </div>
        </button>
      </div>

      {/* 모달 창 */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default FirstPage;