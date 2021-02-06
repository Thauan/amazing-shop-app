import React from 'react';
import { FlatList, Image, Text } from 'react-native';
import {Button, Icon} from 'react-native-elements';
import { Block } from 'galio-framework';
import Categories from '../Categories';

const Products = props => {
  const { list, addToCart } = props;
  return (
    <FlatList
      style={{padding: 8 }}
      data={list}
      ListHeaderComponent={<Categories />}
      renderItem={({item, index}) => (
        <>
          <Block
            flex={1}
            safe
            fluid
            shadow={false}
            style={{margin: 8, elevation: 0.3}}>
            <Block>
              <Image
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 200,
                  width: 180,
                }}
                source={{uri: item.src}}
              />
              <Text style={{fontSize: 18, padding: 10}}>Produto {index}</Text>
            </Block>
            <Block row>
              <Button
                icon={
                  <Icon
                    name="shopping"
                    type="material-community"
                    color="#fff"
                  />
                }
                onPress={() => addToCart(item)}
                titleStyle={{marginRight: 8}}
                buttonStyle={{
                  color: '#2e2e97',
                  flex: 1,
                  display: 'flex',
                  backgroundColor: '#2e2e97',
                  width: 184,
                  display: 'flex',
                  flex: 1,
                  marginBottom: 20,
                }}
                iconRight
                title="Comprar"
              />
            </Block>
          </Block>
        </>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index}
    />
  );
};

export default Products;
