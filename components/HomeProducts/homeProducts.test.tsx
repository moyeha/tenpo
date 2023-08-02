import { screen } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import HomeProducts from "./homeProducts";

describe("HomeProducts", () => {
  test("Deberian estar los titulos del header", async () => {
    renderWithProviders(<HomeProducts />);

    expect(screen.queryByText(/Agregar Direccion de entrega/i)).not.toBeNull();
  });
});
