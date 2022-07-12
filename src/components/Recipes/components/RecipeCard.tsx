import { useContext } from "react";

import { recipeContext } from "../../../contexts/RecipesContext";
import { StyledRecipe } from "./RecipeCard.style";
import { Recipe } from "../../../types";

type props = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: props) => {
  return <StyledRecipe>{recipe.name}</StyledRecipe>;
};

export default RecipeCard;
