import styled from "styled-components";
import types from "../../../../FilterOptionTypes";

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
  font-size: ${(props) => {
    return `${props.theme.fontSizes.medium}`;
  }};
  font-weight: ${(props) => {
    if (props.buttonType === "unClicked")
      return `${props.theme.fontWeights.regular}`;
    if (props.buttonType === "clicked")
      return `${props.theme.fontWeights.bold}`;
  }};
  color: ${(props) => {
    if (props.buttonType === "unClicked") return `${props.theme.colors.text}`;
    if (props.buttonType === "clicked") return `${props.theme.colors.primary}`;
  }};
  margin: 0rem 0.5rem;
  text-decoration: ${(props) => {
    if (props.buttonType === "clicked") return `underline`;
  }};
  text-decoration-thickness: 3px;
  text-underline-offset: 0.2rem;
`;
