import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { ButtonsOptions } from "./ButtonsOptions";

import { ThemeProvider } from "styled-components";
import RecipesContext from "contexts/RecipesContext";
import ModalContext from "contexts/ModalContext";
import { theme } from "styles/theme";

const playground = (
  <RecipesContext>
    <ModalContext>
      <ThemeProvider theme={theme}>
        <ButtonsOptions
          clickedButtons={["advanced"]}
          handleClick={() => mockCallback()}
        />
      </ThemeProvider>
    </ModalContext>
  </RecipesContext>
);

const mockCallback = jest.fn();
describe("buttons options test", () => {
  it("buttons will execute callback when clicked", async () => {
    const user = userEvent.setup();
    render(playground);

    const advanced = screen.getByText("advanced");
    const italian = screen.getByText("italian");
    const entree = screen.getByText("entree");

    await user.click(entree);
    await user.click(italian);
    await user.click(advanced);

    expect(mockCallback.mock.calls.length).toBe(3);
  });
});
