import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import Badge from "../components/reuseable/Badge";
import AddMoreCart from "../components/reuseable/AddMoreCart";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import Button from "../components/reuseable/Button";
import CartItem from "../components/reuseable/CartItem";
import useAuth from "../authGurad/AuthGurad";

const Cart = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  // const isFocused = useIsFocused(); // Use the useIsFocused hook
  // const navigation = useNavigation();
  // if (!isFocused) return null; // Return null to prevent rendering if not focused
  const authenticated = useAuth();

  if (!authenticated) {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: insets.top + 20,
          paddingBottom: insets.bottom,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          paddingHorizontal: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "400",
          }}
        >
          Opps! You are not logged in
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        paddingTop: insets.top + 20,
        paddingBottom: insets.bottom,
        display: "flex",
        gap: 30,
        paddingHorizontal: 20,
      }}
    >
      {/* header */}
      <View style={styles.headerContainer}>
        <Text
          style={{
            fontSize: 30,
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
          <Icon name="times" size={20} style={styles.icon} color="#F28482" />
        </TouchableOpacity>
      </View>

      {/* Progress */}
      <View style={styles.progressContainer}>
        <View style={styles.progressWrapper}>
          <Text>My Order</Text>
          <View style={styles.progressCircleActive}>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "#fff" }}>
              1
            </Text>
          </View>
        </View>
        <View style={styles.progressLine}></View>
        <View style={styles.progressWrapper}>
          <Text>Details</Text>
          <View style={styles.progressCircleDisabled}>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "#fff" }}>
              2
            </Text>
          </View>
        </View>
        <View style={styles.progressLine}></View>

        <View style={styles.progressWrapper}>
          <Text>Payment</Text>
          <View style={styles.progressCircleDisabled}>
            <Text style={{ fontSize: 15, fontWeight: "500", color: "#fff" }}>
              3
            </Text>
          </View>
        </View>
      </View>

      {/*  */}
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "400" }}>Order</Text>
        <Button
          //   onPress={() => navigation.navigate("Details")}
          size="large"
          variant="link"
          rounded={true}
        >
          Clear all
        </Button>
      </View>

      {/* Cart items */}
      <View>
        <CartItem />
        <CartItem />
        <CartItem />
      </View>
      <View>
        <Text style={{ fontSize: 25, fontWeight: "400" }}>Don’t Forget ☺</Text>
      </View>
      <TouchableOpacity
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 30,
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#F28482",
          paddingVertical: 18,
          paddingHorizontal: 20,
          borderRadius: 20,
          elevation: 5, // For Android
          shadowColor: "#000", // For iOS
          shadowOffset: { width: 0, height: 2 }, // For iOS
          shadowOpacity: 0.25, // For iOS
          shadowRadius: 4, // For iOS
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "400", color: "#fff" }}>
          Next Step
        </Text>
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
          $85.18
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

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
  progressContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  progressCircleActive: {
    width: 50,
    height: 50,
    backgroundColor: "#F28482",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  progressCircleDisabled: {
    width: 50,
    height: 50,
    backgroundColor: "#F5CAC3",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  progressLine: {
    width: 100,
    height: 3,
    backgroundColor: "#F5CAC3",
    marginTop: 45,
  },
});
