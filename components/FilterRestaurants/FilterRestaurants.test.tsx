import { screen } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import FilterRestaurants from "./FilterRestaurants";


jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str) => "Solo Locales abiertos",
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

describe("FilterRestaurants", () => {
  test("Deberia estar el titulo Solo Locales abiertos", async () => {
    renderWithProviders(<FilterRestaurants />);

    expect(screen.queryAllByText(/Solo Locales abiertos/i).length).toBeGreaterThan(0);

  });
});
