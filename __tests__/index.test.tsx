import { screen } from "@testing-library/react-native";
import React from "react";
import App from "../app/index";
import { renderWithProviders } from "../test-utils";

describe("Index", () => {
  test("Deberia estar el titulo Tenpo", async () => {
    renderWithProviders(<App />);

    expect(screen.queryByLabelText(/index-page/i)).toMatchSnapshot();
  });
});
