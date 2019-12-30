import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '~/pages/Login';
import BootScreen from '~/pages/BootScreen';

const MainStackNavigator = createStackNavigator({
  Init: {
    screen: BootScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#3f966b',
      },
      headerTintColor: '#fff',
      title: 'Amazing Shop',
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#3f966b',
      },
      headerTintColor: '#fff',
      title: 'Amazing Shop',
    }),
  },
});

const Routes = createAppContainer(
  createSwitchNavigator({
    Login: MainStackNavigator,
  }),
);

export default Routes;
