import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  errorCleanUp,
  registerUser,
  messageCleanUp,
} from "../redux-store/auth/auth.slice";
import { AppDispatch } from "../redux-store/store";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAuthError,
  selectAuthMessage,
} from "../redux-store/auth/auth.seletor";

const Signup = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const getAuthError: any = useSelector(selectAuthError);
  const getMessage: any = useSelector(selectAuthMessage);

  const handleSignup = async () => {
    dispatch(errorCleanUp());
    dispatch(messageCleanUp());
    if (name === "" && email === "" && password === "") {
      alert("Please enter all fields");
      return;
    }
    if (name === "") {
      alert("Please enter your name");
      return;
    }
    if (email === "") {
      alert("Please enter your email");
      return;
    }
    if (password === "") {
      alert("Please enter your password");
      return;
    }
    await dispatch(registerUser({ name, email, password }));
  };

  useEffect(() => {
    if (getMessage === "Register successfully") {
      navigation.navigate("Login");
    }
  }, [getMessage]);
  useEffect(() => {
    dispatch(errorCleanUp());
    dispatch(messageCleanUp());
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
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
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              color: "#F28482",
              marginLeft: 10,
              fontWeight: "600",
              textDecorationLine: "underline",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      {getAuthError && (
        <Text style={{ color: "red", fontSize: 18 }}>
          {getAuthError && getAuthError?.message}
        </Text>
      )}
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

export default Signup;
