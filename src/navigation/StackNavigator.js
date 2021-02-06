import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux'

import Main from '../screens/Home';
import Login from '../screens/Login';
Icon.loadFont();

const Stack = createStackNavigator();

const MainStackNavigator = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  function modalCart() {
    dispatch({ type: 'SHOW_MODAL_CART' });
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
          height: 100
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
      }}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: () => (
            <View
              style={{
                alignItems: 'center',
                marginTop: Platform === 'ios' ? 50 : 5,
                marginEnd: 12,
                // borderColor: 'red', borderWidth: 2
              }}>
              <Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold', opacity: cart.modalCart === true ? 0.2 : 1}}>
                Amazing Shop
              </Text>
            </View>
          ),
          headerLeft: () => (
            <View
              style={{
              marginStart: 20,
              padding: 10,
              marginTop: Platform === 'ios' ? 25 : 5,
              // borderColor: 'red', borderWidth: 2
              }}>
              <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                <Icon name="bars" size={25} color="#fff" style={{ opacity: cart.modalCart === true ? 0.2 : 1 }} />
              </TouchableOpacity>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                marginEnd: 35,
                marginTop: Platform === 'ios' ? 25 : 5,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 68,
                padding: 10,
                // borderColor: 'red', borderWidth: 2
              }}>
              <TouchableOpacity onPress={() => console.log('favorite')}>
                <Icon
                  name={true ? 'heart' : 'heart-o'}
                  size={25}
                  color="#fff"
                  style={{ opacity: cart.modalCart === true ? 0.2 : 1 }} 
                />
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
                  opacity: cart.modalCart === true ? 0.8 : 1
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: 10,
                    marginBottom: 2,
                    // opacity: cart.modalCart === true ? 0.3 : 1
                  }}>
                  {cart.countCart}
                </Text>
              </View>
              <TouchableOpacity onPress={() => modalCart()}>
                <Icon name={'shopping-bag'} size={25} color="#ffff" style={{ opacity: cart.modalCart === true ? 0.2 : 1 }}/>
              </TouchableOpacity>
            </View>
          ),
        }}
        name="Inicio"
        component={Main}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export {MainStackNavigator};
