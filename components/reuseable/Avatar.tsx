import React, { FC } from "react";
import { Image, View, ViewStyle, ImageSourcePropType } from "react-native";

interface AvatarProps {
  source: ImageSourcePropType;
  style?: ViewStyle;
}

const Avatar: FC<AvatarProps> = ({ source, style }) => {
  return (
    <View style={style}>
      <Image
        source={source}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />
    </View>
  );
};

export default Avatar;
