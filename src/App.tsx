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
  colors: {
    primary: "#613DC1",
    secondary: "#858AE3",
  },
  fontSizes: {
    large: "2.2rem",
    medium: "1.25rem",
  },
  fontWeights: {
    regular: 400,
  },
};

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
