import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Feather } from "@expo/vector-icons";

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default function DetailScreen(props) {
  const { width, height } = Dimensions.get("window");
  const { data } = props.route.params;

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <SharedElement id={`item.${data.id}.photo`}>
          <Image
            source={data.image}
            resizeMode="cover"
            style={{
              width: "100%",
              height: height - 400,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          ></Image>
        </SharedElement>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            position: "absolute",
            bottom: 14,
            left: 10,
          }}
        >
          <SharedElement id={`item.${data.id}.profilePic`}>
            <Image
              source={data.profilePic}
              resizeMode="cover"
              style={{
                width: 60,
                height: 60,
                borderRadius: 10,
                marginRight: 14,
              }}
            ></Image>
          </SharedElement>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: 20,
            }}
          >
            <View>
              <SharedElement id={`item.${data.id}.username`}>
                <Text
                  style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
                >
                  {data.username}
                </Text>
              </SharedElement>
              <SharedElement id={`item.${data.id}.readtime`}>
                <Text style={{ color: "white", fontSize: 14 }}>
                  {data.username}
                </Text>
              </SharedElement>
            </View>
            <TouchableOpacity>
              <Feather name="bookmark" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, paddingTop: 14 }}>
        <SharedElement
          id={`item.${data.id}.text`}
          style={{ width: width - 30, marginBottom: 14 }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold", lineHeight: 32 }}>
            {data.title}
          </Text>
        </SharedElement>
        <Text
          style={{
            fontSize: 14,
            lineHeight: 28,
            textAlign: "justify",
            opacity: 0.5,
          }}
        >
          {data.description}
        </Text>
        <View>
          <View
            style={{
              marginVertical: 15,
              marginBottom: 20,
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                padding: 12,
                alignItems: "center",
              }}
            >
              <Feather name="heart" size={16} color="orange"></Feather>
              <Text
                style={{ marginHorizontal: 10 }}
              >{`${data.like}  Likes`}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 12,
                width: 100,
                backgroundColor: "orange",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Follow
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{ position: "absolute", top: 40, left: 10 }}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
        >
          <Feather name="arrow-left" size={24} color="black"></Feather>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
});
