import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import RecipesContext from "./contexts/RecipesContext";
import FiltersContext from "./contexts/FiltersContext";

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
  return (
    <RecipesContext>
      <FiltersContext>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Home />
          </div>
        </ThemeProvider>
      </FiltersContext>
    </RecipesContext>
  );
}

export default App;
