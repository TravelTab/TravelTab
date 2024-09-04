import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import SwiperWindow from "./SwiperWindow/SwiperWindow";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CardModal = ({ show, handleClose }) => {
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
        >
          <SwiperSlide>카드1</SwiperSlide>
          <SwiperSlide>카드2</SwiperSlide>
          <SwiperSlide>카드3</SwiperSlide>
        </Swiper>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          종료
        </Button>
        <Button variant="primary" onClick={handleClose}>
          저장
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
