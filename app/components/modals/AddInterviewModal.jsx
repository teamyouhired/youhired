import React from 'react';
import InterviewForm from '../application-forms/InterviewForm';

const AddInterviewModal = ({ userId = null, addInterview, hideModal, applicationId }) => (
  <div>
    <InterviewForm addInterview={addInterview} hideModal={hideModal} applicationId={applicationId} />
  </div>
);

export default AddInterviewModal;
