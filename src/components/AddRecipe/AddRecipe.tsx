import React, { useRef, useState, useContext } from "react";
import { StyledForm, StyledTextArea } from "./AddRecipe.style";
import Button from "../Button/Button";
import { Recipe } from "../../types";
import types from "../../FilterOptionTypes";

import {
  selectedRecipeContext,
  setSelectedRecipeContext,
} from "../../contexts/ModalContext";
import { setModalContext } from "../../contexts/ModalContext";
import { setRecipeContext } from "../../contexts/RecipesContext";

const AddRecipe = () => {
  const setModal = useContext(setModalContext);
  const setRecipes = useContext(setRecipeContext);
  /* refs for text input */
  const ingredients = useRef<HTMLTextAreaElement>(null);
  const userName = useRef<HTMLInputElement>(null);
  const instructions = useRef<HTMLTextAreaElement>(null);
  const dishName = useRef<HTMLInputElement>(null);

  const [difficulty, setDifficulty] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [type, setType] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (
      !userName.current ||
      !instructions.current ||
      !ingredients.current ||
      !dishName.current
    ) {
      return;
    }

    // if all fields are filled out, submit the
    if (
      userName.current.value &&
      instructions.current.value &&
      ingredients.current.value &&
      dishName.current.value
    ) {
      console.log(userName.current.value);
      const newRecipe = {
        name: dishName.current.value,
        ingredients: ingredients.current.value,
        instructions: instructions.current.value,
        difficulty: "beginner",
        cuisine: "american",
        type: "breakfast",
        user: userName.current.value,
        date: "sample date",
      };
      userName.current.value = "";
      setRecipes((prev: Recipe[]) => {
        console.log("prev : ", prev);
        console.log("to add new recipe : ", newRecipe);
        return [...prev, newRecipe];
      });
      setModal("");
    } else {
      setError(true);
    }

    // close modal and reset recipes
  };
  return (
    <StyledForm>
      <h1>Submit a New Recipe</h1>
      {error && <h2>'Please fill out all fields before submitting'</h2>}
      <label>Cuisine:</label>
      {types.cuisine.map((cuisine: string) => (
        <Button
          input={cuisine}
          onClick={() => console.log("hello")}
          type={"small"}
        />
      ))}
      <label>Difficulty:</label>
      <label>Food Type:</label>
      <label>Dish Name:</label>
      <input type="text" ref={dishName}></input>
      <label>Ingredients:</label>
      <StyledTextArea ref={ingredients} />
      <label>Instructions:</label>
      <StyledTextArea ref={instructions} />
      <label>Username:</label>
      <input type="text" ref={userName}></input>
      <Button input="submit" onClick={(e) => handleSubmit(e)} type="regular" />
      <Button input="cancel" onClick={(e) => handleSubmit(e)} type="cancel" />
    </StyledForm>
  );
};

export default AddRecipe;
