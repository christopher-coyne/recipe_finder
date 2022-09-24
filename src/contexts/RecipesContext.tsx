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

const RecipesContext = ({ children }: Props) => {
  // const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipes, setRecipes] = useState<Recipe[]>(dataJson);
  return (
    <recipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </recipesContext.Provider>
  );
};

export default RecipesContext;
