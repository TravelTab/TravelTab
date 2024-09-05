import React, { useState } from "react";
import Sidebar from "../../shared/components/Sidebar";
import Header from "../../shared/components/Header";
import MyCountryCarousel from "../MyTrip/components/MyCountryCarousel";
import MyCardCarousel from "./MyCardCarousel";
import { useNavigate } from "react-router-dom";

const Main = () => {

  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Sidebar />
      <Header />

      {/* 메인 컨텐츠 */}
      <div
        style={{
          display: "flex",
          position: "relative",
          transform: "translateX(-50%)",
          left: "50%",
          width: "294px",
          height: "784px",
          marginTop: "50px",
        }}
      >
        {/* 카드 정보 섹션 */}
        <div
          style={{
            position: "relative",
            width: "294px",
            height: "222px",
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "1.36%",
              right: "52.1%",
              top: "0",
              bottom: "81.98%",
              fontSize: "24px",
              lineHeight: "120%",
              letterSpacing: "-0.02em",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#000",
            }}
          >
            내 카드
          </div>

          <div
            style={{
              position: "absolute",
              left: "4px",
              top: "34px",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#000",
              whiteSpace: "nowrap",
            }}
          >
            김토뱅님의 여행 카드 정보
          </div>
          <div style={{ cursor: "pointer" }}>
            <MyCardCarousel />
          </div>
        </div>

        {/* 환율 정보 섹션 */}
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "282px",
            width: "293px",
            height: "194px",
            display: "flex",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "9px",
              top: "181px",
              width: "48px",
              height: "6px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "6px",
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                opacity: ".5",
              }}
            ></div>
            <div
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                opacity: ".5",
              }}
            ></div>
            <div
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                opacity: ".5",
              }}
            ></div>
          </div>
          <div
            style={{
              position: "absolute",
              left: "4px",
              top: "33px",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#000",
              whiteSpace: "nowrap",
            }}
          >
            내 여행지 환율 정보
          </div>
          <div
            style={{
              position: "absolute",
              left: "1.37%",
              right: "33.11%",
              top: "0",
              bottom: "85.57%",
              fontSize: "24px",
              lineHeight: "120%",
              letterSpacing: "-0.02em",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#000",
            }}
          >
            환율
          </div>
          <MyCountryCarousel />
        </div>

        {/* ATM 길찾기 섹션 */}
        <div
          style={{
            position: "absolute",
            left: "0",
            top: "538px",
            width: "293px",
            height: "246px",
            display: "flex",
          }}
        >
          <img
            style={{
              position: "absolute",
              left: "0",
              top: "65px",
              cursor: "pointer",
            }}
            width="293"
            height="181"
            src="./img/Main/Rectangle 36_47.png"
            alt="ATM 카드 이미지"
            onClick={() => navigate("/atmmap")}
          />
          <div
            style={{
              position: "absolute",
              left: "4px",
              top: "33px",
              width: "151px",
              height: "24px",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#000",
            }}
          >
            내 카드 ATM 찾기
          </div>
          <div
            style={{
              position: "absolute",
              left: "1.37%",
              right: "46.08%",
              top: "0",
              bottom: "89.03%",
              fontSize: "24px",
              lineHeight: "120%",
              letterSpacing: "-0.02em",
              fontFamily: "Inter",
              fontWeight: "600",
              color: "#000",
            }}
          >
            ATM 길찾기
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
