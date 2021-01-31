import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.KeyboardAvoidingView`
  background: #2e2e97;
`;

export const ImgBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const ContainerButtonsUser = styled.View`
  /* background: #3f966b; */
`;

export const ButtonsUser = styled.TouchableOpacity`
  width: ${wp('100%')};
  margin-top: 10px;
`;

export const TextButtonsUser = styled.Text`
  color: #fff;
  font-size: 19px;
  text-align: center;
`;

export const ContainerBrand = styled.View`
  margin-top: 30px;
  /* width: ${wp('100%')}; */
  /* background: #3f966b; */
  padding: 20px;
  align-items: center;
`;

export const Brand = styled.Image`
  height: ${hp('20%')};
`;

export const ContainerForm = styled.View`
  width: ${wp('100%')};
  flex: 2;
  display: flex;
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
  margin-bottom: 4px;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
  padding-right: 30px;
`;

export const Buttons = styled.TouchableOpacity`
  /* height: ${hp('9%')}; */
  background: #fff;
`;

export const TextButtons = styled.Text`
  color: #3f966b;
  font-size: 27px;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;
