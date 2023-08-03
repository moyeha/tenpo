import React from "react";
import { screen } from "@testing-library/react-native";
import { renderWithProviders } from "../../test-utils";
import HeaderTitle from "./HeaderTitle";

describe("HeaderTitle", () => {
  test("Deberian estar los titulos del header", async () => {
    renderWithProviders(<HeaderTitle />);

    expect(screen.queryByText(/Tenpo/i)).not.toBeNull();
    expect(screen.queryByText(/Eats/i)).not.toBeNull();
    expect(screen.queryByText(/DELIVER APP/i)).not.toBeNull();
  });
});
