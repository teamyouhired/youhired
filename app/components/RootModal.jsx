import AddJobModal from './modals/AddJobModal';
import { connect } from 'react-redux';
import React from 'react';

const MODAL_COMPONENTS = {
  'DISPLAY_JOB_FORM': AddJobModal
};

const RootModal = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
}

export default connect(state => state.modal)(RootModal);
