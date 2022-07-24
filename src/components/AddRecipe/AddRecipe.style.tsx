import styled from "styled-components";

export const StyledForm = styled("form")`
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid red;
  overflow-y: scroll;
  & h1 {
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    color: ${(props) => props.theme.colors.primary};
  }

  & label {
    display: block;
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
  }
  & textarea {
    box-sizing: border-box;
    display: block;
    height: 150px;
    width: 100%;
    border: ${(props) => `2px solid ${props.theme.colors.text}`};
    background-color: transparent;
    resize: none;
    outline: none;
    padding: 3rem;
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin-bottom: 1rem;
  }
  & input {
    box-sizing: border-box;
    width: 90%;
    border: ${(props) => `2px solid ${props.theme.colors.text}`};
    padding: 0.5rem 1rem;
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin-bottom: 1rem;
  }
`;

export const Error = styled("div")`
  background-color: ${(props) => props.theme.colors.error};
`;
