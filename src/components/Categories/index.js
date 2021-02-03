import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Block} from 'galio-framework';
import { Button, Icon } from 'react-native-elements'

const Categories = () => {
  const data = [
    {name: 'Camisas', color: '#000', icon: 'road'},
    {name: 'Bermudas', color: '#000', icon: 'road'},
    {name: 'Bonés', color: '#000', icon: 'road'},
    {name: 'Sandalias', color: '#000', icon: 'road'},
    {name: 'Bonés', color: '#000', icon: 'road'},
    {name: 'Sandalias', color: '#000', icon: 'road'},
    {name: 'Bonés', color: '#000', icon: 'road'},
    {name: 'Sandalias', color: '#000', icon: 'road'},
  ];

  const renderItem = ({item, index}) => {
    return (
      <Block row center>
        <Button
                  icon={
                    <Icon
                      name={item.icon}
                      type='font-awesome'
                      color='#fff'
                    />
                  }
                  titleStyle={{ marginRight: 5 }}
                  buttonStyle={{ color: "#2e2e97", backgroundColor: "#2e2e97", width: "100%", borderRadius: 5, paddingRight: 10 }}
                  iconRight
                  title={item.name}
                  onPress={() => console.log('cliquei na categoria:' + data[index].name)}
                />
      </Block>
    );
  };

  return (
    <View style={{ width: 400, marginBottom: 15 }}>
      <Carousel
        // key={index}
        layout={'default'}
        enableSnap
        data={data}
        horizontal={true}
        loop={false}
        decelerationRate="fast"
        firstItem={2}
        // contentContainerCustomStyle={{ borderColor: 'red', borderWidth: 4, padding: 20 }}
        activeSlideAlignment={'center'}
        renderItem={renderItem}
        itemWidth={120}
        sliderWidth={400}
        // onSnapToItem={index => setActiveIndex(index)}
      />
    </View>
  );
};

export default Categories;
