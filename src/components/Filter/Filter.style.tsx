import styled from "styled-components";

export const Container = styled("div")`
  text-align: left;
`;

export const OpenFilters = styled("button")`
  background-color: white;
  cursor: pointer;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 1rem 0rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  padding-right: 0.5rem;
`;
