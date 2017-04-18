import {
  DISPLAY_JOB_FORM,
  HIDE_JOB_FORM,
  DISPLAY_CONTACT_FORM
  } from '../actions/modals/ModalActionTypes';

const defaultState = {
  modalType: null,
  modalProps: {}
};

const modalReducer = (state = defaultState, { type, modalType, modalProps }) => {
  switch (type) {
    case DISPLAY_JOB_FORM:
    case DISPLAY_CONTACT_FORM:
      return {
        ...state,
        modalType: modalType,
        modalProps: modalProps ? modalProps : {}
      };
    case HIDE_JOB_FORM:
      return defaultState;
    default:
      return state;
  }
};

export default modalReducer;
