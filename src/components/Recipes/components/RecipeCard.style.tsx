import styled from "styled-components";

export const StyledRecipe = styled("div")`
  height: 8rem;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #d4d4d4;
  text-align: left;
  padding: 1rem;

  & h2 {
    color: ${(props) => props.theme.secondary};
  }
`;

export const Content = styled("div")`
  height: 80%;
  overflow: hidden;
`;

export const User = styled("div")`
  color: ${(props) => props.theme.secondary};
  border: 1px solid blue;
  width: 100%;
  text-align: right;
`;

export const BoldText = styled("span")``;
