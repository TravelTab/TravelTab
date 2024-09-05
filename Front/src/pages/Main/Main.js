import React, { useState, useEffect } from "react";
import Sidebar from "../../shared/components/Sidebar";
import './Main.css';
import verifytoken from "../../shared/components/verifytoken";
import SwiperWindowc from "./components/SwiperWindow-c/SwiperWindow";
import SwiperWindowt from "./components/SwiperWindow-t/SwiperWindow";
import Card from "./components/card";
import Travel from "./components/travel";
import { SwiperSlide } from "swiper/react";
import DisplaySetting from "../../shared/DisplaySetting";

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

  const cards = [
    { img_url: "./img/Main/cardsol.png" },
    { img_url: "./img/Main/cardhana.png" },
  ];

  const travel = [
    {
      cur: "일본",
      img_url: "./img/MyTrip/Rectangle 3712_49.png",
      rate: "JPY 100 = 923.96원"
    },
    {
      cur: "태국",
      img_url: "./img/MyTrip/Rectangle 3812_58.png",
      rate: "JPY 100 = 923.96원"
    },
    {
      cur: "미국",
      img_url: "./img/MyTrip/Rectangle 3912_59.png",
      rate: "JPY 100 = 923.96원"
    },
  ];

  const card_list = cards.map((card, index) => (
    <SwiperSlide key={index}>
      <Card
        img_url={card.img_url}
      />
    </SwiperSlide>
  ));

  const travel_list = travel.map((card, index) => (
    <SwiperSlide key={index}>
      <Travel
        cur={card.cur}
        img_url={card.img_url}
        rate={card.rate}
      />
    </SwiperSlide>
  ));


  return (
    <div className="main-back">
      {/* 상단 배경 */}
      <div className="main-topside">
        <div className="icon"></div>
        <div className="title">Travel Tap</div>
        <div>
          <Sidebar />
        </div>
      </div>
      {/* 메인 배경 그라디언트 */}
      <div className="main-background"></div>
      {/* 메인 컨텐츠 */}
      <div className="absolute -translate-x-1/2 left-1/2 top-[98px] w-[294px]">
        {/* 카드 정보 섹션 */}
        <div className="main-card-title">내카드</div>
        <div className="main-card-main"><span>김토뱅</span>님의 여행 카드 정보</div>
        <DisplaySetting>
          <SwiperWindowc>{card_list}</SwiperWindowc>
        </DisplaySetting>
        <div className="h-[30px]"></div>
        <div className="main-card-title">환율</div>
        <div className="main-card-main">내 여행 환율 정보</div>
        <DisplaySetting>
          <SwiperWindowt>{travel_list}</SwiperWindowt>
        </DisplaySetting>
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
              boxShadow: "0px 4px 9px -1px #00000059"
            }}
            width="293"
            height="181"
            src="./img/Main/Rectangle36_47.png"
            alt="ATM 카드 이미지"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
