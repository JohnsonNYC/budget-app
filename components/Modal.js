import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { X } from "lucide-react";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;

  return createPortal(
    <>
      <Overlay />
      <Wrapper>
        <Button onClick={onClose}>
          <X size={"16px"} />
        </Button>
        {children}
      </Wrapper>
    </>,
    document.body
  );
};

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  z-index: 1000;
  color: black;
  min-width: 50%;
  height: 50%;
  border-radius: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const Button = styled.button`
  border: unset;
  background: unset;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;
