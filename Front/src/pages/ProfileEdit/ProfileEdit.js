import React, { useState } from 'react';
import DisplaySetting from '../../shared/DisplaySetting.js';
import Header from '../../shared/components/Header.js';
import '../Profile/Profile.css';
import Modal from './modal.js';

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    이름: '김토뱅',
    전화번호: '010-1004-1004',
    이메일: 'imemail@naver.com',
    주소: '서울특별시 한경 아카데미',
  });


  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [modalContent, setModalContent] = useState(''); // 모달에 표시할 내용
  const [inputValue, setInputValue] = useState(''); // 모달 입력 값 상태
  const [currentField, setCurrentField] = useState(''); // 현재 수정 중인 필드 상태


  const handleIconClick = (field) => {
    setModalContent(`${field} 수정하기`); // 클릭한 필드에 따라 모달 내용 설정
    setInputValue(profile[field]); // 현재 필드의 값을 입력 필드에 설정
    setCurrentField(field); // 현재 필드를 상태로 저장
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setModalContent(''); // 모달 내용 초기화
    setInputValue(''); // 입력 값 초기화
    setCurrentField(''); // 현재 필드 초기화
  };

  const handleSave = () => {
    if (currentField) {
      // profile 상태 업데이트
      setProfile((prevProfile) => ({
        ...prevProfile,
        [currentField]: inputValue,
      }));
    }
    closeModal(); // 모달 닫기
  };

  return (
    <DisplaySetting>
    <Header />
      <div className="container">
        <div className="profile-image"></div>
        <div className="text">{profile.이름}</div>

        <div className="section">
          <img className="icon" width="16" height="16" src="./img/Profile/Vector6_224.png" alt="Name" />
          <div className="item">이름</div>
          <div className="value" title={profile.이름}>{profile.이름}</div> {/* title 속성을 추가하여 툴팁 표시 */}
          <img className="editIcon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit"  onClick={() => handleIconClick('이름')}/>
        </div>

        <div className="section">
          <img className="icon" width="14" height="14" src="./img/Profile/Vector6_353.png" alt="Phone" />
          <div className="item">전화번호</div>
          <div className="value" title={profile.전화번호}>{profile.전화번호}</div>
          <img className="editIcon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('전화번호')}/>
        </div>
        
        <div className="section">
          <img className="icon" width="17" height="14" src="./img/Profile/Vector6_356.png" alt="Email" />
          <div className="item">이메일</div>
          <div className="value" title={profile.이메일}>{profile.이메일}</div>
          <img className="editIcon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('이메일')}/>
        </div>

        <div className="section">
          <img className="icon" width="16" height="14" src="./img/Profile/Vector6_359.png" alt="Address" />
          <div className="item">주소</div>
          <div className="value" title={profile.주소}>{profile.주소}</div>
          <img className="editIcon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('주소')}/>
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


        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={modalContent}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSave={handleSave}
        />
      </div>
    </DisplaySetting>
  );
};

export default ProfileEdit;