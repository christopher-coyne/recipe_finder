import { NONAME } from "dns";
import styled from "styled-components";

export const StyledButton = styled("button")<{ buttonType: string }>`
  cursor: pointer;
  background-color: ${(props) => {
    if (props.buttonType === "regular") return `${props.theme.colors.primary}`;
    if (props.buttonType === "cancel") return `${props.theme.colors.cancel}`;
    if (props.buttonType === "clicked")
      return `${props.theme.colors.secondary}`;
    if (props.buttonType === "small") return `white`;
  }};
  padding: ${(props) => {
    if (props.buttonType === "regular" || props.buttonType === "cancel")
      return ".75rem 2rem";
    if (props.buttonType === "small" || props.buttonType === "clicked")
      return ".3rem 1rem";
  }};
  border: ${(props) => {
    if (props.buttonType === "small" || props.buttonType === "clicked")
      return `2px solid ${props.theme.colors.secondary}`;
    return "none";
  }};
  border-radius: 0.6rem;
  color: ${(props) => {
    if (
      props.buttonType === "regular" ||
      props.buttonType === "clicked" ||
      props.buttonType === "cancel"
    )
      return "white";
    if (props.buttonType === "small") return props.theme.colors.secondary;
  }};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: ${(props) => {
    if (props.buttonType === "small") return props.theme.fontSizes.medium;
  }};
  margin: ${(props) => {
    if (props.buttonType === "small" || props.buttonType === "clicked")
      return "0rem .5rem 0rem 0rem";
  }};
`;

export const CloseButton = styled("div")`
  font-weight: ${(props) => props.theme.fontWeights.bold};
  display: inline;
  margin-right: 0.2rem;
`;
