// Profiles.js
import DisplaySetting from "../../../shared/DisplaySetting";
import ProfileInfo from "./ProfileInfo";
import EditButton from "./EditButton";

const Profiles = (props) => {
  
  return (
    <DisplaySetting>
      <div className="container">
        <div className="profile-image" style={{ backgroundImage: `url(${props.myprofile[0].imgURL})`, cursor: "pointer" }}></div>
        <div className="text1">{props.myprofile[0].name}</div>
        <EditButton />
        <ProfileInfo iconSrc="./img/Profile/Vector6_224.png" iconWidth="16" iconHeight="16" label="이름" value={props.myprofile[0].name} />
        <ProfileInfo iconSrc="./img/Profile/Vector6_353.png" iconWidth="14" iconHeight="14" label="전화번호" value={props.myprofile[0].phone} />
        <ProfileInfo iconSrc="./img/Profile/Vector6_356.png" iconWidth="17" iconHeight="14" label="이메일" value={props.myprofile[0].email} />
        <ProfileInfo iconSrc="./img/Profile/Vector6_359.png" iconWidth="16" iconHeight="14" label="주소" value={props.myprofile[0].address} />
        <ProfileInfo iconSrc="./img/Profile/Vector6_361.png" iconWidth="15" iconHeight="12" label="내 카드" value={props.myprofile[0].card} />
      </div>
    </DisplaySetting>
  );
};

export default Profiles;
