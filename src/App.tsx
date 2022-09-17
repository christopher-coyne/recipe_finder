import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Home } from "./screens/Home";
import RecipesContext from "contexts/RecipesContext";
import FiltersContext from "contexts/FiltersContext";
import { useState, useContext } from "react";
import ReactDom from "react-dom";
import Modal from "Layout/Modal";
import ModalContext from "contexts/ModalContext";
import { FullRecipe } from "components/FullRecipe";
import { AddRecipe } from "components/AddRecipe";

import { modalContext, setModalContext } from "./contexts/ModalContext";
import { theme } from "./styles/theme";

function App() {
  console.log("app rerender");
  const currentModal = useContext(modalContext);
  const setCurrentModal = useContext(setModalContext);
  return (
    <RecipesContext>
      <ModalContext>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Home />
          </div>
          <Modal type="recipe">
            <FullRecipe />
          </Modal>

          <Modal type="add">
            <AddRecipe />
          </Modal>
        </ThemeProvider>
      </ModalContext>
    </RecipesContext>
  );
}

export default App;
