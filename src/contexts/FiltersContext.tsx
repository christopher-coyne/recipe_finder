import React from "react";
import { useState } from "react";

type Props = {
  children: JSX.Element;
};

/* figure out what to do here */
export const filtersContext = React.createContext([] as any);
export const setFiltersContext = React.createContext({} as any);

const FiltersContext = ({ children }: Props) => {
  const [filters, setFilters] = useState([]);
  return (
    <filtersContext.Provider value={filters}>
      <setFiltersContext.Provider value={setFilters}>
        {children}
      </setFiltersContext.Provider>
    </filtersContext.Provider>
  );
};

export default FiltersContext;
