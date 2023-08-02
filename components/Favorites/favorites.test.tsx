import { screen } from "@testing-library/react-native";
import React from "react";
import Favorites from "./favorites";
import { renderWithProviders } from "../../test-utils";

describe("Favorites", () => {
  test("Deberia estar el titulo Tus Favoritos", async () => {
    renderWithProviders(<Favorites />);
    expect(screen.queryByText(/Tus Favoritos/i)).toMatchSnapshot();
  });
});
