import React from "react";
import { useContext } from "react";
import { StyledRecipe, Tags, BoldSpan, BottomText } from "./FullRecipe.style";
import { Recipe } from "../../types";

import { selectedRecipeContext } from "../../contexts/ModalContext";
import { setSelectedRecipeContext } from "../../contexts/ModalContext";
import { setRecipeContext } from "../../contexts/RecipesContext";

import { capitalize } from "utilities";

export const FullRecipe = () => {
  const recipe: Recipe = useContext<Recipe>(selectedRecipeContext);
  if (!recipe) {
    return <></>;
  }
  return (
    <StyledRecipe>
      <h1>{capitalize(recipe.name)}</h1>
      <Tags>
        {recipe.cuisine && <li>{recipe.cuisine}</li>}
        {recipe.difficulty && <li>{recipe.difficulty}</li>}
        {recipe.type && <li>{recipe.type}</li>}
      </Tags>
      <p>
        <BoldSpan>Ingredients: </BoldSpan>
        {recipe.ingredients}
      </p>
      <p>
        <BoldSpan>Instructions: </BoldSpan>
        {recipe.instructions}
      </p>
      <BottomText>
        <h2>{capitalize(recipe.user)}</h2>
        <h2>{recipe.date}</h2>
      </BottomText>
    </StyledRecipe>
  );
};
