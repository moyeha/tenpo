import { Image, Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const Container = styled(View)({
  margin: "10px",
  display: "flex",
  backgroundColor: "white",
  borderRadius: "10px",
  shadowColor: theme.colors.black,
  shadowOffset: "0px 3px",
  shadowOpacity: "0.2",
});

const MainContainer = styled(View)({
  display: "flex",
  backgroundColor: theme.colors.white,
  flexDirection: "column",
  borderRadius: "10px",
  overflow: "hidden",
  padding: "0px",
});

const Title = styled(Text)({
  fontFamily: "Gotham-Light",
  fontSize: "13px",
  textAlign: "center",
});

const SubTitleContainer = styled(View)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "5px",
  marginBottom: "10px",
  marginLeft: "10px",
  marginRight: "10px",
});

const SubTitle = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "13px",
  color: theme.colors.green2,
});

const StyledImage = styled(Image)({
  width: "260px",
  height: "130px",
  marginTop: "-5px",
});

export {
  Container,
  MainContainer,
  StyledImage,
  SubTitle,
  SubTitleContainer,
  Title,
};
