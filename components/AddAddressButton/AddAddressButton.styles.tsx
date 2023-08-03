import { Pressable, Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const StyledButton = styled(Pressable)({
  padding: "20px",
  backgroundColor: theme.colors.green,
  color: theme.colors.white,
  margin: "0px 10px",
  borderRadius: "10px",
});

const StyledButtonLabel = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "18px",
  color: theme.colors.white,
  textAlign: "center",
});

export { StyledButton, StyledButtonLabel };
