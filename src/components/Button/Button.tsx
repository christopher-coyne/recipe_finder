import { StyledButton } from "./Button.style";
import React from "react";
interface Props {
  input: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<Props> = ({ input, onClick }: Props) => {
  return <StyledButton onClick={onClick}>{input}</StyledButton>;
};

export default Button;
