import React from "react";
import { Container } from "./Filter.style";
import FilterOptions from "./components/FilterOptions/FilterOptions";

const Filter = () => {
  return (
    <Container>
      <h1>Filter</h1>
      <FilterOptions />
    </Container>
  );
};

export default Filter;
