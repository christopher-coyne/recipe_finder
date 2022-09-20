import styled from "styled-components";

export const Button = styled("button")<{ buttonType: string }>`
  cursor: pointer;
  background-color: ${({ buttonType, theme }) => {
    if (buttonType === "regular") return `${theme.colors.primary}`;
    if (buttonType === "cancel") return `${theme.colors.cancel}`;
    if (buttonType === "clicked") return `${theme.colors.secondary}`;
    if (buttonType === "small") return "white";
  }};
  padding: ${(props) => {
    if (props.buttonType === "regular" || props.buttonType === "cancel")
      return ".75rem 2rem";
    if (props.buttonType === "small" || props.buttonType === "clicked")
      return ".3rem 1rem";
  }};
  border: ${({ theme, buttonType }) => {
    if (buttonType === "small" || buttonType === "clicked")
      return `2px solid ${theme.colors.secondary}`;
    return "none";
  }};
  border-radius: 0.6rem;
  color: ${({ buttonType, theme }) => {
    if (
      buttonType === "regular" ||
      buttonType === "clicked" ||
      buttonType === "cancel"
    )
      return "white";
    if (buttonType === "small") return theme.colors.secondary;
  }};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ buttonType, theme }) => {
    if (buttonType === "small") return theme.fontSizes.medium;
  }};
  margin: ${({ buttonType }) => {
    if (buttonType === "small" || buttonType === "clicked")
      return "0rem .5rem 0rem 0rem";
  }};
`;
