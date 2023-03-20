import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const Item = ({item}: any) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={{uri: item.url}} />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width,
    height: height / 3,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 0.5,
    elevation: 5,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 0,
  },

  image: {
    width: width,
    height: height / 3,
  },
  itemTitle: {
    color: 'white',
    fontSize: 22,
    backgroundColor: '#b63235',
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 1,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },

  itemDescription: {
    color: 'white',
    backgroundColor: '#b63235',

    fontSize: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0.5, height: 0.5},
    shadowOpacity: 1,
    marginBottom: 5,
    fontWeight: 'bold',
    elevation: 5,
  },
});

export default Item;
