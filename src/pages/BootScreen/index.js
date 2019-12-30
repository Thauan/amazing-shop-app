import React, {useEffect, useState, useRef} from 'react';
import {StatusBar} from 'react-native';
import * as styled from './styles';

// import NavigationService from '~/services/NavigationService';

function BootScreen(props) {
  console.tron.log(props);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3f966b" />
      <styled.Container>
        <styled.Header>
          <styled.TextHeader color={'#3f966b'} size={30}>
            Compre.
          </styled.TextHeader>
          <styled.TextHeader color={'#252525'} size={30}>
            Com a melhor.
          </styled.TextHeader>
        </styled.Header>
        <styled.Scroll
          horizontal
          decelerationRate={0}
          scrollEventThrottle={160}
          snapToInterval={300} //your element width
          snapToAlignment={'center'}>
          <styled.ImageSlide source={require('../../assets/shopping.png')} />
          <styled.ImageSlide source={require('../../assets/shopping2.png')} />
        </styled.Scroll>
        <styled.BoxButtons>
          <styled.Buttons>
            <styled.TextButtons>Explorar produtos</styled.TextButtons>
          </styled.Buttons>
          <styled.Buttons onPress={() => props.navigation.navigate('Login')}>
            <styled.TextButtons>Entrar na conta</styled.TextButtons>
          </styled.Buttons>
        </styled.BoxButtons>
      </styled.Container>
    </>
  );
}

export default BootScreen;
