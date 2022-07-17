import React from "react";
import ReactDom from "react-dom";
import { StyledModal, Overlay } from "./Modal.style";

type Props = {
  children: React.ReactNode;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const Modal = ({ children, toggle, open }: Props) => {
  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <Overlay />
      <StyledModal>{children}</StyledModal>
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;
