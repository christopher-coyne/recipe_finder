import ReactDom from "react-dom";
import { useContext } from "react";
import { StyledModal, Overlay, CloseIcon } from "./Modal.style";
import { modalContext, setModalContext } from "../contexts/ModalContext";

type Props = {
  type: string;
  children: JSX.Element;
};

export const Modal = ({ type, children }: Props) => {
  const currentModal = useContext(modalContext);
  const setCurrentModal = useContext(setModalContext);
  if (currentModal !== type) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <Overlay onClick={() => setCurrentModal("")} />
      <StyledModal>
        <CloseIcon onClick={() => setCurrentModal("")}>X</CloseIcon>
        {children}
      </StyledModal>
    </>,
    document.getElementById("portal")!
  );
};
