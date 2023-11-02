import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "./Button";

const CartItem = () => {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        elevation: 5, // For Android
        shadowColor: "#000", // For iOS
        shadowOffset: { width: 0, height: 2 }, // For iOS
        shadowOpacity: 0.25, // For iOS
        shadowRadius: 10, // For iOS
        marginTop: 10,
      }}
    >
      <View>
        <Image
          source={require("../../assets/images/burger3.png")}
          style={{ width: 90, height: 80 }}
        />
      </View>
      <View>
        <Text style={{ fontSize: 18 }}>Burger</Text>
        <Text style={{ fontSize: 17, color: "#F28482" }}>$ 10.00</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
        }}
      >
        <Button>-</Button>
        <Text style={{ fontSize: 18, fontWeight: "500" }}>1</Text>
        <Button>+</Button>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
