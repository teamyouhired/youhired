import { DISPLAY_JOB_FORM, HIDE_JOB_FORM } from './ModalActionTypes';

export const displayJobForm = ({ formType, modalProps }) => {
  console.log('display job form ran', formType);
  return {
    type: DISPLAY_JOB_FORM,
    modalType: formType,
    modalProps: modalProps
  };
};

export const hideModal = () => {
  return {
    type: HIDE_JOB_FORM
  };
};
