import React, { useState } from "react";

type Props = {
  children: JSX.Element;
};

export const filtersContext = React.createContext({
  setFilters: {} as React.Dispatch<React.SetStateAction<string[]>>,
  filters: [""],
});

const FiltersContext = ({ children }: Props) => {
  const [filters, setFilters] = useState<string[]>([]);
  return (
    <filtersContext.Provider value={{ filters, setFilters }}>
      {children}
    </filtersContext.Provider>
  );
};

export default FiltersContext;
