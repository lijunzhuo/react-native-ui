import React from "react";
//import { createStackNavigator } from "@react-navigation/stack";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import HomeScreen from "../screen/MainScreen";
import DetailScreen from "../screen/DetailScreen";
import Popular from "../screen/PopularScreen";

const Stack = createSharedElementStackNavigator();

export default function routes({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={(navigation) => ({
          headerBackTitleVisible: false,
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
        sharedElementsConfig={(route) => {
          const { data } = route.params;
          return [
            {
              id: `item.${data.id}.photo`,
              animation: "move",
              resize: "clip",
              align: "center-top",
            },
            {
              id: `item.${data.id}.text`,
              animation: "fade",
              resize: "clip",
              align: "left-center",
            },
            {
              id: `item.${data.id}.profilePic`,
              animation: "move",
              resize: "clip",
              align: "left-center",
            },
            {
              id: `item.${data.id}.username`,
              animation: "fade",
              resize: "clip",
              align: "left-center",
            },
            {
              id: `item.${data.id}.readtime`,
              animation: "fade",
              resize: "clip",
              align: "left-center",
            },
          ];
        }}
      ></Stack.Screen>
      <Stack.Screen name="Popular" component={Popular}></Stack.Screen>
    </Stack.Navigator>
  );
}
