import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  position: absolute;
  flex: 1;
  width: 100%;
`;

// Pass your animatable component as styled's argument here.
export const AnimatedHeader = styled(Animated.View)`
  overflow: hidden;
`;
