import { Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const MainContainer = styled(View)({
  flex: "1",
  borderTopRightRadius: "28px",
  borderTopLeftRadius: "28px",
  backgroundColor: theme.colors.cyan,
  paddingTop: "5px",
});

const AddDirectionContainer = styled(View)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  marginTop: "10px",
});

const AddDirectionLabel = styled(Text)({
  fontFamily: "Gotham-Light",
  fontSize: "12px",
  color: theme.colors.green,
});

const HomeProductsContainer = styled(View)({
  backgroundColor: theme.colors.white,
  borderTopRightRadius: "28px",
  borderTopLeftRadius: "28px",
  marginTop: "20px",
  paddingTop: "30px",
  paddingLeft: "10px",
});

export {
  AddDirectionContainer,
  AddDirectionLabel,
  HomeProductsContainer,
  MainContainer,
};
