import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Recent from "./screens/Recent";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BottomTab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        activeColor="#02ad94"
        inactiveColor="#dedede"
        //labeled={false}
        style={{ backgroundColor: "#000" }}
        barStyle={{ backgroundColor: "#0f0f0f", padding: 4 }}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={28}
              ></MaterialCommunityIcons>
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="camera-metering-spot"
                color={color}
                size={28}
              ></MaterialCommunityIcons>
            ),
          }}
        />
        <BottomTab.Screen
          name="Recent"
          component={Recent}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={28}
              ></MaterialCommunityIcons>
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
