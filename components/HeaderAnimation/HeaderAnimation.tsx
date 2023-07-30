import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import Phone from "../../assets/images/phone.svg";
import Moto from "../../assets/images/moto.svg";

export default function HeaderAnimation() {
  const xPos = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  useEffect(() => {
    Animated.timing(xPos, {
      toValue: { x: -57, y: 12 },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [xPos]);

  return (
    <View style={{ marginLeft: 70, position: "relative" }}>
      <Animated.View style={xPos.getLayout()}>
        <Moto size={118} />
      </Animated.View>
      <Phone size={118} style={{ position: "absolute" }} />
    </View>
  );
}
