import styled from "styled-components";
import { tablet } from "styles/media";

export const StyledModal = styled("div")`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 40px;
  z-index: 2;
  border-radius: 1rem;
  max-height: 400px;
  overflow-y: scroll;
  border: 3px solid blue;
  ${tablet("width: 70%;")}
  width: 450px;
`;

export const CloseIcon = styled("button")`
  position: fixed;
  top: 2%;
  right: 2%;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 1rem;
  border-radius: 100%;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: ${({ theme }) => theme.shades.primary.d2};
  }
`;

export const Overlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;
