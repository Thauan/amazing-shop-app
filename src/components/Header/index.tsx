import React, {useEffect, useRef, useState} from 'react';
import {Animated, LayoutChangeEvent} from 'react-native';
import {SearchBar} from '../SearchBar';
import {useCart} from '../../contexts/CartContext';
import {HeaderContainer, AnimatedHeader} from './styles';

const Header: React.FC = () => {
  const startingHeight = 0;
  const {search, setSearch} = useCart();
  const [fullHeight, setFullHeight] = useState(startingHeight);
  const animatedHeight = useRef(new Animated.Value(startingHeight)).current;

  useEffect(() => {
    Animated.spring(animatedHeight, {
      friction: 100,
      toValue: search ? fullHeight : startingHeight,
      useNativeDriver: false,
    }).start();
  }, [animatedHeight, search, fullHeight]);

  const ChildLayout = (e: LayoutChangeEvent) => {
    let {height} = e.nativeEvent.layout;
    height = Math.floor(height);
    if (height > startingHeight) {
      setFullHeight(height);
    }
  };

  const toggleSearch = () => {
    setSearch(!search);
  };

  return (
    <AnimatedHeader style={{height: animatedHeight}}>
      <HeaderContainer onLayout={(e: LayoutChangeEvent) => ChildLayout(e)}>
        <SearchBar toggle={toggleSearch} search={search} />
      </HeaderContainer>
    </AnimatedHeader>
  );
};

export default Header;
