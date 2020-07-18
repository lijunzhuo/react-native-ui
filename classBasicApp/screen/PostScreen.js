import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
//import Fire from "../common/firebase";

export default class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      image: null,
    };
  }
  componentDidMount() {
    console.log("permission");
    this.getPhotoPermission();
  }

  getPhotoPermission = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status != "granted") {
        alert("Camera Permission is needed!!!");
      } else {
        console.log("got permission");
      }
    }
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
    });

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="md-arrow-back" size={24} color="#d8d9db"></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontWeight: "500" }}>Post</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.avatar}
          ></Image>
          <TextInput
            autoFocus={true}
            multiline={true}
            numberOfLines={4}
            style={{ flex: 1 }}
            placeholder="Want to Share Something?"
          />
        </View>
        <TouchableOpacity
          style={styles.photo}
          onPress={() => {
            this.pickImage();
          }}
        >
          <Ionicons name="md-camera" size={35} color="#d8d9db"></Ionicons>
        </TouchableOpacity>
        <View style={{ marginHorizontal: 32, marginTop: 32, height: 150 }}>
          {this.state.image ? (
            <Image
              source={{ uri: this.state.image }}
              style={{ width: "100%", height: "100%" }}
            ></Image>
          ) : null}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#d8d9db",
  },
  inputContainer: {
    margin: 12,
    flexDirection: "row",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 24,
    marginRight: 26,
  },
  photo: {
    alignItems: "flex-end",
    marginHorizontal: 32,
  },
});
