import React, { useEffect, useState, useRef } from 'react';
import { StatusBar, Text, View } from 'react-native';
import * as S from './styles';
import Carousel from 'react-native-snap-carousel';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'galio-framework';
import { Modalize } from 'react-native-modalize';
import Login from '../Login';

const SLIDES = [
  {
    name: 'Produto 1',
    resume: 'este é o produto 1',
    image: require('../../assets/shopping2.png'),
  },
  {
    name: 'Produto 2',
    resume: 'este é o produto 2',
    image: require('../../assets/shopping.png'),
  },
  {
    name: 'Produto 3',
    resume: 'este é o produto 3',
    image: require('../../assets/shopping2.png'),
  },
];

function BootScreen(props) {

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  function _renderItem({ item, index }) {
    return (
      <>
        <S.ImageSlideView key={index}>
          <S.ImageSlide resizeMode="cover" source={item.image} />
        </S.ImageSlideView>
      </>
    );
  }

  const refContainer = useRef(null);
  const snap = refContainer.current;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <S.Container>
        <S.Header>
          <S.TextHeader color={'#fff'} size={30}>
            Compre.
          </S.TextHeader>
          <S.TextHeader color={'#fff'} size={30}>
            {' '}
            Com a melhor.
          </S.TextHeader>
        </S.Header>
        <Carousel
          ref={refContainer}
          data={SLIDES}
          sliderWidth={wp('100%')}
          itemWidth={wp('90%')}
          renderItem={_renderItem}
          scrollEnabled={true}
          firstItem={0}
          autoplay={true}
          loop={true}
        />
        <S.BoxButtons>
          <Button color="#fff" shadowless onPress={onOpen}>
            <S.TextButton>Entrar na conta</S.TextButton>
          </Button>
        </S.BoxButtons>
      </S.Container>
      <Modalize
        ref={modalizeRef}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={450}
        HeaderComponent={
          <View>
            <Text>Header</Text>
          </View>
        }
        withHandle={false}
      >
        <S.Background>
          <Login />
        </S.Background>
      </Modalize>
    </>
  );
}

export default BootScreen;
