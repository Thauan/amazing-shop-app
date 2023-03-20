import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Dimensions, FlatList, Animated} from 'react-native';
import Item from './components/Item';
import Dots from './components/Dots';

const data = [
  {
    title: 'Teste',
    description: 'Lorem ipsum',
    id: 1,
    url: 'https://zinzane.vtexassets.com/assets/vtex.file-manager-graphql/images/bda148d3-f2ca-4fc1-841c-ff302a6347de___41ee6f8df29e34bb1a73cc44d06b6fb7.jpg',
  },
  {
    title: 'Teste',
    description: 'Lorem ipsum',
    id: 2,
    url: 'https://zinzane.vtexassets.com/assets/vtex.file-manager-graphql/images/74b7f197-5aea-4413-98bc-701351ff86e9___35840d7bc84b8231935625614570ae7c.gif',
  },
  {
    title: 'Teste',
    description: 'Lorem ipsum',
    id: 3,
    url: 'https://zinzane.vteximg.com.br/arquivos/banner_MOB_412x520px_novidade_liqui.jpg',
  },
];

const {width, height} = Dimensions.get('window');

const Carousel = () => {
  const scrollX = new Animated.Value(0);
  const carouselRef = useRef<any>(null);

  useEffect(() => {
    infiniteScrolling(data);
  }, [carouselRef]);

  const infiniteScrolling = (list: any) => {
    const numberOfData = list.length;
    let scrollValue = 0;
    let scrolled = 0;

    setInterval(() => {
      scrolled++;

      if (scrolled < numberOfData) {
        scrollValue = scrollValue + width;
      } else {
        scrolled = 0;
        scrollValue = 0;
      }

      if (carouselRef.current) {
        carouselRef.current.scrollToOffset({
          animated: true,
          offset: scrollValue,
        });
      }
    }, 4000);
  };

  const scrollToItem = (index: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollToIndex({
        animated: true,
        index: index,
      });
    }
  };

  return (
    <View style={styles.carousel}>
      {data ? (
        <>
          <FlatList
            ref={carouselRef}
            data={data}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            style={{height: height / 3}}
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={16}
            decelerationRate={'fast'}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <Item item={item} />;
            }}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}
          />
          <Dots
            scrollX={scrollX}
            data={data}
            width={width}
            scrollToItem={scrollToItem}
          />
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    width: width,
    justifyContent: 'center',
    display: 'flex',
  },
});

export default Carousel;
