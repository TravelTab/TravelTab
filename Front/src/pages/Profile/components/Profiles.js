// Profiles.js
import DisplaySetting from "../../../shared/DisplaySetting";
import ProfileImage from "./ProfileImage";
import ProfileInfo from "./ProfileInfo";
import EditButton from "./EditButton";

const Profiles = () => {
  return (
    <DisplaySetting>
      <div className="container">
        <ProfileImage />
        <div className="text">김토뱅</div>
        <EditButton />
        <ProfileInfo iconSrc="./img/Profile/Vector6_224.png" iconWidth="16" iconHeight="16" label="이름" value="김토뱅" />
        <ProfileInfo iconSrc="./img/Profile/Vector6_353.png" iconWidth="14" iconHeight="14" label="전화번호" value="010-1004-1004" />
        <ProfileInfo iconSrc="./img/Profile/Vector6_356.png" iconWidth="17" iconHeight="14" label="이메일" value="imemail@naver.com" />
        <ProfileInfo iconSrc="./img/Profile/Vector6_359.png" iconWidth="16" iconHeight="14" label="주소" value="서울특별시 한경 아카데미" />
        <ProfileInfo iconSrc="./img/Profile/Vector6_361.png" iconWidth="15" iconHeight="12" label="내 카드" value="하나은행 트래블로그" />
      </div>
    </DisplaySetting>
  );
};

export default Profiles;
