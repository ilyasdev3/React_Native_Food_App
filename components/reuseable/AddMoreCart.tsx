import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

interface AddMoreCartProps {
  img: any;
  title: string;
  price: string;
}

const AddMoreCart: React.FC<AddMoreCartProps> = ({ img, title, price }) => {
  return (
    <View
      style={{
        width: 100,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#FFFFF2",
        borderRadius: 10,
        alignItems: "center",
      }}
    >
      <Image source={img} />
      <View style={{}}>
        <Text style={{ fontSize: 15 }}>{title}</Text>
        <Text>+ {price}</Text>
      </View>
    </View>
  );
};

export default AddMoreCart;

const styles = StyleSheet.create({});
