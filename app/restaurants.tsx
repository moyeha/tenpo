import Constants from "expo-constants";
import { View } from "react-native";
import styled from "styled-components";
import FilterRestaurants from "../components/FilterRestaurants/FilterRestaurants";
import RestaurantsHeader from "../components/RestaurantsHeader/RestaurantsHeader";

export default function Restaurants() {
  return (
    <RestaurantsContainer>
      <RestaurantsHeader />
      <FilterRestaurants />
    </RestaurantsContainer>
  );
}

const RestaurantsContainer = styled(View)({
  flex: "1",
  marginTop: `${Constants.statusBarHeight}px`,
});
