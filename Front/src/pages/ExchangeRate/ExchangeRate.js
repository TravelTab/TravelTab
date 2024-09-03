import React, { useEffect, useState } from "react";
import ERcomponents from "./ERcomponents.js";
import DisplaySetting from "../../shared/DisplaySetting";
import Header from "../../shared/components/Header/Header.js";

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
      <div className="absolute -translate-x-1/2 left-[calc(50%+-62px)] top-[153px] text-[20px] font-['Inter'] font-semibold text-[#000] whitespace-nowrap">
        {currentTime}
      </div>{" "}
      {/*실시간 날짜, 요일 및 시간*/}
      <div className="absolute left-0 top-[223px] w-[360px] h-[3px] flex">
        <div className="absolute left-0 top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[20px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[40px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[60px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[81px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[101px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[121px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[141px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[161px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[181px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[201px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[222px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[242px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[262px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[282px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[302px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[322px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[342px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
      </div>
      <div className="absolute left-[-1px] top-[312px] w-[360px] h-[3px] flex">
        <div className="absolute left-0 top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[20px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[40px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[60px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[81px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[101px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[121px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[141px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[161px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[181px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[201px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[222px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[242px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[262px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[282px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[302px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[322px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[342px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
      </div>
      <div className="absolute left-[-2px] top-[401px] w-[360px] h-[3px] flex">
        <div className="absolute left-0 top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[20px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[40px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[60px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[81px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[101px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[121px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[141px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[161px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[181px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[201px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[222px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[242px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[262px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[282px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[302px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[322px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[342px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
      </div>
      <div className="absolute left-[-3px] top-[491px] w-[360px] h-[3px] flex">
        <div className="absolute left-0 top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[20px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[40px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[60px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[81px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[101px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[121px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[141px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[161px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[181px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[201px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[222px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[242px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[262px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[282px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[302px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[322px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[342px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
      </div>
      <div className="absolute left-[-4px] top-[580px] w-[360px] h-[3px] flex">
        <div className="absolute left-0 top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[20px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[40px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[60px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[81px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[101px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[121px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[141px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[161px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[181px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[201px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[222px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[242px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[262px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[282px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[302px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[322px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
        <div className="absolute left-[342px] top-0 w-[18px] h-[3px] bg-[#6cd4964d]"></div>
      </div>
      <div>
        <ERcomponents
          currency="미국 USD"
          rate="1,205.00"
          change="4.00"
          changePercent="0.33%"
          upArrow="./img/ExchangeRate/Vector21_531.png"
          downArrow="./img/ExchangeRate/Vector21_534.png"
        />
      </div>
      <div className="absolute left-[23px] top-[324px] w-[314px] h-[69px] flex">
        <div className="absolute left-0 top-0 w-[119px] h-[69px] flex">
          <div className="absolute -translate-x-1/2 left-1/2 top-0 text-[20px] font-['Noto_Sans_KR'] font-bold text-[#000] whitespace-nowrap">
            중국원화 CNY
          </div>
          <div className="absolute -translate-x-1/2 left-[calc(50%+-7px)] top-[27px] text-[35px] font-['Inter'] text-[#000] whitespace-nowrap">
            172.21
          </div>
        </div>
        <div className="absolute left-[237px] top-[9px] w-[77px] h-[50px] flex">
          <div className="absolute left-[1px] top-0 w-[60px] h-[24px] flex">
            <div className="absolute left-0 top-0 w-[60px] h-[24px] flex">
              <div className="absolute -translate-x-1/2 left-[calc(50%+8px)] top-0 text-[20px] font-['Inter'] font-semibold text-[#d40000] whitespace-nowrap">
                0.39
              </div>
              <img
                className="absolute left-0 right-[83.33%] top-[43.75%] bottom-[35.42%]"
                width="10"
                height="5"
                src="./img/ExchangeRate/Vector21_610.png"
              ></img>
            </div>
          </div>
          <div className="absolute left-0 top-[26px] w-[77px] h-[24px] flex">
            <div className="absolute -translate-x-1/2 left-[calc(50%+8px)] top-0 text-[20px] font-['Inter'] font-semibold text-[#d40000] whitespace-nowrap">
              0.23%
            </div>
            <img
              className="absolute left-0 right-[81.82%] top-[16.67%] bottom-[25%]"
              width="14"
              height="14"
              src="./img/ExchangeRate/Vector21_613.png"
            ></img>
          </div>
        </div>
      </div>
      <div className="absolute left-[23px] top-[413px] w-[313px] h-[69px] flex">
        <div className="absolute left-0 top-0 w-[133px] h-[69px] flex">
          <div className="absolute -translate-x-1/2 left-[calc(50%+-26px)] top-0 text-[20px] font-['Noto_Sans_KR'] font-bold text-[#000] whitespace-nowrap">
            일본 JPY
          </div>
          <div className="absolute -translate-x-1/2 left-1/2 top-[27px] text-[35px] font-['Inter'] text-[#000] whitespace-nowrap">
            1,124.33
          </div>
        </div>
        <div className="absolute left-[237px] top-[9px] w-[76px] h-[50px] flex">
          <div className="absolute left-[1px] top-0 w-[60px] h-[24px] flex">
            <div className="absolute left-0 top-0 w-[60px] h-[24px] flex">
              <div className="absolute -translate-x-1/2 left-[calc(50%+8px)] top-0 text-[20px] font-['Inter'] font-semibold text-[#d40000] whitespace-nowrap">
                0.80
              </div>
              <img
                className="absolute left-0 right-[83.33%] top-[43.75%] bottom-[35.42%]"
                width="10"
                height="5"
                src="./img/ExchangeRate/Vector21_622.png"
              ></img>
            </div>
          </div>
          <div className="absolute left-0 top-[26px] w-[76px] h-[24px] flex">
            <div className="absolute -translate-x-1/2 left-[calc(50%+8px)] top-0 text-[20px] font-['Inter'] font-semibold text-[#d40000] whitespace-nowrap">
              0.07%
            </div>
            <img
              className="absolute left-0 right-[81.58%] top-[16.67%] bottom-[25%]"
              width="14"
              height="14"
              src="./img/ExchangeRate/Vector21_625.png"
            ></img>
          </div>
        </div>
      </div>
      <div className="absolute left-[23px] top-[502px] w-[313px] h-[69px] flex">
        <div className="absolute left-0 top-0 w-[251px] h-[69px] flex">
          <div className="absolute -translate-x-1/2 left-[calc(50%+-64px)] top-0 text-[20px] font-['Noto_Sans_KR'] font-bold text-[#000] whitespace-nowrap">
            유럽연합 EUR
          </div>
          <div className="absolute -translate-x-1/2 left-[calc(50%+-58px)] top-[27px] text-[35px] font-['Inter'] text-[#000] whitespace-nowrap">
            1,372.31
          </div>
          <img
            className="absolute left-[94.42%] right-0 top-[68.12%] bottom-[28.99%]"
            width="14"
            height="2"
            src="./img/ExchangeRate/Vector21_675.png"
          ></img>
        </div>
        <div className="absolute left-[238px] top-[9px] w-[75px] h-[50px] flex">
          <div className="absolute left-0 top-0 w-[56px] h-[24px] flex">
            <div className="absolute left-0 top-0 w-[56px] h-[24px] flex">
              <div className="absolute -translate-x-1/2 left-[calc(50%+8px)] top-0 text-[20px] font-['Inter'] font-semibold text-[#006ed4] whitespace-nowrap">
                1.03
              </div>
              <img
                className="absolute right-[46px] bottom-[7px]"
                width="10"
                height="5"
                src="./img/ExchangeRate/Vector21_634.png"
              ></img>
            </div>
          </div>
          <div className="absolute left-[15px] top-[26px] w-[60px] h-[24px] flex">
            <div className="absolute -translate-x-1/2 left-1/2 top-0 text-[20px] font-['Inter'] font-semibold text-[#006ed4] whitespace-nowrap">
              0.07%
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[23px] top-[591px] w-[314px] h-[69px] flex">
        <div className="absolute left-0 top-0 w-[117px] h-[69px] flex">
          <div className="absolute -translate-x-1/2 left-[calc(50%+-7px)] top-0 text-[20px] font-['Noto_Sans_KR'] font-bold text-[#000] whitespace-nowrap">
            캐나다 CAD
          </div>
          <div className="absolute -translate-x-1/2 left-1/2 top-[27px] text-[35px] font-['Inter'] text-[#000] whitespace-nowrap">
            890.35
          </div>
        </div>
        <div className="absolute left-[237px] top-[9px] w-[77px] h-[50px] flex">
          <div className="absolute left-[1px] top-0 w-[59px] h-[24px] flex">
            <div className="absolute left-0 top-0 w-[59px] h-[24px] flex">
              <div className="absolute -translate-x-1/2 left-[calc(50%+8px)] top-0 text-[20px] font-['Inter'] font-semibold text-[#d40000] whitespace-nowrap">
                5.80
              </div>
              <img
                className="absolute left-0 right-[83.05%] top-[43.75%] bottom-[35.42%]"
                width="10"
                height="5"
                src="Vector21_646.png"
              ></img>
            </div>
          </div>
          <div className="absolute left-0 top-[26px] w-[77px] h-[24px] flex">
            <div className="absolute -translate-x-1/2 left-[calc(50%+8px)] top-0 text-[20px] font-['Inter'] font-semibold text-[#d40000] whitespace-nowrap">
              0.66%
            </div>
            <img
              className="absolute left-0 right-[81.82%] top-[16.67%] bottom-[25%]"
              width="14"
              height="14"
              src="./img/ExchangeRate/Vector21_649.png"
            ></img>
          </div>
        </div>
      </div>
    </DisplaySetting>
  );
};

export default ExchangeRate;
