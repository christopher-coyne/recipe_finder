import { Button } from "components/Button";
import { capitalize } from "utilities/capitalize";
import { Container } from "./ButtonsOptions.style";

import { attributes } from "types/attributes";

type Props = {
  handleClick: (buttonType: string) => void;
  clickedButtons: string[];
};

export const ButtonsOptions = ({ clickedButtons, handleClick }: Props) => {
  const filters = Object.entries(attributes);
  return (
    <>
      {filters.map((filter) => {
        return (
          <Container key={filter[0]}>
            <label>{capitalize(filter[0])}:</label>
            {filter[1].map((buttonType: string) => {
              return (
                <Button
                  key={buttonType}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(buttonType);
                  }}
                  buttonType={
                    clickedButtons.includes(buttonType) ? "clicked" : "small"
                  }
                >
                  {buttonType}
                </Button>
              );
            })}
          </Container>
        );
      })}
    </>
  );
};
