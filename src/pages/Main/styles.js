import styled from 'styled-components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #f9fbfa;
`;

export const ContainerBrand = styled.View`
  padding-top: 20px;
  width: ${wp('100%')};
  height: ${hp('35%')};
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background: #3f966b;
`;

export const Brand = styled.Image`
  height: ${hp('20%')};
  width: ${wp('100%')};
`;

export const ContainerForm = styled.View`
  flex: 2;
  background-color: #f9fbfa;
`;

export const ContainerFooter = styled.View`
  height: ${hp('10%')};
`;
