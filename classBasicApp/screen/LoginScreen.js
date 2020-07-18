import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Animated,
} from "react-native";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorMessage: null,
    };
  }
  componentDidMount() {
    //onsole.log("this is Login");
  }

  handleLogin = () => {
    const { email, password } = this.state;

    this.props.navigation.navigate("BottomTabRoute");
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={styles.inner}>
              <StatusBar barStyle="light-content"></StatusBar>
              <Image
                source={require("../assets/header.png")}
                style={{ marginTop: -550, marginLeft: -20 }}
              ></Image>
              <Animated.View>
                <Image
                  source={require("../assets/logo.png")}
                  style={{
                    width: 100,
                    height: 100,
                    marginTop: -100,
                    alignSelf: "center",
                  }}
                ></Image>
              </Animated.View>
              <Text style={styles.greeding}>{`Hellow!\nWellcome Back!`}</Text>
              <View style={styles.errorMessage}>
                {this.state.errorMessage && (
                  <Text style={styles.error}>{this.state.errorMessage}</Text>
                )}
              </View>
              <View style={styles.form}>
                <View>
                  <Text style={styles.inputTitle}>Email Address</Text>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(text) => {
                      this.setState({ email: text });
                    }}
                    value={this.state.email}
                  ></TextInput>
                </View>
                <View style={{ marginTop: 32 }}>
                  <Text style={styles.inputTitle}>Password</Text>
                  <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={(text) => {
                      this.setState({ password: text });
                    }}
                  ></TextInput>
                </View>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  console.log(this.state);
                  this.handleLogin();
                }}
              >
                <Text style={{ fontSize: 16, color: "#FFF" }}>Log In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ alignSelf: "center", marginTop: 32 }}
                onPress={() => {
                  this.props.navigation.navigate("SignUp");
                }}
              >
                <Text style={{ fontSize: 13, color: "#414959" }}>
                  New To SocialApp?{" "}
                  <Text style={{ fontWeight: "500", color: "#E9446A" }}>
                    Sign Up
                  </Text>
                </Text>
              </TouchableOpacity>
              <View style={{ flex: 1 }}></View>
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeding: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
  },
  errorMessage: {
    height: 72,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
  },
  error: {
    color: "#E9446A",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
  },
  form: {
    marginBottom: 48,
    marginHorizontal: 30,
  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 14,
    textTransform: "uppercase",
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D",
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "#E9446A",
    borderRadius: 10,
    height: 52,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-end",
  },
});
