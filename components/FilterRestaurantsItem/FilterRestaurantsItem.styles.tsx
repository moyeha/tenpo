import { Image, Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const Container = styled(View)({
  flex: "1",
  display: "flex",
  flexDirection: "row",
  gap: "2px",
  padding: "5px",
  backgroundColor: theme.colors.white,
});

const StyledText = styled(Text)({
  fontFamily: "Gotham-Light",
  fontSize: "18px",
  color: theme.colors.darkGray,
  fontWeight: "bold",
  textTransform: "capitalize",
});

const StyledImage = styled(Image)({
  width: "80px",
  height: "40px",
  resizeMode: "contain",
});

export { Container, StyledText, StyledImage };
