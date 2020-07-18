import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import MessageScreen from "../screen/MessageScreen";
import NotificationScreen from "../screen/NotificationScreen";
import ProfileRoute from "./ProfileRoute";
import PostScreen from "../screen/PostScreen";
import {
  SimpleLineIcons,
  Fontisto,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome5,
} from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabRoute() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      labeled={true}
      activeColor="#E9446A"
      inactiveColor="#E9446A"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            if (focused) {
              return <Fontisto name="home" size={24} color={color} />;
            } else {
              return <SimpleLineIcons name="home" size={24} color={color} />;
            }
          } else if (route.name === "Profile") {
            if (focused) {
              return <FontAwesome5 name="user-alt" size={24} color={color} />;
            } else {
              return <FontAwesome5 name="user" size={24} color={color} />;
            }
          } else if (route.name === "Notification") {
            if (focused) {
              return <FontAwesome name="bell" size={24} color={color} />;
            } else {
              return (
                <FontAwesome
                  name="bell-o"
                  size={24}
                  color={color}
                ></FontAwesome>
              );
            }
          } else if (route.name === "Post") {
            if (focused) {
              return (
                <AntDesign
                  name="pluscircle"
                  size={24}
                  color={color}
                  style={{
                    shadowColor: "#E9446A",
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowRadius: 10,
                    shadowOpacity: 0.3,
                  }}
                />
              );
            } else {
              return (
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={color}
                  style={{
                    shadowColor: "#E9446A",
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowRadius: 10,
                    shadowOpacity: 0.3,
                  }}
                />
              );
            }
          } else {
            if (focused) {
              return (
                <MaterialCommunityIcons
                  name="message-text"
                  size={24}
                  color={color}
                />
              );
            } else {
              return (
                <MaterialCommunityIcons
                  name="message-text-outline"
                  size={24}
                  color={color}
                />
              );
            }
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "#009387",
        inactiveTintColor: "#009387",
        showLabel: false,
      }}
      barStyle={{
        backgroundColor: "#eee",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}></Tab.Screen>
      <Tab.Screen name="Message" component={MessageScreen}></Tab.Screen>
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileRoute} />
    </Tab.Navigator>
  );
}
