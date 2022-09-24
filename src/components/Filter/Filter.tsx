import { Container, OpenFilters } from "./Filter.style";
import { useState } from "react";
import { FilterOptions } from "./components/FilterOptions/FilterOptions";
import { CloseButton } from "../Button";

import { selectButton } from "utilities/selectButton";

type Props = {
  filters: string[];
  setFilters: React.Dispatch<React.SetStateAction<string[]>>;
};

export const Filter = ({ filters, setFilters }: Props) => {
  const [openFilter, setOpenFilter] = useState(false);

  const addFilter = (filter: string) => {
    selectButton(filters, filter, setFilters);
  };

  const removeFilter = (filter: string) => {
    setFilters((prevFilters: string[]) => {
      const newFilters = prevFilters.filter((f) => f !== filter);
      return newFilters;
    });
  };

  return (
    <Container>
      <OpenFilters onClick={() => setOpenFilter((prevState) => !prevState)}>
        Filter V
      </OpenFilters>
      {filters.map((filter) => {
        return (
          <CloseButton onClick={() => removeFilter(filter)} key={filter}>
            {filter} X
          </CloseButton>
        );
      })}
      <FilterOptions
        openFilter={openFilter}
        addFilter={addFilter}
        filters={filters}
      />
    </Container>
  );
};
