import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
} from "react-native";
import {
  Feather,
  FontAwesome,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

export default class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.bs = React.createRef();
    this.fall = new Animated.Value(1);
  }

  renderInner = () => {
    return <Text>Hellow</Text>;
  };

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <View style={styles.panelHandle}></View>
        </View>
      </View>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <BottomSheet
          ref={this.bs}
          snapPoints={[330, 0]}
          initialSnap={[1]}
          callbackNode={this.fall}
          enabledContentGestureInteraction={true}
          renderContent={() => {
            this.renderInner();
          }}
          renderHeader={() => {
            this.renderHeader();
          }}
        />
        <View style={{ margin: 20 }}>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                () => {
                  this.bs.current.snapTo(0);
                };
              }}
            >
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://api.adorable.io/avatars/80/abott@adorable.png",
                  }}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{
                    borderRadius: 15,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Entypo
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: "center",
                        justifyContent: "center",
                        borderWidth: 1,
                        borderColor: "#fff",
                        borderRadius: 10,
                      }}
                    ></Entypo>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
            <Text style={{ marginTop: 10, fontSize: 10, fontWeight: "bold" }}>
              Leo Li
            </Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <TextInput
              placeholder="First Name"
              placeholderTextColor="#666"
              style={styles.textInput}
              autoCorrect={false}
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <TextInput
              placeholder="Last Name"
              placeholderTextColor="#666"
              style={styles.textInput}
              autoCorrect={false}
            />
          </View>
          <View style={styles.action}>
            <Entypo name="phone" size={20} />
            <TextInput
              placeholder="Phone"
              placeholderTextColor="#666"
              style={styles.textInput}
              autoCorrect={false}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.action}>
            <MaterialCommunityIcons name="email" size={20} />
            <TextInput
              placeholder="Email"
              placeholderTextColor="#666"
              style={styles.textInput}
              autoCorrect={false}
              keyboardType="email-address"
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="globe" size={20} />
            <TextInput
              placeholder="Country"
              placeholderTextColor="#666"
              style={styles.textInput}
              autoCorrect={false}
            />
          </View>
          <View style={styles.action}>
            <MaterialCommunityIcons name="city" size={20} />
            <TextInput
              placeholder="City"
              placeholderTextColor="#666"
              style={styles.textInput}
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#ff6374",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 0 },
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#fff",
    shadowColor: "#333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    //elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#ff6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ff0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    color: "#05375a",
  },
});
