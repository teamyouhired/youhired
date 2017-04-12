import { CHANGE_PAGE } from './NavigationActionTypes';

export function changePage({ activeComponent }) {
  return {
    type: CHANGE_PAGE,
    payload: {
      activeComponent
    }
  };
}