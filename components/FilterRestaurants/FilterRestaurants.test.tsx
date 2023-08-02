import { screen } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import FilterRestaurants from "./FilterRestaurants";

describe("FilterRestaurants", () => {
  test("Deberia estar el titulo Tus Favoritos", async () => {
    renderWithProviders(<FilterRestaurants />);

    expect(screen.queryByText(/Solo Locales abiertos/i)).not.toBeNull();

    expect(screen.queryByText(/Area de busqueda:/i)).not.toBeNull();
  });
});
