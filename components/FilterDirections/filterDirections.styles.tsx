import { Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const Container = styled(View)({
  flex: "1",
  backgroundColor: theme.colors.white,
  padding: "20px",
  marginLeft: "20px",
  marginRight: "20px",
});

const AutocompleteContainer = styled(View)({
  flex: 1,
  backgroundColor: "transparent",
  position: "absolute",
  top: "25%",
  left: "0px",
  right: "0px",
});

const StyledText = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "18px",
  color: theme.colors.darkGray,
  fontWeight: "bold",
  textTransform: "uppercase",
});

export { Container, AutocompleteContainer, StyledText };
