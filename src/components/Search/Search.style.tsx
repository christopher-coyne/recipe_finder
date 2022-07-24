import styled from "styled-components";
import { colors } from "../../colors";

export const Container = styled("div")`
  display: flex;
  justify-content: space-between;
`;

export const StyledSearch = styled("input")`
  border: 2px solid ${(props) => props.theme.colors.primary};
  padding: 0.5rem;
  flex-grow: 1;
  margin-right: 1rem;
  border-radius: 0.6rem;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;
