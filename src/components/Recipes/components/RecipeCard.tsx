import { useContext } from "react";

import { recipeContext } from "../../../contexts/RecipesContext";
import { BoldText, StyledRecipe, User, Content } from "./RecipeCard.style";
import { Recipe } from "../../../types";

type props = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: props) => {
  return (
    <StyledRecipe>
      <Content>
        <h2>{recipe.name}</h2>
        <p>
          <BoldText>Ingredients:</BoldText> {recipe.ingredients}
        </p>
        <p>{recipe.instructions}</p>
      </Content>
      <User>{recipe.user}</User>
    </StyledRecipe>
  );
};

export default RecipeCard;
