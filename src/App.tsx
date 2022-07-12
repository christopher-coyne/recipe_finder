import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Home from "./screens/Home";
import RecipesContext from "./contexts/RecipesContext";

const theme = {
  primary: "#613DC1",
};

function App() {
  return (
    <RecipesContext>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Home />
        </div>
      </ThemeProvider>
    </RecipesContext>
  );
}

export default App;
