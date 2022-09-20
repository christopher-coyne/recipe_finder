import styled from "styled-components";

export const CloseButton = styled("button")`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  display: inline;
  margin-right: 0.2rem;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  padding: 0.25rem 0.5rem;
  border-radius: 10px;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;
