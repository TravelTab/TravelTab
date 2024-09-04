import Header from "../../shared/components/Header";
import DisplaySetting from "../../shared/DisplaySetting";
import TermOfUse from "./components/TermOfUse";
import SwiperWindow from "./components/SwiperWindow/SwiperWindow";

const MyCard = () => {
  return (
    <DisplaySetting>
      <Header />
      <SwiperWindow />
      <TermOfUse />
    </DisplaySetting>
  );
};

export default MyCard;
