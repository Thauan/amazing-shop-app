import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const Logo: React.FC = () => {
  const navigation = useNavigation<any>();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Main')}
      style={{width: '100%'}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{width: 75, height: 55}}
          resizeMode="contain"
        />
        <Text style={{fontSize: 27, color: '#b63235'}}>Amazing</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Logo;
