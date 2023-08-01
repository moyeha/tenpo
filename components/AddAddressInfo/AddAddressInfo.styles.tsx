import { Text, TextInput, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const Container = styled(View)({
  flex: "1",
});

const TextArea = styled(TextInput)({
  height: "122px",
  marginTop: "12px",
  borderWidth: "1px",
  borderColor: theme.colors.gray,
  padding: "10px",
  borderRadius: "16px",
});

const Title = styled(Text)({
  fontFamily: "Gotham-Black",
  fontSize: "16px",
  color: theme.colors.black,
  fontWeight: "bold",
});

export { Container, TextArea, Title };
