import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #2e2e97;
`;

export const Background = styled.View`
background: #2e2e97;
flex: 1;
display: flex;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background: #f9fbfa;
`;

export const Header = styled.View`
  width: ${wp('100%')};
  flex-direction: row;
  padding: 20px;
  text-align: center;
`;

export const TextHeader = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.size};
  font-family: Roboto;
  font-weight: bold;
`;

export const ImageSlideView = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  padding: 20px;
  elevation: 4;
  border-radius: 40px;
`;

export const ImageSlide = styled.Image`
  background: black;
`;

export const Brand = styled.Image`
  height: ${hp('20%')};
  width: ${wp('100%')};
`;

export const BoxButtons = styled.View`
  margin: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 18px;
`;

export const Buttons = styled.TouchableOpacity`
  height: ${hp('9%')};
  background: #fff;
  margin: 9px;
`;

export const TextButtons = styled.Text`
  color: #3f966b;
  font-size: 23px;
  justify-content: center;
  text-align: center;
  padding: 10px;
`;

export const BoxControls = styled.View`
  margin-left: 30%;
  margin-right: 30%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonsControl = styled.TouchableOpacity`
  padding: 5px;
`;

export const TextControl = styled.Text`
  color: #3f966b;
  font-size: 30px;
  justify-content: center;
  text-align: center;
  padding: 5px;
  font-weight: bold;
  elevation: 3;
`;
