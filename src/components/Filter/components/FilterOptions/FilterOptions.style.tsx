import styled from "styled-components";

export const Container = styled("div")`
  text-align: left;
  padding: 0rem 2rem;
  border: 2px solid black;
  border-radius: 0.5rem;
`;

export const OptionContainer = styled("div")`
  margin: 1rem 0rem;
`;

export const TypeName = styled("span")`
  font-weight: bold;
`;

export const SelectFilter = styled("button")<{ buttonType: string }>`
  font-weight: bold;
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: ${({ theme }) => {
    return `${theme.fontSizes.medium}`;
  }};
  font-weight: ${({ buttonType, theme }) => {
    if (buttonType === "unClicked") return `${theme.fontWeights.regular}`;
    if (buttonType === "clicked") return `${theme.fontWeights.bold}`;
  }};
  color: ${({ buttonType, theme }) => {
    if (buttonType === "unClicked") return `${theme.colors.text}`;
    if (buttonType === "clicked") return `${theme.colors.primary}`;
  }};
  margin: 0rem 0.5rem;
  text-decoration: ${({ buttonType }) => {
    if (buttonType === "clicked") return "underline";
  }};
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2rem;
`;
