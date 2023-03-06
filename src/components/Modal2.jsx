import React from "react";
import styled from "styled-components";

const StModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 90;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalSection = styled.div`
  position: relative;
  top: 25%;
  width: 90%;
  max-width: 300px;
  height: 200px;
  margin: 0 auto;
  border-radius: 10px;
  background-color: #fff;
  z-index: 100;
  /* animation: modal-show 0.3s;
  overflow: hidden; */
`;

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: gray;
  border: 1px solid transparent;
`;

function Modal2({ modal, setModal }) {
  const closeModal = (e) => {
    setModal(false);
  };

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  };

  return (
    <>
      <StModal onClick={handleClickOutside}>
        <ModalSection>
          <CloseBtn onClick={closeModal}>X</CloseBtn>
          <p>외부영역 누르면 닫게만드는건 더힘들구나. 진짜 죽을수도있겠다.</p>
        </ModalSection>
        <label></label>
      </StModal>
    </>
  );
}

export default Modal2;
