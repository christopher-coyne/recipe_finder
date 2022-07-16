import { useContext } from "react";
import { Container } from "./Filter.style";
import { useState } from "react";
import FilterOptions from "./components/FilterOptions/FilterOptions";
import filterOptionTypes from "../../FilterOptionTypes";
import {
  filtersContext,
  setFiltersContext,
} from "../../contexts/FiltersContext";

const Filter = () => {
  const filters: string[] = useContext(filtersContext);
  const setFilters = useContext(setFiltersContext);
  const [openFilter, setOpenFilter] = useState(false);

  const addFilter = (filter: string) => {
    console.log("adding filter...");
    const filtersOfSameType = Object.keys(filterOptionTypes).filter((key) =>
      filterOptionTypes[key].includes(filter)
    )[0];

    const newSelectedFilters = [...filters];
    let changed = false;
    let ind = 0;
    for (const f of filters) {
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

    // setSelectedFilters(newSelectedFilters);
    setFilters(newSelectedFilters);
    /*
    setSelectedFilters((prevFilters: string[]) => {
      return [...prevFilters, filter];
    });
    */
  };

  const removeFilter = (filter: string) => {
    setFilters((prevFilters: string[]) => {
      const newFilters = prevFilters.filter((f) => f !== filter);
      return newFilters;
    });
  };

  console.log("filters : ", filters);
  console.log(" set filters : ", setFilters);

  return (
    <Container>
      <button onClick={() => setOpenFilter((prevState) => !prevState)}>
        Filter
      </button>
      {filters.map((filter) => {
        return <button onClick={() => removeFilter(filter)}>{filter}</button>;
      })}
      <FilterOptions openFilter={openFilter} addFilter={addFilter} />
    </Container>
  );
};

export default Filter;
