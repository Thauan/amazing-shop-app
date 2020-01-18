export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_ERROR: 'auth/LOGIN_ERROR',
  LOGOUT: 'auth/LOGOUT',
};

const INITIAL_STATE = {
  isLogged: false,
  token: null,
  user: {},
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.LOGIN:
      return {...state, loading: true};
    case Types.LOGIN_SUCCESS:
      return {...state, user: payload.data, loading: false};
    case Types.LOGOUT:
      return {...state};
    default:
      return state;
  }
}

export const Creators = {
  login: (email, password) => ({
    type: Types.LOGIN,
    payload: {email, password},
  }),

  authSuccess: user => ({
    type: Types.LOGIN_SUCCESS,
    payload: {user},
  }),

  logout: () => ({
    type: Types.LOGOUT,
  }),
};

// export function login(email, password) {
//   return {
//     type: Types.LOGIN,
//     payload: {
//       email,
//       password,
//     },
//   };
// }

// export function authSuccess(user) {
//   return {
//     type: Types.LOGIN_SUCCESS,
//     payload: {
//       user,
//     },
//   };
// }

// export function logout() {
//   return {
//     type: Types.LOGOUT,
//   };
// }
