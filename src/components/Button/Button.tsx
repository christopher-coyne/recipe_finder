import { StyledButton } from "./Button.style";
import React from "react";
interface Props {
  input: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "small" | "regular" | "cancel" | "clicked";
}

const Button = ({ input, onClick, type }: Props) => {
  return (
    <StyledButton onClick={onClick} foodType={type}>
      {input}
    </StyledButton>
  );
};

export default Button;
