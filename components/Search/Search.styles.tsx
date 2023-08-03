import { Text, TextInput, View } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const SearchContainer = styled(View)({
  position: "absolute",
  left: 0,
  top: "-25px",
  right: 0,
});

const StyledTextInput = styled(TextInput)({
  paddingLeft: "25px",
  height: "56px",
  backgroundColor: theme.colors.white,
  borderRadius: "28px",
  shadowRadius: 3,
  shadowOffset: "0 3px",
  shadowColor: theme.colors.black,
  shadowOpacity: "0.2",
});

export { SearchContainer, StyledTextInput };
