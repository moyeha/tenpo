import { screen, waitFor } from "@testing-library/react-native";
import React from "react";
import Location from "../app/location";
import { renderWithProviders } from "../test-utils";

jest.mock("expo-location", () => ({
  requestForegroundPermissionsAsync: () =>
    jest.fn().mockResolvedValue({
      status: "granted",
    }),
}));

jest.mock("@gorhom/bottom-sheet");

describe("Location", () => {
  test("Deberia estar el titulo Agruegue Direccion de entrega", async () => {
    renderWithProviders(<Location />);

    await waitFor(() =>
      expect(
        screen.queryByText(/Agruegue Direccion de entrega/i)
      ).not.toBeNull()
    );
  });
});
