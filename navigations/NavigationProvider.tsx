import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "../screens/Home";
import Details from "../screens/Details";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Signup from "../screens/SignUp";
import Login from "../screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

type StackParamList = {
  TabNavigator: undefined;
  Home: undefined;
  Details: undefined;
  Cart: undefined;
  Profile: undefined;
  Signup: undefined;
  Login: undefined;
  AuthNavigator: undefined;
};

type TabParamList = {
  Home: undefined;
  Details: undefined;
  Cart: undefined;
  Profile: undefined;
  Signup: undefined;
  Login: undefined;
};

// tab navigator starts

const Stack = createNativeStackNavigator<StackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const getTabBarIcon = (
  route: { name: string },
  focused: boolean,
  color: string,
  size: number
) => {
  let iconName: string | undefined;

  if (route.name === "Home") {
    iconName = focused ? "home" : "home";
  } else if (route.name === "Cart") {
    iconName = focused ? "shopping-cart" : "shopping-cart";
  } else if (route.name === "Profile") {
    iconName = focused ? "user" : "user";
  }

  return iconName ? <Icon name={iconName} size={size} color={color} /> : null;
};

const TabNavigator = ({ navigation }: any) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route, focused, color, size),
        tabBarShowLabel: false,
        // tabBarStyle: {
        //   backgroundColor: "#FFFFF2",
        //   borderTopWidth: 0,
        //   elevation: 0,
        // },
        headerShown: false,
        tabBarActiveTintColor: "#F28482",
        // tabBarHideOnKeyboard: true,
        // tabBarVisible: route.name === "Cart" ? false : true,
        // tabBarBadge: route.name === "Cart" && 2 > 0 ? 2 : undefined,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

// auth navigator starts

const AuthStack = createNativeStackNavigator();

// const AuthNavigator = () => {
//   return (
//     <AuthStack.Navigator
//       initialRouteName="Login"
//       screenOptions={{ headerShown: false }}
//     >
//       <AuthStack.Screen name="Login" component={Login} />
//       <AuthStack.Screen name="Signup" component={Signup} />
//     </AuthStack.Navigator>
//   );
// };

// auth navigator ends

const NavigationProvider = () => {
  const [token, setToken] = useState<string | null>(null);

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("FOOD_APP_TOKEN");
      if (token) {
        setToken(token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? "TabNavigator" : "Login"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationProvider;
