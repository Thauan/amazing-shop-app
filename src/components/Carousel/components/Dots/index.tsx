import React from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Dots = ({data, width, scrollX, scrollToItem}: any) => {
  let position = Animated.divide(scrollX, width);

  return (
    <View style={styles.dotsView}>
      {data.map((value: any, i: number) => {
        const opacity = position.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        const size = position.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [10, 15, 10],
          extrapolate: 'clamp',
        });

        const margin = position.interpolate({
          inputRange: [i - 1, i, i + 1],
          outputRange: [0, -2, 0],
          extrapolate: 'clamp',
        });

        return (
          <TouchableOpacity onPress={() => scrollToItem(i)} key={i}>
            <Animated.View
              style={{
                opacity,
                height: size,
                width: size,
                borderRadius: 0,
                backgroundColor: '#fff',
                marginTop: margin,
                margin: 5,
                // borderWidth: 2,
                // borderColor: '#b63235',
              }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    display: 'flex',
    top: 230,
    left: '40%',
    position: 'absolute',
  },
});

export default Dots;
