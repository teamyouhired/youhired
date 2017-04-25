import { CHANGE_PAGE, LOGOUT, TOGGLE_SPINNER } from './NavigationActionTypes';

export const changePage = ({ activeComponent }) => {
  return {
    type: CHANGE_PAGE,
    payload: {
      activeComponent
    }
  };
}

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const toggleSpinner = ({ isLoading }) => {
  return {
    type: TOGGLE_SPINNER,
    payload: !isLoading
  };
};
