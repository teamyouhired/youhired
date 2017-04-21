// export { default as dashboard } from './dashboardReducers';
// export { default as jobInformation } from './jobInformationReducers';
// export { default as authentication } from './authenticationReducers';
// export { default as navigation } from './navigationReducers';
// export { default as modal } from './modalReducers';

import dashboard from './dashboardReducers';
import jobInformation from './jobInformationReducers';
import authentication from './authenticationReducers';
import navigation from './navigationReducers';
import modal from './modalReducers';
import { LOGOUT } from '../actions/NavigationActionTypes';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  dashboard,
  jobInformation,
  authentication,
  navigation,
  modal
});

export default (state, action) => {
  console.log('does action type equal logout?', action.type);
  console.log(LOGOUT);
  if (action.type === LOGOUT) {
    state = undefined;
  }
  console.log(state);
  return appReducer(state, action);
};
