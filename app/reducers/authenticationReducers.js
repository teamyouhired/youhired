import { signUp, signIn } from '../api/users';

const defaultState = {
  isAuthenticated: localStorage.getItem('auth') ? true : false,
  userToken: null
}

const authentication = (state = defaultState, { type, payload }) => {
  if (payload) {
    console.log('payload for auth reducer', payload);
    console.log('type for auth reducer', type);
  }
  switch (type) {
    case signIn.SUCCESS:
    case signUp.SUCCESS:
      console.log('sign in case', payload);
      debugger;
      //localSession.setItem('auth', payload.auth); //depends on request type
      return {
        ...state,
        isAuthenticated: true
        // userToken: payload.data.tokens[0].token
      };
    case signIn.FAIL:
    case signUp.FAIL:
      console.log('fail case in reducer', payload);
      return {
        ...state,
        isAuthenticated: false
      };
    default:
      return state;
  }
}

export default authentication;
