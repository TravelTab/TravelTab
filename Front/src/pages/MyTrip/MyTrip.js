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
            fontSize: "20px",
            fontFamily: "Inter",
            fontWeight: "600",
            color: "#000",
            whiteSpace: "nowrap",
          }}
        >
          <button onClick={handleOpenModal}>여행지 추가하기</button>
          {selectedCountry && <p>Selected Country: {selectedCountry.name}</p>}
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
