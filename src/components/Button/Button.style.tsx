import styled from "styled-components";

export const StyledButton = styled("button")<{ foodType: string }>`
  background-color: ${(props) => props.theme.primary};
  padding: 0.5rem 2rem;
  border: ${(props) => props.foodType === "clicked" && "5px solid red"};
`;
