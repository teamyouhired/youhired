import { CHANGE_PAGE } from '../actions/NavigationActionTypes';
import { changePage } from '../actions/NavigationActions';

const defaultState = {
  activeComponent: 'Dashboard'
}

const navigationReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        activeComponent: payload.activeComponent
      };
    default:
      return state;
  }
};

export default navigationReducer;
