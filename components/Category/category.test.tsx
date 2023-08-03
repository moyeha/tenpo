import { screen } from "@testing-library/react-native";
import React from "react";
import Category from "./category";
import { renderWithProviders } from "../../test-utils";

describe("Category", () => {
  test("Deberia estar el titulo Categorias", async () => {
    renderWithProviders(<Category id="1" nombre="nombre-categoria" imagePath={null} />);
    expect(screen.queryByText(/Categorias/i)).toMatchSnapshot();
  });
});
