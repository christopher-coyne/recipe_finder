import React from "react";
import { Container } from "./Filter.style";
import { useState } from "react";
import FilterOptions from "./components/FilterOptions/FilterOptions";
import filterOptionTypes from "../../FilterOptionTypes";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const addFilter = (filter: string) => {
    const filtersOfSameType = Object.keys(filterOptionTypes).filter((key) =>
      filterOptionTypes[key].includes(filter)
    )[0];

    const newSelectedFilters = [...selectedFilters];
    let changed = false;
    let ind = 0;
    for (const f of selectedFilters) {
      if (filterOptionTypes[filtersOfSameType].includes(f)) {
        newSelectedFilters[ind] = filter;
        changed = true;
        break;
      }
      ind += 1;
    }
    if (!changed) {
      newSelectedFilters.push(filter);
    }

    setSelectedFilters(newSelectedFilters);
    /*
    setSelectedFilters((prevFilters: string[]) => {
      return [...prevFilters, filter];
    });
    */
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
