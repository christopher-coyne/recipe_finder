import React from "react";
import { StyledNavbar } from "./Navbar.style";

const Navbar = () => {
  return (
    <StyledNavbar>
      <h3>RecipeFinder</h3>
      <a
        href="https://github.com/christopher-coyne/recipe_finder"
        rel="noreferrer"
        target="_blank"
      >
        Github
      </a>
    </StyledNavbar>
  );
};

export default Navbar;
