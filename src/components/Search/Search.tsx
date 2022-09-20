import React, { useContext } from "react";
import { Container, StyledSearch } from "./Search.style";
import { Button } from "components/Button";
import { modalContext } from "contexts/ModalContext";

type Props = {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
};

export const Search = ({ setSearchTerm, searchTerm }: Props) => {
  const { setModal } = useContext(modalContext);
  return (
    <Container>
      <StyledSearch
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        value={searchTerm}
        placeholder="Search for Recipes"
        type="text"
      />
      <Button onClick={() => setModal("add")} buttonType="regular">
        {" "}
        + Add Recipe
      </Button>
    </Container>
  );
};
