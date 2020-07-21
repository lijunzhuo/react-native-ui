import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";
import { Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../common/Login/context";
import AsyncStorage from "@react-native-community/async-storage";
import Modal from "react-native-modal";

const LoginScreen = ({ navigation }) => {
  const { loginState, loginAction } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [check_textInputChange, setCheck_textInputChange] = useState(false);
  const [isValidUser, setIsValidateUser] = useState(false);
  const [isValidPassword, setisValidPassword] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const storeData = async (key, value, callback) => {
    try {
      await AsyncStorage.setItem(key, value, callback);
    } catch (e) {
      console.log("data cannot be stored");
    }
  };

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

  const loginHandle = (email, password) => {
    console.log(email, password);
    if (rememberMe) {
      storeData(
        "USER_INFO",
        JSON.stringify({ email, password, userToken: "12345", rememberMe })
      );
    }
    loginAction.signIn(email, password);
    //navigation.navigate("Main");
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setIsValidateUser(true);
    }
  };

  useEffect(() => {
    getData("USER_INFO", (value) => {
      const userInfo = JSON.parse(value);
      if (userInfo.email) {
        setEmail(userInfo.email);
      }
      if (userInfo.password) {
        setPassword(userInfo.password);
      }
      if (userInfo.rememberMe) {
        setRememberMe(true);
      }
      if (
        userInfo.email.trim().length > 0 &&
        userInfo.password.trim().length > 0 &&
        userInfo.rememberMe
      ) {
        console.log("yes");
        loginAction.signIn(userInfo.email, userInfo.password);
      }
    });
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
          <Text style={[styles.text_footer]}>Email</Text>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <TextInput
              placeholder="Your Email"
              placeholderTextColor="#666666"
              style={[styles.textInput]}
              autoCapitalize="none"
              value={email}
              onChangeText={(val) => setEmail(val)}
              onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            />
            {check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>
          {isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )}

          <Text style={[styles.text_footer]}>Password</Text>
          <View style={styles.action}>
            <Feather name="lock" color="gray" size={20} />
            <TextInput
              placeholder="Your Password"
              placeholderTextColor="#666666"
              secureTextEntry={secureTextEntry ? true : false}
              style={[styles.textInput]}
              autoCapitalize="none"
              value={password}
              onChangeText={(val) => setPassword(val)}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureTextEntry(!setSecureTextEntry);
              }}
            >
              {secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          {isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )}

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              onPress={() => {
                setRememberMe(!rememberMe);
              }}
            >
              <MaterialIcons
                name={rememberMe ? "check-box" : "check-box-outline-blank"}
                color="#ff8c00"
                size={24}
              ></MaterialIcons>
            </TouchableOpacity>
            <Text
              style={{ marginTop: 3, marginLeft: 10, flex: 10, fontSize: 16 }}
            >
              Remember Me
            </Text>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(!isModalVisible);
              }}
            >
              <Text
                style={{
                  color: "#ff8c00",
                  marginTop: 3,
                  flex: 2,
                  fontSize: 16,
                }}
              >
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 2 }}>
            <TouchableOpacity
              onPress={() => {
                loginHandle(email, password);
              }}
            >
              <LinearGradient
                colors={["#0000ff", "#4b0082"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.button}>
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                loginHandle(email, password);
              }}
            >
              <LinearGradient
                colors={["#0000ff", "#4b0082"]}
                style={styles.signIn}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#fff",
                    },
                  ]}
                >
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                console.log("yes");
              }}
              style={[
                styles.signIn,
                {
                  borderColor: "#0000ff",
                  borderWidth: 1,
                  marginTop: 15,
                },
              ]}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#0000ff",
                  },
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View> */}
        </Animatable.View>
        <Modal
          testID={"modal"}
          isVisible={isModalVisible}
          customBackdrop={
            <SafeAreaView style={styles.customBackdrop}>
              <Text style={styles.customBackdropText}>
                I'm in the backdrop! 👋
              </Text>
            </SafeAreaView>
          }
        >
          <View style={styles.content}>
            <Text style={styles.contentTitle}>Hi 👋!</Text>
            <Button
              testID={"close-button"}
              onPress={() => {
                setIsModalVisible(false);
              }}
              title="Close"
            />
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000080",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
    marginTop: 20,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
  customBackdrop: {
    flex: 1,
    backgroundColor: "#87BBE0",
    alignItems: "center",
  },
  customBackdropText: {
    marginTop: 10,
    fontSize: 17,
  },
  content: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
});
