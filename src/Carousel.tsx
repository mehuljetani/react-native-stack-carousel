import React from "react";
import { StyleSheet } from "react-native";

import Animated, {
  withTiming,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import {
  State,
  Directions,
  FlingGestureHandler,
  GestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";

import { CarouselProps } from "./types";

const Carousel: React.FC<CarouselProps> = ({
  item,
  index,
  prevIndex,
  imageStyle,
  dataLength,
  currentIndex,
  animatedValue,
  maxVisibleItems,
  direction = "vertical-top-variant1",
}) => {
  const IMAGE_WIDTH = 260;
  const IMAGE_HEIGHT = 360;

  const animatedStyle = useAnimatedStyle(() => {
    let translateX = 0;
    let translateY = 0;

    switch (direction) {
      case "horizontal-left-variant1":
        translateX = interpolate(
          animatedValue.value,
          [index - 1, index, index + 1],
          [-30, 0, -30]
        );
        break;
      case "horizontal-right-variant1":
        translateX = interpolate(
          animatedValue.value,
          [index - 1, index, index + 1],
          [30, 0, 30]
        );
        break;
      case "horizontal-left-variant2":
        translateX = interpolate(
          animatedValue.value,
          [index - 1, index, index + 1],
          [-30, 0, 30]
        );
        break;
      case "horizontal-right-variant2":
        translateX = interpolate(
          animatedValue.value,
          [index - 1, index, index + 1],
          [30, 0, -30]
        );
        break;

      case "vertical-top-variant1":
        translateY = interpolate(
          animatedValue.value,
          [index - 1, index, index + 1],
          [-30, 0, -30]
        );
        break;
      case "vertical-bottom-variant1":
        translateY = interpolate(
          animatedValue.value,
          [index - 1, index, index + 1],
          [30, 0, 30]
        );
        break;
      case "vertical-top-variant2":
        translateY = interpolate(
          animatedValue.value,
          [index - 1, index, index + 1],
          [-30, 0, 30]
        );
        break;
      case "vertical-bottom-variant2":
        translateY = interpolate(
          animatedValue.value,
          [index - 1, index, index + 1],
          [30, 0, -30]
        );
        break;
    }

    const scale = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [0.9, 1, 1.1]
    );
    const opacity = interpolate(
      animatedValue.value,
      [index - 1, index, index + 1],
      [1, 1, 0]
    );

    return {
      transform: [{ translateX }, { translateY }, { scale }],
      opacity:
        index < currentIndex.value + maxVisibleItems - 1
          ? opacity
          : index === currentIndex.value + maxVisibleItems - 1
          ? withTiming(1)
          : withTiming(0),
    };
  });

  const onFlingLeft = (ev: GestureHandlerStateChangeEvent) => {
    if (ev.nativeEvent.state === State.END && currentIndex.value > 0) {
      animatedValue.value = withTiming((currentIndex.value -= 1));
      prevIndex.value = currentIndex.value - 1;
    }
  };

  const onFlingRight = (ev: GestureHandlerStateChangeEvent) => {
    if (
      ev.nativeEvent.state === State.END &&
      currentIndex.value < dataLength - 1
    ) {
      animatedValue.value = withTiming((currentIndex.value += 1));
      prevIndex.value = currentIndex.value;
    }
  };

  const onFlingUp = (ev: GestureHandlerStateChangeEvent) => {
    if (ev.nativeEvent.state === State.END && currentIndex.value > 0) {
      animatedValue.value = withTiming((currentIndex.value -= 1));
      prevIndex.value = currentIndex.value - 1;
    }
  };

  const onFlingDown = (ev: GestureHandlerStateChangeEvent) => {
    if (
      ev.nativeEvent.state === State.END &&
      currentIndex.value < dataLength - 1
    ) {
      animatedValue.value = withTiming((currentIndex.value += 1));
      prevIndex.value = currentIndex.value;
    }
  };

  return (
    <FlingGestureHandler
      direction={
        direction?.includes("horizontal") ? Directions.LEFT : Directions.UP
      }
      onHandlerStateChange={
        direction?.includes("horizontal") ? onFlingLeft : onFlingUp
      }
    >
      <FlingGestureHandler
        direction={
          direction?.includes("horizontal") ? Directions.RIGHT : Directions.DOWN
        }
        onHandlerStateChange={
          direction?.includes("horizontal") ? onFlingRight : onFlingDown
        }
      >
        <Animated.Image
          style={[
            styles.image,
            {
              width: IMAGE_WIDTH,
              height: IMAGE_HEIGHT,
              zIndex: dataLength - index,
            },
            animatedStyle,
            imageStyle,
          ]}
          source={typeof item.uri === "string" ? { uri: item.uri } : item.uri}
        />
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    position: "absolute",
  },
});
