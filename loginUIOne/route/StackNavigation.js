import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashPage from "../screen/SplashPage";
import Login from "../screen/Login";
import SignUp from "../screen/SignUp";
import { CardStyleInterpolators } from "@react-navigation/stack";

const LoginStackNavigation = createStackNavigator();

const StackNavigation = () => {
  return (
    <LoginStackNavigation.Navigator
      initialRouteName="SplashPage"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <LoginStackNavigation.Screen
        name="SplashPage"
        component={SplashPage}
      ></LoginStackNavigation.Screen>
      <LoginStackNavigation.Screen
        name="Login"
        component={Login}
      ></LoginStackNavigation.Screen>
      <LoginStackNavigation.Screen
        name="Signup"
        component={SignUp}
      ></LoginStackNavigation.Screen>
    </LoginStackNavigation.Navigator>
  );
};

export default StackNavigation;
