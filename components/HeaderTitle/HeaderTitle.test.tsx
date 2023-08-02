import { screen } from "@testing-library/react-native";
import React from "react";
import { renderWithProviders } from "../../test-utils";
import HeaderTitle from "./HeaderTitle";

import { useTranslation } from 'react-i18next';

jest.mock('react-i18next', () => ({
  useTranslation: jest.fn(),
}));

const mockedLanguages = {
  "header-title1": "Tenpo",
  "header-title2": "Eats",
  "header-title3": "DELIVER APP",
};

// jest.mock("react-i18next", () => ({
//   // this mock makes sure any components using the translate hook can use it without a warning being shown
//   useTranslation: () => {
//     return {
//       t: (str: string) => jest.fn().,
//       i18n: {
//         changeLanguage: () => new Promise(() => {}),
//       },
//     };
//   },
//   initReactI18next: {
//     type: "3rdParty",
//     init: () => {},
//   },
// }));

describe("HeaderTitle", () => {
  test("Deberian estar los titulos del header", async () => {

    const useTranslationSpy = useTranslation;
    const tSpy = jest.fn((str) => str);

    useTranslationSpy.mockReturnValue({
      t: tSpy,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    });

    renderWithProviders(<HeaderTitle />);

    expect(tSpy).toBeCalledWith("header-title1")

    // expect(screen.queryByText(/Tenpo/i)).not.toBeNull();
    // expect(screen.queryByText(/Eats/i)).not.toBeNull();
    // expect(screen.queryByText(/DELIVER APP/i)).not.toBeNull();
  });
});
