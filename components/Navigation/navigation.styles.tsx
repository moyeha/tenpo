import Constants from "expo-constants";
import { View } from "react-native";
import styled from "styled-components";

const StyledView = styled(View)({
  marginTop: `${Constants.statusBarHeight + 20}px`,
  paddingLeft: "16px",
  paddingRight: "16px",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export { StyledView };
