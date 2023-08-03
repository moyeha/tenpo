import React from "react";
import { Image, View } from "react-native";
import {
  RestaurantsHeaderContainer,
  RestaurantsHeaderMain,
  RestaurantsHeaderMiddle,
  RestaurantsHeaderSide,
  RestaurantsHeaderTitle,
  RestaurantsHeaderTitle2,
  TargetContainer,
} from "./RestaurantsHeader.styles";

type RestaurantsHeaderProps = {
  children: React.ReactNode;
  big?: boolean;
};

const RestaurantsHeader = () => {
  return (
    <RestaurantsHeaderContainer>
      <RestaurantsHeaderMain>
        <RestaurantsHeaderSide>
          <Image source={require("../../assets/images/back.png")} />
        </RestaurantsHeaderSide>
        <RestaurantsHeaderMiddle>
          <View>
            <RestaurantsHeaderTitle>
              Tu ubicacion cercana
            </RestaurantsHeaderTitle>
          </View>
          <View>
            <RestaurantsHeaderTitle2>
              Agruegue Direccion de entrega
            </RestaurantsHeaderTitle2>
          </View>
        </RestaurantsHeaderMiddle>
        <RestaurantsHeaderSide>
          <TargetContainer>
            <Image source={require("../../assets/images/target.png")} />
          </TargetContainer>
        </RestaurantsHeaderSide>
      </RestaurantsHeaderMain>
    </RestaurantsHeaderContainer>
  );
};

export default RestaurantsHeader;
