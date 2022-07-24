import { StyledButton, CloseButton } from "./Button.style";
import React from "react";
interface Props {
  input: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "small" | "regular" | "cancel" | "clicked" | "option";
  closeable?: true | null;
}

const Button = ({ input, onClick, type, closeable }: Props) => {
  return (
    <StyledButton onClick={onClick} buttonType={type}>
      {closeable && <CloseButton>X</CloseButton>}
      {input}
    </StyledButton>
  );
};

export default Button;
