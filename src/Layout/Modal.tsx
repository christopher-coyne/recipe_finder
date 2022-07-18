import React from "react";
import ReactDom from "react-dom";
import { useContext } from "react";
import { StyledModal, Overlay, CloseIcon } from "./Modal.style";
import { modalContext, setModalContext } from "../contexts/ModalContext";

type Props = {
  type: string;
  children: JSX.Element;
};

const Modal = ({ type, children }: Props) => {
  const currentModal = useContext(modalContext);
  const setCurrentModal = useContext(setModalContext);
  if (currentModal !== type) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <Overlay onClick={() => setCurrentModal("")} />
      <StyledModal>
        <CloseIcon>X</CloseIcon>
        {children}
      </StyledModal>
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;
