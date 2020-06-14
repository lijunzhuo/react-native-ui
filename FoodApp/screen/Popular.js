import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const Popular = () => {
  const inputData = [
    {
      name: "Alex Sander",
      rating: 5,
      comment: "Good",
      image: require("../assets/avatar1.png"),
    },
    {
      name: "Trong Thanh",
      rating: 3,
      comment: "OK",
      image: require("../assets/avatar2.png"),
    },
    {
      name: "Huynh Nhu",
      rating: 2,
      comment: "Bad",
      image: require("../assets/avatar3.png"),
    },
    {
      name: "Tring That",
      rating: 5,
      comment: "Good food!!!!",
      image: require("../assets/avatar4.png"),
    },
    {
      name: "Ngoc Trai",
      rating: 4,
      comment: "Nice!",
      image: require("../assets/avatar2.png"),
    },
    {
      name: "Hai Bang",
      rating: 2,
      comment: "normal",
      image: require("../assets/avatar4.png"),
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(inputData);
  }, []);

  rating = (count) => {
    let rating = [];
    for (i = 0; i < count; i++) {
      rating.push(
        <Image
          source={require("../assets/star.png")}
          style={{ width: 15, height: 15, marginRight: 3 }}
          resizeMode="cover"
          key={i.toString()}
        />
      );
    }
    return rating;
  };

  renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
        <View style={{ flexDirection: "row" }}>{rating(item.rating)}</View>
        <Text numberOfLines={2} style={styles.comment}>
          {item.comment}
        </Text>
      </View>
    );
  };

  seperator = () => {
    return <View style={{ height: 30 }}></View>;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={seperator}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={3}
      ></FlatList>
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: "green",
  },
  name: {
    color: "green",
    fontWeight: "bold",
  },
  comment: {
    fontStyle: "italic",
    marginTop: 5,
  },
});
