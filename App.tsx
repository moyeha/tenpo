import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import AnimatedStyleUpdateExample from "./Animate";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Black": require("./assets/fonts/Roboto-Bold.ttf"),
    "Gotham-Black": require("./assets/fonts/Gotham-Bold.otf"),
    "Gotham-Light": require("./assets/fonts/Gotham-Light.otf"),
  });

  return (
    <SafeAreaProvider>
      {/* <View style={styles.container}>
        <Text style={{ fontFamily: "Gotham-Black"}}>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}
      {/* <AnimatedStyleUpdateExample/> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
