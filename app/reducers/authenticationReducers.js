import { signUp, signIn } from '../api/users';

const defaultState = {
  isAuthenticated: sessionStorage.getItem('auth') ? true : false,
  location: '/'
}

const authentication = (state = defaultState, { type, payload }) => {
  if (payload) {
  }
  switch (type) {
    case signIn.SUCCESS:
    case signUp.SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        location: '/dashboard'
      };
    case signIn.FAIL:
    case signUp.FAIL:
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export default authentication;
