import { ScrollView, View } from "react-native";
import Header from "../components/Header/header";
import HomeProducts from "../components/HomeProducts/homeProducts";
import Navigation from "../components/Navigation/navigation";
import theme from "../theme";

export default function Page() {
  return (
    <View
      style={{
        backgroundColor: theme.colors.gray3,
      }}
      aria-label="index-page"
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
