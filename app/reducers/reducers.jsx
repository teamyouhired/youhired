import dashboard from './dashboardReducers';
import jobInformation from './jobInformationReducers';
import authentication from './authenticationReducers';
import navigation from './navigationReducers';
import modal from './modalReducers';
import datePicker from './datePickerReducer';
import chart from './chartReducers';
import { LOGOUT } from '../actions/NavigationActionTypes';
import { combineReducers } from 'redux';

const appReducer = combineReducers({
  datePicker,
  dashboard,
  jobInformation,
  authentication,
  navigation,
  chart,
  modal
});

export default (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
