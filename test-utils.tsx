import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react-native";
import type { RenderOptions } from "@testing-library/react-native";
import type { PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { setupStore } from "./store";
import type { AppStore, RootState } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

const initialMetrics = {
  frame: { height: 0, width: 0, x: 0, y: 0 },
  insets: { bottom: 0, left: 0, right: 0, top: 0 },
};

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  Element: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  const Wrapper = ({ children }: PropsWithChildren<{}>) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider initialMetrics={initialMetrics}>
            {children}
          </SafeAreaProvider>
        </ThemeProvider>
      </Provider>
    );
  };
  return { store, ...render(Element, { wrapper: Wrapper, ...renderOptions }) };
}
