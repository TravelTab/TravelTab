import React, { useState, useEffect } from "react";
import Sidebar from "../../shared/components/Sidebar";
import SwiperWindow from "./SwiperWindow/SwiperWindow";
import './Main.css';
import verifytoken from "../../shared/components/verifytoken";

const Main = () => {

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await verifytoken();
        if (token !== 'null') {
          console.log('토큰이 유효합니다.');
          //window.location.href = "/main";
        } else {
          console.log('Token Invalid');
          localStorage.removeItem('id');
          alert('로그인이 만료되었습니다. 로그인페이지로 이동합니다.');
          window.location.href = "/";
        }
      } catch (error) {
        console.error('토큰 검증 중 오류 발생:', error);
      }
    };
    checkToken();
  }, []);

  // 카드 이미지 슬라이더 상태 관리
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentTravelIndex, setCurrentTrvalIndex] = useState(0);

  let cardImages = [
    "./img/Main/card-01.png",
    "./img/Main/card-02.png", // 추가할 이미지 경로
    "./img/Main/card-03.png", // 추가할 이미지 경로
    "./img/Main/card-04.png"
  ];

  let travelImages = [
    "./img/Main/card-01.png",
    "./img/Main/card-02.png", // 추가할 이미지 경로
    "./img/Main/card-03.png", // 추가할 이미지 경로
    "./img/Main/card-04.png"
  ];

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardImages.length);
  };

  const prevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cardImages.length) % cardImages.length
    );
  };

  const nextTrval = () => {
    setCurrentTrvalIndex((prevIndex) => (prevIndex + 1) % travelImages.length);
  };

  const prevTraval = () => {
    setCurrentTrvalIndex(
      (prevIndex) => (prevIndex - 1 + travelImages.length) % travelImages.length
    );
  };

  return (
    <div className="back">
      {/* 상단 배경 */}
      <div className="topside">
        <div className="icon"></div>
        <div className="title">Travel Tap</div>
        <div>
          <Sidebar />
        </div>
      </div>
      {/* 메인 배경 그라디언트 */}
      <div className="background"></div>
      {/* 메인 컨텐츠 */}
      <div className="absolute -translate-x-1/2 left-1/2 top-[98px] w-[294px]">
        {/* 카드 정보 섹션 */}
        <div className="">
          <SwiperWindow>
            <div className="card-title">
              내 카드
            </div>
            <div className="card-title">
              김토뱅님의 여행 카드 정보
            </div>
            {cardImages.map((_, index) => (
                <img
                key={index}
                className="absolute left-0 top-[67px]"
                width="294"
                height="155"
                src={cardImages[currentCardIndex]}
              ></img>
              ))}
            <div className="absolute left-[9px] top-[199px] w-[48px] h-[6px] flex flex-row items-center justify-start gap-[4px]">
              {cardImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-[6px] h-[6px] shrink-0 rounded-[10px] ${currentCardIndex === index
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
          </SwiperWindow>

          <SwiperWindow>
            <div className="card-title">
              환율
            </div>
            <div className="card-title">
              <span id="username">김토뱅</span>님의 여행 카드 정보
            </div>
            {cardImages.map((_, index) => (
                <img
                key={index}
                className="absolute left-0 top-[67px]"
                width="294"
                height="155"
                src={travelImages[currentTravelIndex]}
              ></img>
              ))}
            <div className="absolute left-[9px] top-[199px] w-[48px] h-[6px] flex flex-row items-center justify-start gap-[4px]">
              {travelImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-[6px] h-[6px] shrink-0 rounded-[10px] ${currentTravelIndex === index
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
            onClick={nextTrval}
          />
          {/* 왼쪽 화살표 */}
          <img
            className="absolute left-[4px] top-[118px] z-10 cursor-pointer"
            width="23"
            height="36"
            src="./img/Main/Component 16_37.png"
            alt="왼쪽 화살표"
            onClick={prevTraval}
          />
          </SwiperWindow>

          {/* ATM 길찾기 섹션 */}
        <div className="absolute left-0 top-[538px] w-[293px] h-[246px] flex">
        <div className="absolute left-[1.37%] right-[46.08%] top-0 bottom-[89.03%] text-[24px] leading-[120%] tracking-[-0.02em] font-['Inter'] font-semibold text-[#000]">
            ATM 길찾기
          </div>
          <div className="absolute left-[4px] top-[33px] w-[201px] h-[24px] text-[20px] font-['Inter'] font-semibold text-[#000]">
            내 카드 ATM 찾기
          </div>
          <img
            style={{
              position: "absolute",
              left: "0",
              top: "65px",
              cursor: "pointer",
            }}
            width="293"
            height="181"
            src="./img/Main/Rectangle 36_47.png"
            alt="ATM 카드 이미지"
            onClick={() => navigate("/atmmap")}
          />
        </div>
          <div
            style={{
              position: "absolute",
              left: "4px",
              top: "33px",
              width: "151px",
              height: "24px",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#000",
            }}
          >
            내 카드 ATM 찾기
          </div>
          <div
            style={{
              position: "absolute",
              left: "1.37%",
              right: "46.08%",
              top: "0",
              bottom: "89.03%",
              fontSize: "24px",
              lineHeight: "120%",
              letterSpacing: "-0.02em",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#000",
            }}
          >
            ATM 길찾기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
