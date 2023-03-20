import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useCart} from '../../contexts/CartContext';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../Button';
import Categories from '../ButtonsGroup';
import Carousel from '../Carousel';

const CarouselFeatures = ({list}: any) => {
  const {addToCart} = useCart();

  return (
    <FlatList
      style={{marginTop: 0}}
      data={list}
      ListHeaderComponent={
        <>
          <Carousel />
          <View style={{marginTop: 20}}>
            <Categories />
          </View>
        </>
      }
      renderItem={({item, index}: any) => (
        <>
          <View
            style={{
              margin: 8,
              flex: 1,
              elevation: 0.3,
              backgroundColor: '#ccc',
            }}>
            <View>
              <Image
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 200,
                  width: 180,
                }}
                source={{uri: item.src}}
              />
              <Text
                style={{
                  fontSize: 18,
                  padding: 10,
                  width: 180,
                  textAlign: 'center',
                }}>
                Produto {index}
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
              }}>
              <Button
                full
                icon={<Icon name={'shopping-cart'} size={25} color="#fff" />}
                iconRight
                color="#b63235"
                text="Comprar"
                onPress={() => addToCart(item)}
              />
            </View>
          </View>
        </>
      )}
      numColumns={2}
      keyExtractor={(item: any, index: any) => index}
    />
  );
};

export default CarouselFeatures;
