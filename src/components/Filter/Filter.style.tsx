import styled from "styled-components";

export const Container = styled("div")`
  text-align: left;
`;

export const OpenFilters = styled("button")`
  background-color: white;
  cursor: pointer;
  border: none;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin: 1rem 0rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding-right: 0.5rem;
`;
