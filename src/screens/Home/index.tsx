import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import CarouselFeatures from '../../components/CarouselFeatures';
import Header from '../../components/Header';

const Home: React.FC = () => {
  const [dataSource, setDataSource] = useState<any>([]);

  useEffect(() => {
    let items = Array.apply(null, Array(12)).map((v, i) => {
      return {
        id: i,
        src: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
      };
    });
    setDataSource(items);
  }, []);

  return (
    <>
      <Header />
      <View style={{flex: 1}}>
        <CarouselFeatures list={dataSource} />
      </View>
    </>
  );
};

export default Home;
