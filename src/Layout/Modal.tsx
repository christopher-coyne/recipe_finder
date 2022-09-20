/* eslint-disable @typescript-eslint/no-non-null-assertion*/

import ReactDom from "react-dom";
import { useContext } from "react";
import { StyledModal, Overlay, CloseIcon } from "./Modal.style";
import { modalContext } from "../contexts/ModalContext";

type Props = {
  type: string;
  children: JSX.Element;
};

export const Modal = ({ type, children }: Props) => {
  const { modal, setModal } = useContext(modalContext);
  if (modal !== type) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <Overlay onClick={() => setModal("")} />
      <StyledModal>
        <CloseIcon onClick={() => setModal("")}>X</CloseIcon>
        {children}
      </StyledModal>
    </>,
    document.getElementById("portal")!
  );
};
