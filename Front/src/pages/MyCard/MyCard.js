import Header from "../../shared/components/Header";
import DisplaySetting from "../../shared/DisplaySetting";
import Card from "./components/Card";
import TermOfUse from "./components/TermOfUse";
import SwiperWindow from "./components/SwiperWindow/SwiperWindow";
import { SwiperSlide } from "swiper/react";

const MyCard = () => {
  const cards = [
    {
      card_name: "트래블로그 체크 카드 (0828)",
      advantage:
        "연회비 없음<br/>해외 이용 수수료 면제<br/>주요 통화 환전시 환율 100% 우대",
      current: "미국, 일본, 기타, 등등",
      img_url: "./img/card/hana.png",
    },
    {
      card_name: "우리카드 (0828)",
      advantage:
        "연회비 없음<br/>해외 이용 수수료 면제<br/>주요 통화 환전시 환율 100% 우대",
      current: "미국, 일본, 기타, 등등",
      img_url: "./img/card/woori.png",
    },
  ];

  const card_list = cards.map((card, index) => (
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
