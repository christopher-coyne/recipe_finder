import React from "react";
import { Container } from "./Search.style";
import Button from "../Button/Button";
import Searchbar from "./Searchbar/Searchbar";

const Search = () => {
  return (
    <Container>
      <Searchbar />
      <Button input={"+ Add Recipe"} />
    </Container>
  );
};

export default Search;
