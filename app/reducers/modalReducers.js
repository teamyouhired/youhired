import {
  DISPLAY_JOB_FORM,
  HIDE_JOB_FORM,
  DISPLAY_CONTACT_FORM,
  DISPLAY_ACTIVITY_FORM,
  DISPLAY_GOAL_FORM,
  DISPLAY_INTERVIEW_FORM,
  DISPLAY_OFFER_FORM,
  DISPLAY_ERROR_MESSAGE
  } from '../actions/modals/ModalActionTypes';

const defaultState = {
  modalType: null,
  modalProps: {}
};

const modalReducer = (state = defaultState, { type, modalType, modalProps }) => {
  switch (type) {
    case DISPLAY_JOB_FORM:
    case DISPLAY_CONTACT_FORM:
    case DISPLAY_ACTIVITY_FORM:
    case DISPLAY_GOAL_FORM:
    case DISPLAY_INTERVIEW_FORM:
    case DISPLAY_OFFER_FORM:
    case DISPLAY_ERROR_MESSAGE:
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
