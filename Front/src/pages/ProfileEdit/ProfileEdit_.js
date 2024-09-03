import React, { useState } from 'react';
import DisplaySetting from '../../shared/DisplaySetting';
import Header from '../../shared/components/Header';
import '../Profile/Profile.css';
import Modal from './modal.js';

const TextInput = () => {
  const [value, setValue] = useState(''); // 상태 관리

  function handleChange(event) {
    setValue(event.target.value); // 입력 값 업데이트
  }
  return (
    <DisplaySetting>
    <div>
    <Header />
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        placeholder="텍스트를 입력하세요"
      />
      <p>입력한 내용: {value}</p>
    </div>
    </DisplaySetting>
  );
};

const ProfileEdit_ = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [modalContent, setModalContent] = useState(''); // 모달에 표시할 내용

  const handleIconClick = (field) => {
    setModalContent(`${field} 수정하기`); // 클릭한 필드에 따라 모달 내용 설정
    setIsModalOpen(true); // 모달 열기
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setModalContent(''); // 모달 내용 초기화
  };

  return (
    <DisplaySetting>
      <div className="container">
        <Header />
        <div className="profile-image"></div>
        <div className="text">김토뱅</div>

        <div className="section">
          <img className="icon" width="16" height="16" src="./img/Profile/Vector6_224.png" alt="Edit" />
          <div className="item">이름</div>
          <div className="value" title="김토뱅">김토뱅</div> {/* title 속성을 추가하여 툴팁 표시 */}
          <img className="icon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit"  onClick={() => handleIconClick('이름')}/>
        </div>

        <div className="section">
          <img className="icon" width="14" height="14" src="./img/Profile/Vector6_353.png" alt="Phone" />
          <div className="item">전화번호</div>
          <div className="value" title="010-1004-1004">010-1004-1004</div>
          <img className="icon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('전화번호')}/>
        </div>
        
        <div className="section">
          <img className="icon" width="17" height="14" src="./img/Profile/Vector6_356.png" alt="Email" />
          <div className="item">이메일</div>
          <div className="value" title="imemail@naver.com">imemail@naver.com</div>
          <img className="icon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('이메일')}/>
        </div>

        <div className="section">
          <img className="icon" width="16" height="14" src="./img/Profile/Vector6_359.png" alt="Address" />
          <div className="item">집 주소</div>
          <div className="value" title="서울특별시 한경 아카데미">서울특별시 한경 아카데미</div> {/* title 속성 추가 */}
          <img className="icon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('집 주소')}/>
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
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      </div>
    </DisplaySetting>
  );
};

export default ProfileEdit_;