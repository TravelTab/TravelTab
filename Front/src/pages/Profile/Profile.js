import React from 'react';
import { useNavigate } from 'react-router-dom';
import DisplaySetting from '../../shared/DisplaySetting';
import Header from '../../shared/components/Header';

const Profile = () => {
  const navigate = useNavigate();

  const handleEditProfile = () => {
    navigate('./Profile.js'); // 버튼 클릭 시 연결되는 주소
  };

  const containerStyle = {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(180deg, #f4fffb 0%, #fff 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
  };

  const profileImageStyle = {
    width: '30vw',
    maxWidth: '196px',
    height: '30vw',
    maxHeight: '196px',
    backgroundColor: '#d9d9d9',
    borderRadius: '50%',
    boxShadow: '0 4px 4px 14px rgba(255, 255, 255, 0.30)',
    marginTop: '2rem',
  };

  const textStyle = {
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#000',
    marginTop: '1rem',
  };

  const sectionStyle = {
    width: '80%',
    maxWidth: '281px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: '9px',
    margin: '0.5rem 0',
    padding: '0 1rem',
  };

  const itemStyle = {
    fontSize: '1rem',
    color: '#494949',
    flexShrink: 0, // 텍스트가 줄어들지 않도록 고정
  };

  const valueStyle = {
    paddingLeft: '1rem', // 간격 확보를 위해 paddingLeft 추가
    marginLeft: 'auto',
    fontSize: '1rem',
    color: '#727272',
    flexGrow: 1, // 공간을 더 차지하도록 설정하여 텍스트가 한 줄로 출력
    textAlign: 'right', // 오른쪽 정렬
    overflow: 'hidden', // 텍스트가 넘어가는 경우 숨김 처리
    textOverflow: 'ellipsis', // 텍스트가 넘칠 경우 ...으로 표시
    whiteSpace: 'nowrap' // 텍스트가 줄바꿈 없이 한 줄로 출력
  };

  const iconStyle = {
    marginRight: '8px',
  };

  const editProfile = {
    display: 'flex', // Flexbox로 설정하여 좌우 정렬
    alignItems: 'center', // 수직 가운데 정렬
    marginTop: '1rem',
  };

  return (
    <DisplaySetting>
      <div style={containerStyle}>
        <Header />
        <div style={profileImageStyle}></div>
        <div style={{ ...textStyle }}>김토뱅</div>

      <div style={editProfile}>
        <img style={{ width: '24px', height: '24px' }} src="./img/Profile/Group23_164.png" alt="Edit Icon" />
        <button
            onClick={handleEditProfile}
            style={{
              fontSize: '0.8rem',
              fontWeight: '400',
              color: '#737373',
              marginLeft: '0.5rem',
            }}
          >
            프로필 수정하기
          </button>
          </div>
          <div style={sectionStyle}>
          <img style={iconStyle} width="16" height="16" src="./img/Profile/Vector6_224.png" alt="Edit" />
          <div style={itemStyle}>이름</div>
          <div style={valueStyle} title="김토뱅">김토뱅</div> {/* title 속성을 추가하여 툴팁 표시 */}
        </div>
        <div style={sectionStyle}>
          <img style={iconStyle} width="14" height="14" src="./img/Profile/Vector6_353.png" alt="Phone" />
          <div style={itemStyle}>전화번호</div>
          <div style={valueStyle} title="010-1004-1004">010-1004-1004</div>
        </div>
        <div style={sectionStyle}>
          <img style={iconStyle} width="17" height="14" src="./img/Profile/Vector6_356.png" alt="Email" />
          <div style={itemStyle}>이메일</div>
          <div style={valueStyle} title="imemail@naver.com">imemail@naver.com</div>
        </div>
        <div style={sectionStyle}>
          <img style={iconStyle} width="16" height="14" src="./img/Profile/Vector6_359.png" alt="Address" />
          <div style={itemStyle}>집 주소</div>
          <div style={valueStyle} title="서울특별시 한경 아카데미">서울특별시 한경 아카데미</div> {/* title 속성 추가 */}
        </div>
        <div style={sectionStyle}>
          <img style={iconStyle} width="15" height="12" src="./img/Profile/Vector6_361.png" alt="Card" />
          <div style={itemStyle}>내 카드</div>
          <div style={valueStyle} title="하나은행 트래블로그">하나은행 트래블로그</div>
        </div>
        <div style={sectionStyle}>
          <img style={iconStyle} width="15" height="12" src="./img/Profile/Vector6_364.png" alt="Card Number" />
          <div style={itemStyle}>카드 번호</div>
          <div style={valueStyle} title="*** **** 0828">*** **** 0828</div>
        </div>
      </div>
    </DisplaySetting>
  );
};

export default Profile;