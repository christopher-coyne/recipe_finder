import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const StyledSearch = styled("input")`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 0.5rem;
  flex-grow: 1;
  margin-right: 1rem;
  border-radius: 0.6rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.shades.primary.l2};
  }
`;
