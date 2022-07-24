import { StyledButton, CloseButton } from "./Button.style";
import React from "react";
interface Props {
  input: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type:
    | "small"
    | "regular"
    | "cancel"
    | "clicked"
    | "option"
    | "unstyled"
    | "unstyledClicked";
}

const Button = ({ input, onClick, type }: Props) => {
  return (
    <StyledButton onClick={onClick} buttonType={type}>
      {type === "small" && <CloseButton>X</CloseButton>}
      {input}
    </StyledButton>
  );
};

export default Button;
