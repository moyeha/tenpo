import { Pressable, Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const Container = styled(View)({
  flex: 1,
  backgroundColor: "transparent",
});

const StyledFilters = styled(View)({
  height: "130px",
  backgroundColor: theme.colors.gray,
  display: "flex",
  flexDirection: "row",
  padding: "40px 10px",
  justifyContent: "space-between",
  gap: "5px",
});

const StyledText = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "18px",
  color: theme.colors.darkGray,
  fontWeight: "bold",
  textTransform: "uppercase",
});

const StyledButton = styled(Pressable)({
  display: "flex",
  flexDirection: "row",
  gap: "5px",
  padding: "10px",
  borderColor: theme.colors.green,
  borderWidth: "1px",
  borderRadius: "5px",
  textAlign: "center",
  marginTop: "10px",
});

const StyledButtonLabel = styled(Text)({
  color: theme.colors.green,
  textAlign: "center",
  fontSize: "13px",
});

const StyledButtonLabel2 = styled(Text)({
  color: theme.colors.green,
  fontFamily: "Gotham-Black",
  fontSize: "13px",
});

export {
  Container,
  StyledButton,
  StyledButtonLabel,
  StyledFilters,
  StyledText,
  StyledButtonLabel2
};
