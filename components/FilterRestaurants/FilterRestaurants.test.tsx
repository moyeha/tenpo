import { screen } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import FilterRestaurants from "./FilterRestaurants";

describe("FilterRestaurants", () => {
  test("Deberia estar el titulo Solo Locales abiertos", async () => {
    renderWithProviders(<FilterRestaurants />);

    expect(
      screen.queryAllByText(/Solo Locales abiertos/i).length
    ).toBeGreaterThan(0);
  });
});
