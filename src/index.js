import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from './store';
// import NavigationService from './services/NavigationService';
import { NavigationContainer } from "@react-navigation/native";
// import { MainStackNavigator } from "./navigation/StackNavigator";

import DrawerNavigator from "./navigation/DrawerNavigator";


// import Routes from '~/routes';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
