import React from "react";
import ERcomponents from "../ExchangeRate/components/ERcomponents.js";
import DisplaySetting from "../../shared/DisplaySetting";
import Header from "../../shared/components/Header.js";
import '../ExchangeRate/components/ERcomponents.css';
import Current from "../ExchangeRate/components/Current.js";

const ExchangeRate = () => {

  return (
    <DisplaySetting>

      <Header />
      <div className="container">
        <div className="TodayRate">
          오늘의 환율
        </div>
      <Current/>
      <div className="RateStyle">
      <ERcomponents/>
      </div>
      </div>
    </DisplaySetting>
  );
};
export default ExchangeRate;
