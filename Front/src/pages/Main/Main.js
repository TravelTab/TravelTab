import React, { useState } from "react";
import Sidebar from "../../shared/components/Sidebar";
import SwiperWindow from "./SwiperWindow/SwiperWindow";

const Main = () => {
  // 카드 이미지 슬라이더 상태 관리
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const cardImages = [
    "./img/Main/Rectangle 16_28.png",
    "./img/Main/Rectangle 16_29.png", // 추가할 이미지 경로
    "./img/Main/Rectangle 16_30.png", // 추가할 이미지 경로
  ];

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
  };

  const prevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cardImages.length) % cardImages.length
    );
  };

  return (
    <div className="relative w-[360px] h-[932px] bg-[#fff]">
      {/* 상단 배경 */}
      <div className="absolute left-0 top-0 w-[100px] h-[50px] bg-[#91f6ba]">
        {/* 사이드바 및 아이콘 */}
        <div className="absolute left-[89.17%] right-[5.83%] top-[32%] bottom-[32%]">
          <Sidebar />
          <img
            className="absolute left-0 top-0"
            width="18"
            height="18"
            src="./img/Main/GroupI5_176;5_83.png"
            alt="Sidebar Icon"
          />
        </div>
        {/* 둥근 흰색 아이콘 */}
        <div className="absolute left-[6.94%] right-[84.17%] top-[18%] bottom-[18%] bg-[#fff] rounded-full"></div>
      </div>

      {/* 메인 배경 그라디언트 */}
      <div className="absolute left-0 top-[49px] w-[360px] h-[883px] bg-[linear-gradient(180deg,#f2fffa_0%,#fff_100%)]"></div>

      {/* 하단 그라디언트 박스 */}
      <div className="absolute left-[-75px] top-[587px] w-[575px] h-[387px] bg-[linear-gradient(180deg,#f0ffd6_0%,#c5ffd5_100%)]"></div>

      {/* 타이틀 */}
      <div className="absolute -translate-x-1/2 left-1/2 top-[10px] text-[20px] leading-[120%] tracking-[-0.02em] font-['Noto_Sans_KR'] font-semibold text-[#000] text-center whitespace-nowrap"
      style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.7)' }}>
        Travel Tap
      </div>

      {/* 메인 컨텐츠 */}
      <div className="absolute -translate-x-1/2 left-1/2 top-[96px] w-[294px] h-[784px]">
        {/* 카드 정보 섹션 */}

        <div className="relative left-0 top-0 w-[294px] h-[222px] flex">
          <div className="absolute left-[1.36%] right-[52.1%] top-0 bottom-[81.98%] text-[24px] leading-[120%] tracking-[-0.02em] font-['Inter'] font-semibold text-[#000]">
            내 카드
          </div>

          <div className="absolute left-[4px] top-[34px] text-[20px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">
            김토뱅님의 여행 카드 정보
          </div>
          <SwiperWindow>
            <img
              className="absolute left-0 top-[67px]"
              width="294"
              height="155"
              src="./img/Main/Rectangle 16_28.png"
            ></img>
          </SwiperWindow>
          <div className="absolute left-[9px] top-[199px] w-[48px] h-[6px] flex flex-row items-center justify-start gap-[4px]">
            {cardImages.map((_, index) => (
              <div
                key={index}
                className={`w-[6px] h-[6px] shrink-0 rounded-[10px] ${
                  currentCardIndex === index
                    ? "bg-[#fff]"
                    : "bg-[#fff] opacity-[.5]"
                }`}
              ></div>
            ))}
          </div>
          {/* 오른쪽 화살표 */}
          <img
            className="absolute left-[266px] top-[118px] z-10 cursor-pointer"
            width="23"
            height="36"
            src="./img/Main/Component 16_35.png"
            alt="오른쪽 화살표"
            onClick={nextCard}
          />
          {/* 왼쪽 화살표 */}
          <img
            className="absolute left-[4px] top-[118px] z-10 cursor-pointer"
            width="23"
            height="36"
            src="./img/Main/Component 16_37.png"
            alt="왼쪽 화살표"
            onClick={prevCard}
          />
        </div>

        {/* 환율 정보 섹션 */}
        <div className="absolute left-0 top-[282px] w-[293px] h-[194px] flex">
          <img
            className="absolute left-0 top-[67px] cursor-pointer"
            width="293"
            height="127"
            src="./img/Main/Rectangle 26_46.png"
            alt="환율 정보 이미지"
            onClick={() => alert("환율 정보 클릭됨")}
          />
          <img
            className="absolute left-[264px] top-[116px] z-10 cursor-pointer"
            width="22"
            height="36"
            src="./img/Main/Component 36_52.png"
            alt="왼쪽 화살표"
            onClick={() => alert("다음 환율 정보 클릭됨")}
          />
          <img
            className="absolute left-[4px] top-[116px] z-10 cursor-pointer"
            width="22"
            height="36"
            src="./img/Main/Component 26_50.png"
            alt="이전 환율 카드 클릭됨"
            onClick={() => alert("이전 환율 정보 클릭됨")}
          />
          <div className="absolute left-[9px] top-[181px] w-[48px] h-[6px] flex flex-row items-center justify-start gap-[4px]">
            <div className="w-[22px] h-[6px] shrink-0 bg-[#fff] rounded-[10px]"></div>
            <div className="w-[6px] h-[6px] shrink-0 bg-[#fff] rounded-[10px] opacity-[.5]"></div>
            <div className="w-[6px] h-[6px] shrink-0 bg-[#fff] rounded-[10px] opacity-[.5]"></div>
            <div className="w-[6px] h-[6px] shrink-0 bg-[#fff] rounded-[10px] opacity-[.5]"></div>
          </div>
          <div className="absolute left-[4px] top-[33px] text-[20px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">
            내 여행지 환율 정보
          </div>
          <div className="absolute left-[1.37%] right-[33.11%] top-0 bottom-[85.57%] text-[24px] leading-[120%] tracking-[-0.02em] font-['Inter'] font-semibold text-[#000]">
            환율
          </div>
        </div>

        {/* 일본 환율 정보 섹션 */}
        <div className="absolute left-0 top-[282px] w-[293px] h-[194px] flex">
          <img
            className="absolute left-0 top-[67px] cursor-pointer"
            width="293"
            height="127"
            src="./img/Main/Rectangle 220_176.png"
            alt="일본 환율 정보 이미지"
            onClick={() => alert("일본 환율 정보 클릭됨")}
          />
          <div className="absolute left-[9px] top-[181px] w-[48px] h-[6px] flex flex-row items-center justify-start gap-[4px]">
            <div className="w-[22px] h-[6px] shrink-0 bg-[#fff] rounded-[10px]"></div>
            <div className="w-[6px] h-[6px] shrink-0 bg-[#fff] rounded-[10px] opacity-[.5]"></div>
            <div className="w-[6px] h-[6px] shrink-0 bg-[#fff] rounded-[10px] opacity-[.5]"></div>
            <div className="w-[6px] h-[6px] shrink-0 bg-[#fff] rounded-[10px] opacity-[.5]"></div>
          </div>
          <img
            className="absolute left-[264px] top-[116px] z-10 cursor-pointer"
            width="22"
            height="36"
            src="./img/Main/Component 320_177.png"
            alt="오른쪽 화살표"
            onClick={() => alert("다음 해외 환율 정보 클릭됨")}
          />
          <img
            className="absolute left-[4px] top-[116px] z-10 cursor-pointer"
            width="22"
            height="36"
            src="./img/Main/Component 220_178.png"
            alt="왼쪽 화살표"
            onClick={() => alert("이전 해외 환율 정보 클릭됨")}
          />
          <div className="absolute -translate-x-1/2 left-[calc(50%+-122px)] top-[74px] text-[20px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">
            일본
          </div>
          <div className="absolute -translate-x-1/2 left-[calc(50%+-42px)] top-[152px] text-[20px] font-['Inter'] font-semibold text-[#fff] whitespace-nowrap">
            JPY 100 = 923.96원
          </div>
        </div>

        {/* ATM 길찾기 섹션 */}
        <div className="absolute left-0 top-[538px] w-[293px] h-[246px] flex">
          <img
            className="absolute left-0 top-[65px] cursor-pointer"
            width="293"
            height="181"
            src="./img/Main/Rectangle 36_47.png"
            alt="ATM 카드 이미지"
            onClick={() => alert("ATM 카드 클릭됨")}
          />
          <div className="absolute left-[4px] top-[33px] w-[151px] h-[24px] text-[20px] font-['Inter'] font-semibold text-[#000]">
            내 카드 ATM 찾기
          </div>
          <div className="absolute left-[1.37%] right-[46.08%] top-0 bottom-[89.03%] text-[24px] leading-[120%] tracking-[-0.02em] font-['Inter'] font-semibold text-[#000]">
            ATM 길찾기
          </div>
        </div>
      </div>

      {/* 추가 컨텐츠 섹션 (현재 비어 있음) */}
      <div className="absolute left-[32px] top-[145px] w-[294px] h-[170px]"></div>
    </div>
  );
};

export default Main;
