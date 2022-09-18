import styled from "styled-components";

export const StyledForm = styled("form")`
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.text};
  overflow-y: scroll;
  & h1 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    color: ${(props) => props.theme.colors.primary};
  }

  & label {
    display: block;
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
  & textarea {
    box-sizing: border-box;
    display: block;
    height: 150px;
    width: 100%;
    border: ${({ theme }) => `2px solid ${theme.colors.text}`};
    background-color: transparent;
    resize: none;
    outline: none;
    padding: 1rem;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 1rem;
  }
  & input {
    box-sizing: border-box;
    width: 100%;
    border: ${({ theme }) => `2px solid ${theme.colors.text}`};
    padding: 0.5rem 1rem;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 1rem;
  }
  & input:focus {
    outline: none;
  }
`;

export const Error = styled("div")`
  background-color: ${({ theme }) => theme.shades.error.l2};
  color: ${({ theme }) => theme.shades.error.d1};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled("div")`
  display: flex;
  justify-content: right;
  gap: 1rem;
`;
