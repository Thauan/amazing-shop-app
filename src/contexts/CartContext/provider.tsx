import React, {useCallback, useState} from 'react';
import {CartContext} from './context';

export interface AuthResponse {
  grant_type: string;
  email: string;
  password: string;
  client_id: string;
  client_secret: string;
}

export const CartProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [cartItens, setCartItens] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(false);
  const [cartOpened, setCartOpened] = useState<boolean>(false);

  const addToCart = useCallback(
    async (item: any) => {
      setLoading(true);
      setCartItens([...cartItens, item]);
      setLoading(false);
    },
    [cartItens],
  );

  const removeToCart = async (payload: any) => {
    setLoading(true);
    setCartItens(cartItens.filter((item: any) => item !== payload));
    setLoading(false);
  };

  const openToCart = async () => {
    setCartOpened(!cartOpened);
  };

  return (
    <CartContext.Provider
      value={{
        cartItens,
        addToCart,
        search,
        setSearch,
        loading,
        cartOpened,
        openToCart,
        removeToCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};
