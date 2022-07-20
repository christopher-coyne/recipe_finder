import React from "react";
import { Container } from "./Search.style";
import Button from "../Button/Button";
import { StyledSearch } from "./Search.style";
import { setModalContext } from "../../contexts/ModalContext";
import { useContext } from "react";

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
};

const Search = ({ setSearchTerm, searchTerm }: Props) => {
  const setCurrentModal = useContext(setModalContext);
  return (
    <Container>
      <StyledSearch
        onChange={(e: any) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
      />
      <Button
        input={"+ Add Recipe"}
        onClick={() => setCurrentModal("add")}
        type="regular"
      />
    </Container>
  );
};

export default Search;
