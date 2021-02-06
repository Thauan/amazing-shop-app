export const Types = {
  ADD_TO_CART: 'ADD_TO_CART',
  LOAD_CART: 'LOAD_CART',
  SHOW_MODAL_CART: 'SHOW_MODAL_CART',
  REMOVE_TO_CART: 'REMOVE_TO_CART'
};

const INITIAL_STATE = {
  products: [],
  countCart: 0,
  modalCart: false,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SHOW_MODAL_CART:
      return {
        ...state,
        modalCart: !state.modalCart
      };
    case Types.LOAD_CART:
      const { payload } = action;

      return {
        ...state,
        products: payload,
        countCart: state.products.length,
      };
    case Types.ADD_TO_CART:
      const { cart } = action;
      return {
        ...state,
        products: [...state.products, cart],
        countCart: (state.products.length += 1),
      };
    case Types.REMOVE_TO_CART:
      const { id } = action;
      return {
        products: state.products.filter(product => product.id != id),
        countCart: state.countCart -= 1,
        modalCart: state.modalCart
      };
    default:
      return state;
  }
}

// export const Creators = {
//   addToCart: (product) => ({
//     type: "ADD_TO_CART",
//     payload: { product },
//   }),

//   removeToCart: (id) => ({
//     type: "REMOVE_TO_CART",
//     payload: { id },
//   }),
// };
