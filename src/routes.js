import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Animated, Easing} from 'react-native';

// Page imports
import Login from '~/pages/Login';
import BootScreen from '~/pages/BootScreen';
import Main from '~/pages/Main';

let SlideFromRight = (index, position, width) => {
  // const inputRange = [index - 1, index, index + 1];
  const translateX = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [width, 0, 0],
  });
  const slideFromRight = {transform: [{translateX}]};
  return slideFromRight;
};

let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1],
  });

  return {
    opacity,
    transform: [{scaleY}],
  };
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 200,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;
      const width = layout.initWidth;
      const {index, route} = scene;
      const params = route.params || {};
      const transition = params.transition || 'default';
      return {
        collapseExpand: CollapseExpand(index, position),
        default: SlideFromRight(index, position, width),
      }[transition];
    },
  };
};

const AuthStackNavigator = createStackNavigator(
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
  },
);

const MainStackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
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
  },
);

const Routes = createAppContainer(
  createSwitchNavigator({
    Login: AuthStackNavigator,
    Main: MainStackNavigator,
  }),
);

export default Routes;
