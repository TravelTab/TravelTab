import React, { useEffect, useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ width = 450, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  const navigate = useNavigate();

  const handleMyCard = () => {
    navigate("/mycard"); // 버튼 클릭 시 연결되는 주소
  };

  const handleMyTrip = () => {
    navigate("/mytrip"); // 버튼 클릭 시 연결되는 주소
  };

  const handleATMMap = () => {
    navigate("/atmmap"); // 버튼 클릭 시 연결되는 주소
  };

  const handleExchangeRate = () => {
    navigate("/exchangerate"); // 버튼 클릭 시 연결되는 주소
  };

  const handleNotice = () => {
    navigate("/notice"); // 버튼 클릭 시 연결되는 주소
  };

  const handleProfile = () => {
    navigate("/profile"); // 버튼 클릭 시 연결되는 주소
  };

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => {
      window.removeEventListener("click", handleClose);
    };
  });

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: "100%",
          transform: `translatex(${-xPosition}px)`,
        }}
      >
        <button onClick={() => toggleMenu()} className={styles.button}>
          {isOpen ? (
            <img src="./img/Detail/X.png" />
          ) : (
            <img src="./img/Main/Hamburger.png" />
          )}
        </button>
        <div className={styles.content}>
          <div style={{ cursor: "pointer" }} onClick={handleProfile}>
            프로필
          </div>
          <hr />
          <ul>
            <li style={{ cursor: "pointer" }} onClick={handleMyCard}>
              내 카드
            </li>
            <li style={{ cursor: "pointer" }} onClick={handleMyTrip}>
              내 여행
            </li>
            <li style={{ cursor: "pointer" }} onClick={handleATMMap}>
              ATM 찾기
            </li>
            <li style={{ cursor: "pointer" }} onClick={handleExchangeRate}>
              환율 정보
            </li>
            <li style={{ cursor: "pointer" }} onClick={handleNotice}>
              공지사항
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
