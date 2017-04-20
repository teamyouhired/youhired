import React from 'react';
import ActivityForm from '../application-forms/ActivityForm';

const AddActivityModal = ({ userId = null, addActivity, hideModal, applicationId }) => (
  <div>
    <ActivityForm addActivity={addActivity} hideModal={hideModal} applicationId={applicationId} />
  </div>
);

export default AddActivityModal;
