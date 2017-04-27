import AddJobModal from './modals/AddJobModal';
import AddContactModal from './modals/AddContactModal';
import AddActivityModal from './modals/AddActivityModal';
import AddGoalModal from './modals/AddGoalModal';
import AddJobOfferModal from './modals/AddOfferModal';
import AddInterviewModal from './modals/AddInterviewModal';
import ErrorMessageModal from './modals/ErrorMessageModal';
import { connect } from 'react-redux';
import React from 'react';

const MODAL_COMPONENTS = {
  'DISPLAY_JOB_FORM': AddJobModal,
  'DISPLAY_CONTACT_FORM': AddContactModal,
  'DISPLAY_ACTIVITY_FORM': AddActivityModal,
  'DISPLAY_GOAL_FORM': AddGoalModal,
  'DISPLAY_INTERVIEW_FORM': AddInterviewModal,
  'DISPLAY_OFFER_FORM': AddJobOfferModal,
  'DISPLAY_ERROR_MESSAGE': ErrorMessageModal
};

const RootModal = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
}

export default connect(state => state.modal)(RootModal);
