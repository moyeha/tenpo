import { View, Text, TextInput } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const MainContainer = styled(View)({
  backgroundColor: theme.colors.white,
  height: "80%",
});

const Container = styled(View)({
  display: "flex",
  flexDirection: "row",
  margin: "65px 16px",
  alignItems: "center",
  gap: "20px",
});

const AddressContainer = styled(View)({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

const Title = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "12px",
  color: theme.colors.green,
});

const SubTitle = styled(Text)({
  fontFamily: "Gotham-Light",
  fontSize: "18px",
  color: theme.colors.green,
});

export { Container, MainContainer, AddressContainer, Title, SubTitle };
