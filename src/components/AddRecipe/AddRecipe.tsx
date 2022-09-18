import React, { useRef, useState, useContext } from "react";
import { StyledForm, Error } from "./AddRecipe.style";
import { Button } from "components/Button";
import { Recipe } from "../../types";
import { calcDate } from "../../utilities/dates";
import {
  foodOptions,
  difficultyOptions,
  cuisineOptions,
  Difficulty,
  Cuisine,
  FoodType,
} from "types/index";
import { selectButton } from "utilities/selectButton";

import { setModalContext } from "../../contexts/ModalContext";
import { setRecipeContext } from "../../contexts/RecipesContext";
import { ButtonsOptions } from "./components/ButtonsOptions";

export const AddRecipe = () => {
  const setModal = useContext(setModalContext);
  const setRecipes = useContext(setRecipeContext);
  /* refs for text input */
  const ingredients = useRef<HTMLTextAreaElement>(null);
  const userName = useRef<HTMLInputElement>(null);
  const instructions = useRef<HTMLTextAreaElement>(null);
  const dishName = useRef<HTMLInputElement>(null);

  const [clickedButtons, setClickedButtons] = useState<string[]>([]);

  const [error, setError] = useState(false);

  const handleClick = (buttonType: Cuisine | Difficulty | FoodType) => {
    selectButton(clickedButtons, buttonType, setClickedButtons);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log("user name : ");

    // appease typescript in case it is null
    if (
      !userName.current ||
      !instructions.current ||
      !ingredients.current ||
      !dishName.current
    ) {
      return;
    }

    if (
      !userName.current.value ||
      !instructions.current.value ||
      !ingredients.current.value ||
      !dishName.current.value
    ) {
      setError(true);
      return;
    }

    const newCuisine = clickedButtons.filter((button) =>
      cuisineOptions.includes(button)
    );
    const newFood = clickedButtons.filter((button) =>
      foodOptions.includes(button)
    );
    const newDifficulty = clickedButtons.filter((button) =>
      difficultyOptions.includes(button)
    );
    console.log(userName.current.value);
    const newDate = calcDate();
    const newRecipe = {
      name: dishName.current.value,
      ingredients: ingredients.current.value,
      instructions: instructions.current.value,
      difficulty: newDifficulty[0],
      cuisine: newCuisine[0],
      type: newFood[0],
      user: userName.current.value,
      date: newDate.toString(),
    };
    userName.current.value = "";
    setRecipes((prev: Recipe[]) => {
      console.log("prev : ", prev);
      console.log("to add new recipe : ", newRecipe);
      return [...prev, newRecipe];
    });
    setModal("");

    // close modal and reset recipes
  };
  return (
    <StyledForm>
      <h1>Submit a New Recipe</h1>
      <ButtonsOptions
        handleClick={handleClick}
        clickedButtons={clickedButtons}
      />
      <label>Dish Name:</label>
      <input type="text" ref={dishName}></input>
      <label>Ingredients:</label>
      <textarea ref={ingredients} />
      <label>Instructions:</label>
      <textarea ref={instructions} />
      <label>Username:</label>
      <input type="text" ref={userName}></input>
      {error && <Error>Please fill out all fields before submitting</Error>}
      <Button input="submit" onClick={(e) => handleSubmit(e)} type="regular" />
      <Button input="cancel" onClick={(e) => handleSubmit(e)} type="cancel" />
    </StyledForm>
  );
};
