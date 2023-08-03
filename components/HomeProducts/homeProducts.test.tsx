import { screen } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import HomeProducts from "./homeProducts";

describe("HomeProducts", () => {
  test("Deberian estar los titulos del header", async () => {
    renderWithProviders(<HomeProducts />);

    expect(screen.queryByLabelText(/home-products/i)).not.toBeNull();
  });
});
