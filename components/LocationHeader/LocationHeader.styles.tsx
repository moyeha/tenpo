import { TextInput } from "react-native";
import styled from "styled-components";
import theme from "../../theme";

const StyledTextInput = styled(TextInput)({
  marginTop: "-25px",
  paddingLeft: "25px",
  height: "56px",
  backgroundColor: theme.colors.white,
  borderRadius: "28px",
  shadowRadius: 3,
  shadowOffset: "0 3px",
  shadowColor: theme.colors.black,
  shadowOpacity: "0.2",
});

export { StyledTextInput };
