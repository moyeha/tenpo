import { screen } from "@testing-library/react-native";
import React from "react";
import Restaurants from "../app/restaurants";
import { renderWithProviders } from "../test-utils";

describe("Restaurants", () => {
  test("Deberia estar el titulo Tu ubicacion cercana", async () => {
    renderWithProviders(<Restaurants />);

    expect(screen.queryByText(/Tu ubicacion cercana/i)).not.toBeNull();
  });
});
