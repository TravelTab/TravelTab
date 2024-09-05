import React from 'react';
import DisplaySetting from '../../shared/DisplaySetting';
import Header from '../../shared/components/Header';
import ProfileImage from './components/ProfileImage';
import ProfileInfo from './components/ProfileInfo';
import Profiles from './components/Profiles';
import '../Profile/components/Profile.css';

const Profile = () => {

const profile = [
  {
    name : "김토",
    phone : "112",
    email : "asd@naver.com",
    address : "한경 아카데미",
    card : "하나은행 트래블로그",
    imgURL : "https://i.namu.wiki/i/8hbxBG7E76wK4L7fK3-B00boYbnvXR__jemXaT_Az1thuYsNqSrIgZ4CVh4kwo7bP3kYd2PSMVlJ9MdydkAeOoeyLQrOJXSDxjGiSdWJQE4_q25mzBg9N_hFB9_LdAOQLCQ-NFNzzas3TYEKOyYfVw.webp"
  }
]

  return (
    <DisplaySetting>
    <Header />
      <div className="container">
        <Profiles myprofile={profile}/>
        <ProfileImage/>
        <ProfileInfo/>
        </div>
    </DisplaySetting>
  );
};

export default Profile;