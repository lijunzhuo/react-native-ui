import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import ScrollableTabView, {
  DefaultTabBar,
} from "react-native-scrollable-tab-view";
import Menu from "./Menu";
import All from "./All";
import Popular from "./Popular";
// var ScrollableTabView = require('react-native-scrollable-tab-view');

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageBackground
          source={require("../assets/header.png")}
          style={styles.imageBackground}
          resizeMode="contain"
        >
          <Text style={styles.title}>HOME</Text>
        </ImageBackground>
      </View>
      <View style={styles.tabbar}>
        <ScrollableTabView
          style={{ marginTop: 20 }}
          initialPage={1}
          tabBarActiveTextColor="green"
          renderTabBar={() => (
            <DefaultTabBar
              underlineStyle={{ backgroundColor: "green" }}
            ></DefaultTabBar>
          )}
        >
          <All tabLabel="All" />
          <Menu tabLabel="Menu" />
          <Popular tabLabel="Popular" />
        </ScrollableTabView>
      </View>
    </View>
  );
};

export default Home;

const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 20,
    position: "absolute",
  },
  tabbar: {
    flex: 1,
    marginTop: width * 0.3,
    paddingHorizontal: 30,
  },
  imageBackground: {
    width: width * 0.4,
    height: width * 0.4,
    alignItems: "center",
  },
  title: {
    color: "white",
    marginTop: 25,
    fontWeight: "bold",
    fontSize: 15,
  },
});
