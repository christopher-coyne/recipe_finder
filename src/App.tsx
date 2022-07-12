import React from "react";
import "./App.css";
import ThemeProvider from "styled-components";
import Home from "./screens/Home";
import RecipesContext from "./contexts/RecipesContext";

const theme = {
  purple: "abc",
};

function App() {
  return (
    <RecipesContext>
      <div className="App">
        <Home />
      </div>
    </RecipesContext>
  );
}

export default App;
