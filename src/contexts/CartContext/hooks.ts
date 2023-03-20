import {useContext} from 'react';

import {CartContext, CartContextType} from './context';

export const useCart = () => {
  const {
    cartItens,
    addToCart,
    openToCart,
    cartOpened,
    removeToCart,
    loading,
    search,
    setSearch,
  } = useContext(CartContext) as CartContextType;

  return {
    cartItens,
    addToCart,
    openToCart,
    removeToCart,
    cartOpened,
    loading,
    search,
    setSearch,
  };
};
