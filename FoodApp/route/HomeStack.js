import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Detail from "../screen/Detail";

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <HomeStackNavigator.Screen
        name="Home"
        component={Home}
      ></HomeStackNavigator.Screen>
      <HomeStackNavigator.Screen
        name="Screen"
        component={Detail}
      ></HomeStackNavigator.Screen>
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
