import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Animated,
  Easing,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {Creators as favoriteCreators} from '~/store/ducks/favor';
// import {useDarkMode} from 'react-native-dark-mode';
import {createDrawerNavigator} from 'react-navigation-drawer';

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

const AuthStackNavigator = createStackNavigator({
  Init: {
    screen: BootScreen,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#2e2e97',
      title: 'Amazing Shop',
    }),
  },
  Login: {
    screen: Login,
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#2e2e97',
      title: 'Amazing Shop',
    }),
  },
});

// let isDarkMode = useDarkMode();

// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: Main,
//     navigationOptions: ({navigate, navigation}, props) => ({
//       headerRight: (
//         <View
//           style={{
//             marginEnd: 20,
//             marginTop: Platform === 'ios' ? 25 : 5,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             width: 68,
//           }}>
//           <TouchableOpacity onPress={() => console.log('toggle favorited')}>
//             <Icon name={true ? 'heart' : 'heart-o'} size={25} color="#fff" />
//           </TouchableOpacity>
//           <View
//             style={{
//               backgroundColor: '#ff1759',
//               width: 15,
//               height: 15,
//               borderRadius: 20,
//               justifyContent: 'center',
//               alignItems: 'center',
//               left: 30,
//               zIndex: 100,
//             }}>
//             <Text
//               style={{
//                 color: '#fff',
//                 fontWeight: 'bold',
//                 fontSize: 10,
//                 marginBottom: 2,
//               }}>
//               7
//             </Text>
//           </View>
//           <TouchableOpacity onPress={() => console.log('toggle favorited')}>
//             <Icon name={'shopping-bag'} size={25} color="#ffff" />
//           </TouchableOpacity>
//         </View>
//       ),
//       headerLeft: (
//         <View style={{marginStart: 20, marginTop: Platform === 'ios' ? 25 : 5}}>
//           <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//             <Icon name="bars" size={25} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       ),
//       headerTitle: (
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             marginTop: Platform === 'ios' ? 25 : 5,
//           }}>
//           <Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold'}}>
//             Amazing Shop
//           </Text>
//         </View>
//       ),
//       headerShown: true,
//       headerTransparent: true,
//       headerStyle: {
//         backgroundColor: 'transparent',
//         zIndex: 100,
//         shadowOpacity: 0,
//         borderBottomWidth: 0,
//       },
//     }),
//   },
//   Login: {
//     screen: Login,
//     navigationOptions: () => ({
//       headerStyle: {
//         backgroundColor: '#fff',
//       },
//       headerTintColor: '#2e2e97',
//       title: 'Amazing Shop',
//     }),
//   },
// });

const MainStackNavigator = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: ({navigate, navigation}, props) => ({
        headerRight: (
          <View
            style={{
              marginEnd: 20,
              marginTop: Platform === 'ios' ? 25 : 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: 68,
            }}>
            <TouchableOpacity onPress={() => console.log('toggle favorited')}>
              <Icon name={true ? 'heart' : 'heart-o'} size={25} color="#fff" />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#ff1759',
                width: 15,
                height: 15,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                left: 30,
                zIndex: 100,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: 10,
                  marginBottom: 2,
                }}>
                7
              </Text>
            </View>
            <TouchableOpacity onPress={() => console.log('toggle favorited')}>
              <Icon name={'shopping-bag'} size={25} color="#ffff" />
            </TouchableOpacity>
          </View>
        ),
        headerLeft: (
          <View
            style={{marginStart: 20, marginTop: Platform === 'ios' ? 25 : 5}}>
            <TouchableOpacity onPress={e => console.log(e)}>
              <Icon name="bars" size={25} color="#fff" />
            </TouchableOpacity>
          </View>
        ),
        headerTitle: (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginTop: Platform === 'ios' ? 25 : 5,
            }}>
            <Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold'}}>
              Amazing Shop
            </Text>
          </View>
        ),
        headerShown: true,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: 'transparent',
          zIndex: 100,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
      }),
    },
  },
  {
    transitionConfig: TransitionConfiguration,
  },
);

const Routes = createAppContainer(
  createSwitchNavigator({
    Main: MainStackNavigator,
    Login: AuthStackNavigator,
  }),
);

export default Routes;
