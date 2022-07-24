import styled from "styled-components";
import { colors } from "../../colors";

export const IntroWrapper = styled("article")`
  border: 1px solid red;
  margin: auto;
  margin-top: 4rem;
  text-align: left;

  & h1 {
    font-size: ${(props) => props.theme.fontSizes.largest};
    font-weight: ${(props) => props.theme.fontWeights.regular};
  }

  & p {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;
