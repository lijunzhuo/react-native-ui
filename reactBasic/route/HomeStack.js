import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";

const HomeStackNavigator = createStackNavigator();

const HomeStack = () => {
  return (
    <HomeStackNavigator.Navigator>
      <HomeStackNavigator.Screen
        name="Home"
        component={Home}
      ></HomeStackNavigator.Screen>
    </HomeStackNavigator.Navigator>
  );
};

export default HomeStack;
