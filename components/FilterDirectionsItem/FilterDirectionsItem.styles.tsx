import { Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const Container = styled(View)({
  flex: "1",
  padding: "20px",
});

const StyledText = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "18px",
  color: theme.colors.darkGray,
  fontWeight: "bold",
  textTransform: "uppercase",
});

export { Container, StyledText };
