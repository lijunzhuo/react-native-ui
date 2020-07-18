import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";

export default class LoadingScreen extends Component {
  componentDidMount() {
    this.props.navigation.navigate("Login");
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
