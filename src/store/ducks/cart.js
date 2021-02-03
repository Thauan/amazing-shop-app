export const Types = {
  ADD_TO_CART: 'ADD_TO_CART',
  // REMOVE_TO_CART: 'cart/REMOVE_TO_CART',
};

// export const { Types, Creators } = careateActions({
//   addToCart: ['product', 'id'],
//   removeToCart: ['id']
// });

const INITIAL_STATE = {
  cart: [],
  countCart: 0,
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return {
        cart: [
          {
            product: {...state.cart, ...action},
          },
        ],
        countCart: (state.cart.length = +1),
      };
    // case Types.REMOVE_TO_CART:
    //   return state.filter(product => product.id != action.payload.id);
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
