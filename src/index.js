import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
