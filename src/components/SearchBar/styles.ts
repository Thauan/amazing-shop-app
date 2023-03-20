import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CloseBox = styled.View`
  background-color: #b63235;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  align-self: center;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  border-top-left-radius: 20px;
`;

export const CloseButton = styled(TouchableOpacity)`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  align-self: center;
  align-content: center;
  justify-content: center;
  flex-direction: row;
`;

export const Search = styled.View`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;
