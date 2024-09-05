import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CardModal = ({ show, handleClose }) => {
  let now_index = 0;
  function save_card() {
    alert(now_index);
    handleClose();
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>카드 선택</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Swiper
          style={{ width: "300px", height: "300px" }}
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onActiveIndexChange={(e) => {
            now_index = e.realIndex;
          }}
        >
          <SwiperSlide style={{ textAlign: "center" }}>
            <h4 style={{ marginTop: "50px" }}>하나 트래블로그</h4>
            <img
              src="./img/card/트래블로그.png"
              style={{
                position: "absolute",
                width: "200px",
                top: "100px",
                left: "55px",
              }}
            ></img>
          </SwiperSlide>
          <SwiperSlide style={{ textAlign: "center" }}>
            <h4 style={{ marginTop: "50px" }}>트래블월렛</h4>
            <img
              src="./img/card/트래블월렛.jfif"
              style={{
                position: "absolute",
                width: "200px",
                top: "100px",
                left: "55px",
              }}
            ></img>
          </SwiperSlide>
          <SwiperSlide style={{ textAlign: "center" }}>
            <h4 style={{ marginTop: "50px" }}>토스</h4>
            <img
              src="./img/card/토스.jfif"
              style={{
                position: "absolute",
                width: "200px",
                top: "100px",
                left: "55px",
              }}
            ></img>
          </SwiperSlide>
          <SwiperSlide style={{ textAlign: "center" }}>
            <h4 style={{ marginTop: "50px" }}>신한 SOL 트래블</h4>
            <img
              src="./img/card/신한쏠트래블.png"
              style={{
                position: "absolute",
                width: "200px",
                top: "100px",
                left: "55px",
              }}
            ></img>
          </SwiperSlide>
          <SwiperSlide style={{ textAlign: "center" }}>
            <h4 style={{ marginTop: "50px" }}>KB 국민 트래블러스</h4>
            <img
              src="./img/card/트래블러스.jfif"
              style={{
                position: "absolute",
                width: "200px",
                top: "100px",
                left: "55px",
              }}
            ></img>
          </SwiperSlide>
          <SwiperSlide style={{ textAlign: "center" }}>
            <h4 style={{ marginTop: "50px" }}>우리 위비트래블</h4>
            <img
              src="./img/card/우리카드.png"
              style={{
                position: "absolute",
                width: "200px",
                top: "100px",
                left: "55px",
              }}
            ></img>
          </SwiperSlide>
        </Swiper>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          종료
        </Button>
        <Button variant="primary" onClick={save_card}>
          저장
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
