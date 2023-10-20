import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FoodItemCard = ({ imageSource, backgroundColor, text }: any) => {
  return (
    <View
      style={{
        height: 150,
        width: 130,
        backgroundColor: backgroundColor,
        borderRadius: 20,
        paddingTop: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        marginRight: 10,
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "400" }}>{text}</Text>
      <Image
        source={imageSource}
        style={{
          width: 120,
          height: 110,
          objectFit: "cover",
          borderBottomRightRadius: 20,
          overflow: "hidden",
        }}
      />
    </View>
  );
};

export default FoodItemCard;

const styles = StyleSheet.create({});
