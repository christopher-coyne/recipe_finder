import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import RecipesContext from "./contexts/RecipesContext";
import FiltersContext from "./contexts/FiltersContext";
import { useState } from "react";
import ReactDom from "react-dom";
import Modal from "./Layout/Modal";

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
  const [openRecipeModal, setOpenRecipeModal] = useState(true);
  const [openAddModal, setOpenAddModal] = useState(false);
  return (
    <RecipesContext>
      <FiltersContext>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Home />
          </div>
          <Modal open={openRecipeModal} toggle={setOpenRecipeModal}>
            openrecipemodal
          </Modal>

          <Modal open={openAddModal} toggle={setOpenAddModal}>
            addrecipemodal
          </Modal>
        </ThemeProvider>
      </FiltersContext>
    </RecipesContext>
  );
}

export default App;
