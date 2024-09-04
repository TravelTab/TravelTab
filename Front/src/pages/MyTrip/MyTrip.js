import Header from "../../shared/components/Header";
import DisplaySetting from "../../shared/DisplaySetting";
import Country from "./components/Country";
import SwiperWindow from "../../shared/components/SwiperWindow";
import MyCountryCarousel from "./components/MyCountryCarousel";
import { Swiper, SwiperSlide } from "swiper/react";

const MyTrip = () => {
  return (
    <DisplaySetting>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          marginTop: "50px",
          fontSize: "20px",
          fontFamily: "Inter",
          fontWeight: "600",
          color: "#000",
          whiteSpace: "nowrap",
        }}
      >
        내 여행지
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
        }}
      >
        <MyCountryCarousel />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          marginTop: "50px",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            fontFamily: "Inter",
            fontWeight: "600",
            color: "#000",
            whiteSpace: "nowrap",
          }}
        >
          여행지 추가하기
        </div>
      </div>
      <Country
        img_url="./img/MyTrip/Rectangle 3712_49.png"
        country_name="일본"
        exchange_rate="JPY 100 = 923.96원"
      />
    </DisplaySetting>
  );
};

export default MyTrip;
