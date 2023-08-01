import { Text, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const AddDirectionContainer = styled(View)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
  marginTop: "10px",
});

const AddDirectionLabel = styled(Text)<{ big: boolean }>(({ big }) => ({
  fontFamily: "Gotham-Light",
  fontSize: big ? "18px" : "12px",
  color: theme.colors.green,
}));

export { AddDirectionContainer, AddDirectionLabel };
