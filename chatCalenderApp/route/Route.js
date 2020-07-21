import React, { useState, useEffect, useMemo, useReducer } from "react";
import { View, ActivityIndicator } from "react-native";
import Drawer from "./Drawer";
import LoginScreen from "../screen/LoginScreen";
import { AuthContext } from "../common/Login/context";
import { loginReducer, initLoginState } from "../common/Login/Reducer";
import AsyncStorage from "@react-native-community/async-storage";

export default function Route() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

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

  const [loginState, dispatch] = useReducer(loginReducer, initLoginState);

  const authContext = useMemo(() => {
    return {
      signIn: async (email, password) => {
        let userToken = "";
        if (email === "666666" && password === "666666") {
          //send fetch request to server and get the user token;
          userToken = "123456";
        }
        if (userToken.trim().length > 0) {
          storeData("TOKEN", userToken, () => {
            dispatch({ type: "LOGIN", email, token: userToken });
          });
        }
        //setUserToken("123456");
        //setIsLoading(false);
      },
      signOut: () => {
        //setUserToken(null);
        //setIsLoading(false);
        dispatch({ type: "LOGOUT" });
      },
      signUp: (email) => {
        //setUserToken("123456");
        //setIsLoading(false);
        if (email.trim().length > 0) {
          let userToekn = "";
          //send fetch request to server and get the user token;
          userToken = "123456";
          dispatch({ type: "REGISTER", email, token: userToken });
        }
      },
    };
  });

  useEffect(() => {
    setTimeout(() => {
      //setIsLoading(false);
      dispatch({ type: "RETRIEVE_IS_LOADING" });
    }, 4000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  } else {
    return (
      <AuthContext.Provider value={{ loginState, loginAction: authContext }}>
        {loginState.userToken.trim().length > 0 ? (
          <Drawer></Drawer>
        ) : (
          <LoginScreen></LoginScreen>
        )}
      </AuthContext.Provider>
    );
  }
}
