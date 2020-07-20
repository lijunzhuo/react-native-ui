import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ChartScreen from "../screen/ChartScreen";
import { TransitionPresets } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function ChartStack({ navigation }) {
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="Home"
      //screenOptions={({ route, navigation }) => ({
      screenOptions={({ route }) => ({
        headerTitleAlign: "center",
        headerTitle: () => {
          return (
            <Image
              source={require("../assets/emotor.png")}
              style={{
                width: 200,
                height: 30,
                marginTop: 5,
              }}
              resizeMode="contain"
            ></Image>
          );
        },
        headerLeft: (props) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginLeft: 20,
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                <Entypo name="menu" size={24} color="black" />
              </TouchableOpacity>
            </View>
          );
        },
        headerRight: (props) => {
          return (
            <TouchableOpacity style={{ marginRight: 20, marginbottom: 10 }}>
              <Entypo name="shopping-cart" size={24} color="black"></Entypo>
            </TouchableOpacity>
          );
        },
        // header: () => {
        //   return (
        //     <View style={{ flex: 1 }}>
        //       <Text>Hellow</Text>
        //     </View>
        //   );
        headerShown: true,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerStatusBarHeight:
          navigation.dangerouslyGetState().routes.indexOf(route) > 0
            ? 0
            : undefined,
        ...TransitionPresets.ModalPresentationIOS,
      })}
      mode="modal"
    >
      <Stack.Screen name="Chart" component={ChartScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}
