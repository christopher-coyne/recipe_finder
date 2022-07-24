import { useState } from "react";
import {
  Container,
  OptionContainer,
  TypeName,
  SelectFilter,
} from "./FilterOptions.style";
import Button from "../../../Button/Button";
import types from "../../../../FilterOptionTypes";

type Props = {
  openFilter: boolean;
  addFilter: (filter: string) => void;
  filters: string[];
};

const FilterOptions = ({ openFilter, addFilter, filters }: Props) => {
  return (
    <>
      {openFilter && (
        <Container>
          {Object.keys(types).map((filterType) => {
            return (
              <OptionContainer>
                <TypeName> {filterType}</TypeName>
                {types[filterType].map((type: string) => (
                  <SelectFilter
                    onClick={() => addFilter(type)}
                    buttonType={
                      filters.includes(type) ? "clicked" : "unClicked"
                    }
                  >
                    {" "}
                    {type}{" "}
                  </SelectFilter>
                ))}
              </OptionContainer>
            );
          })}
        </Container>
      )}
    </>
  );
};

export default FilterOptions;

/* {types.cuisine.map(type => <TypeOption >{type}<TypeOption />)} */
