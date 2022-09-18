import React from "react";
// import filterOptions from "FilterOptionTypes";
import { Button } from "components/Button";
import { capitalize } from "utilities/capitalize";
import { Container } from "./ButtonsOptions.style";

import {
  foodOptions,
  difficultyOptions,
  cuisineOptions,
  attributes,
} from "types/index";

type Props = {
  handleClick: (buttonType: string) => void;
  clickedButtons: string[];
};

export const ButtonsOptions = ({ clickedButtons, handleClick }: Props) => {
  // const filters = Object.keys(filterOptions);

  // console.log("filters ", filters);
  // const testFilters = ['cuisine', 'food', '']
  const filters = Object.entries(attributes);
  return (
    <>
      {filters.map((filter) => {
        return (
          <Container>
            <label>{capitalize(filter[0])}:</label>
            {filter[1].map((buttonType: string) => {
              return (
                <Button
                  input={buttonType}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(buttonType);
                  }}
                  type={
                    clickedButtons.includes(buttonType) ? "clicked" : "small"
                  }
                />
              );
            })}
          </Container>
        );
      })}
    </>
  );
};

/*
<>
      {filters.map((filter) => {
        return (
          <Container>
            <label>{capitalize(filter)}:</label>
            {filterOptions[filter].map((buttonType: string) => {
              return (
                <Button
                  input={buttonType}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(buttonType);
                  }}
                  type={
                    clickedButtons.includes(buttonType) ? "clicked" : "small"
                  }
                />
              );
            })}
          </Container>
        );
      })}
    </>
    */
