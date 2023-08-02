import React, { useEffect, useMemo, useRef } from "react";
import { Pressable, PressableProps, Text } from "react-native";
import AddAddressButton from "../AddAddressButton/AddAddressButton";
import { Container, TextArea, Title } from "./AddAddressInfo.styles";
import BottomSheet from "@gorhom/bottom-sheet";
import useAsyncWithRetry from "../../hooks/useAsyncWithRetry";

type AddAddressInfoProps = Pick<PressableProps, "onPress"> & {
  open: boolean;
};

const AddAddressInfo = ({ onPress, open }: AddAddressInfoProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ["5%", "100%"], []);

  const { fetchData, error, data, loading } = useAsyncWithRetry();

  useEffect(() => {
    if (open) {
      bottomSheetRef.current?.expand();
    }
  }, [open]);

  useEffect(() => {
    if (data) {
      onPress?.(null);
    }
  }, [data, onPress]);

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
        <Text>{JSON.stringify(data)} </Text>
        {error && <Text>Intentar de nuevo</Text>}
        <TextArea
          multiline
          // Android
          underlineColorAndroid="transparent"
          enablesReturnKeyAutomatically
          // blurOnSubmit
          autoCorrect={false}
          autoCapitalize="none"
        />
        <AddAddressButton
          disabled={loading}
          style={{ marginTop: 20 }}
          onPress={(ev) => {
            fetchData();
          }}
        >
          {error ? "try again" : "Agregar direccion"}
        </AddAddressButton>
      </BottomSheet>
    </Container>
  );
};

export default AddAddressInfo;
