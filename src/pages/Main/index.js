import React, {useState, useEffect} from 'react';
// import * as styled from './styles';
import {StatusBar, View, FlatList, Text, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Button, Icon} from 'react-native-elements';
import {useDarkMode} from 'react-native-dark-mode';
import {Block, Input} from 'galio-framework';
import Modal from 'react-native-modal';
import Categories from '../../components/Categories';
import {useSelector, useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Main = props => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const countCart = useSelector(state => state.countCart);

  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const isDarkMode = useDarkMode();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  function addToCart(item) {
    console.log('adicionando o produto ' + item.id + ' ao carrinho.');
    dispatch({ type: 'ADD_TO_CART', cart: item });
  }

  useEffect(() => {
    let items = Array.apply(null, Array(12)).map((v, i) => {
      return {
        id: i,
        src: 'http://placehold.it/200x200?text=' + (i + 1),
      };
    });
    setDataSource(items);
  }, []);

  console.log('Dark mode is ' + isDarkMode);
  console.log('Modal is ' + isModalVisible);
  console.log('Input search is ' + searchVisible);

  // console.log(props);
  console.log(cart, "cart");
  console.log(countCart);

  // console.log(props);
  // console.log(dispatch);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2e2e97" />
      <SafeAreaProvider style={{flex: 1, margin: 0}}>
        <LinearGradient
          colors={['#2e2e97', 'transparent']}
          style={{height: 220}}
          locations={[0.1, 0.5]}
        />
        <View
          style={{
            padding: 10,
            paddingLeft: 30,
            paddingRight: 30,
            marginTop: -90,
            flexDirection: 'row',
            // Platform === 'ios' ? 40 : 5
          }}>
          {searchVisible === false ? (
            <View
              style={{
                width: '100%',
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Icon
                reverse
                raised
                name="filter"
                type="font-awesome"
                color="#2e2e97"
                onPress={() => toggleModal()}
              />
              <Icon
                reverse
                raised
                name="search"
                type="font-awesome"
                color="#2e2e97"
                onPress={() => setSearchVisible(true)}
              />
            </View>
          ) : (
            <View
              style={{
                width: '100%',
                borderRadius: 10,
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: '#fff',
                elevation: 5,
                marginBottom: 15,
              }}>
              <Input
                placeholder="Buscar aqui"
                borderless={false}
                fontSize={18}
                style={{
                  width: 250,
                  height: 25,
                  marginStart: 15,
                  borderWidth: 0,
                  borderColor: '#ffff',
                  elevation: 0,
                }}
              />
              <Icon
                reverse
                raised
                size={20}
                name="close"
                type="font-awesome"
                color="#2e2e97"
                onPress={() => setSearchVisible(false)}
              />
            </View>
          )}
        </View>
        <FlatList
          style={{padding: 8}}
          data={dataSource}
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
                  <Text style={{fontSize: 18, padding: 10}}>
                    Produto {index}
                  </Text>
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
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
        <Modal
          isVisible={isModalVisible}
          style={{margin: 0, marginTop: 300}}
          onBackdropPress={() => setModalVisible(false)}
          useNativeDriver={true}
          useNativeDriverForBackdrop={true}>
          <Block
            flex={1}
            safe
            fluid
            shadow
            style={{backgroundColor: '#FFF', padding: 20}}>
            <Block center />
          </Block>
        </Modal>
      </SafeAreaProvider>
    </>
  );
};

export default Main;
