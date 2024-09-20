import React from "react";
import { useSharedValue } from "react-native-reanimated";

import Carousel from "./Carousel";
import { DataItem, StackCarouselProps } from "./types";

const StackCarousel: React.FC<StackCarouselProps> = ({
  data,
  direction,
  imageStyle,
  maxVisibleItems,
}) => {
  const prevIndex = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const animatedValue = useSharedValue(0);

  return (
    <>
      {data.map((item: DataItem, index: number) => (
        <Carousel
          item={item}
          index={index}
          key={item.id}
          prevIndex={prevIndex}
          imageStyle={imageStyle}
          dataLength={data.length}
          currentIndex={currentIndex}
          animatedValue={animatedValue}
          maxVisibleItems={maxVisibleItems || 3}
          direction={direction || "vertical-top-variant1"}
        />
      ))}
    </>
  );
};

export default StackCarousel;
