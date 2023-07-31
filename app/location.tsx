import { ScrollView, View } from "react-native";
import Header from "../components/Header/header";
import HomeProducts from "../components/HomeProducts/homeProducts";
import Navigation from "../components/Navigation/navigation";
import theme from "../theme";

export default function Location() {
  return (
    <View
      style={{
        backgroundColor: theme.colors.gray3,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Navigation />
          <Header />
          <HomeProducts />
        </View>
      </ScrollView>
    </View>
  );
}
