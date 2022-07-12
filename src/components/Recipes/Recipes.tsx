import { useContext } from "react";
import { recipeContext } from "../../contexts/RecipesContext";
import RecipeCard from "./components/RecipeCard";
import { Recipe } from "../../types";
import { RecipesContainer } from "./Recipes.style";

const Recipes = () => {
  const recipes: Recipe[] = useContext(recipeContext);
  console.log("recipes from recipes : ", recipes);
  return (
    <RecipesContainer>
      {recipes.map((r) => (
        <RecipeCard recipe={r} />
      ))}
    </RecipesContainer>
  );
};

export default Recipes;
