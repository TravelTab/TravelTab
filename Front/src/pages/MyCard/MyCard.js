import Header from "../../shared/components/Header";
import DisplaySetting from "../../shared/DisplaySetting";
import Card from "./components/card";
import TermOfUse from "./components/TermOfUse";
import SwiperWindow from "./components/SwiperWindow/SwiperWindow";
import { SwiperSlide } from "swiper/react";
import { madeMyCardList } from "../../shared/function/YH";

const MyCard = () => {
  const cards = madeMyCardList([
    "travellog",
    "travelwallet",
    "toss",
    "shinhan",
    "kb",
    "woori",
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
