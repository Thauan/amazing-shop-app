import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainStackNavigator } from "./StackNavigator";
import CustomDrawerComponent from '../components/Drawer';

// import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen name="Inicio" component={MainStackNavigator} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
