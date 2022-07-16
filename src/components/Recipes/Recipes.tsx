import { useContext } from "react";
import { recipeContext } from "../../contexts/RecipesContext";
import RecipeCard from "./components/RecipeCard";
import { Recipe } from "../../types";
import { filtersContext } from "../../contexts/FiltersContext";
import { RecipesContainer } from "./Recipes.style";

const Recipes = () => {
  const recipes: Recipe[] = useContext(recipeContext);
  const selectedFilters = useContext(filtersContext);
  console.log("recipes from recipes : ", recipes);

  const filteredRecipes = selectedFilters.length
    ? recipes.filter((r) => {
        for (const f of selectedFilters) {
          if (r.cuisine !== f && r.type !== f && r.difficulty !== f) {
            return false;
          }
        }
        return true;
      })
    : recipes;
  return (
    <RecipesContainer>
      {filteredRecipes.map((r) => (
        <RecipeCard recipe={r} />
      ))}
    </RecipesContainer>
  );
};

export default Recipes;
