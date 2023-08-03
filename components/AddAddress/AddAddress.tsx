import React from "react";
import Direccion from "../../assets/images/pin.svg";
import { AddDirectionContainer, AddDirectionLabel } from "./AddAddress.styles";
import { AccessibilityProps } from "react-native";

type AddAddressProps = AccessibilityProps & {
  children: React.ReactNode;
  big?: boolean;
  onlyText?: boolean;
};

const AddAddress = ({
  children,
  big,
  onlyText,
  ...restProps
}: AddAddressProps) => {
  return (
    <AddDirectionContainer {...restProps}>
      {!onlyText && <Direccion />}
      <AddDirectionLabel big={big}>{children}</AddDirectionLabel>
    </AddDirectionContainer>
  );
};

export default AddAddress;
