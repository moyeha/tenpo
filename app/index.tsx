import { ScrollView, View } from "react-native";
import Header from "../components/Header/header";
import HomeProducts from "../components/HomeProducts/homeProducts";
import Navigation from "../components/Navigation/navigation";
import theme from "../theme";

export default function Page() {
  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: theme.colors.gray3,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          {
            // flex: 1
          }
        }
      >
        <View
          style={
            {
              // flex: 1
            }
          }
        >
          <Navigation />
          <Header />
          <HomeProducts />
        </View>
      </ScrollView>
    </View>
  );
}
