import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      location: null,
    };
  }

  signOutHandler = () => {
    //firebase.auth().signOut();
    console.log("signed out");
  };
  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        <Text> Hi {this.state.email} </Text>
        <Text>Your Location:</Text>
        {this.state.errorMessage ? (
          <View>
            <Text>Cannot get current Location</Text>
            <Text>{this.state.errorMessage}</Text>
          </View>
        ) : (
          <Text>{JSON.stringify(this.state.location)}</Text>
        )}
        <TouchableOpacity
          onPress={() => {
            this.signOutHandler();
          }}
        >
          <Text style={{ marginTop: 32 }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
