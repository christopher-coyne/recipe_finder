import { useState } from "react";
import {
  Container,
  OptionContainer,
  TypeOption,
  TypeName,
} from "./FilterOptions.style";
import types from "../../../../FilterOptionTypes";

type Props = {
  openFilter: boolean;
  addFilter: (filter: string) => void;
};

const FilterOptions = ({ openFilter, addFilter }: Props) => {
  return (
    <>
      {openFilter && (
        <Container>
          {Object.keys(types).map((filterType) => {
            return (
              <OptionContainer>
                <TypeName> {filterType}</TypeName>
                {types[filterType].map((type: string) => (
                  <TypeOption onClick={() => addFilter(type)}>
                    {type}
                  </TypeOption>
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
