import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.KeyboardAvoidingView`
  background: #fff;
`;

export const ContainerButtonsUser = styled.View`
  flex: 1;
`;

export const ButtonsUser = styled.TouchableOpacity`
  width: ${wp('100%')};
  margin-top: 10px;
`;

export const TextButtonsUser = styled.Text`
  color: #3f966b;
  font-size: 19px;
  text-align: center;
`;

export const ContainerBrand = styled.View`
  flex: 1;
  margin-top: 30px;
  width: ${wp('100%')};
  height: ${hp('30%')};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const Brand = styled.Image`
  height: ${hp('20%')};
  width: ${wp('100%')};
`;

export const ContainerForm = styled.View`
  /* flex: 1; */
  width: ${wp('100%')};
`;

export const Input = styled.TextInput.attrs(props => ({
  autoFocus: props.autoFocus,
  placeholder: props.placeholder,
  placeholderTextColor: props.placeholderTextColor,
  secureTextEntry: props.secureTextEntry,
  autoCorrect: false,
  autoCapitalize: props.autoCapitalize,
  underlineColorAndroid: 'transparent',
}))`
  padding-left: 30px;
  width: ${wp('100%')};
  height: ${hp('10%')};
  font-size: 18px;
`;

export const LineUp = styled.View`
  background-color: #f9fbfa;
  height: ${hp('9%')}px;
  margin-bottom: 30px;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Buttons = styled.TouchableOpacity`
  height: ${hp('9%')};
  background: #3f966b;
`;

export const TextButtons = styled.Text`
  color: #fff;
  font-size: 23px;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;
