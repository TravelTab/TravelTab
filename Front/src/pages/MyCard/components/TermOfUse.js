import React, { useEffect, useRef, useState } from "react";
import styles from "./TermOfUse.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import CardModal from "./CardModal";

const TermOfUse = ({ height = 200, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [YPosition, setY] = useState(-height);
  const side = useRef();
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // button 클릭 시 토글
  const toggleMenu = () => {
    if (YPosition < 0) {
      setY(0);
      setOpen(true);
    } else {
      setY(-height);
      setOpen(false);
    }
  };

  // 사이드바 외부 클릭시 닫히는 함수
  const handleClose = async (e) => {
    let sideArea = side.current;
    let sideChildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideChildren)) {
      await setY(-height);
      await setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClose);
    return () => {
      window.removeEventListener("mousedown", handleClose);
    };
  });

  return (
    <>
      {/* addCard 버튼 */}
      <div
        onClick={() => toggleMenu()}
        style={{
          display: "flex",
          flexDirection: "column", // 내부 요소들을 수직으로 배치
          alignItems: "center", // 수평 중앙 정렬
          justifyContent: "center", // 수직 중앙 정렬
          position: "absolute", // 위치를 절대적으로 설정
          left: "50%", // 왼쪽에서 50% 위치
          transform: "translate(-100px, 0", // 중앙 정렬을 위한 변환
          cursor: "pointer", // 클릭 가능한 요소임을 나타내는 커서
          textAlign: "center", // 텍스트 가운데 정렬
        }}
      >
        <div
          style={{
            width: "180px",
            height: "40px",
            backgroundColor: "#fff",
            borderRadius: "5px",
            boxShadow: "3px 3px 5px -1px #00000040",
            display: "flex", // 내부 요소들을 flexbox로 배치
            alignItems: "center", // 수직 중앙 정렬
            justifyContent: "center", // 수평 중앙 정렬
            gap: "8px", // 이미지와 텍스트 사이의 간격 조절
          }}
        >
          <img
            width="30"
            height="30"
            src="./img/MyCard/Group 149_229.png"
          ></img>
          <div
            style={{
              fontSize: "16px",
              lineHeight: "120%",
              letterSpacing: "-0.02em",
              fontFamily: "Inter, sans-serif", // 'Inter' 폰트가 없을 경우를 대비해 fallback 폰트를 추가합니다.
              fontWeight: "600", // 'font-semibold'는 600으로 설정합니다.
              color: "#409aa6",
              whiteSpace: "nowrap",
            }}
          >
            카드 추가하기
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div
          ref={side}
          className={styles.sidebar}
          style={{
            height: `${height}px`,
            width: "100%",
            transform: `translatey(${-YPosition}px)`,
          }}
        >
          <div className={styles.content}>
            <button className={styles.quitbutton} onClick={() => toggleMenu()}>
              X
            </button>
            이 약관에 동의하신다면 당신의 개인정보는 제가 마음대로 이용할 수
            있습니다.
            <Button variant="primary" onClick={handleShowModal}>
              동의하기
            </Button>
            <CardModal show={showModal} handleClose={handleCloseModal} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TermOfUse;
