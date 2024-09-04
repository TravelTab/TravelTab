import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./swiperWindow.module.css";
import Card from "../Card";

const SwiperWindow = () => {
  return (
    <div className="App">
      <Swiper
        className={styles.slide}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <Card
            card_name="트래블로그 체크 카드 (0828)"
            advantage="연회비 없음
            <br />
            해외 이용 수수료 면제
            <br />
            주요 통화 환전시 환율 100% 우대"
            current="미국, 일본, 기타, 등등"
            img_url="./img/MyCard/트래블로그 29_204.png"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperWindow;
