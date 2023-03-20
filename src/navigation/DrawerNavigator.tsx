import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerComponent from '../components/Drawer';
import {MainStackNavigator} from './StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen
        name="Inicio"
        component={MainStackNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
