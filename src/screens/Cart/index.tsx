import React from 'react';
import {FlatList, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem, Avatar} from '@rneui/themed';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {useCart} from '../../contexts/CartContext';

const Cart: React.FC = () => {
  const {cartItens, removeToCart} = useCart();
  return (
    <>
      <Header />
      <FlatList
        style={{marginTop: 0}}
        showsVerticalScrollIndicator={true}
        data={cartItens}
        horizontal={false}
        keyExtractor={(item: any, index: any) => index}
        contentContainerStyle={{marginTop: 10}}
        renderItem={({item, index}: any) => (
          <>
            <View style={{paddingBottom: 8}}>
              <ListItem key={index} bottomDivider>
                <Avatar source={{uri: item.src}} />
                <ListItem.Content>
                  <ListItem.Title>{`Produto ${item.id}`}</ListItem.Title>
                </ListItem.Content>
                <Button
                  full={false}
                  icon={<Icon name={'trash'} size={25} color="#b63235" />}
                  iconRight
                  color="#fff"
                  text=""
                  onPress={() => removeToCart(item)}
                />
              </ListItem>
            </View>
          </>
        )}
      />
    </>
  );
};

export default Cart;
