import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Detail = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"></StatusBar>
      <ImageBackground
        source={require("../assets/header_detail.png")}
        style={{ flex: 1, alignItems: "center" }}
        resizeMode="stretch"
      >
        <View style={styles.imageContainer}>
          <Image source={route.params?.image} style={styles.image} />
        </View>
        <View style={styles.back}>
          <Ionicons
            name="ios-arrow-round-back"
            color="white"
            size={30}
            onPress={() => {
              navigation.goBack();
            }}
          ></Ionicons>
        </View>
      </ImageBackground>
      <ScrollView style={styles.footer}>
        <View style={styles.status}>
          <Text style={{ color: "green" }}>AVAILABLE</Text>
        </View>
        <Text style={styles.priceText}>{route.params?.price}</Text>
        <Text style={styles.nameText} numberOfLines={2}>
          {route.params?.name.toUpperCase()}
        </Text>
        <Text style={styles.detailText}>
          The Templace details auto text code displays the complete template
          details, including attributes details and metric details
        </Text>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#009245", "#8cc631"]}
          style={styles.button}
        >
          <Text style={styles.textOrder}>ORDER NOW</Text>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

export default Detail;

const height = Dimensions.get("screen").height;
const heightImage = height * 0.5 * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  footer: {
    flex: 1,
    paddingHorizontal: 40,
  },
  imageContainer: {
    width: heightImage,
    height: heightImage,
    marginTop: heightImage / 3,
  },
  image: {
    width: "100%",
    height: "100%",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: heightImage / 2,
  },
  back: {
    position: "absolute",
    left: 0,
    marginTop: 30,
    marginLeft: 15,
  },
  status: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 3,
    borderColor: "green",
  },
  priceText: {
    color: "green",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 20,
  },
  nameText: {
    color: "#3e3c3e",
    fontWeight: "bold",
    fontSize: 45,
    marginTop: 5,
  },
  detailText: {
    color: "gray",
    marginTop: 10,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  textOrder: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
