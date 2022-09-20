import React, { useState } from "react";
import { Recipe } from "types/recipe";

export const modalContext = React.createContext({
  setModal: {} as React.Dispatch<React.SetStateAction<string>>,
  modal: "",
  selectedRecipe: {} as Recipe,
  setSelectedRecipe: null! as React.Dispatch<React.SetStateAction<Recipe>>,
});

/*
export const setModalContext = React.createContext(null! as React.Dispatch<React.SetStateAction<string>>);
export const modalContext = React.createContext("");

export const selectedRecipeContext = React.createContext({} as any);
export const setSelectedRecipeContext = React.createContext({} as any);
*/

type Props = {
  children: JSX.Element;
};

const ModalContext = ({ children }: Props) => {
  const [modal, setModal] = useState<string>("");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>({} as Recipe);
  return (
    <modalContext.Provider
      value={{
        modal,
        setModal,
        selectedRecipe,
        setSelectedRecipe,
      }}
    >
      {children}
    </modalContext.Provider>
  );
};

/*
const ModalContext = ({ children }: Props) => {
  const [modal, setModal] = useState<string>("");
  const [selectedRecipe, setSelectedRecipe] = useState({} as any);
  return (
    <setModalContext.Provider value={setModal}>
      <modalContext.Provider value={modal}>
        <selectedRecipeContext.Provider value={selectedRecipe}>
          <setSelectedRecipeContext.Provider value={setSelectedRecipe}>
            {children}
          </setSelectedRecipeContext.Provider>
        </selectedRecipeContext.Provider>
      </modalContext.Provider>
    </setModalContext.Provider>
  );
};
*/

export default ModalContext;
