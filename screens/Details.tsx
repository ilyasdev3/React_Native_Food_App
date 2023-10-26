import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Badge from "../components/reuseable/Badge";
import AddMoreCart from "../components/reuseable/AddMoreCart";
import { useIsFocused } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/reuseable/Button";

const Details = ({ navigation, route }: any) => {
  const insets = useSafeAreaInsets();
  const isFocused = useIsFocused(); // Use the useIsFocused hook

  if (!isFocused) return null; // Return null to prevent rendering if not focused

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View
          style={{
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom,
            display: "flex",
            gap: 30,
            paddingHorizontal: 20,
          }}
        >
          <View style={styles.headerContainer}>
            <Text
              style={{
                fontSize: 30,
                color: "#ffff",
                fontWeight: "400",
              }}
            >
              Mr. Cheezy
            </Text>
            {/* cross  */}
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                paddingHorizontal: 3,
                paddingVertical: 6,
                backgroundColor: "#F5CAC3",
                borderRadius: 10,
              }}
            >
              <Icon name="times" size={20} style={styles.icon} color="#ffff" />
            </TouchableOpacity>
          </View>
          <View style={styles.badgeContainer}>
            <Badge
              text="Classic Taste"
              color="#F28482"
              size={150}
              bgColor="#F7EDE2"
            />
            <Badge
              text="Bestseller"
              color="#ffff"
              size={130}
              bgColor="#84A59D"
            />
          </View>
          {/* Image section */}
          <View style={styles.imageContainer}>
            <Image source={require("../assets/images/burger2.png")} />
          </View>
        </View>
      </View>
      {/* second section */}

      <View
        style={{
          width: "90%",
          marginEnd: "auto",
          marginStart: "auto",
          gap: 40,
        }}
      >
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 25,
              marginTop: 20,
            }}
          >
            Add More Flavor 🤩
          </Text>
        </View>
        {/* Cards section */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <AddMoreCart
            price="2.99"
            title="Cheddar"
            img={require("../assets/images/cheader.png")}
          />
          <AddMoreCart
            price="1.99"
            title="Bacon"
            img={require("../assets/images/bacon.png")}
          />
          <AddMoreCart
            price="1.99"
            title="Onion"
            img={require("../assets/images/onion.png")}
          />
        </View>
        {/* Buttons sections */}
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* Buttons */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderColor: "#F28482",
              borderWidth: 2,
              borderRadius: 10,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <Button size="small">-</Button>
            <Text>5</Text>
            <Button size="small">+</Button>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              backgroundColor: "#F28482",
              borderRadius: 20,
              paddingVertical: 10,
              paddingHorizontal: 25,
            }}
          >
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#ffff", fontSize: 17 }}>Add To Cart</Text>
              <Text style={{ color: "#ffff", fontWeight: "600", fontSize: 20 }}>
                $15.99
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 7,
  },
  wrapper: {
    backgroundColor: "#F28482",
    width: "100%",
    height: "50%",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#F5CAC3",
    borderRadius: 10,
  },
  badgeContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    position: "relative",
  },
  imageContainer: {
    display: "flex",
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: -20,
    marginTop: -95,
  },
});
