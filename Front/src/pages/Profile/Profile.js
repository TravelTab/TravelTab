import React from 'react';
import { useNavigate } from 'react-router-dom';
import DisplaySetting from '../../shared/DisplaySetting';
import Header from '../../shared/components/Header';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('/profileedit'); // 버튼 클릭 시 연결되는 주소
  };

  return (
    <DisplaySetting>
      <div className="container">
        <Header />
        <div className="profile-image"></div>
        <div className="text">김토뱅</div>

        <div className="edit-profile">
        <img style={{ width: '24px', height: '24px' }} src="./img/Profile/Group23_164.png" alt="Edit Icon" />
          <button onClick={handleEditProfile}>
            프로필 수정하기
          </button>
        </div>

        <div className="section">
          <img className="icon" width="16" height="16" src="./img/Profile/Vector6_224.png" alt="Edit" />
          <div className="item">이름</div>
          <div className="value" title="김토뱅">김토뱅</div> {/* title 속성을 추가하여 툴팁 표시 */}
        </div>
        <div className="section">
          <img className="icon" width="14" height="14" src="./img/Profile/Vector6_353.png" alt="Phone" />
          <div className="item">전화번호</div>
          <div className="value" title="010-1004-1004">010-1004-1004</div>
        </div>
        <div className="section">
          <img className="icon" width="17" height="14" src="./img/Profile/Vector6_356.png" alt="Email" />
          <div className="item">이메일</div>
          <div className="value" title="imemail@naver.com">imemail@naver.com</div>
        </div>
        <div className="section">
          <img className="icon" width="16" height="14" src="./img/Profile/Vector6_359.png" alt="Address" />
          <div className="item">주소</div>
          <div className="value" title="서울특별시 한경 아카데미">서울특별시 한경 아카데미</div> {/* title 속성 추가 */}
        </div>
        <div className="section">
          <img className="icon" width="15" height="12" src="./img/Profile/Vector6_361.png" alt="Card" />
          <div className="item">내 카드</div>
          <div className="value" title="하나은행 트래블로그">하나은행 트래블로그</div>
        </div>
        <div className="section">
          <img className="icon" width="15" height="12" src="./img/Profile/Vector6_364.png" alt="Card Number" />
          <div className="item">카드 번호</div>
          <div className="value" title="*** **** 0828">*** **** 0828</div>
        </div>
      </div>
    </DisplaySetting>
  );
};

export default Profile;