import React from "react";
import { Container } from "./Filter.style";
import { useState } from "react";
import FilterOptions from "./components/FilterOptions/FilterOptions";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    setSelectedFilters((prevFilters: string[]) => {
      return [...prevFilters, filter];
    });
  };

  const removeFilter = (filter: string) => {
    setSelectedFilters((prevFilters: string[]) => {
      const newFilters = prevFilters.filter((f) => f !== filter);
      return newFilters;
    });
  };
  return (
    <Container>
      <button onClick={() => setOpenFilter((prevState) => !prevState)}>
        Filter
      </button>
      {selectedFilters.map((filter) => {
        return <button onClick={() => removeFilter(filter)}>{filter}</button>;
      })}
      <FilterOptions openFilter={openFilter} addFilter={addFilter} />
    </Container>
  );
};

export default Filter;
