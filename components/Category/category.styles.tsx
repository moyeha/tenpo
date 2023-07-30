import { Image, Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const MainContainer = styled(View)({
  // flex: 1,
  justifyContent: "center",
  alignItems: "center",
});

const TitleContainer = styled(View)({
  position: "absolute",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled(Text)({
  color: theme.colors.white,
  fontFamily: "Gotham-Black",
  fontSize: "16px",
  textAlign: "center",
  textTransform: "uppercase",
});

const StyledImage = styled(Image)({
  height: "80px",
  width: "160px",
  resizeMode: "contain",
  marginBottom: "8px",
});

export { TitleContainer, MainContainer, StyledImage, Title };
