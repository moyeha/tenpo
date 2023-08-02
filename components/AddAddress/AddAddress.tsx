import React from "react";
import Direccion from "../../assets/images/pin.svg";
import { AddDirectionContainer, AddDirectionLabel } from "./AddAddress.styles";

type AddAddressProps = {
  children: React.ReactNode;
  big?: boolean;
  onlyText?: boolean;
};

const AddAddress = ({ children, big, onlyText }: AddAddressProps) => {
  return (
    <AddDirectionContainer>
      {!onlyText && <Direccion />}
      <AddDirectionLabel big={big}>{children}</AddDirectionLabel>
    </AddDirectionContainer>
  );
};

export default AddAddress;
