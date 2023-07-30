import { Text, View } from "react-native";
import styled from "styled-components";

const MainContainer = styled(View)({
  maxWidth: "118px",
  marginTop: "21px",
  marginLeft: "16px",
});

const StyledText1 = styled(Text)({
  fontFamily: "Roboto-Black",
  fontSize: "42px",
  color: "#333333",
  fontWeight: "bold",
});

const StyledText2 = styled(Text)({
  fontFamily: "Roboto-Black",
  fontSize: "42px",
  color: "#00BAA4",
  fontWeight: "bold",
});

const StyledText3 = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "12px",
  color: "#333333",
  fontWeight: "bold",
});

export { MainContainer, StyledText1, StyledText2, StyledText3 };
