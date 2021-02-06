import React from 'react';
import {Provider} from 'react-redux';
import {InAppNotificationProvider} from 'react-native-in-app-notification';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import store from './store';
import './config/ReactotronConfig';
import Notification from './notification/default';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <InAppNotificationProvider notificationBodyComponent={Notification} backgroundColour={'#fff'}>
        <DrawerNavigator />
      </InAppNotificationProvider>
    </NavigationContainer>
  </Provider>
);

export default App;
