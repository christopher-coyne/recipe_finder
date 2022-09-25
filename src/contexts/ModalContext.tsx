import React, { useState } from "react";
import { Recipe } from "types/recipe";

export const modalContext = React.createContext({
  setModal: {} as React.Dispatch<React.SetStateAction<string>>,
  modal: "",
  selectedRecipe: {} as Recipe,
  setSelectedRecipe: null! as React.Dispatch<React.SetStateAction<Recipe>>,
});

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

export default ModalContext;
