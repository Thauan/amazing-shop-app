import React from 'react';
import * as styled from './styles';
import {StyleSheet, Dimensions, StatusBar} from 'react-native';

const logo = require('../../assets/shopping-bag-two.png');
// shopping.png

const Main = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#3f966b" />
    <styled.Container>
      <styled.ContainerBrand>
        <styled.Brand source={logo} resizeMode="contain" />
      </styled.ContainerBrand>
      <styled.ContainerForm>

      </styled.ContainerForm>
      <styled.ContainerFooter>

      </styled.ContainerFooter>
    </styled.Container>
  </>
);

export default Main;
