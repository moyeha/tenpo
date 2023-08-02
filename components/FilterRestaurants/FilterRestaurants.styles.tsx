import { Pressable, Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const Container = styled(View)({
  flex: 1,
  backgroundColor: "transparent",
  position: "absolute",
  top: "20%",
  left: "0px",
  right: "0px",
});

const StyledFilters = styled(View)({
  height: "130px",
  backgroundColor: theme.colors.gray,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  flexDirection: "row",
  padding: "50px 10px 40px 10px",
  justifyContent: "space-between",
});

const StyledText = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "18px",
  color: theme.colors.darkGray,
  fontWeight: "bold",
  textTransform: "uppercase",
});

const StyledButton = styled(Pressable)({
  padding: "10px",
  borderColor: theme.colors.green,
  borderWidth: "1px",
  borderRadius: "5px",
  textAlign: "center",
});

const StyledButtonLabel = styled(Text)({
  color: theme.colors.green,
  textAlign: "center",
});

export {
  Container,
  StyledText,
  StyledFilters,
  StyledButton,
  StyledButtonLabel,
};
