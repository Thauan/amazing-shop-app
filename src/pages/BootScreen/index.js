import React, {useEffect, useState, useRef} from 'react';
import {StatusBar} from 'react-native';
import * as styled from './styles';
import Carousel from 'react-native-snap-carousel';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
  function _renderItem({item, index}) {
    return (
      <>
        <styled.ImageSlideView key={index}>
          <styled.ImageSlide resizeMode="cover" source={item.image} />
        </styled.ImageSlideView>
      </>
    );
  }

  const refContainer = useRef(null);
  const snap = refContainer.current;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <styled.Container>
        <styled.Header>
          <styled.TextHeader color={'#fff'} size={30}>
            Compre.
          </styled.TextHeader>
          <styled.TextHeader color={'#252525'} size={30}>
            {' '}
            Com a melhor.
          </styled.TextHeader>
        </styled.Header>
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
        <styled.BoxButtons>
          <styled.BoxControls>
            <styled.ButtonsControl onPress={() => snap.snapToPrev()}>
              <styled.TextControl>{'<'}</styled.TextControl>
            </styled.ButtonsControl>
            <styled.ButtonsControl onPress={() => snap.snapToNext()}>
              <styled.TextControl>{'>'}</styled.TextControl>
            </styled.ButtonsControl>
          </styled.BoxControls>
          <styled.Buttons onPress={() => props.navigation.navigate('Login')}>
            <styled.TextButtons>Entrar na conta</styled.TextButtons>
          </styled.Buttons>
        </styled.BoxButtons>
      </styled.Container>
    </>
  );
}

export default BootScreen;
