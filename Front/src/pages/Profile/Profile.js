import DisplaySetting from '../../shared/DisplaySetting';
import Header from '../../shared/components/Header';
import ProfileImage from './components/ProfileImage';
import ProfileInfo from './components/ProfileInfo';
import Profiles from './components/Profiles';
import '../Profile/components/Profile.css';
import verifytoken from "../../shared/components/verifytoken";
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [profile, setprofile] = useState([
    {
      name : "김토",
      phone : "112",
      email : "asd@naver.com",
      address : "한경 아카데미",
      card : "하나은행 트래블로그",
      imgURL : "https://i.namu.wiki/i/8hbxBG7E76wK4L7fK3-B00boYbnvXR__jemXaT_Az1thuYsNqSrIgZ4CVh4kwo7bP3kYd2PSMVlJ9MdydkAeOoeyLQrOJXSDxjGiSdWJQE4_q25mzBg9N_hFB9_LdAOQLCQ-NFNzzas3TYEKOyYfVw.webp"
    }
  ]);

  const checkToken = async () => {
    try {
      const token = await verifytoken();
      if (token !== 'null') {
        console.log('토큰이 유효합니다.');
        // window.location.href = "/main";
      } else {
        console.log('Token Invalid');
        localStorage.removeItem('id');
        alert('로그인이 만료되었습니다. 로그인페이지로 이동합니다.');
        window.location.href = "/";
      }
    } catch (error) {
      console.error('토큰 검증 중 오류 발생:', error);
    }
  };

  // 사용자 이름을 가져오는 함수
  const finduser = async () => {
    try {
      const token = localStorage.getItem('id');
      await fetch('http://127.0.0.1:5500/mytravels', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res[0]);
          let data = [{
            name : res[0].username,
            phone : res[0].phonenumber,
            email : res[0].email,
            address : res[0].address,
            card : res[0].card[0],
            imgURL : "./img/Profile/animal.png"
          }];
          setprofile(data);
        })
    } catch (error) {
      console.error('사용자 정보를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    checkToken(); // 토큰을 먼저 체크
    finduser(); // 사용자 정보 가져오기
  }, []);


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