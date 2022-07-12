import { useContext, useEffect, useState } from "react";
const data = require("../recipes.json");

const useGetRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    setRecipes(data);
  }, []);
  return [recipes, setRecipes];
};

export default useGetRecipes;
