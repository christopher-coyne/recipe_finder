import { StyledButton } from "./Button.style";
import React from "react";
interface Props {
  input: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type: null | "small" | "regular" | "cancel";
}

const Button: React.FC<Props> = ({ input, onClick, type }: Props) => {
  return <StyledButton onClick={onClick}>{input}</StyledButton>;
};

export default Button;
