import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  AreaChart,
  Grid,
  StackedAreaChart,
  LineChart,
  YAxis,
} from "react-native-svg-charts";
import * as shape from "d3-shape";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PopularScreen({ navigation }) {
  const data = [
    {
      month: new Date(2015, 0, 1),
      apples: 3840,
      bananas: 1920,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 1, 1),
      apples: 1600,
      bananas: 1440,
      cherries: 960,
      dates: 400,
    },
    {
      month: new Date(2015, 2, 1),
      apples: 640,
      bananas: 960,
      cherries: 3640,
      dates: 400,
    },
    {
      month: new Date(2015, 3, 1),
      apples: 3320,
      bananas: 480,
      cherries: 640,
      dates: 400,
    },
  ];

  const colors = ["#8800cc", "#aa00ff", "#cc66ff", "#eeccff"];
  const keys = ["apples", "bananas", "cherries", "dates"];
  const svgs = [
    { onPress: () => console.log("apples") },
    { onPress: () => console.log("bananas") },
    { onPress: () => console.log("cherries") },
    { onPress: () => console.log("dates") },
  ];
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          paddingVertical: 30,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{ flex: 1 }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flex: 16,
            textAlign: "center",
          }}
        >
          Popular Items
        </Text>
        <View style={{ flex: 1 }}></View>
      </View>
      <View>
        <StackedAreaChart
          style={{ height: 200, paddingVertical: 16 }}
          data={data}
          keys={keys}
          colors={colors}
          curve={shape.curveNatural}
          showGrid={false}
          svgs={svgs}
          animate={true}
          animationDuration={200}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
