import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationProvider from "./navigations/NavigationProvider";

export default function App() {
  return <NavigationProvider />;
}
