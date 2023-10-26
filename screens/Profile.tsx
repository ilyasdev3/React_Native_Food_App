import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { messageCleanUp } from "../redux-store/auth/auth.slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux-store/store";

const Profile = ({ navigation }: any) => {
  const [user, setUser] = useState<any>(null);
  const dispatch = useDispatch<AppDispatch>();

  const getUser = async () => {
    try {
      const user = await AsyncStorage.getItem("FOOD_APP_USER");
      if (user) {
        setUser(JSON.parse(user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("FOOD_APP_USER");
      await AsyncStorage.removeItem("FOOD_APP_TOKEN");
      navigation.navigate("Login");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogin = () => {
    dispatch(messageCleanUp());
    navigation.navigate("Login");
  };

  console.log(user, "user");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user && (
        <>
          <View style={styles.header}>
            <Image
              source={require("../assets/images/ilyas.jpeg")}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
            <Text style={styles.username}>{user?.name}</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>

          <View style={styles.infoSection}>
            <View style={styles.infoItem}>
              <Icon name="phone" size={25} color="#333" />
              <Text style={styles.infoText}>{user?.phone}</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="map-marker" size={25} color="#333" />
              <Text style={styles.infoText}>{user?.address}</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="globe" size={25} color="#333" />
              <Text style={styles.infoText}>ilyasdev3.netlify.app</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton} onPress={logout}>
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </>
        // ) : (
      )}
      {!user && (
        <View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingBottom: 30, // Added padding at the bottom
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  infoSection: {
    width: "80%",
    marginBottom: 20,
    alignContent: "center",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#F28482",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Profile;
