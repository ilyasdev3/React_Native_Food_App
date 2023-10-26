import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux-store/store";
import { loginUser, messageCleanUp } from "../redux-store/auth/auth.slice";
import { selectAuthMessage } from "../redux-store/auth/auth.seletor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const message = useSelector(selectAuthMessage);

  const handleLogin = async () => {
    try {
      dispatch(messageCleanUp());

      if (email === "" && password === "") {
        alert("Please enter your email and password");
        return;
      } else if (email === "") {
        alert("Please enter your email");
        return;
      } else if (password === "") {
        alert("Please enter your password");
        return;
      }

      dispatch(loginUser({ email, password }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (message === "Login successfully") {
      navigation.navigate("TabNavigator");
    }
  }, [message]);
  useEffect(() => {
    dispatch(messageCleanUp());
  }, []);

  console.log(message, "message");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Signup")}
          style={{ marginLeft: 5 }}
        >
          <Text
            style={{
              fontWeight: "500",
              textDecorationLine: "underline",
              color: "#F28482",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
      <Text>{message && message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#F28482",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
