import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Animated, Easing} from 'react-native';

// Page imports
import Login from '~/pages/Login';
import BootScreen from '~/pages/BootScreen';

//Slide from right animation
let SlideFromRight = (index, position, width) => {
  // const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  const slideFromRight = {transform: [{translateX}]};
  return slideFromRight;
};

//Transition configurations for createStackNavigator
const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 300,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const width = layout.initWidth;
      const {index} = scene;
      return SlideFromRight(index, position, width);
    },
  };
};

const MainStackNavigator = createStackNavigator(
  {
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
  },
  {
    transitionConfig: TransitionConfiguration,
    // transitionConfig: navigationConfig,
  },
);

const Routes = createAppContainer(
  createSwitchNavigator({
    Login: MainStackNavigator,
  }),
);

export default Routes;
