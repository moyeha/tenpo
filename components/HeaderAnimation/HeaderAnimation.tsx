import React, { useEffect, useRef } from "react";
// import { Animated, View } from "react-native";
import { View } from "react-native";
import Phone from "../../assets/images/phone.svg";
import Moto from "../../assets/images/moto.svg";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

const HeaderAnimation = () => {
  const xPos = useSharedValue(0);

  const yPos = useSharedValue(0);

  const config = {
    duration: 1000,
  };

  useEffect(() => {
    xPos.value = withTiming(-57, config);
    yPos.value = withTiming(12, config);
  }, [xPos, yPos]);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: xPos.value }, { translateY: yPos.value }],
    };
  });

  return (
    <View style={{ marginLeft: 70, position: "relative" }}>
      <Animated.View style={style}>
        <Moto size={118} />
      </Animated.View>
      <Phone size={118} style={{ position: "absolute" }} />
    </View>
  );
};

export default HeaderAnimation;
