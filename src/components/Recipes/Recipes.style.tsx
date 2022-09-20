import styled from "styled-components";
import { tablet } from "styles/media";

export const RecipesContainer = styled("div")`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);

  ${tablet(`
    grid-template-columns: 1fr;
  `)}
`;
