import { screen, waitFor } from "@testing-library/react-native";
import React from "react";
import AddAddress from "./AddAddress";
import { renderWithProviders } from "../../test-utils";

import "@testing-library/jest-dom";

describe("add address", () => {
  test("Deberia estar el titulo Children Text", async () => {
    renderWithProviders(<AddAddress>Children Text</AddAddress>);

    expect(screen.queryByText(/Children Text/i)).not.toBeNull();
  });
});
