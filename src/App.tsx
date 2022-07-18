import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import RecipesContext from "./contexts/RecipesContext";
import FiltersContext from "./contexts/FiltersContext";
import { useState, useContext } from "react";
import ReactDom from "react-dom";
import Modal from "./Layout/Modal";
import ModalContext from "./contexts/ModalContext";
import FullRecipe from "./components/FullRecipe/FullRecipe";
import AddRecipe from "./components/AddRecipe/AddRecipe";

import { modalContext, setModalContext } from "./contexts/ModalContext";

const theme = {
  primary: "#613DC1",
  secondary: "#858AE3",
  font: {
    large: {
      size: "2.2rem",
    },
    medium: {
      size: "1.25rem",
    },
  },
};

function App() {
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
