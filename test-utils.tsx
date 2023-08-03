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

const locales = {
  "restaurants-title": "Restaurantes",
  "categories-title": "Categorias",
  "favorites-title": "Tus Favoritos",
  "add-address-title": "Agregar información de entrega",
  "add-address-subtitle": "Depto, Oficina, Piso, Block",
  "add-address-try-again": "Intentar de nuevo",
  "add-address-adding": "Agregando",
  "add-address": "Agregar direccion",
  "filter-restaurants-title1": "Solo Locales abiertos",
  "filter-restaurants-title2": "Area de busqueda:",
  "filter-restaurants-title3": "1KM",
  "header-title1": "Tenpo",
  "header-title2": "Eats",
  "header-title3": "DELIVER APP",
  "home-products-add-address": "Agregar Direccion de entrega",
};

type Keys = keyof typeof locales;

jest.mock("i18next");

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => locales?.[str],
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
  initReactI18next: {
    type: "3rdParty",
    init: () => jest.fn(),
  },
}));

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
