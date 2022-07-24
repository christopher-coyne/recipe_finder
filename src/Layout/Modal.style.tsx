import styled from "styled-components";

export const StyledModal = styled("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color white;
  padding: 50px;
  zindex: 2;
  border: 1px solid red;
`;

export const CloseIcon = styled("button")`
  position: fixed;
  top: 10%;
  right: 10%;
`;

export const Overlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: blue;
  background-color: rgba(0, 0, 0, 0.7);
  zindex: 2;
  border: 1px solid blue;
`;
