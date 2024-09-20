import { ImageSourcePropType, ImageStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";

export interface DataItem {
  id: string;
  uri: string;
}

export type DirectionType =
  | "vertical-top-variant1"
  | "vertical-top-variant2"
  | "horizontal-left-variant1"
  | "horizontal-left-variant2"
  | "vertical-bottom-variant1"
  | "vertical-bottom-variant2"
  | "horizontal-right-variant1"
  | "horizontal-right-variant2";

export interface StackCarouselProps {
  maxVisibleItems: number;
  imageStyle?: ImageStyle;
  direction?: DirectionType;
  data: DataItem[] | Array<DataItem | OtherType>;
}

export interface CarouselProps {
  index: number;
  dataLength: number;
  imageStyle?: ImageStyle;
  maxVisibleItems: number;
  direction: DirectionType;
  prevIndex: SharedValue<number>;
  currentIndex: SharedValue<number>;
  animatedValue: SharedValue<number>;
  item: { uri: ImageSourcePropType | { uri: string } };
}
