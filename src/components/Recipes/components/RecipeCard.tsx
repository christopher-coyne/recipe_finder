import { useContext } from "react";

import { recipeContext } from "../../../contexts/RecipesContext";
import { BoldText, StyledRecipe, User, Content } from "./RecipeCard.style";
import { capitalize } from "../../../utilities/capitalize";
import { Recipe } from "../../../types";
import {
  setSelectedRecipeContext,
  setModalContext,
} from "../../../contexts/ModalContext";

type props = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: props) => {
  const setModal = useContext(setModalContext);
  const setSelectedRecipe = useContext(setSelectedRecipeContext);
  const handleModal = () => {
    setModal("recipe");
    setSelectedRecipe(recipe);
  };
  return (
    <StyledRecipe onClick={() => handleModal()}>
      <Content>
        <h2>{capitalize(recipe.name)}</h2>
        <p>
          <BoldText>Ingredients:</BoldText>{" "}
          {recipe.ingredients.split(" ").slice(0, 20).join(" ")}...
        </p>
      </Content>
      <User>{capitalize(recipe.user)}</User>
    </StyledRecipe>
  );
};

export default RecipeCard;
