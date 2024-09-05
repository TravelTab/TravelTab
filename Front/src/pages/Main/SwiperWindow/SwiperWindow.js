import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./SwiperWindow.module.css";

const SwiperWindow = (props) => {
  return (
    <div className="App">
      <Swiper
        className={styles.slide}
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>{props.children}</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperWindow;
