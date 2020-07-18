import React from "react";
import { View, Text } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import LoadingScreen from "../screen/LoadingScreen";
import BottomTabRoute from "./BottomTabRoute";
import LoginScreen from "../screen/LoginScreen";
import SignUpScreen from "../screen/SignUpScreen";

const Stack = createStackNavigator();

const route = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true, //专门对于Android, 让Android可以使用页面切换的transitions
        gestureDirection: "horizontal", //页面切换时横向
        CardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
      initialRouteName="LoadingScreen"
      headerMode="float"
    >
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="BottomTabRoute"
        component={BottomTabRoute}
      ></Stack.Screen>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default route;
