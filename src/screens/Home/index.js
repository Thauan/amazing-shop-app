import React, {useState, useEffect} from 'react';
import {StatusBar, Text, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import {Block} from 'galio-framework';
import Modal from 'react-native-modal';
import {useSelector, useDispatch} from 'react-redux';
// import { actionAddToCart, actionRemoveToCart } from '../../dispatchers/cart'
import { withInAppNotification } from 'react-native-in-app-notification';

// Components
import Products from '../../components/Products';
import Header from '../../components/Header';

const Main = (props) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);

  const [dataSource, setDataSource] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleModal = () => {
    dispatch({type: 'SHOW_MODAL_CART'});
  };

  function addToCart(item) {
    dispatch({ type: 'ADD_TO_CART', cart: item });
  }

  function removeToCart(id) {
    dispatch({ type: 'REMOVE_TO_CART', id: id });

    props.showNotification({
      title: 'Feito!',
      message: 'Produto removido com sucesso',
      onPress: () => console.log("teste"),
      vibrate: true,
      additionalProps: { type: 'success' },
    });

  }

  useEffect(() => {
    let items = Array.apply(null, Array(12)).map((v, i) => {
      return {
        id: i,
        src: 'https://placehold.it/200x200?text=' + (i + 1),
      };
    });
    setDataSource(items);
  }, []);

  // console.log('Dark mode is ' + isDarkMode);
  // console.log('Modal is ' + isModalVisible);
  // console.log('Input search is ' + searchVisible);
  // console.log(products.products);
  // console.log(products.countCart, 'to aqui');

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2e2e97" />
      <SafeAreaProvider style={{flex: 1, margin: 0}}>
      <Header searchVisible={searchVisible} setSearchVisible={setSearchVisible} gradients={['#2e2e97', 'transparent']} />
      <Products list={dataSource} addToCart={addToCart} />
        <Modal
          coverScreen={false}
          isVisible={products.modalCart}
          style={{margin: 0, marginTop: 180}}
          onBackdropPress={() => toggleModal()}
          onBackButtonPress={() => toggleModal()}
          useNativeDriver={true}
          useNativeDriverForBackdrop={true}>
          <Block
            flex={1}
            safe
            fluid
            shadow
            style={{backgroundColor: '#fff', padding: 30}}>
            {products.products.length ? products.products.map((item, key) => {
              return (
                <Block key={key} row style={{ margin: 10, justifyContent: 'space-around' }}>
                <Image
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 50,
                    width: 50,
                  }}
                  source={{uri: item.src}}
                />
                <Text style={{ color: 'black', fontSize: 18, padding: 10 }}>Produto {item.id}</Text>
                <Icon
                reverse
                size={15}
                raised
                name="trash"
                type="font-awesome"
                color="#2e2e97"
                onPress={() => removeToCart(item.id)}
              />
              </Block>
              )
            }) : (
              <Block row style={{ margin: 30, padding: 20, justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 24 }}>Não há produtos no carrinho</Text>
              </Block>
            )}
          </Block>
        </Modal>
      </SafeAreaProvider>
    </>
  );
};

export default withInAppNotification(Main);
