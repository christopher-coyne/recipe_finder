import { StyledButton } from "./Button.style";
interface Props {
  input: string;
}

const Button: React.FC<Props> = ({ input }) => {
  return <StyledButton>{input}</StyledButton>;
};

export default Button;
