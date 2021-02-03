import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar, ListItem } from 'react-native-elements';
// import {Button, Icon} from 'galio-framework';
Icon.loadFont();


const CustomDrawerComponent = props => {
  return (
    <View style={{flex: 1, padding: 20}}>
      <DrawerContentScrollView {...props}>
      <ListItem bottomDivider>
        <Avatar rounded size="large" source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }} />
        <ListItem.Content>
          <ListItem.Title>Thauan</ListItem.Title>
          <ListItem.Subtitle>CEO</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" size={29} color="#2e2e97" />
            // <Icon name="exit-to-app" family="materialicons" color="#2e2e97" size={29} />
          )}
          label={() => <Text style={{ fontSize: 22 }}>Sair</Text>}
          onPress={() => console.log('logout')}
        />
      </View>
    </View>
  );
};

export default CustomDrawerComponent;
