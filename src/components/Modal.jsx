import React from "react";
import styled from "styled-components";
import Button from "./Button";

function Modal({ modal, setModal }) {
  const closeModal = (e) => {
    setModal(false);
  };
  return (
    <>
      <StModal>
        <ModalSection>
          <p>모달창 띄우기 어렵구나. 죽을수도있겠다.</p>
          <Button negative onClick={closeModal}>
            닫기
          </Button>
          <Button onClick={closeModal}>확인</Button>
        </ModalSection>
      </StModal>
    </>
  );
}

const StModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalSection = styled.div`
  position: relative;
  top: 25%;
  width: 90%;
  max-width: 450px;
  height: 300px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #fff;
  /* animation: modal-show 0.3s;
  overflow: hidden; */
`;

export default Modal;
