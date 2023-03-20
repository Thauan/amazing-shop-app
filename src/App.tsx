import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {CartProvider} from './contexts/CartContext';

const App = () => (
  <GestureHandlerRootView style={{flex: 1}}>
    <CartProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </CartProvider>
  </GestureHandlerRootView>
);

export default App;
