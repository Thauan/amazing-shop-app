import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Icon} from 'galio-framework';


const CustomDrawerComponent = props => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <DrawerContentScrollView {...props}>
        <View>
          <Text>Teste</Text>
        </View>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" family="materialicons" color="#2e2e97" size={29} />
          )}
          label={() => <Text style={{ fontSize: 22 }}>Sair</Text>}
          onPress={() => console.log('logout')}
        />
      </View>
    </View>
  );
};

export default CustomDrawerComponent;
