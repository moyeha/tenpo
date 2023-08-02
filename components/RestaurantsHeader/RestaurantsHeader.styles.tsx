import { Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const RestaurantsHeaderContainer = styled(View)({
  backgroundColor: theme.colors.cyan,
  height: "20%",
  // flex: 1,
});

const RestaurantsHeaderMain = styled(View)({
  display: "flex",
  flexDirection: "row",
  flex: 1,
  marginTop: "40px",
});

const RestaurantsHeaderSide = styled(View)({
  display: "flex",
  flex: 1,
  // backgroundColor: "red",
  justifyContent: "center",
  alignItems: "center",
});

const RestaurantsHeaderMiddle = styled(View)({
  flex: 5,
});

const RestaurantsHeaderTitle = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "12px",
  color: theme.colors.green2,
  margin: "10px",
});

const RestaurantsHeaderTitle2 = styled(Text)({
  fontFamily: "Gotham-Light",
  fontSize: "16px",
  color: theme.colors.green2,
  margin: "5px 10px",
});

const TargetContainer = styled(View)({
  backgroundColor: theme.colors.green,
  height: "30px",
  width: "30px",
  borderRadius: "50%",
  padding: "20px",
  justifyContent: "center",
  alignItems: "center",
});

export {
  RestaurantsHeaderContainer,
  RestaurantsHeaderMain,
  RestaurantsHeaderMiddle,
  RestaurantsHeaderSide,
  RestaurantsHeaderTitle,
  RestaurantsHeaderTitle2,
  TargetContainer,
};
