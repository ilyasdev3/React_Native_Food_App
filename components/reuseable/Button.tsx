import React, { FC } from "react";
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  size?: "small" | "medium" | "large";
  variant?: "default" | "outline" | "link";
  rounded?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  size = "medium",
  variant = "default",
  rounded = false,
  style,
  ...rest
}) => {
  const getSizeStyle = (): TextStyle => {
    switch (size) {
      case "small":
        return { fontSize: 12 };
      case "large":
        return { fontSize: 18 };
      default:
        return { fontSize: 16 };
    }
  };

  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case "outline":
        return {
          borderWidth: 1,
          borderColor: "#000",
          backgroundColor: "transparent",
        };
      case "link":
        return {
          borderWidth: 0,
          backgroundColor: "transparent",
        };
      default:
        return {};
    }
  };

  const getShapeStyle = (): ViewStyle => {
    return rounded ? { borderRadius: 10 } : {};
  };

  return (
    <TouchableOpacity
      style={[
        {
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 5,
          backgroundColor: "#F28482",
          justifyContent: "center",
          alignItems: "center",
        },
        getSizeStyle(),
        getVariantStyle(),
        getShapeStyle(),
        style,
      ]}
      {...rest}
    >
      <Text style={{ color: variant === "link" ? "#F28482" : "#fff" }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
