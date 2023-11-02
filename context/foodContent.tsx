import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Home from "../screens/Home";
import { useNavigation } from "@react-navigation/native";
import useAxios from "../hooks/useAxios";
import useApi from "../hooks/useAxios";
import axiosInstance from "../config/axiosConfig";

export const FoodContext = createContext({});

interface FoodProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const FoodProvider: React.FC<FoodProviderProps> = ({ children }) => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false); // Initialize loading state as true
  const [error, setError] = useState(null);

  const getFood = async () => {
    try {
      setLoading(true);
      const { data } = await axiosInstance().get("/product/get-products");
      console.log("Fetched data:", data);
      if (data) {
        setFood(data.products);
      }
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  };

  return (
    <FoodContext.Provider
      value={{
        food,
        getFood,
        loading,
        error,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
