import React, { Component } from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screen/ProfileScreen";
import EditProfileScreen from "../screen/EditProfileScreen";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default class ProfileRoute extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="ProfileScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#fff",
            shadowColor: "#fff", //android
            elevation: 0, //ios
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerLeft: () => (
              <FontAwesome.Button name="user" size={25} color="#000" />
            ),
            headerRight: () => (
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor="#fff"
                color="#000"
                onPress={() => {
                  this.props.navigation.navigate("EditProfile");
                }}
              />
            ),
          }}
        ></Stack.Screen>
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      </Stack.Navigator>
    );
  }
}
