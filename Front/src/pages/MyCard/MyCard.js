import React, { useState, useEffect } from "react";
import Header from "../../shared/components/Header";
import DisplaySetting from "../../shared/DisplaySetting";
import Card from "./components/card";
import TermOfUse from "./components/TermOfUse";
import SwiperWindow from "./components/SwiperWindow/SwiperWindow";
import { SwiperSlide } from "swiper/react";
import { madeMyCardList } from "../../shared/function/YH";
import verifytoken from "../../shared/components/verifytoken";

const MyCard = () => {

  const checkToken = async () => {
    try {
      const token = await verifytoken();
      if (token !== 'null') {
        console.log('토큰이 유효합니다.');
        // window.location.href = "/main";
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

  const finduser = async () => {
    try {
      const token = localStorage.getItem('id');
      const data = JSON.stringify({ data: 'travelwallet' });

      await fetch('http://127.0.0.1:5500/addmycard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: data,
      })
        .then((response) => response.json()).then(res => console.log(res))
    } catch (error) {
      console.error('사용자 정보를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    checkToken(); // 토큰을 먼저 체크
    finduser(); // 사용자 정보 가져오기
  }, []);


  const cards = madeMyCardList([
    "travelog",
    "travelwallet",
    "toss",
    "SOLtravel",
    "travelus",
    "wibeetravel",
  ]);
  console.log(cards.myCardList);
  const card_list = cards.myCardList.map((card, index) => (
    <SwiperSlide key={index}>
      <Card
        card_name={card.card_name}
        advantage={card.advantage}
        current={card.current}
        img_url={card.img_url}
      />
    </SwiperSlide>
  ));
  return (
    <DisplaySetting>
      <Header />
      <SwiperWindow>{card_list}</SwiperWindow>
      <TermOfUse />
    </DisplaySetting>
  );
};

export default MyCard;
