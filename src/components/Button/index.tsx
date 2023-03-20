import React from 'react';
import {Button as ButtonRNElements} from '@rneui/themed';
import {ButtonProps} from './types';
import {Dimensions} from 'react-native';

const Button: React.FC<ButtonProps> = ({
  color,
  text,
  onPress,
  isSubmitting,
  icon,
  iconRight,
  full,
}: any) => {
  return (
    <ButtonRNElements
      title={text}
      loading={isSubmitting}
      onPress={onPress}
      buttonStyle={
        full && {
          width: Dimensions.get('window').width / 2.17,
          // borderWidth: 2,
          // borderColor: 'white',
        }
      }
      color={color}
      icon={icon}
      testID="button"
      iconRight={iconRight}
    />
  );
};

export default Button;
