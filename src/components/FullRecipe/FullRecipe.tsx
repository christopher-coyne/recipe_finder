import React, { useContext } from "react";
import { StyledRecipe, Tags, BoldSpan, BottomText } from "./FullRecipe.style";
import { Recipe } from "../../types";

import { modalContext } from "contexts/ModalContext";

import { capitalize } from "utilities";

export const FullRecipe = () => {
  const { selectedRecipe } = useContext(modalContext);
  if (!selectedRecipe) {
    return <></>;
  }
  return (
    <StyledRecipe>
      <h1>{capitalize(selectedRecipe.name)}</h1>
      <Tags>
        {selectedRecipe.cuisine && <li>{selectedRecipe.cuisine}</li>}
        {selectedRecipe.difficulty && <li>{selectedRecipe.difficulty}</li>}
        {selectedRecipe.type && <li>{selectedRecipe.type}</li>}
      </Tags>
      <p>
        <BoldSpan>Ingredients: </BoldSpan>
        {selectedRecipe.ingredients}
      </p>
      <p>
        <BoldSpan>Instructions: </BoldSpan>
        {selectedRecipe.instructions}
      </p>
      <BottomText>
        <h2>{capitalize(selectedRecipe.user)}</h2>
        <h2>{selectedRecipe.date}</h2>
      </BottomText>
    </StyledRecipe>
  );
};
