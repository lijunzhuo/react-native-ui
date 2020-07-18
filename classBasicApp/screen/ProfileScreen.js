import React, { Component } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { MaterialCommunityIcons, Entypo, Feather } from "@expo/vector-icons";

export default class ProfileScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <Avatar.Image
              source={{
                uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
              }}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title style={[styles.title, { marginTop: 15, marginBottom: 5 }]}>
                Leo Li
              </Title>
              <Caption style={styles.caption}>@Leo_Li</Caption>
            </View>
          </View>
        </View>
        <View style={styles.userInfoSection}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={20}
              color="#777"
            />
            <Text style={{ color: "#777", marginLeft: 20 }}>
              Edmonton, Canada
            </Text>
          </View>
          <View style={styles.row}>
            <Entypo name="phone" size={20} color="#777" />
            <Text style={{ color: "#777", marginLeft: 20 }}>+999-999-9999</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name="email" size={20} color="#777" />
            <Text style={{ color: "#777", marginLeft: 20 }}>leo@gmail.com</Text>
          </View>
        </View>

        <View
          style={[
            styles.infoBoxWrapper,
            { borderRightColor: "#ddd", borderWidth: 1 },
          ]}
        >
          <View style={styles.infoBox}>
            <Title>$140</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>16</Title>
            <Caption>Orders</Caption>
          </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Entypo name="heart-outlined" color="#ff6347" size={25} />
              <Text style={styles.menuItemText}>Your Favorite</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Entypo name="share" color="#ff6347" size={25} />
              <Text style={styles.menuItemText}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <MaterialCommunityIcons
                name="account-check-outline"
                color="#ff6347"
                size={25}
              />
              <Text style={styles.menuItemText}>Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Feather name="settings" color="#ff6347" size={25} />
              <Text style={styles.menuItemText}>Settings</Text>
            </View>
          </TouchableRipple>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});
