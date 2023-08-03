import { Text } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const StyledText = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "18px",
  color: theme.colors.darkGray,
  fontWeight: "bold",
  textTransform: "uppercase",
});

export { StyledText };
