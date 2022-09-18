import { useState } from "react";
import {
  foodOptions,
  difficultyOptions,
  cuisineOptions,
  attributes,
  Difficulty,
  Cuisine,
  FoodType,
} from "types/index";
import {
  Container,
  OptionContainer,
  TypeName,
  SelectFilter,
} from "./FilterOptions.style";
import { Button } from "../../../Button/Button";
// import types from "../../../../FilterOptionTypes";

type Props = {
  openFilter: boolean;
  addFilter: (filter: string) => void;
  filters: string[];
};

export const FilterOptions = ({ openFilter, addFilter, filters }: Props) => {
  const allFilters = Object.entries(attributes);
  return (
    <>
      {openFilter && (
        <Container>
          {allFilters.map((filter) => {
            return (
              <OptionContainer>
                <TypeName> {filter[0]}</TypeName>
                {filter[1].map((buttonType: string) => (
                  <SelectFilter
                    onClick={() => addFilter(buttonType)}
                    buttonType={
                      filters.includes(buttonType) ? "clicked" : "unClicked"
                    }
                  >
                    {" "}
                    {buttonType}{" "}
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
