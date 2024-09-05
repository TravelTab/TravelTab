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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUjkajfbqeEm-HflwVQnI8JXi7HGxiUuid1g&s"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQe8ZeqlMMY3ALFpJnoC1SAEKMXhpBZCl_Xw&s"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvZU1Sgq4sDsoo0xFe1eeh3dVRjisqgjQAvA&s"
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
              src="data:image/png;base64,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"
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
              src="data:image/jpeg;base64,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"
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
              src="./img/MyCard/우리카드.png"
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
