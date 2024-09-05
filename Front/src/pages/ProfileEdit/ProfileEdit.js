import React, { useState, useEffect } from "react";
import DisplaySetting from '../../shared/DisplaySetting.js';
import Header from '../../shared/components/Header.js';
import '../Profile/components/Profile.css';
import Modal from './modal.js';
import ImageUploadModal from './ImageUploadModal.js';
import EditButton2 from '../Profile/components/EditButton2.js';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 임포트



const ProfileEdit = () => {

  const profile2 = [
    {
      name : "김토",
      phone : "112",
      email : "asd@naver.com",
      address : "한경 아카데미",
      card : "하나은행 트래블로그",
    }
  ];

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
          let data = {
            이름: res[0].username,
            전화번호: res[0].phonenumber,
            이메일: res[0].email,
            주소: res[0].address,
            프로필이미지 : "./img/Profile/animal.png"
          };
          setProfile(data);
        })
    } catch (error) {
      console.error('사용자 정보를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    finduser(); // 사용자 정보 가져오기
  }, []);

  const editprofile = async () => {
    try {
      const token = localStorage.getItem('id');
      await fetch('http://127.0.0.1:5500/editmyprofile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify(profile),
      })
        .then((response) => response.json())
        .then((res) => {alert(res.message);
          window.location.href = "/profile";
        })
    } catch (error) {
      console.error('사용자 정보를 가져오는 중 오류 발생:', error);
    }
  };

  const [profile, setProfile] = useState({
    이름: profile2[0].name,
    전화번호: profile2[0].phone,
    이메일: profile2[0].email,
    주소: profile2[0].address
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [isImageModalOpen, setIsImageModalOpen] = useState(false); // 이미지 업로드 모달 상태

  const [modalContent, setModalContent] = useState(''); // 모달에 표시할 내용
  const [inputValue, setInputValue] = useState(''); // 모달 입력 값 상태
  const [currentField, setCurrentField] = useState(''); // 현재 수정 중인 필드 상태

  const navigate = useNavigate(); // navigate 훅 사용

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

  const openImageModal = () => {
    setIsImageModalOpen(true); // 이미지 업로드 모달 열기
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false); // 이미지 업로드 모달 닫기
  };

  const handleImageSave = (image) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      프로필이미지: image, // 프로필 이미지 상태 업데이트
    }));
    closeImageModal(); // 이미지 업로드 모달 닫기
  };

  const handleSaveAndNavigate = async () => {
    handleSave(); // 프로필 저장 처리
    editprofile();
    //navigate('/profile'); // profile 페이지로 이동
  };


  return (
    <DisplaySetting>
      <Header />
      <div className="container">
        <div
          className="profile-image"
          onClick={openImageModal}
          style={{ backgroundImage: `url(${profile.프로필이미지})`, cursor: "pointer" }}
        ></div>
        <div className="text1">{profile.이름}</div>

        <div className="section">
          <img className="icon" width="16" height="16" src="./img/Profile/Vector6_224.png" alt="Name" />
          <div className="item">이름</div>
          <div className="value" title={profile.이름}>{profile.이름}</div> {/* title 속성을 추가하여 툴팁 표시 */}
          <img className="editIcon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('이름')} />
        </div>

        <div className="section">
          <img className="icon" width="14" height="14" src="./img/Profile/Vector6_353.png" alt="Phone" />
          <div className="item">전화번호</div>
          <div className="value" title={profile.전화번호}>{profile.전화번호}</div>
          <img className="editIcon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('전화번호')} />
        </div>

        <div className="section">
          <img className="icon" width="17" height="14" src="./img/Profile/Vector6_356.png" alt="Email" />
          <div className="item">이메일</div>
          <div className="value" title={profile.이메일}>{profile.이메일}</div>
          <img className="editIcon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('이메일')} />
        </div>

        <div className="section">
          <img className="icon" width="16" height="14" src="./img/Profile/Vector6_359.png" alt="Address" />
          <div className="item">주소</div>
          <div className="value" title={profile.주소}>{profile.주소}</div>
          <img className="editIcon" width="16" height="16" src="./img/ProfileEdit/Vector23_298.png" alt="Edit" onClick={() => handleIconClick('주소')} />
        </div>

        <div className="section">
          <img className="icon" width="15" height="12" src="./img/Profile/Vector6_361.png" alt="Card" />
          <div className="item">내 카드</div>
          <div className="value" title="하나은행 트래블로그">하나은행 트래블로그</div>
        </div>

        {/* 저장 버튼 추가 */}
        <EditButton2 onClick={handleSaveAndNavigate } label="저장" />

        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          content={modalContent}
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleSave={handleSave}
        />

        <ImageUploadModal
          isOpen={isImageModalOpen}
          onClose={closeImageModal}
          handleImageSave={handleImageSave}
        />

      </div>
    </DisplaySetting>
  );
};

export default ProfileEdit;
