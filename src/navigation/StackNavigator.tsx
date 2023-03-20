import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from '../screens/Home';
import Logo from '../components/Logo';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';
import {useCart} from '../contexts/CartContext';
import {useNavigation} from '@react-navigation/native';
import Cart from '../screens/Cart';

Icon.loadFont();

const Stack = createStackNavigator();

const forSlide = ({current, next, inverted, layouts: {screen}}: any) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp',
        })
      : 0,
  );

  return {
    cardStyle: {
      transform: [
        {
          translateX: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.width, // Focused, but offscreen in the beginning
                0, // Fully focused
                screen.width * -0.3, // Fully unfocused
              ],
              extrapolate: 'clamp',
            }),
            inverted,
          ),
        },
      ],
    },
  };
};

const config: any = {
  duration: 200,
  easing: Easing.out(Easing.poly(4)),
  timing: Animated.timing,
  useNativeDriver: true,
};

const MainStackNavigator = (props: any) => {
  const {cartItens, setSearch, search} = useCart();
  const navigation = useNavigation<any>();

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: false,
        // gestureDirection: 'horizontal',
        // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {open: config, close: config},
        cardStyleInterpolator: forSlide,
        headerStyle: {
          backgroundColor: 'white',
          height: 80,
        },
        headerTintColor: 'black',
        headerBackTitle: 'Back',
        headerTransparent: false,
        headerTitle: () => (
          <View
            style={{
              alignItems: 'center',
              display: 'flex',
              width: '100%',
            }}>
            <Logo />
          </View>
        ),
        headerLeft: () => (
          <View
            style={{
              marginStart: 10,
              padding: 10,
            }}>
            <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
              <Icon name="bars" size={25} color="#b63235" />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              marginEnd: 15,
            }}>
            <TouchableOpacity
              onPress={() => setSearch(!search)}
              style={{marginRight: 5}}>
              <Icon name={'search'} size={25} color="#b63235" />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: '#000',
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
                  marginBottom: 1,
                }}>
                {cartItens.length}
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Icon name={'shopping-bag'} size={25} color="#b63235" />
            </TouchableOpacity>
          </View>
        ),
      }}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
export {MainStackNavigator};
