import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../screens/Home";
import { useNavigation } from "@react-navigation/native";
import useAxios from "../hooks/useAxios";
import useApi from "../hooks/useAxios";
import axiosInstance from "../config/axiosConfig";

export const AuthContext = createContext({});

interface AuthProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState("ilyas");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userToken, setUserToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);

      if (email === "" || password === "") {
        alert("Please fill all the fields");
        setLoading(false);
        return;
      }

      //   setUserToken("fgkjdsfdsfs");
      //   await AsyncStorage.setItem("userToken", "fgkjdsfdsfs");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const logout = () => {
    AsyncStorage.removeItem("userToken");
    setUserToken(null);
    setLoading(false);
  };
  const isLoggedIn = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        setUserToken(token);
      }
    } catch (error) {}
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isLoggedIn,
        userToken,
        email,
        password,
        setUser,
        setEmail,
        setPassword,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
