import { NONAME } from "dns";
import styled from "styled-components";

export const StyledButton = styled("button")<{ buttonType: string }>`
  cursor: pointer;
  background-color: ${(props) => {
    if (props.buttonType === "clicked") return `${props.theme.colors.primary}`;
    if (props.buttonType === "regular") return `${props.theme.colors.primary}`;
    if (props.buttonType === "small") return `white`;
  }};
  padding: ${(props) => {
    if (props.buttonType === "regular") return ".75rem 2rem";
    if (props.buttonType === "small") return ".3rem 1rem";
  }};
  border: ${(props) => {
    if (props.buttonType === "clicked") return "5px solid red";
    if (props.buttonType === "small")
      return `2px solid ${props.theme.colors.secondary}`;
    return "none";
  }};
  border-radius: 0.6rem;
  color: ${(props) => {
    if (props.buttonType === "regular") return "white";
    if (props.buttonType === "small") return props.theme.colors.secondary;
  }};
  font-size: ${(props) => {
    if (props.buttonType === "small" || props.buttonType === "regular")
      return props.theme.fontSizes.medium;
  }};
  font-weight: ${(props) => {
    if (props.buttonType === "small") return props.theme.fontSizes.medium;
  }};
`;

export const CloseButton = styled("div")`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  display: inline;
  margin-right: 0.2rem;
`;
