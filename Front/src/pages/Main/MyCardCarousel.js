import { Swiper, SwiperSlide } from "swiper/react";
import SwiperWindow from "../../shared/components/SwiperWindow";

const MyCardCarousel = () => {
  const card_data = [
    {
      img_url: "./img/MyCard/우리카드.png",
    },
    {
      img_url: "./img/MyCard/트래블로그 29_204.png",
    },
  ];

  const card_list = card_data.map((card) => (
    <SwiperSlide>
      <img src={card.img_url} width="200px"></img>
    </SwiperSlide>
  ));
  return <SwiperWindow>{card_list}</SwiperWindow>;
};

export default MyCardCarousel;
