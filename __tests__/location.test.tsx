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

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => "Add Address",
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => {},
  },
}));

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
