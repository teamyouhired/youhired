import { DISPLAY_JOB_FORM, HIDE_JOB_FORM } from './ModalActionTypes';

export cosnt displayJobForm = ({ formType }) => {
  return {
    type: DISPLAY_JOB_FORM,
    modalType: formType
  };
};

export const hideJobForm = ({ formType }) => {
  return {
    type: HIDE_JOB_FORM,
    modalType: formType,
    modalProps: formProps ? formProps : null
  };
};

