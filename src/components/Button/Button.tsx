import { StyledButton } from "./Button.style";
import React from "react";
interface Props {
  input: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: "small" | "regular" | "cancel" | "clicked" | "option";
}

export const Button = ({ input, onClick, type }: Props) => {
  return (
    <StyledButton onClick={onClick} buttonType={type}>
      {input}
    </StyledButton>
  );
};
