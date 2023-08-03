import { screen, waitFor } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import Restaurants from "./restaurants";

describe("Restaurants", () => {
  test("Deberian estar los titulos del header", async () => {
    renderWithProviders(<Restaurants />);

    await waitFor(() =>
      expect(screen.queryByText(/Restaurantes/i)).not.toBeNull()
    );
  });
});
