import { CHANGE_PAGE, LOGOUT } from './NavigationActionTypes';

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
