import React, { useState } from "react";

export const setModalContext = React.createContext({} as any);
export const modalContext = React.createContext({} as any);

export const selectedRecipeContext = React.createContext({} as any);
export const setSelectedRecipeContext = React.createContext({} as any);

type Props = {
  children: JSX.Element;
};

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

export default ModalContext;
