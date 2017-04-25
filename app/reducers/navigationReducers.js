import { CHANGE_PAGE, TOGGLE_SPINNER } from '../actions/NavigationActionTypes';

const defaultState = {
  activeComponent: 'JobList',
  isLoading: false
}

const navigationReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        activeComponent: payload.activeComponent
      };
    case TOGGLE_SPINNER:
      return {
        ...state,
        isLoading: payload
      };
    default:
      return state;
  }
};

export default navigationReducer;
