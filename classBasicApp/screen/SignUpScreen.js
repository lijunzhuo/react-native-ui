import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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

    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredential) => {
    //     return userCredential.user.updateProfile({
    //       displayName: this.state.name,
    //     });
    //   })
    //   .catch((error) => {
    //     this.setState({ errorMessage: error.message });
    //   });
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"></StatusBar>
        <Image
          source={require("../assets/header.png")}
          style={{ marginTop: -550, marginLeft: -20 }}
        ></Image>
        <TouchableOpacity
          style={styles.back}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Ionicons
            name="ios-arrow-round-back"
            size={32}
            color="#fff"
          ></Ionicons>
        </TouchableOpacity>
        <View
          style={{
            position: "absolute",
            top: 64,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text style={styles.greeding}>{`Hellow!\nWellcome To Sign Up!`}</Text>
          <TouchableOpacity style={styles.avatar}>
            <Ionicons
              name="ios-add"
              size={40}
              color="#FFF"
              style={{ marginTop: 6, marginLeft: 2 }}
            ></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={styles.errorMessage}>
          {this.state.errorMessage && (
            <Text style={styles.error}>{this.state.errorMessage}</Text>
          )}
        </View>
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Full Name</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(text) => {
                this.setState({ name: text });
              }}
              value={this.state.name}
            ></TextInput>
          </View>
          <View style={{ marginTop: 32 }}>
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
          <Text style={{ fontSize: 16, color: "#FFF" }}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignSelf: "center", marginTop: 32 }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Text style={{ fontSize: 13, color: "#414959" }}>
            Already Have A SocialApp Account?{" "}
            <Text style={{ fontWeight: "500", color: "#E9446A" }}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  greeding: {
    marginTop: 100,
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
  back: {
    position: "absolute",
    top: 48,
    left: 32,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(21,22,48,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: "#E1E2E6",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
