import Header from "../../shared/components/Header";
import DisplaySetting from "../../shared/DisplaySetting";
import Card from "./components/Card";
import AddCard from "./components/AddCard";

const MyCard = () => {
  return (
    <DisplaySetting>
      <Header />
      <Card />
      <div className="absolute left-[151px] top-[536px] w-[48px] h-[6px] flex flex-row items-center justify-start gap-[4px]">
        <div className="w-[22px] h-[6px] shrink-0 bg-[#fff] rounded-[10px]"></div>
        <div className="w-[6px] h-[6px] shrink-0 bg-[#fff] rounded-[10px] opacity-[.5]"></div>
        <div className="w-[6px] h-[6px] shrink-0 bg-[#fff] rounded-[10px] opacity-[.5]"></div>
        <div className="w-[6px] h-[6px] shrink-0 bg-[#fff] rounded-[10px] opacity-[.5]"></div>
      </div>
      <AddCard />
    </DisplaySetting>
  );
};

export default MyCard;
