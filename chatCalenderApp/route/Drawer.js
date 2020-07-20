import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerHome from "./HomeStack";
import DrawerChart from "./ChartStack";
import DrawerCalender from "./CalenderStack";
import DrawerContent from "../component/DrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerStack() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="DrawerHome" component={DrawerHome}></Drawer.Screen>
      <Drawer.Screen name="DrawerChart" component={DrawerChart}></Drawer.Screen>
      <Drawer.Screen
        name="DrawerCalender"
        component={DrawerCalender}
      ></Drawer.Screen>
    </Drawer.Navigator>
  );
}
