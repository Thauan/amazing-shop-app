import {createContext} from 'react';

export interface CartContextType {
  cartItens: any[];
  addToCart: (item: any) => void;
  openToCart: (opened: boolean) => void;
  removeToCart: (item: any) => void;
  cartOpened: boolean;
  loading: boolean;
  search: any;
  setSearch: any;
}

export const CartContext = createContext<CartContextType | {}>({});
