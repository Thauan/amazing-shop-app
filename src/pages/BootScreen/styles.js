import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.SafeAreaView`
  display: flex;
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
  /* font-family: Roboto; */
  font-weight: bold;
`;

export const ImageSlide = styled.Image`
  padding: 20px;
  width: ${wp('100%')};
  height: ${hp('40%')};
  background: black;
`;

export const Brand = styled.Image`
  height: ${hp('20%')};
  width: ${wp('100%')};
`;
