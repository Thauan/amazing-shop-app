import React, {useState, useEffect} from 'react';
import * as styled from './styles';
import {
  StatusBar,
  Platform,
  View,
  FlatList,
  Text,
  SafeAreaView,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// import Icon from 'react-native-vector-icons/FontAwesome';
import {useDarkMode} from 'react-native-dark-mode';
import {Button, Block, Input} from 'galio-framework';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import Categories from '../../components/Categories';

const Main = (props) => {
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const isDarkMode = useDarkMode();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return {
        id: i,
        src: 'http://placehold.it/200x200?text=' + (i + 1),
      };
    });
    setDataSource(items);
  }, []);

  console.log("Dark mode is " + isDarkMode);
  console.log("Modal is " + isModalVisible);
  console.log("Input search is " + searchVisible);

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
            marginTop: -140,
            flexDirection: 'row',
          }}>
          {searchVisible === false ? (
            <View
              style={{
                width: '100%',
                marginBottom: 20,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}>
              <Button
                onlyIcon
                icon="filter"
                iconFamily="antdesign"
                iconSize={25}
                color="#2e2e97"
                onPress={() => toggleModal()}
                iconColor={isDarkMode ? '#ffff' : '#fff'}
                style={{width: 40, height: 40}}
              />
              <Button
                onlyIcon
                icon="search"
                iconFamily="fontawesome"
                iconSize={25}
                color="#2e2e97"
                onPress={() => setSearchVisible(true)}
                iconColor={isDarkMode ? '#ffff' : '#fff'}
                style={{width: 40, height: 40}}
              />
            </View>
          ) : (
            <View
              style={{
                width: '100%',
                borderRadius: 10,
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: '#fff',
                elevation: 2,
                marginBottom: 20,
              }}>
              <Input
                placeholder="Buscar aqui"
                borderless={false}
                fontSize={19}
                style={{
                  width: 270,
                  height: 45,
                  borderWidth: 0,
                  borderColor: '#ffff',
                  elevation: 0,
                }}
              />
              <Button
                onlyIcon
                icon="close"
                iconFamily="fontawesome"
                iconSize={25}
                color="#2e2e97"
                onPress={() => setSearchVisible(false)}
                iconColor={isDarkMode ? '#ffff' : '#fff'}
                style={{width: 40, height: 40}}
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
                style={{ margin: 5, elevation: 0.3 }}>
                <Block>
                  <Image
                    style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 200,
                    }}
                    source={{uri: item.src}}
                  />
                  <Text style={{fontSize: 18, padding: 10}}>
                    Produto {index}
                  </Text>
                </Block>
                <Block row center>
                  <Button round color="#2e2e97" shadowless uppercase>
                    Comprar
                  </Button>
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
            <Block center>
              <Button round color="#2e2e97" shadowless uppercase>
                Novidades
              </Button>
              <Button round color="#2e2e97" shadowless uppercase>
                Menor preço
              </Button>
              <Button round color="#2e2e97" shadowless uppercase>
                Novidades
              </Button>
              <Button round color="#2e2e97" shadowless uppercase>
                Mais vendidos
              </Button>
            </Block>
          </Block>
        </Modal>
      </SafeAreaProvider>
    </>
  );
};

export default Main;
