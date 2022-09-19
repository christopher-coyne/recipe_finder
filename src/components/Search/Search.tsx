import React from "react";
import { Container } from "./Search.style";
import { Button } from "components/Button";
import { StyledSearch } from "./Search.style";
import { setModalContext } from "contexts/ModalContext";
import { useContext } from "react";

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
};

export const Search = ({ setSearchTerm, searchTerm }: Props) => {
  const setCurrentModal = useContext(setModalContext);
  return (
    <Container>
      <StyledSearch
        onChange={(e: any) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        placeholder="Search for Recipes"
        type="text"
      />
      <Button onClick={() => setCurrentModal("add")} buttonType="regular">
        {" "}
        + Add Recipe
      </Button>
    </Container>
  );
};
