import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { FilterOptions } from "./FilterOptions";

import { ThemeProvider } from "styled-components";
import RecipesContext from "contexts/RecipesContext";
import ModalContext from "contexts/ModalContext";
import { theme } from "styles/theme";

// openFilter, addFilter, filters
const playground = (openFilter: boolean) => {
  return (
    <RecipesContext>
      <ModalContext>
        <ThemeProvider theme={theme}>
          <FilterOptions
            filters={["filter1", "filter2", "filter3"]}
            addFilter={() => mockCallback()}
            openFilter={openFilter}
          />
        </ThemeProvider>
      </ModalContext>
    </RecipesContext>
  );
};

const mockCallback = jest.fn();
describe("filter options test", () => {
  it("filters won't show up if openFilter is false", async () => {
    render(playground(false));

    expect(screen.queryByText("advanced")).toBeNull();
  });
  it("filters show up", async () => {
    render(playground(true));

    expect(screen.getByText("advanced"));
  });
  it("callback will be triggered", async () => {
    render(playground(true));

    expect(screen.getByText("advanced"));
  });
  it("filters will execute callback when clicked", async () => {
    const user = userEvent.setup();
    render(playground(true));

    const advanced = screen.getByText("advanced");
    const italian = screen.getByText("italian");
    const entree = screen.getByText("entree");

    await user.click(entree);
    await user.click(italian);
    await user.click(advanced);

    expect(mockCallback.mock.calls.length).toBe(3);
  });
});
