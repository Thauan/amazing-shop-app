import React, {useEffect, useRef, useState} from 'react';
import {Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CloseBox, CloseButton, Search} from './styles';

const SearchBar = ({toggle, search}: any) => {
  const inputRef = useRef<any>(null);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    if (search === true) {
      inputRef.current.focus();
    }
  }, [search]);

  return (
    <Search>
      <TextInput
        ref={inputRef}
        style={{height: 50, paddingStart: 15}}
        placeholder="Buscar por produtos, categorias ou marcas"
        value={searchInput}
        onChange={(e: any) => setSearchInput(e.target.value)}
      />
      <CloseButton
        onPress={() => {
          toggle();
          inputRef.current.clear();
        }}>
        <CloseBox>
          <Icon name="search" size={23} color="#fff" />
        </CloseBox>
      </CloseButton>
    </Search>
  );
};

export {SearchBar};
