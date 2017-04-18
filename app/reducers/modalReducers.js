import { DISPLAY_JOB_FORM, HIDE_JOB_FORM } from '../actions/modals/ModalActionTypes';

const defaultState = {
  modalType: null,
  modalProps: {}
};

const modalReducer = (state = defaultState, { type, modalType, modalProps }) => {
  console.log('type equals: ', type);
  console.log('modal type equals: ', modalType);
  console.log('modal props equals: ', modalProps);
  switch (type) {
    case DISPLAY_JOB_FORM:
    console.log('modal props calc' ,modalProps ? modalProps : {});
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
}

export default modalReducer;
