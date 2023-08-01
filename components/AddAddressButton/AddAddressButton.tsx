import React from "react";
import { PressableProps } from "react-native";
import { StyledButton, StyledButtonLabel } from "./AddAddressButton.styles";

type AddAddressButtonProps = PressableProps & {
  children: React.ReactNode;
};

const AddAddressButton = ({ children, ...props }: AddAddressButtonProps) => {
  return (
    <StyledButton {...props}>
      <StyledButtonLabel>{children}</StyledButtonLabel>
    </StyledButton>
  );
};

export default AddAddressButton;
