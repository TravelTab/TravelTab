import React, { useEffect, useState } from "react";
import ERcomponents from "./ERcomponents1.js";
import DisplaySetting from "../../shared/DisplaySetting";
import Header from "../../shared/components/Header.js";
import './ercomponents.css';

const ExchangeRate = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 1을 더해줌
      const date = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const day = ["일", "월", "화", "수", "목", "금", "토"][now.getDay()];
      setCurrentTime(`${year}-${month}-${date}(${day}) ${hours}:${minutes}`);
    };

    // 처음 렌더링 시 현재 시간을 업데이트
    updateCurrentTime();

    // 매 분마다 시간 업데이트
    const intervalId = setInterval(updateCurrentTime, 60000);

    // 컴포넌트 언마운트 시 interval 제거
    return () => clearInterval(intervalId);
  }, []);



  return (
    <DisplaySetting>
      <div className="absolute left-0 top-0 w-[360px] h-[640px] flex">
        <div className="absolute left-0 top-0 w-[360px] h-[640px] bg-[#fff]"></div>
        <Header />
        <div className="absolute -translate-x-1/2 left-[calc(50%+-84px)] top-[108px] text-[30px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">
          오늘의 환율
        </div>
      </div>
      <div className="absolute -translate-x-1/2 left-[117px] top-[153px] text-[20px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">
        {currentTime}
      </div>{" "}
      {/*실시간 날짜, 요일 및 시간*/}
      <div className="absolute top-[223px] w-[360px] border-3px padding-32px">
      <ERcomponents/>
      </div>
    </DisplaySetting>
  );
};

export default ExchangeRate;
