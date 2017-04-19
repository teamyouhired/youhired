import AddJobModal from './modals/AddJobModal';
import AddContactModal from './modals/AddContactModal';
import AddActivityModal from './modals/AddActivityModal';
import AddGoalModal from './modals/AddGoalModal';
import { connect } from 'react-redux';
import React from 'react';

const MODAL_COMPONENTS = {
  'DISPLAY_JOB_FORM': AddJobModal,
  'DISPLAY_CONTACT_FORM': AddContactModal,
  'DISPLAY_ACTIVITY_FORM': AddActivityModal,
  'DISPLAY_GOAL_FORM': AddGoalModal
};

const RootModal = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
}

export default connect(state => state.modal)(RootModal);
