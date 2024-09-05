import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Country from "./Country";
import SwiperWindow from "../../../shared/components/SwiperWindow";

const MyCountryCarousel = () => {

  const [country_data, settravels] = useState([]);

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
          if(res[0].travel.length !== 0){
            console.log(res[0].travel[0].country);
            let travel = res[0].travel.map(t => {
              console.log(t);
              console.log(t.country);
              let url = {
                country_name: `${t.country}`,
                img_url: `./img/Main/cur/${rates[t.country+1]}.png`,
                exchange_rate: rates[t.country]
              };
              console.log(url);
              return url;
            });
            settravels(travel);
          }
        });
    } catch (error) {
      console.error('사용자 정보를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    finduser(); // 사용자 정보 가져오기
  }, []);

  const country_list = country_data.map((country) => (
    <SwiperSlide>
      <Country
        img_url={country.img_url}
        country_name={country.country_name}
        exchange_rate={country.exchange_rate}
      />
    </SwiperSlide>
  ));
  return <SwiperWindow>{country_list}</SwiperWindow>;
};

export default MyCountryCarousel;
