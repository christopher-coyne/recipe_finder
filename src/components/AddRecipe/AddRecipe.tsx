import React, { useRef, useState, useContext } from "react";
import { StyledForm, Error, ButtonContainer } from "./AddRecipe.style";
import { Button } from "components/Button";
import { Recipe } from "types/recipe";
import { calcDate } from "utilities/dates";
import {
  foodOptions,
  difficultyOptions,
  cuisineOptions,
  Difficulty,
  Cuisine,
  FoodType,
} from "types/attributes";
import { selectButton } from "utilities/selectButton";

import { modalContext } from "contexts/ModalContext";
import { recipesContext } from "contexts/RecipesContext";
import { ButtonsOptions } from "./components/ButtonsOptions";

export const AddRecipe = () => {
  const { setModal } = useContext(modalContext);
  const { setRecipes, recipes } = useContext(recipesContext);
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
    const newDate = calcDate();
    const newRecipe: Recipe = {
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
    setRecipes([...recipes, newRecipe]);
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
      <label htmlFor="dishName">Dish Name:</label>
      <input type="text" ref={dishName} id="dishName"></input>
      <label htmlFor="ingredients">Ingredients:</label>
      <textarea ref={ingredients} id="ingredients" />
      <label htmlFor="instructions">Instructions:</label>
      <textarea ref={instructions} id="instructions" />
      <label htmlFor="username">Username:</label>
      <input type="text" ref={userName} id="username"></input>
      {error && <Error>Please fill out all fields before submitting</Error>}
      <ButtonContainer>
        <Button onClick={(e) => handleSubmit(e)} buttonType="regular">
          Submit
        </Button>
        <Button onClick={() => setModal("")} buttonType="cancel">
          Cancel
        </Button>
      </ButtonContainer>
    </StyledForm>
  );
};
