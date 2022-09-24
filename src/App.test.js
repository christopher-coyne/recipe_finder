import {
  getByTestId,
  waitFor,
  getByText,
  render,
} from "@testing-library/react";
import { screen } from "@testing-library/dom";
import App from "./App";
// import * as userEvent from "@testing-library/user-event";
import userEvent from "@testing-library/user-event";

describe("search", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("search term filters results", async () => {
    const user = userEvent.setup();
    render(<App />);

    const allMeatloafs = screen.getAllByText(/Meatloaf/);
    // console.log("all meatloafs : ", allMeatloafs);

    expect(screen.getByText(/Cookie/)).toBeInTheDocument();
    expect(screen.getAllByText(/Meatloaf/).length).toBeGreaterThan(0);

    const mainSearch = screen.getByPlaceholderText(/Search for Recipes/);
    await user.click(mainSearch);
    await user.keyboard("eat");

    expect(screen.queryByText(/Cookie/)).toBeNull();
    expect(screen.getAllByText(/Meatloaf/).length).toBeGreaterThan(0);
  });

  it("search term changes upon type", async () => {
    const user = userEvent.setup();
    render(<App />);
    const mainSearch = screen.getByPlaceholderText(/Search for Recipes/);
    await user.tripleClick(mainSearch);
    await user.keyboard("bar");

    expect(mainSearch).toHaveValue("bar");
  });

  it("filter buttons work correctly", async () => {
    const user = userEvent.setup();
    render(<App />);
    const filterButton = screen.getByRole("button", {
      name: /Filter/,
    });
    await user.click(filterButton);

    const entreeFilter = screen.getByRole("button", {
      name: /entree/,
    });
    await user.click(entreeFilter);

    expect(screen.getAllByText(/Meatloaf/).length).toBeGreaterThan(0);
    expect(screen.queryByText(/Cookie/)).toBeNull();

    await user.click(filterButton);
    const topEntreeFilter = screen.getByRole("button", {
      name: /entree/,
    });
    await user.click(topEntreeFilter);
    const testEntreeFilter = screen.queryByRole("button", {
      name: /entree/,
    });

    // screen.debug();
    expect(testEntreeFilter).toBeNull();
  });

  it("full recipe modal", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <App />
        <div id="portal" />
      </div>
    );

    let closeModalButton = screen.queryByRole("button", {
      name: /X/,
    });
    expect(closeModalButton).toBeNull();

    const cookieRecipe = screen.queryByText(/Cookie/);
    await user.click(cookieRecipe);

    closeModalButton = screen.queryByRole("button", {
      name: /X/,
    });
    await user.click(closeModalButton);

    expect(closeModalButton).not.toBeInTheDocument();

    let header = screen.queryByText(/Recipe Finder/);
    expect(header).toBeInTheDocument();
    user.click(header);
    user.click(header);
  });

  it("add recipe modal", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <App />
        <div id="portal" />
      </div>
    );

    let closeModalButton = screen.queryByRole("button", {
      name: /X/,
    });
    expect(closeModalButton).toBeNull();

    let addRecipeButton = screen.queryByRole("button", {
      name: "+ Add Recipe",
    });
    await user.click(addRecipeButton);

    // let header = screen.queryByText(/Recipe Finder/);
    // expect(header).toBeInTheDocument();
    closeModalButton = screen.queryByRole("button", {
      name: /X/,
    });
  });
});
