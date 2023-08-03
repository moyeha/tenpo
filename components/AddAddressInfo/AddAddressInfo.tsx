import BottomSheet from "@gorhom/bottom-sheet";
import React, { useEffect, useMemo, useRef } from "react";
import { PressableProps, Text } from "react-native";
import useAsyncWithRetry from "../../hooks/useAsyncWithRetry";
import AddAddressButton from "../AddAddressButton/AddAddressButton";
import { Container, TextArea, Title } from "./AddAddressInfo.styles";
import { useTranslation } from "react-i18next";

type AddAddressInfoProps = Pick<PressableProps, "onPress"> & {
  open: boolean;
};

const AddAddressInfo = ({ onPress, open }: AddAddressInfoProps) => {
  const { t } = useTranslation();

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

  const label = error
    ? t("add-address-try-again")
    : loading
    ? t("add-address-adding")
    : t("add-address");

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
        <AddAddressButton
          disabled={loading}
          style={{ marginTop: 20 }}
          onPress={(ev) => {
            fetchData();
          }}
        >
          {label}
        </AddAddressButton>
      </BottomSheet>
    </Container>
  );
};

export default AddAddressInfo;
