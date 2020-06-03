import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Feather, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passowrdShow, setPasswordShow] = useState(false);
  const [confirmPassowrdShow, setConfirmPasswordShow] = useState(false);

  const checkEmail = () => {
    if (email.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Wellcome!</Text>
        </View>
        <Animatable.View style={styles.footer} animation={"fadeInUpBig"}>
          <Animatable.View animation="bounceIn" style={styles.closeButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SplashPage");
              }}
            >
              <AntDesign name="closecircleo" size={20} color="black" />
            </TouchableOpacity>
          </Animatable.View>
          <Text style={styles.textFooter}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20}></FontAwesome>
            <TextInput
              placeholder="Your  Email..."
              style={styles.textInput}
              onChangeText={(val) => setEmail(val)}
            ></TextInput>
            {checkEmail() ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20}></Feather>
              </Animatable.View>
            ) : null}
          </View>
          <Text style={[styles.textFooter, { marginTop: 35 }]}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20}></Feather>
            <TextInput
              placeholder="Your Password ..."
              style={styles.textInput}
              onChangeText={(val) => setPassword(val)}
              secureTextEntry={!passowrdShow}
            ></TextInput>
            {passowrdShow ? (
              <TouchableOpacity onPress={() => setPasswordShow(false)}>
                <Animatable.View animation="bounceIn">
                  <Feather name="eye" color="green" size={20}></Feather>
                </Animatable.View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setPasswordShow(true)}>
                <Animatable.View animation="bounceIn">
                  <Feather name="eye-off" color="gray" size={20}></Feather>
                </Animatable.View>
              </TouchableOpacity>
            )}
          </View>
          <Text style={[styles.textFooter, { marginTop: 35 }]}>
            Confirm Password
          </Text>
          <View style={styles.action}>
            <Feather name="lock" color="#05375a" size={20}></Feather>
            <TextInput
              placeholder="Your Password ..."
              style={styles.textInput}
              onChangeText={(val) => setConfirmPassword(val)}
              secureTextEntry={!confirmPassowrdShow}
            ></TextInput>
            {confirmPassowrdShow ? (
              <TouchableOpacity onPress={() => setConfirmPasswordShow(false)}>
                <Animatable.View animation="bounceIn">
                  <Feather name="eye" color="green" size={20}></Feather>
                </Animatable.View>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => setConfirmPasswordShow(true)}>
                <Animatable.View animation="bounceIn">
                  <Feather name="eye-off" color="gray" size={20}></Feather>
                </Animatable.View>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.textPrivateColor}>
              By signing up you agree to your
            </Text>
            <Text style={[styles.textPrivateColor, { fontWeight: "bold" }]}>
              Terms of Service
            </Text>
            <Text style={styles.textPrivateColor}> and</Text>
            <Text style={[styles.textPrivateColor, { fontWeight: "bold" }]}>
              Privacy Policy
            </Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                alert("Sign Up");
              }}
            >
              <LinearGradient
                colors={["#5db8fe", "#39cff2"]}
                style={styles.signIn}
              >
                <Text
                  style={[styles.textSign, { color: "white", fontSize: 20 }]}
                >
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05375a",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textHeader: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  textFooter: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  textPrivateColor: {
    color: "gray",
  },
});
