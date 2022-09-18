import styled from "styled-components";

export const StyledRecipe = styled("div")`
  & h1 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.primary};
  }
  & p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin: 1rem 0rem;
  }
`;

export const BoldSpan = styled("span")`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Tags = styled("ul")`
  padding: 0.5rem 0rem;
  & li {
    display: inline-block;
    padding: 0.5rem;
    background-color: ${({ theme }) => theme.shades.primary.l2};
    color: ${({ theme }) => theme.shades.primary.d1};
    margin-right: 0.5rem;
  }
`;

export const BottomText = styled("div")`
  display: flex;
  justify-content: space-between;
  & h2 {
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
