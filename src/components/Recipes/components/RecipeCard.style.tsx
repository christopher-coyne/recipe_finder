import styled from "styled-components";

export const StyledRecipe = styled("div")`
  height: 9rem;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #d4d4d4;
  text-align: left;
  cursor: pointer;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};

  & h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    margin-bottom: 0.5rem;
  }

  &:hover {
    box-shadow: 3px 3px 6px #e2a4eb;
  }
`;

export const Content = styled("div")`
  height: 80%;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const User = styled("div")`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  width: 100%;
  text-align: right;
`;

export const BoldText = styled("span")`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
`;
