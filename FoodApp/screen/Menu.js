import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const Menu = ({ navigation }) => {
  let inputData = [
    {
      type: "Other",
      color: "#ed1e79",
      data: [
        {
          name: "Salad Dressing",
          image: require("../assets/cuondiep.jpg"),
          price: "$18",
        },
        {
          name: "Jackfriud Warehouse",
          image: require("../assets/mitkho.jpg"),
          price: "$15",
        },
      ],
    },
    {
      type: "Main Course",
      color: "#39b54a",
      data: [
        {
          name: "Noodles",
          image: require("../assets/hutieu.jpg"),
          rating: 4,
          price: "$20",
        },
        {
          name: "Beef",
          image: require("../assets/cuonlalot.jpg"),
          rating: 5,
          price: "$12",
        },
        {
          name: "Salad dressing",
          image: require("../assets/cuondiep.jpg"),
          rating: 2,
          price: "$12",
        },
      ],
    },
    {
      type: "Dessert",
      color: "#f7931e",
      data: [
        {
          name: "Stewed Mushrooms",
          image: require("../assets/namkho.jpg"),
          price: "$12",
        },
        {
          name: "Jackfriud Fried",
          image: require("../assets/mitkho.jpg"),
          price: "$15",
        },
      ],
    },
  ];

  const [data, setDate] = useState([]);

  useEffect(() => {
    setDate(inputData);
  }, []);

  renderType = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.itemType}
        onPress={() => {
          navigation.navigate("Detail", {
            image: item.image,
            price: item.price,
            name: item.name,
          });
        }}
      >
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  seperatorCOmponentType = () => {
    return <View style={{ width: 10 }}></View>;
  };

  renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1 }}>
        <Text style={[styles.type, { color: item.color }]}>{item.type}</Text>
        <View style={[styles.item, { backgroundColor: item.color }]}>
          <FlatList
            data={item.data}
            renderItem={renderType}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={seperatorCOmponentType}
          ></FlatList>
        </View>
      </View>
    );
  };

  seperatorComponent = () => {
    return <View style={{ height: 20 }}></View>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={seperatorComponent}
      ></FlatList>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  type: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  item: {
    marginTop: 10,
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  itemType: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  name: {
    marginTop: 10,
    color: "white",
    fontSize: 15,
  },
});
