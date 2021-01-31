import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Button, Block, Card} from 'galio-framework';

const Categories = () => {
  const data = [
    {name: 'Camisas', color: '#000'},
    {name: 'Bermudas', color: '#000'},
    {name: 'Bonés', color: '#000'},
    {name: 'Sandalias', color: '#000'},
    {name: 'Bonés', color: '#000'},
    {name: 'Sandalias', color: '#000'},
    {name: 'Bonés', color: '#000'},
    {name: 'Sandalias', color: '#000'},
  ];

  const renderItem = ({item, index}) => {
    return (
      <Block row center>
        <Button round size="small" color="#2e2e97" uppercase>
          {item.name}
        </Button>
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
