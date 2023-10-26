import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { AppDispatch } from "../../redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux-store/product/product.slice";
interface FoodItemCardProps {
  imageSource: any;
  backgroundColor: string;
  text: string;
  productId?: any;
  onPress?: () => void;
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({
  imageSource,
  backgroundColor,
  text,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
    </TouchableOpacity>
  );
};

export default FoodItemCard;

const styles = StyleSheet.create({});
