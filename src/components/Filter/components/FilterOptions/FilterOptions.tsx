import { useState } from "react";
import {
  Container,
  OptionContainer,
  TypeOption,
  TypeName,
} from "./FilterOptions.style";
import types from "../../../../FilterOptionTypes";

const foodTypeNames = Object.keys(types);

const FilterOptions = () => {
  return (
    <Container>
      {foodTypeNames.map((foodType) => {
        return (
          <OptionContainer>
            <TypeName> {foodType}</TypeName>
            {types.cuisine.map((type) => (
              <TypeOption>{type}</TypeOption>
            ))}
          </OptionContainer>
        );
      })}
    </Container>
  );
};

export default FilterOptions;

/* {types.cuisine.map(type => <TypeOption >{type}<TypeOption />)} */
