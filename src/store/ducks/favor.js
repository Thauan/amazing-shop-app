export const Types = {
  FAVORITE: 'favor/FAVORITE',
  FAVORITE_TOGGLE: 'favor/FAVORITE_TOGGLE',
};

const INITIAL_STATE = {
  favorited: false,
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.FAVORITE:
      return { ...state, favorited: false };
    case Types.FAVORITE_TOGGLE:
      return { ...state, favorited: !payload };
    default:
      return state;
  }
}

export const Creators = {
  favoriteToggle: (favorited) => ({
    type: Types.FAVORITE_TOGGLE,
    payload: favorited,
  }),
  favorite: () => ({
    type: Types.FAVORITE,
    payload: favorited,
  }),
};
