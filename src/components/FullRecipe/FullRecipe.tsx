import React from "react";
import { useContext } from "react";
import { StyledRecipe, Tag, BoldSpan, BottomText } from "./FullRecipe.style";
import { Recipe } from "../../types";

import { selectedRecipeContext } from "../../contexts/ModalContext";
import { setSelectedRecipeContext } from "../../contexts/ModalContext";

const FullRecipe = () => {
  const recipe: Recipe = useContext<Recipe>(selectedRecipeContext);
  if (!recipe) {
    return <></>;
  }
  return (
    <StyledRecipe>
      <h1>{recipe.name}</h1>
      <Tag>{recipe.cuisine}</Tag>
      <Tag>{recipe.difficulty}</Tag>
      <Tag>{recipe.type}</Tag>
      <p>
        <BoldSpan>Ingredients: </BoldSpan>
        {recipe.ingredients}
      </p>
      <p>
        <BoldSpan>Instructions: </BoldSpan>
        {recipe.instructions}
      </p>
      <BottomText>
        <h2>{recipe.user}</h2>
        <h2>{recipe.date}</h2>
      </BottomText>
    </StyledRecipe>
  );
};

export default FullRecipe;
