import React, { useContext } from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import userContext from "../store/context/userContext";

const Login = () => {
  const userState = useContext(userContext);

  setAsync = async () => {
    try {
      await AsyncStorage.setItem("token", "leoLI");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>This is Login</Text>
      <Button
        title="login"
        onPress={() => {
          userState.userContext.signIn({
            isAuthenticated: true,
            username: "Leo",
            password: "666666",
          });
          setAsync();
          console.log(userState.userState);
        }}
      ></Button>
    </View>
  );
};

export default Login;
