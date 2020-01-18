export const Types = {
  LOGIN: 'auth/LOGIN',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',
  LOGIN_ERROR: 'auth/LOGIN_ERROR',
  LOGOUT: 'auth/LOGOUT',
};

const initialState = {
  isLogged: false,
  token: null,
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN:
      return {...state};
    case Types.LOGIN_SUCCESS:
      return {...state, user: action.data, loading: false};
    case Types.LOGOUT:
      return {...state};
    default:
      return state;
  }
}

export function login(email, password) {
  return {
    type: Types.LOGIN,
    payload: {
      email,
      password,
    },
  };
}

export function authSuccess(user) {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: {
      user,
    },
  };
}

export function logout() {
  return {
    type: Types.LOGOUT,
  };
}
