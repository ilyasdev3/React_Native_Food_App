import React from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface BadgeProps {
  text: string;
  color: string;
  size: number;
  bgColor: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color, bgColor, size }) => {
  return (
    <View
      style={[
        styles.badge,
        { backgroundColor: bgColor, width: size, height: 40 },
      ]}
    >
      <Text style={[styles.text, { color: color }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Badge;
