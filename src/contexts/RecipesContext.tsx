import React, { useState } from "react";
import { Recipe } from "types/recipe";
import dataJson from "../recipes.json";

type Props = {
  children: JSX.Element;
};

export const recipesContext = React.createContext({
  setRecipes: {} as React.Dispatch<React.SetStateAction<Recipe[]>>,
  recipes: dataJson as Recipe[],
});

/* figure out what to do here */
// export const recipeContext = React.createContext({} as any);
// export const setRecipeContext = React.createContext({} as any);

const RecipesContext = ({ children }: Props) => {
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  console.log("importing dataJSON: ", dataJson);
  const [recipes, setRecipes] = useState<Recipe[]>(dataJson);
  return (
    <recipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </recipesContext.Provider>
  );
};

export default RecipesContext;
