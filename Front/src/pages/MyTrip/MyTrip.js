import Header from "../../shared/components/Header";
import DisplaySetting from "../../shared/DisplaySetting";
import MyCountryCarousel from "./components/MyCountryCarousel";
import React, { useState } from "react";
import CountrySelectorModal from "./components/CountrySelectorModal";

const MyTrip = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSelectCountry = (country) => setSelectedCountry(country);

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
          {selectedCountry && (
            <p style={{ marginTop: "15px" }}>
              Selected Country: {selectedCountry.name}
            </p>
          )}
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
