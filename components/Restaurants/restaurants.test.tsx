import { screen, waitFor } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import Restaurants from "./restaurants";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => "Restaurantes",
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

describe("Restaurants", () => {
  test("Deberian estar los titulos del header", async () => {
    renderWithProviders(<Restaurants />);

    await waitFor(() =>
      expect(screen.queryByText(/Restaurantes/i)).not.toBeNull()
    );
  });
});
