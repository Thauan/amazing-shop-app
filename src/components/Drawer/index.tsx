import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import {Avatar, ListItem} from '@rneui/themed';

Icon.loadFont();

const CustomDrawerComponent = (props: any) => {
  const [expanded, setExpanded] = useState(true);

  const categories = [
    {name: 'Camisas', color: '#000', icon: 'skin'},
    {name: 'Bermudas', color: '#000', icon: 'skin'},
    {name: 'Bonés', color: '#000', icon: 'skin'},
    {name: 'Sandalias', color: '#000', icon: 'skin'},
    {name: 'Bonés', color: '#000', icon: 'skin'},
    {name: 'Sandalias', color: '#000', icon: 'skin'},
    {name: 'Bonés', color: '#000', icon: 'skin'},
    {name: 'Sandalias', color: '#000', icon: 'skin'},
  ];

  return (
    <View style={{flex: 1, padding: 20}}>
      <DrawerContentScrollView {...props}>
        <ListItem bottomDivider>
          <Avatar
            rounded
            size="large"
            source={{
              uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            }}
          />
          <ListItem.Content>
            <ListItem.Title style={{fontSize: 22}}>Thauan</ListItem.Title>
            <ListItem.Subtitle style={{color: '#b63235', fontWeight: 'bold'}}>
              CLIENTE PRATA
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
        <ListItem.Accordion
          content={
            <>
              <Icon
                name="list"
                size={30}
                color="#b63235"
                style={{marginRight: 10}}
              />
              <ListItem.Content>
                <ListItem.Title>Categorias</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}>
          {categories.map((l: any, i: any) => (
            <ListItem
              key={i}
              onPress={() => console.log('cliquei')}
              bottomDivider>
              {/* <Icon name={l.icon} size={25} color="#fff" /> */}
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          ))}
        </ListItem.Accordion>
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          icon={({}: any) => <Icon name="log-out" size={29} color="#b63235" />}
          label={() => (
            <Text style={{fontSize: 20, color: '#b63235'}}>Sair</Text>
          )}
          onPress={() => console.log('logout')}
        />
      </View>
    </View>
  );
};

export default CustomDrawerComponent;
