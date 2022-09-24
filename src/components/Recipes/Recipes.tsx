import { useContext } from "react";
import { recipesContext } from "../../contexts/RecipesContext";
import { RecipeCard } from "./components/RecipeCard";
import { RecipesContainer } from "./Recipes.style";

type Props = {
  filters: string[];
  searchTerm: string;
};

export const Recipes = ({ filters, searchTerm }: Props) => {
  const { recipes } = useContext(recipesContext);

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

  // filter based on searchterm
  if (searchTerm) {
    filteredRecipes = filteredRecipes.filter((r) =>
      r.name.includes(searchTerm)
    );
  }

  // for simplicity i will assume each recipe has unique name
  return (
    <RecipesContainer>
      {filteredRecipes.map((r) => (
        <RecipeCard recipe={r} key={r.name} />
      ))}
    </RecipesContainer>
  );
};
