import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeStackNavigator from "./route/HomeStack";

export default function App() {
  return (
    <NavigationContainer>
      <HomeStackNavigator></HomeStackNavigator>
    </NavigationContainer>
  );
}
