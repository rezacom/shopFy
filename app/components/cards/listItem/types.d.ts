import { ImageSourcePropType } from "react-native";

export interface listItemCardProps {
  title: string;
  subTitle: string;
  image: ImageSourcePropType | undefined;
  onPress?: () => void;
}
