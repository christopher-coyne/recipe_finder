import React from "react";
import { useContext } from "react";
import useGetRecipes from "../hooks/useGetRecipes";

type Props = {
  children: JSX.Element;
};

/* figure out what to do here */
export const recipeContext = React.createContext({} as any);
export const setRecipeContext = React.createContext({} as any);

const RecipesContext = ({ children }: Props) => {
  const [recipes, setRecipes] = useGetRecipes();
  return (
    <recipeContext.Provider value={recipes}>
      <setRecipeContext.Provider value={setRecipes}>
        {children}
      </setRecipeContext.Provider>
    </recipeContext.Provider>
  );
};

export default RecipesContext;
