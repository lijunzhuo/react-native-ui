import React, { useContext, useEffect } from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Drawer,
  Avatar,
  Caption,
  Paragraph,
  Text,
  Switch,
  TouchableRipple,
  Title,
} from "react-native-paper";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthContext } from "../common/Login/context";
import AsyncStorage from "@react-native-community/async-storage";

export default function CustomDrawerContent({
  progress,
  navigation,
  state,
  descriptor,
  ...rest
}) {
  const translateX = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const { loginState, loginAction } = useContext(AuthContext);

  //current route name
  //console.log(state.routeNames[state.index]);
  console.log(loginState);

  const getData = async (key, callback) => {
    try {
      AsyncStorage.getItem(key).then((value) => {
        if (value !== null) {
          callback(value);
        } else {
          console.log("cannot get Token-Data: " + key);
        }
      });
    } catch (e) {
      console.log("cannot get Token-Data: " + key);
    }
  };

  useEffect(() => {
    getData("TOKEN", (value) => {
      console.log(value);
    });
  }, []);

  return (
    <Animated.View style={{ transform: [{ translateX }], flex: 1 }}>
      <DrawerContentScrollView>
        <View style={styles.drawerContent}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Image
              source={require("../assets/emotor.png")}
              style={{ width: "80%", height: 60, marginRight: 20 }}
              resizeMode="contain"
            ></Image>
            <TouchableOpacity
              onPress={() => {
                navigation.closeDrawer();
              }}
            >
              <FontAwesome name="close" size={20} color="grey"></FontAwesome>
            </TouchableOpacity>
          </View>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={require("../assets/avatar.jpg")}
                size={50}
              ></Avatar.Image>
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={styles.title}>Paragraph</Title>
                <Caption style={styles.caption}>@Travis Scott</Caption>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              label="Home"
              activeBackgroundColor="#000080"
              activeTintColor="#ff8c00"
              //inactiveTintColor=""
              //inactiveBackgroundColor=""
              focused={state.routeNames[state.index] === "DrawerHome"}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="home-outline"
                    color={
                      state.routeNames[state.index] === "DrawerHome"
                        ? "#ff8c00"
                        : "grey"
                    }
                    size={24}
                  ></MaterialCommunityIcons>
                );
              }}
              onPress={() => {
                navigation.navigate("DrawerHome");
              }}
            ></DrawerItem>
            <DrawerItem
              label="Chart"
              activeBackgroundColor="#000080"
              activeTintColor="#ff8c00"
              //inactiveTintColor=""
              //inactiveBackgroundColor=""
              focused={state.routeNames[state.index] === "DrawerChart"}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="bookmark-outline"
                    color={
                      state.routeNames[state.index] === "DrawerChart"
                        ? "#ff8c00"
                        : "grey"
                    }
                    size={24}
                  ></MaterialCommunityIcons>
                );
              }}
              onPress={() => {
                navigation.navigate("DrawerChart");
              }}
            ></DrawerItem>
            <DrawerItem
              label="Calender"
              activeBackgroundColor="#000080"
              activeTintColor="#ff8c00"
              //inactiveTintColor=""
              //inactiveBackgroundColor=""
              focused={state.routeNames[state.index] === "DrawerCalender"}
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="settings-outline"
                    color={
                      state.routeNames[state.index] === "DrawerCalender"
                        ? "#ff8c00"
                        : "grey"
                    }
                    size={24}
                  ></MaterialCommunityIcons>
                );
              }}
              onPress={() => {
                navigation.navigate("DrawerCalender");
              }}
            ></DrawerItem>
            <DrawerItem
              label="Bookmark"
              icon={() => {
                return (
                  <MaterialCommunityIcons
                    name="account-check-outline"
                    color="grey"
                    size={24}
                  ></MaterialCommunityIcons>
                );
              }}
              onPress={() => {
                navigation.navigate("DrawerChart");
              }}
            ></DrawerItem>
          </Drawer.Section>
          <Drawer.Section title="Preference">
            <TouchableRipple onPress={() => {}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          label="Sign out"
          icon={() => {
            return <FontAwesome name="sign-out" size={20} color="grey" />;
          }}
          onPress={() => {
            loginAction.signOut();
          }}
        ></DrawerItem>
      </Drawer.Section>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  drawerContent: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  chosen: {
    color: "#0033cc",
    fontSize: 20,
    backgroundColor: "#668cff",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
