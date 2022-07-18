import React from "react";
import { Container } from "./Search.style";
import Button from "../Button/Button";
import Searchbar from "./Searchbar/Searchbar";
import { setModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";

const Search = () => {
  const setCurrentModal = useContext(setModalContext);
  return (
    <Container>
      <Searchbar />
      <Button input={"+ Add Recipe"} onClick={() => setCurrentModal("add")} />
    </Container>
  );
};

export default Search;
