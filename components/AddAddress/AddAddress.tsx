import React from "react";
import { AddDirectionContainer, AddDirectionLabel } from "./AddAddress.styles";
import Direccion from "../../assets/images/pin.svg";
import { StyleProp, TextStyle } from "react-native";

type AddAddressProps = {
  children: React.ReactNode;
  big?: boolean;
};

const AddAddress = ({ children, big }: AddAddressProps) => {
  return (
    <AddDirectionContainer>
      <Direccion />
      <AddDirectionLabel big={big}>
        {children}
      </AddDirectionLabel>
    </AddDirectionContainer>
  );
};

export default AddAddress;
