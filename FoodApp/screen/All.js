import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const All = ({ navigation }) => {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");

  let inputData = [
    {
      name: "Stewed Mushrooms",
      image: require("../assets/namkho.jpg"),
      rating: 3,
      price: "$12",
    },
    {
      name: "Jackfruit Fired",
      image: require("../assets/mitkho.jpg"),
      rating: 5,
      price: "$15",
    },
    {
      name: "Noodles",
      image: require("../assets/hutieu.jpg"),
      rating: 4,
      price: "$20",
    },
    {
      name: "Beef",
      image: require("../assets/cuonlalot.jpg"),
      rating: 2,
      price: "$12",
    },
    {
      name: "Salad dressing",
      image: require("../assets/cuondiep.jpg"),
      rating: 5,
      price: "$10",
    },
  ];

  useEffect(() => {
    setData(inputData);
    setAllData(inputData);
  }, []);

  renderRating = (item) => {
    let rating = [];
    for (i = 0; i < item; i++) {
      rating.push(
        <Image
          key={i}
          source={require("../assets/star.png")}
          style={{ width: 15, height: 15, marginRight: 3 }}
          resizeMode="cover"
        ></Image>
      );
    }
    return rating;
  };

  renderItem = ({ item }) => {
    return (
      <LinearGradient
        colors={["#009245", "#8cc631"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        style={styles.item}
      >
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.image}></Image>
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.rating}>{renderRating(item.rating)}</View>
          <View style={styles.priceContainer}>
            <View style={styles.price}>
              <Text>{item.price}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Detail", {
              image: item.image,
              price: item.price,
              name: item.name,
            })
          }
        >
          <AntDesign name="arrowright" color="green" size={15}></AntDesign>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  itemSeparatorComponent = () => {
    return <View style={{ height: 10 }}></View>;
  };

  search = (text) => {
    let result = [];
    result = allData.filter((item) => item.name.includes(text));
    setData(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <TextInput
          placeholder="Search"
          style={{ flex: 1, marginLeft: 10, fontSize: 15 }}
          value={searchText}
          onChangeText={(val) => {
            setSearchText(val);
            search(val);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            setSearchText("");
            setData(allData);
          }}
        >
          <Ionicons name="ios-close" color="gray" size={20}></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={styles.flateList}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={itemSeparatorComponent}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  flateList: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  imageContainer: {
    width: 90,
    height: 90,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "white",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderWidth: 5,
    borderColor: "white",
    borderRadius: 10,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  rating: {
    marginTop: 5,
    flexDirection: "row",
  },
  priceContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  price: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  priceText: {
    color: "green",
    fontWeight: "bold",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: "#f2f2f2",
    marginTop: 20,
    marginBottom: 10,
  },
});
