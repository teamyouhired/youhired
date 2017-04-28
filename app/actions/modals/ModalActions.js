import {
  DISPLAY_JOB_FORM,
  HIDE_JOB_FORM,
  DISPLAY_CONTACT_FORM,
  DISPLAY_ACTIVITY_FORM,
  DISPLAY_GOAL_FORM,
  DISPLAY_INTERVIEW_FORM,
  DISPLAY_OFFER_FORM,
  DISPLAY_ERROR_MESSAGE
  } from './ModalActionTypes';

export const displayJobForm = ({ formType, modalProps }) => {
  console.log('display job form ran', formType);
  return {
    type: DISPLAY_JOB_FORM,
    modalType: formType,
    modalProps: modalProps
  };
};

export const displayActivityForm = ({ formType, modalProps }) => {
  return {
    type: DISPLAY_ACTIVITY_FORM,
    modalType: formType,
    modalProps: modalProps
  }
}

export const displayGoalForm = ({ formType, modalProps }) => {
  return {
    type: DISPLAY_GOAL_FORM,
    modalType: formType,
    modalProps: modalProps
  }
}

export const displayContactForm = ({ formType, modalProps }) => {
  return {
    type: DISPLAY_CONTACT_FORM,
    modalType: formType,
    modalProps: modalProps
  };
};

export const displayInterviewForm = ({ formType, modalProps }) => {
  return {
    type: DISPLAY_INTERVIEW_FORM,
    modalType: formType,
    modalProps: modalProps
  };
};

export const displayOfferForm = ({ formType, modalProps }) => {
  return {
    type: DISPLAY_OFFER_FORM,
    modalType: formType,
    modalProps: modalProps
  };
};

export const displayErrorMessage = ({ formType, modalProps }) => {
  return {
    type: DISPLAY_ERROR_MESSAGE,
    modalType: formType,
    modalProps: modalProps
  };
};

export const hideModal = () => {
  return {
    type: HIDE_JOB_FORM
  };
};
