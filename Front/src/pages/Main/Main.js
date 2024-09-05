import React, { useState, useEffect } from "react";
import Sidebar from "../../shared/components/Sidebar";
import "./Main.css";
import verifytoken from "../../shared/components/verifytoken";
import SwiperWindowc from "./components/SwiperWindow-c/SwiperWindow";
import SwiperWindowt from "./components/SwiperWindow-t/SwiperWindow";
import Card from "./components/card";
import Travel from "./components/travel";
import { SwiperSlide } from "swiper/react";
import DisplaySetting from "../../shared/DisplaySetting";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  

  const [name, setName] = useState("김토뱅"); // 기본값은 "김토뱅"
  const [cards, setCards] = useState([{img_url: `./img/Main/none.png`}]);
  const [travels, settravels] = useState([]);
  const [loading, setLoading] = useState(true); // 로딩 상태

  // 토큰 검증 함수
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

  // 사용자 이름을 가져오는 함수
  const finduser = async () => {
    try {
      const token = localStorage.getItem('id');
      let rates = {};
      await fetch('http://127.0.0.1:5500/mytravel')
      .then(response => response.json())
      .then(data => {
        let exchangeinfo = data.pop();
        exchangeinfo.map((info, i) => {
          const { cur_unit, unit, cur, cur_en } = info;
          const exrate = Number(data[i].kftc_deal_bas_r.replace(/,/g, ''));
          const localexrate = exrate.toLocaleString('ko-KR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            rates[cur] = `${cur_unit} ${unit} = ${localexrate}원`
            rates[cur+1] = `${cur_en}`
        });
      });
      
      console.log(rates);

      await fetch('http://127.0.0.1:5500/mytravels', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
        .then((response) => response.json())
        .then((res) => {
          if(res[0].card.length !== 0){
            let card = res[0].card.map(t => {
              let url = {img_url: `./img/Main/${t}.png`};
              return url;
            });
            setCards(card);
          }
          if(res[0].travel.length !== 0){
            console.log(res[0].travel[0].country);
            let travel = res[0].travel.map(t => {
              console.log(t);
              console.log(t.country);
              let url = {
                cur: `${t.country}`,
                img_url: `./img/Main/cur/${rates[t.country+1]}.png`,
                rate: rates[t.country]
              };
              console.log(url);
              return url;
            });
            settravels(travel);
          }
          setName(res[0].username);
          setLoading(false);
        });
    } catch (error) {
      console.error('사용자 정보를 가져오는 중 오류 발생:', error);
      setLoading(false); // 오류가 발생해도 로딩을 종료
    }
  };

  useEffect(() => {
    checkToken(); // 토큰을 먼저 체크
    finduser(); // 사용자 정보 가져오기
  }, []);


  const card_list = cards.map((card, index) => (
    <SwiperSlide
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/mycard")}
      key={index}
    >
      <Card img_url={card.img_url} />
    </SwiperSlide>
  ));

  const travel_list = travels.map((card, index) => (
    <SwiperSlide
      style={{ cursor: "pointer" }}
      onClick={() => navigate("/mytrip")}
      key={index}
    >
      <Travel cur={card.cur} img_url={card.img_url} rate={card.rate} />
    </SwiperSlide>
  ));

  return (
    <div className="main-back">
      {/* 상단 배경 */}
      <div className="main-topside">
        <div className="icon"></div>
        <div className="main-title">Travel Tap</div>
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
        <div className="main-card-main">{loading ? (<span>로딩 중...</span>) : (<span>{name}</span>)}님의 여행 카드 정보</div>
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
            onClick={() => navigate("/atmmap")}
            style={{
              position: "absolute",
              left: "0",
              top: "65px",
              cursor: "pointer",
              boxShadow: "0px 4px 9px -1px #00000059",
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
