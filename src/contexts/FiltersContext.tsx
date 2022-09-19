import React, { useState } from "react";

type Props = {
  children: JSX.Element;
};

/* figure out what to do here */
export const filtersContext = React.createContext([] as string[]);
export const setFiltersContext = React.createContext(
  {} as React.Dispatch<React.SetStateAction<never[]>>
);

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
