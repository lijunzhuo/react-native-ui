import React, { useContext } from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import userContext from "../store/context/userContext";

const Home = () => {
  const userState = useContext(userContext);
  getToken = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value !== null) {
        console.log(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>This is Home</Text>
      <Button
        title="Log Out"
        onPress={async () => {
          userState.userContext.signOut();
          await getToken();
          console.log(userState.userState);
        }}
      ></Button>
    </View>
  );
};

export default Home;
