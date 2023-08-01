import React, { useMemo, useRef } from "react";
import { PressableProps, Text } from "react-native";
import AddAddressButton from "../AddAddressButton/AddAddressButton";
import { Container, TextArea, Title } from "./AddAddressInfo.styles";
import BottomSheet from "@gorhom/bottom-sheet";

type AddAddressInfoProps = Pick<PressableProps, "onPress">;

const AddAddressInfo = ({ onPress }: AddAddressInfoProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["70%", "100%"], []);

  return (
    <Container>
      <BottomSheet
        style={{ padding: 20 }}
        ref={bottomSheetRef}
        index={1}
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
