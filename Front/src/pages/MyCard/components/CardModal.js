import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const CardModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>카드 선택</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCardNumber">
            <Form.Label>카드 번호</Form.Label>
            <Form.Control type="text" placeholder="Enter card number" />
          </Form.Group>
          <Form.Group controlId="formCardName">
            <Form.Label>소유자명</Form.Label>
            <Form.Control type="text" placeholder="Enter cardholder name" />
          </Form.Group>
          <Form.Group controlId="formExpiryDate">
            <Form.Label>유효기한</Form.Label>
            <Form.Control type="text" placeholder="MM/YY" />
          </Form.Group>
          <Form.Group controlId="formCVV">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="text" placeholder="Enter CVV" />
          </Form.Group>
        </Form>
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
