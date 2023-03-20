import React from 'react';
import {View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Button from '../Button';
import Icon from 'react-native-vector-icons/AntDesign';

const Categories = () => {
  const data = [
    {name: 'Camisas', color: '#000', icon: 'skin'},
    {name: 'Bermudas', color: '#000', icon: 'skin'},
    {name: 'Bonés', color: '#000', icon: 'skin'},
    {name: 'Sandalias', color: '#000', icon: 'skin'},
    {name: 'Bonés', color: '#000', icon: 'skin'},
    {name: 'Sandalias', color: '#000', icon: 'skin'},
    {name: 'Bonés', color: '#000', icon: 'skin'},
    {name: 'Sandalias', color: '#000', icon: 'skin'},
  ];

  const renderItem = ({item, index}: any) => {
    return (
      <View>
        <Button
          icon={<Icon name={item.icon} size={25} color="#fff" />}
          iconRight
          color="#b63235"
          text={item.name}
          onPress={() =>
            console.log('cliquei na categoria:' + data[index].name)
          }
        />
      </View>
    );
  };

  return (
    <View style={{width: 400, marginBottom: 15}}>
      <Carousel
        layout={'default'}
        enableSnap
        data={data}
        horizontal={true}
        loop={false}
        decelerationRate="fast"
        firstItem={2}
        activeSlideAlignment={'center'}
        renderItem={renderItem}
        itemWidth={120}
        sliderWidth={400}
      />
    </View>
  );
};

export default Categories;
