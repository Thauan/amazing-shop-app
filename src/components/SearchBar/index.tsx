import React, {useEffect, useRef, useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputChangeEventData,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CloseBox, CloseButton, Search} from './styles';

const SearchBar = ({search}: any) => {
  const inputRef = useRef<any>(null);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    if (search) {
      inputRef.current.focus();
    }
  }, [search]);

  const searchBy = (text: string) => {
    console.log(text);
  };

  return (
    <Search>
      <TextInput
        ref={inputRef}
        style={{height: 50, paddingStart: 15, fontSize: 16}}
        placeholder="Buscar por produtos, categorias ou marcas"
        value={textSearch}
        onChange={(event: NativeSyntheticEvent<TextInputChangeEventData>) => {
          setTextSearch(event.nativeEvent.text);
        }}
      />
      <CloseButton onPress={() => searchBy(textSearch)}>
        <CloseBox>
          <Icon name="search" size={23} color="#fff" />
        </CloseBox>
      </CloseButton>
    </Search>
  );
};

export {SearchBar};
