import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import { ThemeProvider } from "styled-components";
import theme from "../theme";

import "../i18next";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Bold.ttf"),
    "Gotham-Black": require("../assets/fonts/Gotham-Bold.otf"),
    "Gotham-Light": require("../assets/fonts/Gotham-Light.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Slot />
      </Provider>
    </ThemeProvider>
  );
}
