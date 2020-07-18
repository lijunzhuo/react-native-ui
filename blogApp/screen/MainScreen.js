import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import TouchablrScale from "react-native-touchable-scale";
import { data, popular, profile } from "../common/data";
import { Feather, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MainScreen({ navigation }) {
  const { width, height } = Dimensions.get("window");

  let [list, setList] = useState(popular);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerDate}>{profile.date}</Text>
          <Text style={styles.headerTitle}>Sneakers</Text>
        </View>
        <View>
          <TouchablrScale
            activeScale={0.6}
            tension={50}
            friction={7}
            useNativeDriver
          >
            <Image
              source={profile.profilePic}
              style={styles.headerImage}
              resizeMode="cover"
            ></Image>
          </TouchablrScale>
          <View style={styles.headerImageNotification}></View>
        </View>
      </View>
      <View>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 30 }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View>
                <View>
                  <TouchablrScale
                    activeScale={0.9}
                    tension={50}
                    friction={7}
                    useNativeDriver
                    onPress={() => {
                      navigation.navigate("Detail", { data: item });
                    }}
                  >
                    <SharedElement id={`{item.${item.id}}.photo`}>
                      <Image
                        source={item.image}
                        resizeMode="cover"
                        style={{
                          width: width - 90,
                          height: height - 450,
                          borderRadius: 14,
                          marginRight: 30,
                        }}
                      ></Image>
                    </SharedElement>
                    <SharedElement
                      id={`item.${item.id}.text`}
                      style={{
                        width: width - 90,
                        position: "absolute",
                        bottom: 90,
                        left: 10,
                        paddingHorizontal: 10,
                      }}
                    >
                      <Text style={styles.blogTitle}>{item.title}</Text>
                    </SharedElement>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                      }}
                    >
                      <SharedElement id={`item.${item.id}.profilePic`}>
                        <Image
                          source={item.profilePic}
                          style={styles.blogProfilePic}
                          resizeMode="cover"
                        ></Image>
                      </SharedElement>
                      <View>
                        <SharedElement id={`item.${item.id}.username`}>
                          <Text style={styles.blogUsername}>
                            {item.username}
                          </Text>
                        </SharedElement>
                        <SharedElement id={`item.${item.id}.readtime`}>
                          <Text style={styles.blogReadTime}>
                            {item.readtime}
                          </Text>
                        </SharedElement>
                      </View>
                    </View>
                  </TouchablrScale>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 30,
          paddingVertical: 30,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Popular</Text>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => {
            navigation.navigate("Popular");
          }}
        >
          <Text style={{ color: "orange", fontWeight: "bold" }}>Show All</Text>
          <AntDesign
            name="right"
            size={12}
            color="orange"
            style={{ marginTop: 3, marginHorizontal: 3 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        onEndReachedThreshold={0}
        onEndReached={() => {
          setList(list.concat(popular));
        }}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                paddingBottom: 30,
                paddingLeft: 30,
                alignItems: "center",
              }}
            >
              <View style={{ marginRight: 30 }}>
                <Image
                  source={item.image}
                  style={{ width: 100, height: 100, borderRadius: 10 }}
                  resizeMode="cover"
                ></Image>
              </View>
              <View style={{ width: "60%" }}>
                <Text
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    marginBottom: 4,
                  }}
                >
                  {item.topic}
                </Text>
                <Text
                  style={{ fontWeight: "bold", fontSize: 18, marginBottom: 10 }}
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    opacity: 0.4,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      marginRight: 16,
                      alignItems: "center",
                    }}
                  >
                    <Feather name="book-open" size={14} color="#000"></Feather>
                    <Text style={{ marginHorizontal: 4, fontSize: 12 }}>
                      {item.readtime}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      marginRight: 16,
                      alignItems: "center",
                    }}
                  >
                    <Feather name="thumbs-up" size={14} color="#000"></Feather>
                    <Text style={{ marginHorizontal: 4, fontSize: 12 }}>
                      {item.likes}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerDate: {
    fontSize: 14,
    fontWeight: "700",
    color: "orange",
    textTransform: "uppercase",
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
  headerImage: {
    width: 55,
    height: 65,
    borderRadius: 10,
  },
  headerImageNotification: {
    height: 14,
    width: 14,
    borderRadius: 6,
    position: "absolute",
    backgroundColor: "red",
    right: -4,
    top: -4,
    borderWidth: 2,
    borderColor: "white",
  },
  blogTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 28,
  },
  blogProfilePic: {
    height: 50,
    width: 50,
    borderRadius: 10,
    marginRight: 14,
  },
  blogUsername: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  blogReadTime: {
    fontSize: 14,
    color: "white",
  },
});
