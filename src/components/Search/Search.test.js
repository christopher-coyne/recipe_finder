import { render } from "@testing-library/react";
import Search from "./Search";

describe("search", () => {
  it("renders without crashing", () => {
    render(<Search />);
  });
});
