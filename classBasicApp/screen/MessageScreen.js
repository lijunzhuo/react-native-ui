import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  Button,
  Linking,
  AppState,
  ActivityIndicator,
} from "react-native";
import * as IntentLauncher from "expo-intent-launcher";
import MapView, { Marker } from "react-native-maps";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import * as Location from "expo-location";
import Modal from "react-native-modal";

// Object {
//   "coords": Object {
//     "accuracy": 65,
//     "altitude": 665.8611450195312,
//     "altitudeAccuracy": 24.880550384521484,
//     "heading": -1,
//     "latitude": 53.540270148537516,
//     "longitude": -113.5085708174031,
//     "speed": -1,
//   },
//   "timestamp": 1593579915593.721,
// }
// before get token
// after get token
// ExponentPushToken[q6PLrvFxK2aE-uodSkFcWw]
// Object {
//   "email": "ljunzhuo@gmail.com",
//   "errorMessage": null,
//   "password": "666666",
// }
// permission

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      location: null,
      errorMessage: null,
      isLocationModalVisible: false,
      openSetting: true,
      appState: AppState.currentState,
    };
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this.handleAppStateChange);
  }

  componentWillMount() {
    console.log("This is Message");
    AppState.addEventListener("change", this.handleAppStateChange);
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Opps, this will not work on Stetch in an Android emulator. Try it on your device!",
      });
    } else {
      //get location
      this._getLocationAsync();
    }
  }

  handleAppStateChange = (nextAppState) => {
    if (
      //当用户从设置中返回时，重新设置地理位置
      this.state.appState.match(/inactive | background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
      this._getLocationAsync();
    }
    this.setState({ appState: nextAppState });
  };

  _getLocationAsync = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== "granted") {
        this.setState({
          errorMessage: "Permissoin to access location was denined",
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
      console.log(location);
    } catch (error) {
      let status = Location.getProviderStatusAsync();
      if (!status.locationServicesEnabled) {
        this.setState({ isLocationModalVisible: true });
      }
    }
  };

  openSetting = () => {
    if (Platform.OS === "ios") {
      Linking.openURL("app-settings:");
    } else {
      IntentLauncher.startActivityAsync(
        IntentLauncher.ACTION_LOCATION_SOURCE_SETTINGS
      );
    }
    this.setState({ openSetting: false });
  };

  render() {
    LayoutAnimation.easeInEaseOut();
    return (
      <View style={styles.container}>
        {this.state.errorMessage ? (
          <View>
            <Text>Cannot get current Location</Text>
            <Text>{this.state.errorMessage}</Text>
          </View>
        ) : (
          <Text>{JSON.stringify(this.state.location)}</Text>
        )}
        {this.state.location ? (
          <View>
            <MapView
              style={{ height: 400, width: 400 }}
              initialRegion={{
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.0921,
              }}
            >
              <Marker
                coordinate={{
                  latitude: this.state.location.coords.latitude,
                  longitude: this.state.location.coords.longitude,
                }}
                title="You Are Here"
              ></Marker>
            </MapView>
            <Text>{this.state.location.coords.latitude}</Text>
            <Text>{this.state.location.coords.longitude}</Text>
          </View>
        ) : (
          <ActivityIndicator></ActivityIndicator>
        )}
        <Modal
          isVisible={this.state.isLocationModalVisible}
          onModalHide={this.state.openSetting ? this.openSetting : undefined}
        >
          <View
            style={{
              height: 300,
              width: 300,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              title="Enable Location Services"
              onPress={() => {
                this.setState({
                  isLocationModalVisible: false,
                  openSetting: true,
                });
              }}
            ></Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
});
