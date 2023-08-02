import React, { useEffect, useMemo, useRef } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import AddAddressButton from "../AddAddressButton/AddAddressButton";
import { Container, TextArea, Title } from "./AddAddressInfo.styles";
import BottomSheet from "@gorhom/bottom-sheet";

type AddAddressInfoProps = Pick<PressableProps, "onPress"> & {
  open: boolean;
};

const AddAddressInfo = ({ onPress, open }: AddAddressInfoProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["5%", "100%"], []);

  useEffect(() => {
    if (open) {
      bottomSheetRef.current?.expand();
    }
  }, [open]);

  return (
    <Container open={open}>
      <BottomSheet
        style={{ padding: 20 }}
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
      >
        <Title>Agregar Informacion de entrega</Title>
        <Text> Depto, Oficina, Piso, Block </Text>
        <TextArea
          multiline
          // Android
          underlineColorAndroid="transparent"
          enablesReturnKeyAutomatically
          // blurOnSubmit
          autoCorrect={false}
          autoCapitalize="none"
        />
        <AddAddressButton style={{ marginTop: 20 }} onPress={onPress}>
          Agregar direccion
        </AddAddressButton>
      </BottomSheet>
    </Container>
  );
};

export default AddAddressInfo;
