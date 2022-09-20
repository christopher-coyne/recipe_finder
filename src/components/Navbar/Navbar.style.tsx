import styled from "styled-components";

export const StyledNavbar = styled("nav")`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;

  & * {
    color: white;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    text-decoration: none;
  }
`;
