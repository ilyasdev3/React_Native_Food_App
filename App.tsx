import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NavigationProvider from "./navigations/NavigationProvider";
import { Providers } from "./redux-store/Provider";
import { FoodProvider } from "./context/foodContent";

export default function App() {
  return (
    <FoodProvider>
      <Providers>
        <NavigationProvider />
      </Providers>
    </FoodProvider>
  );
}
