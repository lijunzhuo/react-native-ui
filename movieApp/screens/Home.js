import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
  ImageBackground,
  TextInput,
  FlatList,
} from "react-native";
import Carousel from "react-native-anchor-carousel";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  const [background, setBackground] = useState({
    uri: require("../assets/moviePostThree.jpg"),
    name: "The Shawshank Redemption",
    stat: "1994 . Action/Sci-fi . 2h 22m",
    desc:
      "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. ",
  });

  const [gallery, setGallery] = useState([
    {
      image: require("../assets/moviePostOne.jpg"),
      title: "The Shawshank Redemption",
      released: "September 10, 1994",
      desc:
        "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, based on the 1982 Stephen King novella Rita Hayworth and Shawshank Redemption. It tells the story of banker Andy Dufresne (Tim Robbins), who is sentenced to life in Shawshank State Penitentiary for the murders of his wife and her lover, despite his claims of innocence. ",
    },
    {
      image: require("../assets/moviePostTwo.jpg"),
      title: "Forrest Gump",
      released: "June 23, 1994",
      desc:
        "Forrest Gump is a 1994 American comedy-drama film directed by Robert Zemeckis and written by Eric Roth. It is based on the 1986 novel of the same name by Winston Groom and stars Tom Hanks, Robin Wright, Gary Sinise, Mykelti Williamson and Sally Field. The story depicts several decades in the life of Forrest Gump (Hanks)",
    },
    {
      image: require("../assets/moviePostThree.jpg"),
      title: "Batman: The Dark Knight",
      released: "July 14, 2008",
      desc:
        "The Dark Knight is a 2008 superhero film directed, produced, and co-written by Christopher Nolan. Based on the DC Comics character Batman, the film is the second installment of Nolan's The Dark Knight Trilogy and a sequel to 2005's Batman Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and Morgan Freeman",
    },
    {
      image: require("../assets/moviePostFour.jpg"),
      title: "Batman: The Dark Knight Rise",
      released: "July 16, 2012",
      desc:
        "The Dark Knight Rises is a 2012 superhero film directed by Christopher Nolan, who co-wrote the screenplay with his brother Jonathan Nolan, and the story with David S. Goyer.[5] Based on the DC Comics character Batman, it is the final installment in Nolan's The Dark Knight Trilogy, and the sequel to The Dark Knight (2008). Christian Bale stars as Bruce Wayne / Batman, alongside Michael Caine, Gary Oldman, Anne Hathaway, Tom Hardy, Marion Cotillard, Joseph Gordon-Levitt, and Morgan Freeman.",
    },
    {
      image: require("../assets/moviePostFive.jpg"),
      title: "Jocker",
      released: "August 31, 2019",
      desc:
        "Joker is a 2019 American psychological thriller film directed and produced by Todd Phillips, who co-wrote the screenplay with Scott Silver. The film, based on DC Comics characters, stars Joaquin Phoenix as the Joker and provides a possible origin story for the character. Set in 1981, it follows Arthur Fleck, a failed stand-up comedian whose descent into insanity and nihilism inspires a violent counter-cultural revolution against the wealthy in a decaying Gotham City. Robert De Niro, Zazie Beetz, Frances Conroy, Brett Cullen, Glenn Fleshler, Bill Camp, Shea Whigham, and Marc Maron appear in supporting roles",
    },
    {
      image: require("../assets/moviePostSix.jpg"),
      title: "God Father",
      released: "March 14, 1972",
      desc:
        "The Godfather is a 1972 American crime film directed by Francis Ford Coppola who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same name. It is the first installment in The Godfather trilogy. The film features an ensemble cast including Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton. ",
    },
  ]);

  const [data, setData] = useState([
    { image: require("../assets/moviePostOne.jpg"), key: 1 },
    { image: require("../assets/moviePostTwo.jpg"), key: 2 },
    { image: require("../assets/moviePostThree.jpg"), key: 3 },
    { image: require("../assets/moviePostFour.jpg"), key: 4 },
    { image: require("../assets/moviePostFive.jpg"), key: 5 },
    { image: require("../assets/moviePostSix.jpg"), key: 6 },
  ]);

  const carouselRef = useRef(null);

  const { width, height } = Dimensions.get("window");

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            carouselRef.current.scrollToIndex(index);
            setBackground({
              uri: item.image,
              name: item.title,
              stat: item.released,
              desc: item.desc,
            });
          }}
        >
          <Image source={item.image} style={styles.carouselImage} />
          <Text style={styles.carouselText}>{item.title}</Text>
          <MaterialIcons
            name="library-add"
            size={30}
            color="white"
            style={styles.carouselIcon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "#000" }}>
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.carouselContentContainer}>
        <View style={{ ...StyleSheet.absoluteFill, backgroundColor: "#000" }}>
          <ImageBackground
            source={background.uri}
            style={styles.ImageBg}
            blurRadius={10}
          >
            <View style={styles.searchBoxContainer}>
              <TextInput
                placeholder="Search Movies"
                placeholderTextColor="#666"
                style={styles.searchBox}
              />
              <Feather
                name="search"
                size={22}
                color="#666"
                style={styles.searchBoxIcon}
              ></Feather>
            </View>
            <Text
              style={{
                color: "white",
                fontSize: 12,
                fontWeight: "bold",
                marginLeft: 10,
                marginVertical: 10,
              }}
            >
              Top Picks This Week
            </Text>
            <View style={styles.carouselContainerView}>
              <Carousel
                style={styles.Carousel}
                data={gallery}
                renderItem={renderItem}
                itemWidth={200}
                containerWidth={width - 20}
                seperatorWidth={0}
                ref={carouselRef}
                inActiveOpacity={0.4}
              ></Carousel>
            </View>
            <View style={styles.movieInfoContainer}>
              <View style={{ justifyContent: "center" }}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <FontAwesome5
                  name="play"
                  size={22}
                  color="#02ad94"
                  style={{ marginLeft: 4 }}
                ></FontAwesome5>
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
              <Text style={{ color: "white", opacity: 0.8, lineHeight: 20 }}>
                {background.desc}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View style={{ marginHorizontal: 14 }}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            marginVertical: 14,
          }}
        >
          Content Watching
        </Text>
        <ImageBackground
          source={require("../assets/moviePostFive.jpg")}
          style={{ height: 250, width: "100%", backgroundColor: "#000" }}
          resizeMode="cover"
        >
          <Text style={{ color: "white", padding: 14 }}>This is Jocker</Text>
          <TouchableOpacity
            style={{
              ...styles.playIconContainer,
              position: "absolute",
              top: "40%",
              right: "40%",
            }}
          ></TouchableOpacity>
        </ImageBackground>
        <View
          style={{
            flexDirection: "row",
            height: 100,
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
            marginTop: 36,
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            My List
          </Text>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "normal" }}>
            View All
          </Text>
        </View>
        <FlatList
          style={{ marginBottom: 30 }}
          data={data}
          horizontal={true}
          keyExtractor={(item) => item.key.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={{ marginRight: 20 }}>
                <Image
                  source={item.image}
                  style={{ height: 300, width: 200 }}
                ></Image>
                <View
                  style={{
                    position: "absolute",
                    height: 5,
                    width: "100%",
                    backgroundColor: "#02ad94",
                    opacity: 0.8,
                  }}
                ></View>
                <FontAwesome5
                  name="play"
                  size={38}
                  color="#fff"
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "45%",
                    opacity: 0.8,
                  }}
                ></FontAwesome5>
              </TouchableOpacity>
            );
          }}
        ></FlatList>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  carouselContentContainer: {
    flex: 1,
    backgroundColor: "#000",
    height: 950,
    paddingHorizontal: 14,
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 1,
    justifyContent: "flex-start",
  },
  searchBoxContainer: {
    backgroundColor: "#fff",
    elevation: 10,
    borderRadius: 4,
    marginVertical: 20,
    width: "95%",
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 60,
  },
  searchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
  },
  searchBoxIcon: {
    position: "absolute",
    right: 20,
    top: 14,
  },
  carouselContainerView: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  Carousel: {
    flex: 1,
    overflow: "visible",
  },
  carouselImage: {
    width: 320,
    height: 350,
    borderRadius: 20,
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0.9)",
  },
  carouselText: {
    padding: 14,
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 2,
    fontWeight: "bold",
  },
  carouselIcon: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  movieInfoContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
    width: Dimensions.get("window").width - 14,
  },
  movieName: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 6,
  },
  movieStat: {
    paddingLeft: 14,
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.4,
  },
  playIconContainer: {
    backgroundColor: "#212121",
    padding: 18,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    borderWidth: 4,
    borderColor: "rgba(2,173,148,0.2)",
    marginBottom: 14,
  },
});
