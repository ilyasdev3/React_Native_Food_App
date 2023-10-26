import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import Avatar from "../components/reuseable/Avatar";
import { ServerIcon } from "react-native-heroicons/outline";
import Button from "../components/reuseable/Button";
import DonutCard from "../components/reuseable/DonutCard";
import FoodItemCard from "../components/reuseable/FoodItemCard";
import Icon from "react-native-vector-icons/FontAwesome";
import { FoodContext } from "../context/foodContent";

const Home = ({ navigation }: any) => {
  const { food, getFood, loading, error }: any = React.useContext(FoodContext);

  const insets = useSafeAreaInsets();
  const handleFoodCardPress = () => {
    navigation.navigate("Details");
  };

  useEffect(() => {
    getFood();
  }, []);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        display: "flex",
        gap: 30,
      }}
    >
      <View style={styles.container}>
        <Avatar source={require("../assets/images/ilyas.jpeg")} />
        <Text style={styles.welcomeText}>
          Welcome back, Pin! How Hungry are you?
        </Text>
      </View>
      {/* search section */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search..."
            style={{
              width: "100%",
            }}
          />
        </View>
        <Button size="small" rounded={true}>
          <ServerIcon
            color={"#FFFFF2"}
            style={{
              width: 20,
              marginRight: 10,
            }}
          />
        </Button>
      </View>

      <View
        style={{
          width: "90%",
          marginEnd: "auto",
          marginStart: "auto",
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "400" }}>Today’s Menu</Text>
      </View>
      {/*  */}

      {/* Donut card section */}

      <ScrollView
        // contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
        horizontal
      >
        <DonutCard backgroundColor={"#84A59D"} />
        <DonutCard backgroundColor={"#F6BD60"} />
        <DonutCard backgroundColor={"#F28482"} />
      </ScrollView>

      {/* Food cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.FoodCardScroll}
      >
        {/* {error && <Text>Error: {error.message}</Text>} */}
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          food &&
          food.map((item: any) => (
            <FoodItemCard
              onPress={handleFoodCardPress}
              backgroundColor="#FFEF92"
              imageSource={require("../assets/images/burger.png")}
              text={item.name}
              key={item._id}
            />
          ))
        )}

        {/* <FoodItemCard
          onPress={handleFoodCardPress}
          backgroundColor="#FFEF92"
          imageSource={require("../assets/images/burger.png")}
          text={"Burger"}
        )
        {/* <FoodItemCard
          onPress={handleFoodCardPress}
          backgroundColor="#FFEF92"
          imageSource={require("../assets/images/burger.png")}
          text={"Burger"}
        />
        <FoodItemCard
          onPress={handleFoodCardPress}
          backgroundColor="#F5CAC3"
          imageSource={require("../assets/images/fries.png")}
          text={"Fries"}
        />
        <FoodItemCard
          onPress={handleFoodCardPress}
          backgroundColor="#B6D7CF"
          imageSource={require("../assets/images/drink.png")}
          text={"Drink"}
        /> */}
      </ScrollView>

      {/*  */}
      <View
        style={{
          width: "90%",
          marginEnd: "auto",
          marginStart: "auto",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "300" }}>Best Offers 💕</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingVertical: 10,
    backgroundColor: "#FFFFF2",
    borderRadius: 20,
    alignItems: "center",
    marginEnd: "auto",
    marginStart: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    elevation: 5, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 4, // For iOS
  },
  searchContainer: {
    width: "70%",
    backgroundColor: "#E6E6E6",
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexDirection: "row",
    elevation: 5, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.1, // For iOS
    shadowRadius: 4, // For iOS
  },
  welcomeText: {
    // fontSize: 20,
    fontSize: 19,
    fontWeight: "400",
    paddingHorizontal: 30,
    marginRight: 50,
    color: "#3D405B",
  },
  searchWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginEnd: "auto",
    marginStart: "auto",
  },
  scrollViewContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  FoodCardScroll: {
    width: "90%",
    marginStart: "auto",
    marginEnd: "auto",
    display: "flex",
    flexDirection: "row",
  },
});
