import { attributes } from "types/attributes";
import {
  Container,
  OptionContainer,
  TypeName,
  SelectFilter,
} from "./FilterOptions.style";

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
              <OptionContainer key={filter[0]}>
                <TypeName> {filter[0]}</TypeName>
                {filter[1].map((buttonType: string) => (
                  <SelectFilter
                    key={buttonType}
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
