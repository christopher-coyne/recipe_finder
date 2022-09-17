import React, { useRef, useState, useContext } from "react";
import { StyledForm, Error } from "./AddRecipe.style";
import { Button } from "components/Button";
import { Recipe } from "../../types";
import types from "../../FilterOptionTypes";
import { calcDate } from "../../utilities/dates";

import {
  selectedRecipeContext,
  setSelectedRecipeContext,
} from "../../contexts/ModalContext";
import { setModalContext } from "../../contexts/ModalContext";
import { setRecipeContext } from "../../contexts/RecipesContext";
import filterTypes from "../../FilterOptionTypes";
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

  const [difficulty, setDifficulty] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [type, setType] = useState("");

  const [error, setError] = useState(false);

  const handleClick = (buttonType: string) => {
    const filtersOfSameType = Object.keys(filterTypes).filter((key) =>
      filterTypes[key].includes(buttonType)
    )[0];

    const newSelectedFilters: string[] = [...clickedButtons];
    let changed = false;
    let ind = 0;
    for (const f of clickedButtons) {
      if (filterTypes[filtersOfSameType].includes(f)) {
        newSelectedFilters[ind] = buttonType;
        changed = true;
        break;
      }
      ind += 1;
    }
    if (!changed) {
      newSelectedFilters.push(buttonType);
    }

    console.log("new selected buttons : ", newSelectedFilters);

    // setSelectedFilters(newSelectedFilters);
    setClickedButtons(newSelectedFilters);
  };

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
      dishName.current.value &&
      clickedButtons.length === 3
    ) {
      const newCuisine = clickedButtons.filter((button) =>
        types.cuisine.includes(button)
      );
      const newFood = clickedButtons.filter((button) =>
        types.food.includes(button)
      );
      const newDifficulty = clickedButtons.filter((button) =>
        types.difficulty.includes(button)
      );
      console.log(userName.current.value);
      const newDate = calcDate();
      const newRecipe = {
        name: dishName.current.value,
        ingredients: ingredients.current.value,
        instructions: instructions.current.value,
        difficulty: newDifficulty,
        cuisine: newCuisine,
        type: newFood,
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
    } else {
      setError(true);
    }

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
