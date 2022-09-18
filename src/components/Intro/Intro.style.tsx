import styled from "styled-components";
import { colors } from "../../colors";

export const IntroWrapper = styled("article")`
  margin: auto;
  margin-top: 4rem;
  text-align: left;
  color: ${({ theme }) => theme.colors.text};

  & h1 {
    font-size: ${({ theme }) => theme.fontSizes.largest};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    padding: 0.5rem 0rem;
  }

  & p {
    font-size: ${({ theme }) => theme.fontSizes.large};
    padding-bottom: 0.2rem;
  }
`;
