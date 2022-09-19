import { useContext, useEffect, useState } from "react";
import { Recipe } from "types/index";
import * as dataJson from "../recipes.json";

const useGetRecipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  useEffect(() => {
    /* eslint-disable */
    // @ts-ignore
    setRecipes(dataJson);
  }, []);
  return [recipes, setRecipes];
};

export default useGetRecipes;
