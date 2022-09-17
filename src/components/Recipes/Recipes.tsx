import { useContext } from "react";
import { recipeContext } from "../../contexts/RecipesContext";
import { RecipeCard } from "./components/RecipeCard";
import { Recipe } from "../../types";
import { filtersContext } from "../../contexts/FiltersContext";
import { RecipesContainer } from "./Recipes.style";

type Props = {
  filters: string[];
  searchTerm: string;
};

export const Recipes = ({ filters, searchTerm }: Props) => {
  const recipes: Recipe[] = useContext(recipeContext);
  console.log("recipes from recipes : ", recipes);

  /* filter based on filters */
  let filteredRecipes = filters.length
    ? recipes.filter((r) => {
        for (const f of filters) {
          if (r.cuisine !== f && r.type !== f && r.difficulty !== f) {
            return false;
          }
        }
        return true;
      })
    : recipes;

  /* filter based on searchterm */
  if (searchTerm) {
    filteredRecipes = filteredRecipes.filter((r) =>
      r.name.includes(searchTerm)
    );
  }
  return (
    <RecipesContainer>
      {filteredRecipes.map((r) => (
        <RecipeCard recipe={r} />
      ))}
    </RecipesContainer>
  );
};
