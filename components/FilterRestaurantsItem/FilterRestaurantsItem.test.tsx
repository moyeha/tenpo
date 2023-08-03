import { screen } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import FilterRestaurantsItem from "./FilterRestaurantsItem";
import { Restaurant } from "../../store/restaurantes/slice";

describe("FilterRestaurantsItem", () => {
  test("Deberia estar el titulo Tus Favoritos", async () => {
    const item: Restaurant = {
      id: "1",
      nombre: "Mcdonald",
      delay: "3m",
      rating: 0,
    };

    renderWithProviders(<FilterRestaurantsItem item={item} />);

    expect(screen.queryByText(/Mcdonald/i)).not.toBeNull();
  });
});
