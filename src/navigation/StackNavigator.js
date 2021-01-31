import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from '../pages/Main';
import Login from '../pages/Login';

const Stack = createStackNavigator();

const MainStackNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
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
                flex: 1,
                alignItems: 'center',
                marginTop: Platform === 'ios' ? 25 : 5,
                marginEnd: 12
                // borderColor: 'red', borderWidth: 2
              }}>
              <Text style={{fontSize: 22, color: '#fff', fontWeight: 'bold'}}>
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
                <Icon name="bars" size={25} color="#fff" />
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
              <TouchableOpacity onPress={() => console.log('toggle favorited')}>
                <Icon
                  name={true ? 'heart' : 'heart-o'}
                  size={25}
                  color="#fff"
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
        }}
        name="Inicio"
        component={Main}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
export {MainStackNavigator};
