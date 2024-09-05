import React, { useState, useEffect } from "react";
import Header from "../../shared/components/Header";
import DisplaySetting from "../../shared/DisplaySetting";
import MyCountryCarousel from "./components/MyCountryCarousel";
import CountrySelectorModal from "./components/CountrySelectorModal";
import verifytoken from "../../shared/components/verifytoken";

const MyTrip = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSelectCountry = (country) => setSelectedCountry(country);

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

  useEffect(() => {
    checkToken();
  
    // selectedCountry가 변경될 때마다 finduser 함수 호출
    if (selectedCountry) {
      finduser();
    }
  }, [selectedCountry]);
  
  const finduser = async () => {
    try {
      const token = localStorage.getItem('id');
      const data = {
        userId: token, // 사용자 ID를 함께 전송
        country: selectedCountry.name,
      };

      await fetch('http://127.0.0.1:5500/addmytravel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(res => {alert(res.message);
        if(res.message === "여행지를 추가 하였습니다."){
          window.location.reload();
        }
      }
    )
    } catch (error) {
      console.error('사용자 정보를 가져오는 중 오류 발생:', error);
    }
  };

  return (
    <DisplaySetting>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          marginTop: "50px",
          fontSize: "20px",
          fontFamily: "Inter",
          fontWeight: "600",
          color: "#000",
          whiteSpace: "nowrap",
        }}
      >
        내 여행지
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
        }}
      >
        <MyCountryCarousel />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          marginTop: "50px",
        }}
      >
        <div
          style={{
            fontSize: "18px", // 약간 더 작게 조정하여 깔끔하게
            fontFamily: "Inter, sans-serif", // sans-serif 추가
            fontWeight: "600",
            color: "#333", // 약간 밝은 회색으로 부드러운 색감
            whiteSpace: "nowrap",
            display: "flex", // 버튼과 텍스트를 수평으로 정렬
            flexDirection: "column", // 텍스트와 버튼을 수직으로 배치
            alignItems: "center", // 중앙 정렬
            padding: "20px", // 여백 추가
            borderRadius: "8px", // 모서리 둥글게
            backgroundColor: "#f9f9f9", // 배경색 추가
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // 부드러운 그림자 추가
          }}
        >
          <button
            onClick={handleOpenModal}
            style={{
              padding: "10px 20px", // 버튼 안쪽 여백
              fontSize: "16px", // 버튼 텍스트 크기
              fontFamily: "Inter, sans-serif",
              fontWeight: "600",
              color: "#fff", // 버튼 텍스트 색상
              backgroundColor: "#007bff", // 버튼 배경색
              border: "none", // 기본 테두리 제거
              borderRadius: "4px", // 버튼 모서리 둥글게
              cursor: "pointer", // 커서 포인터로 변경
              transition: "background-color 0.3s ease", // 부드러운 색상 전환 효과
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#0056b3")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#007bff")
            }
          >
            여행지 추가하기
          </button>
          <CountrySelectorModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onSelect={handleSelectCountry}
          />
        </div>
      </div>
      <div></div>
    </DisplaySetting>
  );
};

export default MyTrip;
