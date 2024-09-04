import Header from "../../shared/components/Header";
import DisplaySetting from "../../shared/DisplaySetting";
import Card from "./components/Card";
import TermOfUse from "./components/TermOfUse";
import SwiperWindow from "../../shared/components/SwiperWindow/SwiperWindow";

const MyCard = () => {
  return (
    <DisplaySetting>
      <Header />
      <SwiperWindow>
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
      </SwiperWindow>
      <TermOfUse />
    </DisplaySetting>
  );
};

export default MyCard;
