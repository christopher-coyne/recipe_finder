import styled from "styled-components";
import { colors } from "../../colors";

export const StyledNavbar = styled("nav")`
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;

  & * {
    color: white;
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    text-decoration: none;
  }
`;
