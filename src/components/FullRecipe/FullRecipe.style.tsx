import styled from "styled-components";

export const StyledRecipe = styled("div")`
  & h1 {
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    color: ${(props) => props.theme.colors.primary};
  }
  & p {
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin: 1rem 0rem;
  }
`;

export const BoldSpan = styled("span")`
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.secondary};
`;

export const Tag = styled("span")``;

export const BottomText = styled("div")`
  display: flex;
  justify-content: space-between;
  & h2 {
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;
