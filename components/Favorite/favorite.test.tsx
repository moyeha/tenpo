import { screen } from "@testing-library/react-native";
import React from "react";
import Favorite from "./favorite";
import { renderWithProviders } from "../../test-utils";

describe("Favorite", () => {
  test("Deberia estar el titulo favorite", async () => {
    renderWithProviders(
      <Favorite id="1" nombre="nombre-favorito" imagePath={null} />
    );

    expect(screen.queryByText(/nombre-favorito/i)).not.toBeNull();
  });
});
