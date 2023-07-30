import { Image, Text, View } from "react-native";
import styled from "styled-components";

const MainContainer = styled(View)({
  marginRight: "10px",
});

const Title = styled(Text)({
  fontFamily: "Gotham-Light",
  fontSize: "14px",
  textAlign: "center",
});

const SubTitleContainer = styled(View)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "5px",
});

const SubTitle = styled(Text)({
  fontFamily: "Gotham-Light",
  fontSize: "12px",
});

const StyledImage = styled(Image)({
  width: "110px",
  height: "110px",
  resizeMode: "cover",
  marginBottom: "8px",
  borderRadius: "24px",
});

export { MainContainer, StyledImage, SubTitle, SubTitleContainer, Title };
