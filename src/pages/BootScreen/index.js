import React, {useEffect, useState, useRef} from 'react';
import * as styled from './styles';
import {StatusBar, Text, ScrollView, View} from 'react-native';

function BootScreen(props) {
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
        <ScrollView
          horizontal
          pagingEnabled={true}
          decelerationRate={0}
          onScroll={event => {
            this.yOffset = event.nativeEvent.contentOffset.y;
          }}
          onScrollEndDrag={event => {
            this.yOffset = event.nativeEvent.contentOffset.y;
          }}
          scrollEventThrottle={160}
          snapToInterval={400} //your element width
          snapToAlignment={'center'}
          showsHorizontalScrollIndicator={true}>
          <styled.ImageSlide source={require('../../assets/shopping.png')} />
          <styled.ImageSlide source={require('../../assets/shopping2.png')} />
        </ScrollView>
      </styled.Container>
    </>
  );
}

export default BootScreen;
