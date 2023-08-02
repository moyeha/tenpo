import { screen, fireEvent } from "@testing-library/react-native";
import React from "react";
import FilterDirectionsItem from "./FilterDirectionsItem";
import { renderWithProviders } from "../../test-utils";

describe("FilterDirectionsItem", () => {
  test("Deberia estar el titulo Children Text", async () => {
    renderWithProviders(
      <FilterDirectionsItem title="Children Text" onPress={jest.fn()} />
    );

    expect(screen.queryByText(/Children Text/i)).not.toBeNull();
  });

  test("Deberia llamar a una funcion cuando se hace click", async () => {
    const onPressMock = jest.fn();

    renderWithProviders(
      <FilterDirectionsItem title="Children Text" onPress={onPressMock} />
    );

    fireEvent.press(screen.queryByLabelText("filter-directions-item"));

    expect(onPressMock).toBeCalled();
  });
});
