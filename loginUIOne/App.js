import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigatoin from "./route/StackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigatoin></StackNavigatoin>
    </NavigationContainer>
  );
}
