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
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
