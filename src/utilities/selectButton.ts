import {
  foodOptions,
  difficultyOptions,
  cuisineOptions,
} from "types/attributes";
import React from "react";
export const selectButton = (
  buttons: string[],
  button: string,
  setButtons: React.Dispatch<React.SetStateAction<string[]>>
) => {
  console.log("adding filter...");
  const filtersOfSameType = cuisineOptions.includes(button)
    ? cuisineOptions
    : foodOptions.includes(button)
    ? foodOptions
    : difficultyOptions;

  // let newSelectedFilters: string[] = [...clickedButtons];
  let changed = false;

  const newSelectedFilters = buttons.map((f) => {
    if (filtersOfSameType.includes(f)) {
      changed = true;
      return button;
    }
    return f;
  });
  if (!changed) {
    newSelectedFilters.push(button);
  }

  console.log("new selected buttons : ", newSelectedFilters);

  setButtons(newSelectedFilters);
};
