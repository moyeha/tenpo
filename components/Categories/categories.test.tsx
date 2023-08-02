import { screen } from "@testing-library/react-native";
import React from "react";
import Categories from "./categories";
import { renderWithProviders } from "../../test-utils";

describe("Categories", () => {
  test("Deberia estar el titulo Categorias", async () => {
    renderWithProviders(<Categories />);
    expect(screen.queryByText(/Categorias/i)).toMatchSnapshot();
  });
});
