import { screen } from "@testing-library/react-native";
import React from "react";
import AddAddressButton from "./AddAddressButton";
import { renderWithProviders } from "../../test-utils";

describe("AddAddressButton", () => {
  test("Deberia estar el titulo Children Text", async () => {
    renderWithProviders(<AddAddressButton>Children Text</AddAddressButton>);
    
    expect(screen.queryByText(/Children Text/i)).not.toBeNull();
  });
});
